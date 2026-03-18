<?php
/**
 * generar_bitacora.php
 * 
 * Endpoint que recibe un JSON con los datos de la bitácora de campo,
 * carga la plantilla Excel maestra (.xlsx) preservando formato, logos y
 * celdas combinadas, inyecta los datos en las celdas correspondientes
 * y devuelve el archivo generado para descarga.
 *
 * Requiere: phpoffice/phpspreadsheet (composer require phpoffice/phpspreadsheet)
 *
 * POST /api/generar_bitacora.php
 * Content-Type: application/json
 * Body: { proyecto, ubicacion, folio, ... }  (ver BitacoraPayload en el frontend)
 */

// ============================================================
// 0. CORS & HEADERS
// ============================================================
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ============================================================
// 1. AUTOLOAD DE PHPSPREADSHEET
// ============================================================
// Ajusta esta ruta según dónde hayas instalado Composer.
// Si usas `composer require phpoffice/phpspreadsheet` dentro de php-backend/:
$autoloadPath = __DIR__ . '/../vendor/autoload.php';
if (!file_exists($autoloadPath)) {
    http_response_code(500);
    echo json_encode([
        'error' => 'PhpSpreadsheet no está instalado. Ejecuta: composer require phpoffice/phpspreadsheet en la carpeta php-backend/'
    ]);
    exit;
}
require_once $autoloadPath;

use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

// ============================================================
// 2. LEER PAYLOAD JSON
// ============================================================
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'JSON inválido o vacío']);
    exit;
}

// ============================================================
// 3. CARGAR PLANTILLA EXCEL MAESTRA
// ============================================================
// ⚠️ IMPORTANTE: Ajusta esta ruta a la ubicación de tu plantilla maestra.
// Esta debe ser el .xlsx original con logos, formato y celdas combinadas.
$templatePath = __DIR__ . '/../uploads/formatos/1770920446_Bitacora_de_campo_tilt_up.xlsx';

if (!file_exists($templatePath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Plantilla maestra no encontrada: ' . $templatePath]);
    exit;
}

try {
    $spreadsheet = IOFactory::load($templatePath);
}
catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al cargar plantilla: ' . $e->getMessage()]);
    exit;
}

// ============================================================
// 4. MAPEO DE DATOS → CELDAS
// ============================================================

// ------------------------------------------------------------
// 4A. HOJA "Portada" — Datos generales del proyecto
// ------------------------------------------------------------
// Estructura de la plantilla (extraída de inspect):
//   A2 = "BITÁCORA DE CAMPO TILT UP" (título, NO sobrescribir)
//   A3 = "Empresa Contratista Principal:" → Valor en A3 (append o celda separada)
//   A4 = "Proyecto: "   → Inyectar nombre en B4 (o después del label)
//   F4 = "Folio: "      → Inyectar folio en G4
//   A5 = "Ubicación:"   → Inyectar en B5
//   A7 = "Fecha de inicio programada :" → Inyectar en F7 (Real)
//   A8 = "Fecha de termino programada :" → Inyectar en F8 (Real)
//   Row 12+ = Responsables (Nombre, Afiliación, Cargo, Firma)
// ------------------------------------------------------------

$portada = $spreadsheet->getSheetByName('Portada');
if ($portada) {
    // ⚠️ MAPEO CELDAS PORTADA — Ajusta las celdas según tu plantilla exacta
    // El texto "Empresa Contratista Principal:" está en A3 (merged A3:G3)
    // Inyectamos el valor concatenando con el label
    $portada->setCellValue('A3', 'Empresa Contratista Principal: ' . ($data['empresaContratista'] ?? ''));

    // "Proyecto: " está en A4 (merged A4:E4), "Folio: " en F4 (merged F4:G4)
    $portada->setCellValue('A4', 'Proyecto: ' . ($data['proyecto'] ?? ''));
    $portada->setCellValue('F4', 'Folio: ' . ($data['folio'] ?? ''));

    // "Ubicación:" está en A5 (merged A5:G6)
    $portada->setCellValue('A5', 'Ubicación: ' . ($data['ubicacion'] ?? ''));

    // Fechas — Row 7: "Fecha de inicio programada :" en A7, "Real:" en F7
    //          Row 8: "Fecha de termino programada :" en A8, "Real:" en F8
    // Inyectamos las fechas programadas concatenando con el label en A7/A8
    // y las fechas reales en F7/F8
    $portada->setCellValue('A7', 'Fecha de inicio programada: ' . ($data['fechaInicioProgramada'] ?? ''));
    $portada->setCellValue('F7', 'Real: ' . ($data['fechaInicioReal'] ?? ''));
    $portada->setCellValue('A8', 'Fecha de término programada: ' . ($data['fechaTerminoProgramada'] ?? ''));
    $portada->setCellValue('F8', 'Real: ' . ($data['fechaTerminoReal'] ?? ''));

    // Responsables en obra — A partir de fila 13 (fila 12 = headers)
    // Columnas: A=Nombre, C=Afiliación, D=Cargo, F=Firma
    // ⚠️ Las filas 12-13 ya tienen merge:
    //   A12:B12 "Nombre", C12 "Afiliación", D12:E12 "Cargo", F12:G12 "Firma"
    //   A13:B13 (primera fila de datos)
    $responsables = $data['responsables'] ?? [];
    $startRow = 13; // Primera fila para datos de responsables
    foreach ($responsables as $idx => $resp) {
        $row = $startRow + $idx;
        // ⚠️ Si necesitas más filas de las que tiene la plantilla,
        // podrías necesitar insertar filas. Por ahora asumimos que hay suficientes.
        $portada->setCellValue('A' . $row, $resp['nombre'] ?? '');
        $portada->setCellValue('C' . $row, $resp['afiliacion'] ?? '');
        $portada->setCellValue('D' . $row, $resp['cargo'] ?? '');
    // F = Firma (se deja vacío para firma manual, o podrías poner un placeholder)
    }
}

