<?php
// api/admin_results.php
require_once '../config/db.php';

session_start();

// Verify authentication and admin role
if (!isset($_SESSION['user_id']) || !isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    json_response(['error' => 'Unauthorized'], 403);
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    get_all_results();
} else {
    json_response(['error' => 'Method not allowed'], 405);
}

function get_all_results()
{
    global $conn;

    // Fetch users who have taken exams
    $query = "
        SELECT 
            u.id as user_id, 
            u.username, 
            er.id as result_id,
            er.exam_id,
            e.title as exam_title,
            er.attempt_id,
            er.score,
            er.passed,
            er.created_at,
            er.details
        FROM exam_results er
        JOIN users u ON er.user_id = u.id
        JOIN exams e ON er.exam_id = e.id
        ORDER BY er.created_at DESC
    ";

    $result = $conn->query($query);

    if (!$result) {
        json_response(['error' => $conn->error], 500);
    }

    $data = [];
    while ($row = $result->fetch_assoc()) {
        // Decode details JSON
        $row['details'] = json_decode($row['details']);
        $row['passed'] = (bool) $row['passed'];
        $row['score'] = (float) $row['score'];
        $data[] = $row;
    }

    json_response($data);
}
?>