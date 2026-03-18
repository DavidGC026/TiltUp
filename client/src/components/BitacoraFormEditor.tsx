import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
    Plus,
    Trash2,
    Download,
    Loader2,
    FileSpreadsheet,
    ClipboardList,
    Truck,
    Container,
    Wrench,
    Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================
// TYPES — Mirrors the JSON payload sent to the PHP backend
// ============================================================

/** Responsable en obra (Portada row 12+) */
interface Responsable {
    nombre: string;
    afiliacion: string;
    cargo: string;
}

/** C2 – Plan de manejo de residuos (rows 6‑19) */
interface ResiduoRow {
    etapa: string; // pre-filled label from template
    tipoResiduo: string;
    clasificacion: string;
    volumenEstimado: string;
    areaAcopio: string;
    contenedorSeparacion: string;
    frecuenciaRetiro: string;
    empresaTransportista: string;
    sitioDisposicion: string;
    fechaRetiro: string;
    noManifiesto: string;
    observaciones: string;
}

/** C3 – Inspección previa del material de moldaje (rows 6‑16) */
interface MoldajeRow {
    criterio: string; // pre-filled
    descripcion: string; // pre-filled
    cumple: string;
    nivelDano: string;
    accionRequerida: string;
    responsable: string;
    fechaCompromiso: string;
    observaciones: string;
}

/** C4 – Carga de grúa (rows 6‑17) */
interface GruaRow {
    criterio: string; // pre-filled
    verificacion: string; // pre-filled
    cumple: string;
    datoConfirmado: string;
    accionRequerida: string;
    observaciones: string;
}

/** C5 – Instalación de insertos (dynamic rows 6‑28) */
interface InsertoRow {
    panelNo: string;
    pesoPanel: string;
    resistenciaRequerida: string;
    resistenciaVerificada: string;
    grua: string;
    operador: string;
    insertoLimpio: string;
    deformaciones: string;
    fisuras: string;
    capacidadInserto: string;
    capacidadConexion: string;
    seguroActivado: string;
    pernoInsertado: string;
    roscaCompleta: string;
    alineacionCorrecta: string;
    anguloCorrecto: string;
}

/** Full payload shape */
interface BitacoraPayload {
    // ---- Portada ----
    proyecto: string;
    ubicacion: string;
    folio: string;
    empresaContratista: string;
    fechaInicioProgramada: string;
    fechaTerminoProgramada: string;
    fechaInicioReal: string;
    fechaTerminoReal: string;
    responsables: Responsable[];
    // ---- Hojas de datos ----
    residuos: ResiduoRow[];
    moldaje: MoldajeRow[];
    grua: GruaRow[];
    insertos: InsertoRow[];
    // ---- Fechas por hoja ----
    fechaC2: string;
    fechaC3: string;
    fechaC4: string;
    fechaC5: string;
    // ---- Responsables por hoja ----
    responsablesC2: string;
    firmaC2: string;
    responsablesC4: string;
    firmaC4: string;
    responsablesC5: string;
    firmaC5: string;
    dictamenC3: string;
    justificacionC3: string;
}

// ============================================================
// DEFAULT ROW FACTORIES
// ============================================================

const ETAPAS_C2 = [
    "Trazo y nivelación",
    "Cimentación y puntos de ancaje",
    "Losa de colado",
    "Cimbras o encofrados",
    "Armado de acero de refuerzo",
    "Colación de insertos y anclajes",
    "Colado de paneles",
    "Curado",
    "Desmolde",
    "Elevación, fijación y apuntalamiento de paneles",
    "Unión de paneles",
    "Instalación eléctrica e hidráulica",
    "Diafragma (techo)",
    "Acabado",
];