// ------------------------------------------------------------
// 4B. HOJA "C2" — Plan de manejo de residuos
// ------------------------------------------------------------
// Estructura:
//   A2 = "Proyecto:" → Inyectar valor
//   A3 = "Fecha:"    → Inyectar valor
//   Row 5 = Headers (Etapa, Tipo Residuo, Clasificación, etc.)
//   Rows 6-19 = Datos por etapa constructiva (14 etapas predefinidas)
//   Columnas: A=Etapa, B=Tipo, C=Clasif, D=Volumen, E=Área, F=Contenedor,
//             G=Frecuencia, H=Empresa, I=Sitio, J=Fecha, K=Manifiesto, L=Observaciones
//   Row 21-25 = Responsables y firmas
// ------------------------------------------------------------

$c2 = $spreadsheet->getSheetByName('C2');
if ($c2) {
    // ⚠️ MAPEO CELDAS C2
    $c2->setCellValue('A2', 'Proyecto: ' . ($data['proyecto'] ?? ''));
    $c2->setCellValue('A3', 'Fecha: ' . ($data['fechaC2'] ?? ''));

    // Datos de residuos — empiezan en fila 6, columnas B-L
    // (Columna A ya tiene la etapa pre-llenada en la plantilla)
    $residuos = $data['residuos'] ?? [];
    $startRow = 6;
    foreach ($residuos as $idx => $row) {
        $r = $startRow + $idx;
        if ($r > 19)
            break; // No exceder las filas de la plantilla (6-19 = 14 filas)

        // Columna A = Etapa (ya pre-llenada, NO sobrescribir a menos que quieras)
        // $c2->setCellValue('A' . $r, $row['etapa'] ?? '');  // Descomenta si quieres sobrescribir
        $c2->setCellValue('B' . $r, $row['tipoResiduo'] ?? '');
        $c2->setCellValue('C' . $r, $row['clasificacion'] ?? '');
        $c2->setCellValue('D' . $r, $row['volumenEstimado'] ?? '');
        $c2->setCellValue('E' . $r, $row['areaAcopio'] ?? '');
        $c2->setCellValue('F' . $r, $row['contenedorSeparacion'] ?? '');
        $c2->setCellValue('G' . $r, $row['frecuenciaRetiro'] ?? '');
        $c2->setCellValue('H' . $r, $row['empresaTransportista'] ?? '');
        $c2->setCellValue('I' . $r, $row['sitioDisposicion'] ?? '');
        $c2->setCellValue('J' . $r, $row['fechaRetiro'] ?? '');
        $c2->setCellValue('K' . $r, $row['noManifiesto'] ?? '');
        $c2->setCellValue('L' . $r, $row['observaciones'] ?? '');
    }

    // Responsables y firma C2
    // Row 21: A21:E21 = "Responsables:", G21:H21 = "Firma:"
    // Row 22 en adelante = datos
    $c2->setCellValue('A22', $data['responsablesC2'] ?? '');
    $c2->setCellValue('G22', $data['firmaC2'] ?? '');
}

