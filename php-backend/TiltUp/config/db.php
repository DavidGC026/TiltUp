<?php
// Configuración de base de datos
define('DB_HOST', 'localhost');
define('DB_USER', 'admin');
define('DB_PASS', 'Imc590923cz4#');
define('DB_NAME', 'tiltuplearn');

// Crear conexión
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Verificar conexión
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Establecer charset a UTF-8
$conn->set_charset("utf8mb4");

// Funciones auxiliares
function json_response($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

function get_request_data() {
    $input = file_get_contents('php://input');
    return json_decode($input, true);
}

function allow_cors() {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowed_origins = ['https://grabador.imcyc.com', 'http://localhost', 'http://localhost:5173'];

    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
    }
    
    // ESTO ES VITAL:
    header('Access-Control-Allow-Credentials: true'); 
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }
}

// Aplicar CORS
allow_cors();
?>
