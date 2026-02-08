<?php
require_once '../config/db.php';
require_once 'auth.php';

header('Content-Type: application/json');

// Only execute routing if this file is called directly
if (basename($_SERVER['SCRIPT_FILENAME']) === 'payments.php') {
    $method = $_SERVER['REQUEST_METHOD'];
    $user_id = $_SESSION['user_id'] ?? 0;

    if (!$user_id) {
        json_response(['error' => 'Unauthorized'], 401);
    }

    if ($method === 'GET') {
        $module_id = $_GET['module_id'] ?? '';
        if (!$module_id) {
            json_response(['error' => 'Missing module_id'], 400);
        }
        check_payment_status($user_id, $module_id);
    } elseif ($method === 'POST') {
        $data = get_request_data();
        $module_id = $data['module_id'] ?? '';
        if (!$module_id) {
            json_response(['error' => 'Missing module_id'], 400);
        }
        process_payment($user_id, $module_id);
    } else {
        json_response(['error' => 'Method not allowed'], 405);
    }
}

function check_payment_status($user_id, $module_id)
{
    global $conn;
    $sql = "SELECT status FROM user_payments WHERE user_id = ? AND module_id = ? AND status = 'completed'";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $user_id, $module_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        json_response(['paid' => true]);
    } else {
        json_response(['paid' => false]);
    }
}

function process_payment($user_id, $module_id)
{
    global $conn;

    // Mock Payment Processing
    // In a real scenario, this would interact with Stripe/Conekta/PayPal
    $amount = 1000.00; // Fixed price from requirement
    $payment_id = uniqid('pay_');
    $status = 'completed';

    $sql = "INSERT INTO user_payments (id, user_id, module_id, amount, status) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sisds", $payment_id, $user_id, $module_id, $amount, $status);

    if ($stmt->execute()) {
        json_response(['success' => true, 'message' => 'Payment processed successfully']);
    } else {
        json_response(['error' => 'Payment failed: ' . $conn->error], 500);
    }
}
?>