const CRITERIOS_C3: { criterio: string; descripcion: string }[] = [
    { criterio: "Tipo y función correcta", descripcion: "¿Corresponde al uso previsto (losa, borde, vano, metálica)?" },
    { criterio: "Rigidez estructural", descripcion: "¿Presenta flexión, pandeo o movimiento excesivo?" },
    { criterio: "Deformaciones permanentes", descripcion: "¿Existe alabeo, torsión o pérdida de escuadra/nivel?" },
    { criterio: "Estado superficial", descripcion: "¿Hay desprendimiento, perforaciones o marcas que afecten acabado?" },
    { criterio: "Daño por humedad (madera/triplay)", descripcion: "¿Se observan hinchamientos, delaminaciones o zonas blandas?" },
    { criterio: "Uniones y fijaciones", descripcion: "¿Tornillos flojos, orificios agrandados o fisuras en conexiones?" },
    { criterio: "Reparaciones acumuladas", descripcion: "¿Ha sido parchada o reforzada repetidamente?" },
    { criterio: "Estanqueidad", descripcion: "¿Se detectan fugas de lechada durante colados previos?" },
    { criterio: "Corrosión (metálicas)", descripcion: "¿Existe reducción de sección o fisuras en soldaduras?" },
    { criterio: "Tolerancias geométricas", descripcion: "¿Ha generado desviaciones repetitivas en colados?" },
    { criterio: "Seguridad", descripcion: "¿Representa riesgo para el personal (inestabilidad, bordes cortantes)?" },
];

const CRITERIOS_C4: { criterio: string; verificacion: string }[] = [
    { criterio: "Modelo y configuración correcta", verificacion: "¿La tabla corresponde exactamente al modelo y configuración de la grúa?" },
    { criterio: "Configuración activa identificada", verificacion: "¿Se confirmó longitud de pluma, ángulo, jib, estabilizadores?" },
    { criterio: "Radio real de trabajo", verificacion: "¿Se midió el radio real desde centro de giro hasta centro de carga?" },
    { criterio: "Capacidad por radio (no nominal)", verificacion: "¿Se está usando el valor correspondiente al radio real?" },
    { criterio: "Intersección correcta en tabla", verificacion: "¿Se cruzó correctamente radio vs longitud de pluma?" },
    { criterio: "Peso de gancho y aparejos", verificacion: "¿Se verificó si la tabla es bruta o neta?" },
    { criterio: "Ángulo real de pluma", verificacion: "¿Se confirmó el ángulo efectivo durante la maniobra?" },
    { criterio: "Tipo de limitación", verificacion: "¿Se identificó si la capacidad está gobernada por estabilidad o estructura?" },
    { criterio: "Nivelación y estabilizadores", verificacion: "¿La grúa está perfectamente nivelada y con estabilizadores extendidos?" },
    { criterio: "Notas y advertencias", verificacion: "¿Se revisaron restricciones por viento, plumín, contrapesos?" },
    { criterio: "Margen operativo de seguridad", verificacion: "¿Existe margen razonable entre peso total y capacidad permitida?" },
    { criterio: "Validación del peso total", verificacion: "¿Se incluyeron panel, insertos, accesorios y sistema de izaje?" },
];

function defaultResiduoRow(etapa: string): ResiduoRow {
    return { etapa, tipoResiduo: "", clasificacion: "", volumenEstimado: "", areaAcopio: "", contenedorSeparacion: "", frecuenciaRetiro: "", empresaTransportista: "", sitioDisposicion: "", fechaRetiro: "", noManifiesto: "", observaciones: "" };
}

function defaultMoldajeRow(c: { criterio: string; descripcion: string }): MoldajeRow {
    return { criterio: c.criterio, descripcion: c.descripcion, cumple: "", nivelDano: "", accionRequerida: "", responsable: "", fechaCompromiso: "", observaciones: "" };
}

function defaultGruaRow(c: { criterio: string; verificacion: string }): GruaRow {
    return { criterio: c.criterio, verificacion: c.verificacion, cumple: "", datoConfirmado: "", accionRequerida: "", observaciones: "" };
}

function defaultInsertoRow(): InsertoRow {
    return { panelNo: "", pesoPanel: "", resistenciaRequerida: "", resistenciaVerificada: "", grua: "", operador: "", insertoLimpio: "", deformaciones: "", fisuras: "", capacidadInserto: "", capacidadConexion: "", seguroActivado: "", pernoInsertado: "", roscaCompleta: "", alineacionCorrecta: "", anguloCorrecto: "" };
}

