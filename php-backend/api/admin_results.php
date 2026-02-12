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
        $details = json_decode($row['details'], true);
        $row['passed'] = (bool) $row['passed'];
        $row['score'] = (float) $row['score'];

        if (is_array($details)) {
            // Collect IDs
            $questionIds = [];
            $optionIds = [];
            foreach ($details as $detail) {
                if (isset($detail['questionId']))
                    $questionIds[] = "'" . $conn->real_escape_string($detail['questionId']) . "'";
                if (isset($detail['selectedOptionId']))
                    $optionIds[] = "'" . $conn->real_escape_string($detail['selectedOptionId']) . "'";
                if (isset($detail['correctOptionId']))
                    $optionIds[] = "'" . $conn->real_escape_string($detail['correctOptionId']) . "'";
            }

            // Fetch Question Texts
            $questionsMap = [];
            if (!empty($questionIds)) {
                $qIdsStr = implode(',', array_unique($questionIds));
                $qQuery = "SELECT id, question_text FROM exam_questions WHERE id IN ($qIdsStr)";
                $qResult = $conn->query($qQuery);
                if ($qResult) {
                    while ($qRow = $qResult->fetch_assoc()) {
                        $questionsMap[$qRow['id']] = $qRow['question_text'];
                    }
                }
            }

            // Fetch Option Texts
            $optionsMap = [];
            if (!empty($optionIds)) {
                $oIdsStr = implode(',', array_unique($optionIds));
                $oQuery = "SELECT id, option_text FROM exam_question_options WHERE id IN ($oIdsStr)";
                $oResult = $conn->query($oQuery);
                if ($oResult) {
                    while ($oRow = $oResult->fetch_assoc()) {
                        $optionsMap[$oRow['id']] = $oRow['option_text'];
                    }
                }
            }

            // Map texts back to details
            foreach ($details as &$detail) {
                $detail['questionText'] = isset($questionsMap[$detail['questionId']]) ? $questionsMap[$detail['questionId']] : $detail['questionId'];
                $detail['selectedOptionText'] = isset($optionsMap[$detail['selectedOptionId']]) ? $optionsMap[$detail['selectedOptionId']] : $detail['selectedOptionId'];
                $detail['correctOptionText'] = isset($optionsMap[$detail['correctOptionId']]) ? $optionsMap[$detail['correctOptionId']] : $detail['correctOptionId'];
            }
        }

        $row['details'] = $details;
        $data[] = $row;
    }

    json_response($data);
}
?>