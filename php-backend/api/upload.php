<?php
require_once '../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'POST') {
    http_response_code(405);
    json_response(['error' => 'Method not allowed']);
}

$type = $_GET['type'] ?? 'pdf'; // 'pdf' o 'image'
$module_id = $_GET['module_id'] ?? null;

if (!$module_id) {
    json_response(['error' => 'module_id required'], 400);
}

if (!isset($_FILES['file'])) {
    json_response(['error' => 'No file uploaded'], 400);
}

$file = $_FILES['file'];
$allowed_types = $type === 'pdf' ? ['application/pdf'] : ['image/jpeg', 'image/png', 'image/webp'];
$max_size = 50 * 1024 * 1024; // 50MB

// Validar tipo
if (!in_array($file['type'], $allowed_types)) {
    json_response(['error' => 'Invalid file type'], 400);
}

// Validar tamaño
if ($file['size'] > $max_size) {
    json_response(['error' => 'File too large'], 400);
}

// Validar sin errores
if ($file['error'] !== UPLOAD_ERR_OK) {
    json_response(['error' => 'Upload error: ' . $file['error']], 400);
}

// Crear directorio si no existe
$upload_dir = $type === 'pdf' 
    ? "../uploads/pdfs/$module_id/" 
    : "../uploads/images/$module_id/";

if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0755, true);
}

// Generar nombre seguro
$filename = preg_replace('/[^a-zA-Z0-9._-]/', '_', basename($file['name']));
$filepath = $upload_dir . $filename;
$relative_path = str_replace('../', '/', $filepath);

// Evitar sobrescrituras
if (file_exists($filepath)) {
    $filename = uniqid() . '_' . $filename;
    $filepath = $upload_dir . $filename;
    $relative_path = str_replace('../', '/', $filepath);
}

// Mover archivo
if (!move_uploaded_file($file['tmp_name'], $filepath)) {
    json_response(['error' => 'Failed to save file'], 500);
}

// Si es PDF, actualizar la BD
if ($type === 'pdf') {
    $section_id = $_GET['section_id'] ?? null;
    if ($section_id) {
        global $conn;
        $section_id = $conn->real_escape_string($section_id);
        $db_path = $conn->real_escape_string($relative_path);
        
        $sql = "UPDATE sections SET pdf_url = '$db_path' WHERE id = '$section_id'";
        $conn->query($sql);
    }
}

json_response([
    'message' => 'File uploaded successfully',
    'file' => $filename,
    'path' => $relative_path,
    'size' => $file['size']
], 201);
?>
