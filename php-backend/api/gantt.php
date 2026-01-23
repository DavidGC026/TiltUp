<?php
require_once '../config/db.php';

// Ensure user is logged in
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['user_id'])) {
    json_response(['error' => 'No autorizado'], 401);
}

$userId = $_SESSION['user_id'];
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    // Fetch data
    $stmt = $conn->prepare("SELECT data FROM user_gantt_data WHERE user_id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($row = $result->fetch_assoc()) {
        // Return stored JSON
        header('Content-Type: application/json');
        echo $row['data'];
    } else {
        // Return null or empty object if not found
        json_response(['formats' => []]); 
    }
} elseif ($method === 'POST') {
    // Save data
    $data = file_get_contents('php://input');
    
    // Validate that it is valid JSON
    $decoded = json_decode($data);
    if ($decoded === null) {
        json_response(['error' => 'JSON inválido'], 400);
    }

    // Upsert (Insert or Update)
    $stmt = $conn->prepare("INSERT INTO user_gantt_data (user_id, data) VALUES (?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data)");
    $stmt->bind_param("is", $userId, $data);
    
    if ($stmt->execute()) {
        json_response(['success' => true]);
    } else {
        json_response(['error' => 'Error al guardar en base de datos'], 500);
    }
} else {
    json_response(['error' => 'Método no permitido'], 405);
}
?>
