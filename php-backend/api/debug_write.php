<?php
require_once '../config/db.php';
require_once 'auth.php';

header('Content-Type: application/json');

$response = [
    'step_1_session' => [
        'id' => session_id(),
        'user_id' => $_SESSION['user_id'] ?? null,
        'role' => $_SESSION['role'] ?? null,
        'cookie_params' => session_get_cookie_params()
    ]
];

// Test DB Write
if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $module_id = 'modulo-1';
    $progress = 50; // Force 50% for test

    // Standard logic from modules.php
    $check_sql = "SELECT id FROM module_progress WHERE user_id = ? AND module_id = ?";
    $stmt_check = $conn->prepare($check_sql);
    $stmt_check->bind_param("is", $user_id, $module_id);
    $stmt_check->execute();
    $res_check = $stmt_check->get_result();

    if ($res_check->num_rows > 0) {
        $row = $res_check->fetch_assoc();
        $mp_id = $row['id'];
        $sql = "UPDATE module_progress SET progress = ?, updated_at = NOW() WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $progress, $mp_id);
        if ($stmt->execute()) {
            $response['db_update'] = 'Success: Updated to 50%';
        } else {
            $response['db_update'] = 'Error: ' . $stmt->error;
        }
    } else {
        $stmt = $conn->prepare("INSERT INTO module_progress (user_id, module_id, progress, completed) VALUES (?, ?, ?, 0)");
        $stmt->bind_param("isi", $user_id, $module_id, $progress);
        if ($stmt->execute()) {
            $response['db_insert'] = 'Success: Inserted 50%';
        } else {
            $response['db_insert'] = 'Error: ' . $stmt->error;
        }
    }
} else {
    $response['error'] = 'Not logged in. Cannot test DB write.';
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>