// ============================================================
// COMPONENT
// ============================================================

interface BitacoraFormEditorProps {
    /** Optional id of the format/file being edited (for future DB persistence) */
    formatId?: number;
    /** Callback when the file has been successfully generated */
    onGenerated?: (downloadUrl: string) => void;
}

export default function BitacoraFormEditor({ formatId, onGenerated }: BitacoraFormEditorProps) {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<"portada" | "c2" | "c3" | "c4" | "c5">("portada");

    // ---- Portada state ----
    const [proyecto, setProyecto] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [folio, setFolio] = useState("");
    const [empresaContratista, setEmpresaContratista] = useState("");
    const [fechaInicioProgramada, setFechaInicioProgramada] = useState("");
    const [fechaTerminoProgramada, setFechaTerminoProgramada] = useState("");
    const [fechaInicioReal, setFechaInicioReal] = useState("");
    const [fechaTerminoReal, setFechaTerminoReal] = useState("");
    const [responsables, setResponsables] = useState<Responsable[]>([{ nombre: "", afiliacion: "", cargo: "" }]);

    // ---- C2 state ----
    const [fechaC2, setFechaC2] = useState("");
    const [residuos, setResiduos] = useState<ResiduoRow[]>(ETAPAS_C2.map(defaultResiduoRow));
    const [responsablesC2, setResponsablesC2] = useState("");
    const [firmaC2, setFirmaC2] = useState("");

    // ---- C3 state ----
    const [fechaC3, setFechaC3] = useState("");
    const [moldaje, setMoldaje] = useState<MoldajeRow[]>(CRITERIOS_C3.map(defaultMoldajeRow));
    const [dictamenC3, setDictamenC3] = useState("");
    const [justificacionC3, setJustificacionC3] = useState("");

    // ---- C4 state ----
    const [fechaC4, setFechaC4] = useState("");
    const [grua, setGrua] = useState<GruaRow[]>(CRITERIOS_C4.map(defaultGruaRow));
    const [responsablesC4, setResponsablesC4] = useState("");
    const [firmaC4, setFirmaC4] = useState("");

    // ---- C5 state ----
    const [fechaC5, setFechaC5] = useState("");
    const [insertos, setInsertos] = useState<InsertoRow[]>([defaultInsertoRow()]);
    const [responsablesC5, setResponsablesC5] = useState("");
    const [firmaC5, setFirmaC5] = useState("");

    // ============================================================
    // HELPERS
    // ============================================================

    function updateRow<T>(arr: T[], index: number, patch: Partial<T>): T[] {
        return arr.map((item, i) => (i === index ? { ...item, ...patch } : item));
    }

    // ============================================================
    // SUBMIT
    // ============================================================

    async function handleSubmit() {
        if (!proyecto.trim()) {
            toast({ title: "Campo requerido", description: "Ingresa el nombre del proyecto.", variant: "destructive" });
            return;
        }

        const payload: BitacoraPayload = {
            proyecto,
            ubicacion,
            folio,
            empresaContratista,
            fechaInicioProgramada,
            fechaTerminoProgramada,
            fechaInicioReal,
            fechaTerminoReal,
            responsables,
            residuos,
            moldaje,
            grua,
            insertos,
            fechaC2,
            fechaC3,
            fechaC4,
            fechaC5,
            responsablesC2,
            firmaC2,
            responsablesC4,
            firmaC4,
            responsablesC5,
            firmaC5,
            dictamenC3,
            justificacionC3,
        };

        setLoading(true);
        try {
            // Build the URL relative to the php-backend API
            const basePath = (import.meta.env.BASE_URL || "").replace(/\/$/, "");
            const url = `${basePath}/api/generar_bitacora.php`;

            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({ error: "Error desconocido" }));
                throw new Error(err.error || `HTTP ${res.status}`);
            }

            // The backend returns the .xlsx file as a binary blob
            const blob = await res.blob();
            const downloadUrl = URL.createObjectURL(blob);

            // Trigger download
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = `Bitacora_${proyecto.replace(/\s+/g, "_")}_${new Date().toISOString().slice(0, 10)}.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();

            toast({ title: "Bitácora generada", description: "El archivo se descargó correctamente." });
            onGenerated?.(downloadUrl);
        } catch (err: any) {
            console.error(err);
            toast({ title: "Error al generar", description: err.message, variant: "destructive" });
        } finally {
            setLoading(false);
        }
    }

    // ============================================================
    // TAB NAVIGATION
    // ============================================================

    const tabs = [
        { id: "portada" as const, label: "Portada", icon: ClipboardList },
        { id: "c2" as const, label: "C2 – Residuos", icon: Truck },
        { id: "c3" as const, label: "C3 – Moldaje", icon: Wrench },
        { id: "c4" as const, label: "C4 – Grúa", icon: Container },
        { id: "c5" as const, label: "C5 – Insertos", icon: Shield },
    ];

    // ============================================================
    // RENDER
    // ============================================================

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 p-4">
            {/* Header */}
            <div className="flex items-center gap-3">
                <FileSpreadsheet className="h-8 w-8 text-[#0073a5]" />
                <div>
                    <h2 className="text-2xl font-bold text-white">Bitácora de Campo Tilt Up</h2>
                    <p className="text-sm text-white/70">Completa los datos y genera tu archivo Excel con formato profesional</p>
                </div>
            </div>

            {/* Tab bar */}
            <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                activeTab === tab.id
                                    ? "bg-white text-[#0073a5] shadow-md"
                                    : "bg-white/20 text-white hover:bg-white/30"
                            )}
                        >
                            <Icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* ================================================================ */}
            {/* PORTADA TAB                                                      */}
            {/* ================================================================ */}
            {activeTab === "portada" && (
                <Card className="bg-white/95 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="text-[#0073a5]">Datos Generales (Portada)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Empresa Contratista */}
                        <div>
                            <Label>Empresa Contratista Principal</Label>
                            <Input value={empresaContratista} onChange={(e) => setEmpresaContratista(e.target.value)} placeholder="Nombre de la empresa contratista" />
                        </div>

                        {/* Proyecto + Folio */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                                <Label>Proyecto</Label>
                                <Input value={proyecto} onChange={(e) => setProyecto(e.target.value)} placeholder="Nombre del proyecto" />
                            </div>
                            <div>
                                <Label>Folio</Label>
                                <Input value={folio} onChange={(e) => setFolio(e.target.value)} placeholder="Ej. BC-001" />
                            </div>
                        </div>

                        {/* Ubicacion */}
                        <div>
                            <Label>Ubicación</Label>
                            <Input value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} placeholder="Dirección o ubicación de la obra" />
                        </div>

                        {/* Fechas */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <Label>Fecha inicio programada</Label>
                                <Input type="date" value={fechaInicioProgramada} onChange={(e) => setFechaInicioProgramada(e.target.value)} />
                            </div>
                            <div>
                                <Label>Fecha inicio real</Label>
                                <Input type="date" value={fechaInicioReal} onChange={(e) => setFechaInicioReal(e.target.value)} />
                            </div>
                            <div>
                                <Label>Fecha término programada</Label>
                                <Input type="date" value={fechaTerminoProgramada} onChange={(e) => setFechaTerminoProgramada(e.target.value)} />
                            </div>
                            <div>
                                <Label>Fecha término real</Label>
                                <Input type="date" value={fechaTerminoReal} onChange={(e) => setFechaTerminoReal(e.target.value)} />
                            </div>
                        </div>

                        {/* Responsables */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <Label className="text-base font-semibold">Responsables en Obra</Label>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setResponsables([...responsables, { nombre: "", afiliacion: "", cargo: "" }])}
                                >
                                    <Plus className="h-4 w-4 mr-1" /> Agregar
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {responsables.map((r, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row gap-2 items-start sm:items-end">
                                        <div className="flex-1">
                                            <Label className="text-xs">Nombre</Label>
                                            <Input value={r.nombre} onChange={(e) => setResponsables(updateRow(responsables, i, { nombre: e.target.value }))} placeholder="Nombre completo" />
                                        </div>
                                        <div className="flex-1">
                                            <Label className="text-xs">Afiliación</Label>
                                            <Input value={r.afiliacion} onChange={(e) => setResponsables(updateRow(responsables, i, { afiliacion: e.target.value }))} placeholder="Empresa / IMSS" />
                                        </div>
                                        <div className="flex-1">
                                            <Label className="text-xs">Cargo</Label>
                                            <Input value={r.cargo} onChange={(e) => setResponsables(updateRow(responsables, i, { cargo: e.target.value }))} placeholder="Cargo" />
                                        </div>
                                        {responsables.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-500 shrink-0"
                                                onClick={() => setResponsables(responsables.filter((_, j) => j !== i))}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* ================================================================ */}
            {/* C2 – PLAN DE MANEJO DE RESIDUOS                                  */}
            {/* ================================================================ */}
            {activeTab === "c2" && (
                <Card className="bg-white/95 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="text-[#0073a5]">C2 – Plan de Manejo de Residuos</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label>Fecha</Label>
                                <Input type="date" value={fechaC2} onChange={(e) => setFechaC2(e.target.value)} />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-[#0073a5] text-white">
                                        <th className="border p-2 text-left min-w-[160px]">Etapa Constructiva</th>
                                        <th className="border p-2 text-left min-w-[120px]">Tipo Residuo</th>
                                        <th className="border p-2 text-left min-w-[100px]">Clasificación</th>
                                        <th className="border p-2 text-left min-w-[100px]">Volumen Est.</th>
                                        <th className="border p-2 text-left min-w-[120px]">Área Acopio</th>
                                        <th className="border p-2 text-left min-w-[120px]">Contenedor</th>
                                        <th className="border p-2 text-left min-w-[100px]">Frec. Retiro</th>
                                        <th className="border p-2 text-left min-w-[130px]">Empresa Transp.</th>
                                        <th className="border p-2 text-left min-w-[120px]">Sitio Disposición</th>
                                        <th className="border p-2 text-left min-w-[100px]">Fecha Retiro</th>
                                        <th className="border p-2 text-left min-w-[100px]">No. Manifiesto</th>
                                        <th className="border p-2 text-left min-w-[120px]">Observaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {residuos.map((row, i) => (
                                        <tr key={i} className="even:bg-gray-50">
                                            <td className="border p-1 font-medium text-xs bg-gray-100">{row.etapa}</td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.tipoResiduo} onChange={(e) => setResiduos(updateRow(residuos, i, { tipoResiduo: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.clasificacion} onChange={(e) => setResiduos(updateRow(residuos, i, { clasificacion: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.volumenEstimado} onChange={(e) => setResiduos(updateRow(residuos, i, { volumenEstimado: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.areaAcopio} onChange={(e) => setResiduos(updateRow(residuos, i, { areaAcopio: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.contenedorSeparacion} onChange={(e) => setResiduos(updateRow(residuos, i, { contenedorSeparacion: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.frecuenciaRetiro} onChange={(e) => setResiduos(updateRow(residuos, i, { frecuenciaRetiro: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.empresaTransportista} onChange={(e) => setResiduos(updateRow(residuos, i, { empresaTransportista: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.sitioDisposicion} onChange={(e) => setResiduos(updateRow(residuos, i, { sitioDisposicion: e.target.value }))} /></td>
                                            <td className="border p-1"><Input type="date" className="h-8 text-xs" value={row.fechaRetiro} onChange={(e) => setResiduos(updateRow(residuos, i, { fechaRetiro: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.noManifiesto} onChange={(e) => setResiduos(updateRow(residuos, i, { noManifiesto: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.observaciones} onChange={(e) => setResiduos(updateRow(residuos, i, { observaciones: e.target.value }))} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                            <div>
                                <Label>Responsables</Label>
                                <Input value={responsablesC2} onChange={(e) => setResponsablesC2(e.target.value)} placeholder="Nombre(s)" />
                            </div>
                            <div>
                                <Label>Firma</Label>
                                <Input value={firmaC2} onChange={(e) => setFirmaC2(e.target.value)} placeholder="Nombre de quien firma" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* ================================================================ */}
            {/* C3 – INSPECCIÓN PREVIA DEL MATERIAL DE MOLDAJE                   */}
            {/* ================================================================ */}
            {activeTab === "c3" && (
                <Card className="bg-white/95 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="text-[#0073a5]">C3 – Inspección Previa del Material de Moldaje</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label>Fecha</Label>
                                <Input type="date" value={fechaC3} onChange={(e) => setFechaC3(e.target.value)} />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-[#0073a5] text-white">
                                        <th className="border p-2 text-left min-w-[140px]">Criterio</th>
                                        <th className="border p-2 text-left min-w-[200px]">Descripción</th>
                                        <th className="border p-2 text-left min-w-[80px]">Cumple</th>
                                        <th className="border p-2 text-left min-w-[100px]">Nivel Daño</th>
                                        <th className="border p-2 text-left min-w-[120px]">Acción Req.</th>
                                        <th className="border p-2 text-left min-w-[100px]">Responsable</th>
                                        <th className="border p-2 text-left min-w-[100px]">Fecha Comp.</th>
                                        <th className="border p-2 text-left min-w-[120px]">Observaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {moldaje.map((row, i) => (
                                        <tr key={i} className="even:bg-gray-50">
                                            <td className="border p-1 font-medium text-xs bg-gray-100">{row.criterio}</td>
                                            <td className="border p-1 text-xs text-gray-600 bg-gray-50">{row.descripcion}</td>
                                            <td className="border p-1">
                                                <select className="h-8 w-full text-xs border rounded px-1" value={row.cumple} onChange={(e) => setMoldaje(updateRow(moldaje, i, { cumple: e.target.value }))}>
                                                    <option value="">—</option>
                                                    <option value="Sí">Sí</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                <select className="h-8 w-full text-xs border rounded px-1" value={row.nivelDano} onChange={(e) => setMoldaje(updateRow(moldaje, i, { nivelDano: e.target.value }))}>
                                                    <option value="">—</option>
                                                    <option value="Bajo">Bajo</option>
                                                    <option value="Medio">Medio</option>
                                                    <option value="Alto">Alto</option>
                                                </select>
                                            </td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.accionRequerida} onChange={(e) => setMoldaje(updateRow(moldaje, i, { accionRequerida: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.responsable} onChange={(e) => setMoldaje(updateRow(moldaje, i, { responsable: e.target.value }))} /></td>
                                            <td className="border p-1"><Input type="date" className="h-8 text-xs" value={row.fechaCompromiso} onChange={(e) => setMoldaje(updateRow(moldaje, i, { fechaCompromiso: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.observaciones} onChange={(e) => setMoldaje(updateRow(moldaje, i, { observaciones: e.target.value }))} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="space-y-4 pt-4 border-t">
                            <div>
                                <Label>Dictamen</Label>
                                <select className="w-full border rounded p-2 text-sm" value={dictamenC3} onChange={(e) => setDictamenC3(e.target.value)}>
                                    <option value="">Seleccionar dictamen...</option>
                                    <option value="Apto para uso inmediato">Apto para uso inmediato</option>
                                    <option value="Uso condicionado">Uso condicionado (requiere reparación)</option>
                                    <option value="No apto">No apto (retirar de obra)</option>
                                </select>
                            </div>
                            <div>
                                <Label>Justificación técnica del dictamen</Label>
                                <Textarea value={justificacionC3} onChange={(e) => setJustificacionC3(e.target.value)} placeholder="Describa la justificación técnica..." rows={3} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* ================================================================ */}
            {/* C4 – CARGA DE GRÚA                                               */}
            {/* ================================================================ */}
            {activeTab === "c4" && (
                <Card className="bg-white/95 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="text-[#0073a5]">C4 – Carga de Grúa</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label>Fecha</Label>
                                <Input type="date" value={fechaC4} onChange={(e) => setFechaC4(e.target.value)} />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-[#0073a5] text-white">
                                        <th className="border p-2 text-left min-w-[160px]">Criterio</th>
                                        <th className="border p-2 text-left min-w-[250px]">Verificación en Campo</th>
                                        <th className="border p-2 text-left min-w-[80px]">Cumple</th>
                                        <th className="border p-2 text-left min-w-[120px]">Dato Confirmado</th>
                                        <th className="border p-2 text-left min-w-[120px]">Acción Req.</th>
                                        <th className="border p-2 text-left min-w-[120px]">Observaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {grua.map((row, i) => (
                                        <tr key={i} className="even:bg-gray-50">
                                            <td className="border p-1 font-medium text-xs bg-gray-100">{row.criterio}</td>
                                            <td className="border p-1 text-xs text-gray-600 bg-gray-50">{row.verificacion}</td>
                                            <td className="border p-1">
                                                <select className="h-8 w-full text-xs border rounded px-1" value={row.cumple} onChange={(e) => setGrua(updateRow(grua, i, { cumple: e.target.value }))}>
                                                    <option value="">—</option>
                                                    <option value="Sí">Sí</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.datoConfirmado} onChange={(e) => setGrua(updateRow(grua, i, { datoConfirmado: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.accionRequerida} onChange={(e) => setGrua(updateRow(grua, i, { accionRequerida: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs" value={row.observaciones} onChange={(e) => setGrua(updateRow(grua, i, { observaciones: e.target.value }))} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                            <div>
                                <Label>Responsables</Label>
                                <Input value={responsablesC4} onChange={(e) => setResponsablesC4(e.target.value)} placeholder="Nombre(s)" />
                            </div>
                            <div>
                                <Label>Firma</Label>
                                <Input value={firmaC4} onChange={(e) => setFirmaC4(e.target.value)} placeholder="Nombre de quien firma" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* ================================================================ */}
            {/* C5 – INSTALACIÓN DE INSERTOS                                     */}
            {/* ================================================================ */}
            {activeTab === "c5" && (
                <Card className="bg-white/95 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="text-[#0073a5]">C5 – Instalación de Insertos</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label>Fecha</Label>
                                <Input type="date" value={fechaC5} onChange={(e) => setFechaC5(e.target.value)} />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button type="button" variant="outline" size="sm" onClick={() => setInsertos([...insertos, defaultInsertoRow()])}>
                                <Plus className="h-4 w-4 mr-1" /> Agregar Panel
                            </Button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-[#0073a5] text-white">
                                        <th className="border p-2 text-left">Panel No.</th>
                                        <th className="border p-2 text-left">Peso (ton)</th>
                                        <th className="border p-2 text-left">Resist. Req.</th>
                                        <th className="border p-2 text-left">Resist. Verif.</th>
                                        <th className="border p-2 text-left">Grúa</th>
                                        <th className="border p-2 text-left">Operador</th>
                                        <th className="border p-2 text-left">Inserto Limpio</th>
                                        <th className="border p-2 text-left">Deform.</th>
                                        <th className="border p-2 text-left">Fisuras</th>
                                        <th className="border p-2 text-left">Cap. Inserto</th>
                                        <th className="border p-2 text-left">Cap. Conexión</th>
                                        <th className="border p-2 text-left">Seguro</th>
                                        <th className="border p-2 text-left">Perno</th>
                                        <th className="border p-2 text-left">Rosca</th>
                                        <th className="border p-2 text-left">Alineación</th>
                                        <th className="border p-2 text-left">Ángulo</th>
                                        <th className="border p-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {insertos.map((row, i) => (
                                        <tr key={i} className="even:bg-gray-50">
                                            <td className="border p-1"><Input className="h-8 text-xs w-16" value={row.panelNo} onChange={(e) => setInsertos(updateRow(insertos, i, { panelNo: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs w-16" value={row.pesoPanel} onChange={(e) => setInsertos(updateRow(insertos, i, { pesoPanel: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs w-20" value={row.resistenciaRequerida} onChange={(e) => setInsertos(updateRow(insertos, i, { resistenciaRequerida: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs w-20" value={row.resistenciaVerificada} onChange={(e) => setInsertos(updateRow(insertos, i, { resistenciaVerificada: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs w-16" value={row.grua} onChange={(e) => setInsertos(updateRow(insertos, i, { grua: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs w-20" value={row.operador} onChange={(e) => setInsertos(updateRow(insertos, i, { operador: e.target.value }))} /></td>
                                            <td className="border p-1">
                                                <select className="h-8 text-xs border rounded px-1" value={row.insertoLimpio} onChange={(e) => setInsertos(updateRow(insertos, i, { insertoLimpio: e.target.value }))}>
                                                    <option value="">—</option><option value="Sí">Sí</option><option value="No">No</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                <select className="h-8 text-xs border rounded px-1" value={row.deformaciones} onChange={(e) => setInsertos(updateRow(insertos, i, { deformaciones: e.target.value }))}>
                                                    <option value="">—</option><option value="Sí">Sí</option><option value="No">No</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                <select className="h-8 text-xs border rounded px-1" value={row.fisuras} onChange={(e) => setInsertos(updateRow(insertos, i, { fisuras: e.target.value }))}>
                                                    <option value="">—</option><option value="Sí">Sí</option><option value="No">No</option>
                                                </select>
                                            </td>
                                            <td className="border p-1"><Input className="h-8 text-xs w-16" value={row.capacidadInserto} onChange={(e) => setInsertos(updateRow(insertos, i, { capacidadInserto: e.target.value }))} /></td>
                                            <td className="border p-1"><Input className="h-8 text-xs w-16" value={row.capacidadConexion} onChange={(e) => setInsertos(updateRow(insertos, i, { capacidadConexion: e.target.value }))} /></td>
                                            <td className="border p-1">
                                                <select className="h-8 text-xs border rounded px-1" value={row.seguroActivado} onChange={(e) => setInsertos(updateRow(insertos, i, { seguroActivado: e.target.value }))}>
                                                    <option value="">—</option><option value="Sí">Sí</option><option value="No">No</option><option value="N/A">N/A</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                <select className="h-8 text-xs border rounded px-1" value={row.pernoInsertado} onChange={(e) => setInsertos(updateRow(insertos, i, { pernoInsertado: e.target.value }))}>
                                                    <option value="">—</option><option value="Sí">Sí</option><option value="No">No</option><option value="N/A">N/A</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                <select className="h-8 text-xs border rounded px-1" value={row.roscaCompleta} onChange={(e) => setInsertos(updateRow(insertos, i, { roscaCompleta: e.target.value }))}>
                                                    <option value="">—</option><option value="Sí">Sí</option><option value="No">No</option><option value="N/A">N/A</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                <select className="h-8 text-xs border rounded px-1" value={row.alineacionCorrecta} onChange={(e) => setInsertos(updateRow(insertos, i, { alineacionCorrecta: e.target.value }))}>
                                                    <option value="">—</option><option value="Sí">Sí</option><option value="No">No</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                <select className="h-8 text-xs border rounded px-1" value={row.anguloCorrecto} onChange={(e) => setInsertos(updateRow(insertos, i, { anguloCorrecto: e.target.value }))}>
                                                    <option value="">—</option><option value="Sí">Sí</option><option value="No">No</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                {insertos.length > 1 && (
                                                    <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => setInsertos(insertos.filter((_, j) => j !== i))}>
                                                        <Trash2 className="h-3 w-3" />
                                                    </Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                            <div>
                                <Label>Responsables</Label>
                                <Input value={responsablesC5} onChange={(e) => setResponsablesC5(e.target.value)} placeholder="Nombre(s)" />
                            </div>
                            <div>
                                <Label>Firma</Label>
                                <Input value={firmaC5} onChange={(e) => setFirmaC5(e.target.value)} placeholder="Nombre de quien firma" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* ================================================================ */}
            {/* SUBMIT BUTTON                                                    */}
            {/* ================================================================ */}
            <div className="flex justify-end">
                <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-[#0073a5] hover:bg-[#005f8a] text-white px-8 py-3 text-base"
                    size="lg"
                >
                    {loading ? (
                        <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Generando...
                        </>
                    ) : (
                        <>
                            <Download className="h-5 w-5 mr-2" />
                            Generar Bitácora Excel
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