// ------------------------------------------------------------
// 4C. HOJA "C3" — Inspección previa del material de moldaje
// ------------------------------------------------------------
// Estructura:
//   A2 = "Proyecto:", A3 = "Fecha:"
//   Row 5 = Headers
//   Rows 6-16 = 11 criterios de inspección
//   Columnas: A=Criterio, B=Descripción, C=Cumple, D=Nivel daño,
//             E=Acción, F=Responsable, G=Fecha compromiso, H=Observaciones
//   Row 19 = Dictamen (checkboxes)
//   Row 21 = Justificación técnica
// ------------------------------------------------------------

$c3 = $spreadsheet->getSheetByName('C3');
if ($c3) {
    // ⚠️ MAPEO CELDAS C3
    $c3->setCellValue('A2', 'Proyecto: ' . ($data['proyecto'] ?? ''));
    $c3->setCellValue('A3', 'Fecha: ' . ($data['fechaC3'] ?? ''));

    // Datos de moldaje — empiezan en fila 6
    $moldaje = $data['moldaje'] ?? [];
    $startRow = 6;
    foreach ($moldaje as $idx => $row) {
        $r = $startRow + $idx;
        if ($r > 16)
            break; // 11 filas (6-16)

        // Columnas A y B ya tienen criterio/descripción pre-llenados
        // Solo inyectamos las columnas editables: C-H
        $c3->setCellValue('C' . $r, $row['cumple'] ?? '');
        $c3->setCellValue('D' . $r, $row['nivelDano'] ?? '');
        $c3->setCellValue('E' . $r, $row['accionRequerida'] ?? '');
        $c3->setCellValue('F' . $r, $row['responsable'] ?? '');
        $c3->setCellValue('G' . $r, $row['fechaCompromiso'] ?? '');
        $c3->setCellValue('H' . $r, $row['observaciones'] ?? '');
    }

    // Dictamen — Fila 19 (merged A19:H19)
    // Formato original: "☐ Apto para uso inmediato  ☐ Uso condicionado ..."
    $dictamen = $data['dictamenC3'] ?? '';
    if ($dictamen) {
        // Reemplazar checkboxes según la selección
        $dictamenText = '';
        switch ($dictamen) {
            case 'Apto para uso inmediato':
                $dictamenText = '   ☑ Apto para uso inmediato           ☐ Uso condicionado (requiere reparación)           ☐ No apto (retirar de obra)';
                break;
            case 'Uso condicionado':
                $dictamenText = '   ☐ Apto para uso inmediato           ☑ Uso condicionado (requiere reparación)           ☐ No apto (retirar de obra)';
                break;
            case 'No apto':
                $dictamenText = '   ☐ Apto para uso inmediato           ☐ Uso condicionado (requiere reparación)           ☑ No apto (retirar de obra)';
                break;
        }
        $c3->setCellValue('A19', $dictamenText);
    }

    // Justificación — Fila 21
    $c3->setCellValue('A21', 'Justificación técnica del dictamen: ' . ($data['justificacionC3'] ?? ''));
}

// ------------------------------------------------------------
// 4D. HOJA "C4" — Carga de grúa
// ------------------------------------------------------------
// Estructura:
//   A2 = "Proyecto:", A3 = "Fecha:"
//   A4:F4 = "Carga de grua" (título merged)
//   Row 5 = Headers
//   Rows 6-17 = 12 criterios de verificación
//   Columnas: A=Criterio, B=Verificación, C=Cumple, D=Dato confirmado,
//             E=Acción requerida, F=Observaciones
//   Row 19: A19 = "Responsables:", F19 = "Firma:"
// ------------------------------------------------------------

$c4 = $spreadsheet->getSheetByName('C4');
if ($c4) {
    // ⚠️ MAPEO CELDAS C4
    $c4->setCellValue('A2', 'Proyecto: ' . ($data['proyecto'] ?? ''));
    $c4->setCellValue('A3', 'Fecha: ' . ($data['fechaC4'] ?? ''));

    // Datos de grúa — empiezan en fila 6
    $grua = $data['grua'] ?? [];
    $startRow = 6;
    foreach ($grua as $idx => $row) {
        $r = $startRow + $idx;
        if ($r > 17)
            break; // 12 filas (6-17)

        // Columnas A y B ya tienen datos pre-llenados
        // Solo inyectamos C-F
        $c4->setCellValue('C' . $r, $row['cumple'] ?? '');
        $c4->setCellValue('D' . $r, $row['datoConfirmado'] ?? '');
        $c4->setCellValue('E' . $r, $row['accionRequerida'] ?? '');
        $c4->setCellValue('F' . $r, $row['observaciones'] ?? '');
    }

    // Responsables y firma
    // Row 19: A19 = "Responsables:", F19 = "Firma:"
    // Row 20+ = datos
    $c4->setCellValue('A20', $data['responsablesC4'] ?? '');
    $c4->setCellValue('F20', $data['firmaC4'] ?? '');
}

