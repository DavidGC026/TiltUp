<?php
require_once '../config/db.php';
require_once 'auth.php';

header('Content-Type: application/json');

$user_id = $_SESSION['user_id'] ?? 0;

$response = [
    'session_id' => session_id(),
    'user_id' => $user_id,
    'user_logged_in' => $user_id > 0,
    'db_connection' => $conn ? 'ok' : 'failed',
    'modules' => []
];

if ($user_id > 0) {
    // Fetch directly using raw query to confirm data
    $sql = "SELECT m.id, m.title, mp.progress, mp.completed 
            FROM modules m 
            LEFT JOIN module_progress mp ON m.id = mp.module_id AND mp.user_id = $user_id
            ORDER BY m.number ASC";

    $result = $conn->query($sql);

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $response['modules'][] = $row;
        }
    } else {
        $response['query_error'] = $conn->error;
    }
} else {
    $response['message'] = "User not logged in. Cannot fetch specific progress.";
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>