// ------------------------------------------------------------
// 4E. HOJA "C5" — Instalación de insertos
// ------------------------------------------------------------
// Estructura:
//   A2:B2 = "Proyecto:", A3:B3 = "Fecha:"
//   A4:P4 = "Instalación de insertos" (título merged)
//   Row 5 = Headers (16 columnas A-P)
//   Rows 6-28 = Datos de paneles (hasta 23 paneles)
//   Columnas: A=Panel No, B=Peso, C=Resist.Req, D=Resist.Verif,
//             E=Grúa, F=Operador, G=Inserto limpio, H=Deformaciones,
//             I=Fisuras, J=Cap.inserto, K=Cap.conexión, L=Seguro,
//             M=Perno, N=Rosca, O=Alineación, P=Ángulo
//   Row 29: A29:H29 = "Responsables:", K29 = "Firma:"
// ------------------------------------------------------------

$c5 = $spreadsheet->getSheetByName('C5');
if ($c5) {
    // ⚠️ MAPEO CELDAS C5
    $c5->setCellValue('A2', 'Proyecto: ' . ($data['proyecto'] ?? ''));
    $c5->setCellValue('A3', 'Fecha: ' . ($data['fechaC5'] ?? ''));

    // Datos de insertos — empiezan en fila 6
    $insertos = $data['insertos'] ?? [];
    $startRow = 6;
    foreach ($insertos as $idx => $row) {
        $r = $startRow + $idx;
        if ($r > 28)
            break; // Máximo 23 filas de datos (6-28)

        $c5->setCellValue('A' . $r, $row['panelNo'] ?? '');
        $c5->setCellValue('B' . $r, $row['pesoPanel'] ?? '');
        $c5->setCellValue('C' . $r, $row['resistenciaRequerida'] ?? '');
        $c5->setCellValue('D' . $r, $row['resistenciaVerificada'] ?? '');
        $c5->setCellValue('E' . $r, $row['grua'] ?? '');
        $c5->setCellValue('F' . $r, $row['operador'] ?? '');
        $c5->setCellValue('G' . $r, $row['insertoLimpio'] ?? '');
        $c5->setCellValue('H' . $r, $row['deformaciones'] ?? '');
        $c5->setCellValue('I' . $r, $row['fisuras'] ?? '');
        $c5->setCellValue('J' . $r, $row['capacidadInserto'] ?? '');
        $c5->setCellValue('K' . $r, $row['capacidadConexion'] ?? '');
        $c5->setCellValue('L' . $r, $row['seguroActivado'] ?? '');
        $c5->setCellValue('M' . $r, $row['pernoInsertado'] ?? '');
        $c5->setCellValue('N' . $r, $row['roscaCompleta'] ?? '');
        $c5->setCellValue('O' . $r, $row['alineacionCorrecta'] ?? '');
        $c5->setCellValue('P' . $r, $row['anguloCorrecto'] ?? '');
    }

    // Responsables y firma
    // Row 30+ = datos (fila 29 es el header "Responsables:" / "Firma:")
    $c5->setCellValue('A30', $data['responsablesC5'] ?? '');
    $c5->setCellValue('K30', $data['firmaC5'] ?? '');
}

// ============================================================
// 5. GUARDAR Y DEVOLVER ARCHIVO
// ============================================================

try {
    // Crear directorio temporal si no existe
    $tmpDir = __DIR__ . '/../uploads/tmp/';
    if (!is_dir($tmpDir)) {
        mkdir($tmpDir, 0755, true);
    }

    // Nombre único para evitar colisiones
    $filename = 'Bitacora_' . preg_replace('/[^a-zA-Z0-9_]/', '_', $data['proyecto'] ?? 'sin_nombre')
        . '_' . date('Ymd_His') . '.xlsx';
    $outputPath = $tmpDir . $filename;

    // Escribir el archivo
    $writer = new Xlsx($spreadsheet);
    $writer->save($outputPath);

    // Enviar al navegador como descarga
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Content-Length: ' . filesize($outputPath));
    header('Cache-Control: max-age=0');

    readfile($outputPath);

    // Limpiar archivo temporal (opcional, puedes dejarlo para auditoría)
    // unlink($outputPath);

    // Liberar memoria
    $spreadsheet->disconnectWorksheets();
    unset($spreadsheet);

}
catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al generar archivo: ' . $e->getMessage()]);
}