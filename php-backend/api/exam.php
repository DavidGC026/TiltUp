<?php
require_once '../config/db.php';

// Usar sesión para guardar el conjunto aleatorio de preguntas por intento
session_start();
if (!isset($_SESSION['exam_attempts']) || !is_array($_SESSION['exam_attempts'])) {
    $_SESSION['exam_attempts'] = [];
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $section_id = $_GET['section_id'] ?? null;
        if (!$section_id) {
            json_response(['error' => 'section_id required'], 400);
        }
        get_exam_by_section($section_id);
        break;

    case 'POST':
        $data = get_request_data();
        if (!is_array($data)) {
            json_response(['error' => 'Invalid JSON body'], 400);
        }

        $exam_id = $data['examId'] ?? null;
        $attempt_id = $data['attemptId'] ?? null;
        $answers = $data['answers'] ?? null;

        if (!$exam_id || !is_string($exam_id)) {
            json_response(['error' => 'examId required'], 400);
        }
        if (!$attempt_id || !is_string($attempt_id)) {
            json_response(['error' => 'attemptId required'], 400);
        }
        if (!is_array($answers)) {
            json_response(['error' => 'answers required'], 400);
        }

        submit_exam($exam_id, $attempt_id, $answers);
        break;

    default:
        json_response(['error' => 'Method not allowed'], 405);
}

function get_exam_by_section($section_id)
{
    global $conn;

    $section_id = $conn->real_escape_string($section_id);

    $result = $conn->query(
        "SELECT id, section_id AS sectionId, title, description FROM exams WHERE section_id = '$section_id' LIMIT 1"
    );

    if (!$result) {
        json_response(['error' => $conn->error], 500);
    }

    $exam = $result->fetch_assoc();
    if (!$exam) {
        json_response(['error' => 'Exam not found'], 404);
    }

    $exam_id = $conn->real_escape_string($exam['id']);

    $qres = $conn->query(
        "SELECT id, exam_id AS examId, question_number AS questionNumber, question_text AS questionText " .
        "FROM exam_questions " .
        "WHERE exam_id = '$exam_id' " .
        "ORDER BY question_number ASC"
    );

    if (!$qres) {
        json_response(['error' => $conn->error], 500);
    }

    $questions = [];
    while ($q = $qres->fetch_assoc()) {
        $qid = $conn->real_escape_string($q['id']);

        $ores = $conn->query(
            "SELECT id, question_id AS questionId, option_label AS optionLabel, option_text AS optionText " .
            "FROM exam_question_options " .
            "WHERE question_id = '$qid' " .
            "ORDER BY option_label ASC"
        );

        if (!$ores) {
            json_response(['error' => $conn->error], 500);
        }

        $options = [];
        while ($o = $ores->fetch_assoc()) {
            // IMPORTANT: no enviar is_correct al cliente
            $options[] = $o;
        }

        $q['options'] = $options;
        $questions[] = $q;
    }

    // Seleccionar un subconjunto aleatorio de preguntas para que el examen no sea siempre igual
    $limit = 30;
    $selected_questions = $questions;
    if (count($selected_questions) > $limit) {
        shuffle($selected_questions);
        $selected_questions = array_slice($selected_questions, 0, $limit);
    }

    // Crear intento y guardar preguntas en sesión
    $attempt_id = bin2hex(random_bytes(16));

    // Limpieza básica de intentos viejos para no crecer indefinidamente
    $now = time();
    foreach ($_SESSION['exam_attempts'] as $k => $attempt) {
        if (is_array($attempt) && isset($attempt['createdAt']) && ($now - intval($attempt['createdAt'])) > 3600) {
            unset($_SESSION['exam_attempts'][$k]);
        }
    }

    $_SESSION['exam_attempts'][$attempt_id] = [
        'examId' => $exam['id'],
        'questionIds' => array_map(function ($q) {
            return $q['id'];
        }, $selected_questions),
        'createdAt' => $now,
    ];

    $exam['attemptId'] = $attempt_id;
    $exam['questions'] = $selected_questions;

    json_response($exam);
}

function submit_exam($exam_id, $attempt_id, $answers)
{
    global $conn;

    $exam_id = $conn->real_escape_string($exam_id);

    $eres = $conn->query(
        "SELECT id, section_id AS sectionId FROM exams WHERE id = '$exam_id' LIMIT 1"
    );

    if (!$eres) {
        json_response(['error' => $conn->error], 500);
    }

    $exam = $eres->fetch_assoc();
    if (!$exam) {
        json_response(['error' => 'Exam not found'], 404);
    }

    // Usar el intento guardado en sesión para saber qué 10 preguntas se mostraron
    if (!isset($_SESSION['exam_attempts']) || !is_array($_SESSION['exam_attempts'])) {
        json_response(['error' => 'No exam attempts found in session'], 400);
    }

    if (!isset($_SESSION['exam_attempts'][$attempt_id]) || !is_array($_SESSION['exam_attempts'][$attempt_id])) {
        json_response(['error' => 'Invalid or expired attemptId'], 400);
    }

    $attempt = $_SESSION['exam_attempts'][$attempt_id];
    if (!isset($attempt['examId']) || $attempt['examId'] !== $exam['id']) {
        json_response(['error' => 'attemptId does not match examId'], 400);
    }

    $question_ids = $attempt['questionIds'] ?? [];
    if (!is_array($question_ids) || count($question_ids) === 0) {
        json_response(['error' => 'Attempt has no questions'], 400);
    }

    // Asegurar máximo 30 (por seguridad)
    $question_ids = array_slice($question_ids, 0, 30);

    $total = count($question_ids);
    if ($total === 0) {
        json_response(['error' => 'Attempt has no questions'], 400);
    }

    // Obtener respuestas correctas (una por pregunta)
    $escaped_ids = array_map(function ($qid) use ($conn) {
        return "'" . $conn->real_escape_string($qid) . "'";
    }, $question_ids);

    $in_clause = implode(',', $escaped_ids);

    $cres = $conn->query(
        "SELECT question_id AS questionId, id AS correctOptionId " .
        "FROM exam_question_options " .
        "WHERE question_id IN ($in_clause) AND is_correct = 1"
    );

    if (!$cres) {
        json_response(['error' => $conn->error], 500);
    }

    $correct_by_question = [];
    while ($row = $cres->fetch_assoc()) {
        $correct_by_question[$row['questionId']] = $row['correctOptionId'];
    }

    $details = [];
    $correct = 0;

    foreach ($question_ids as $qid) {
        $selected = $answers[$qid] ?? '';
        $correct_option = $correct_by_question[$qid] ?? '';

        $is_correct = ($selected !== '' && $correct_option !== '' && $selected === $correct_option);
        if ($is_correct) {
            $correct += 1;
        }

        $details[] = [
            'questionId' => $qid,
            'selectedOptionId' => (string) $selected,
            'correctOptionId' => (string) $correct_option,
            'isCorrect' => (bool) $is_correct,
        ];
    }

    $score = ($total > 0) ? (($correct / $total) * 100.0) : 0.0;
    $passed = $score >= 70.0;

    // Si aprobó, marcar sección como completada
    if ($passed) {
        $section_id = $conn->real_escape_string($exam['sectionId']);
        $conn->query("UPDATE sections SET completed = 1 WHERE id = '$section_id'");
    }

    // Guardar resultado en exam_results
    if (isset($_SESSION['user_id'])) {
        $user_id = (int) $_SESSION['user_id'];
        $details_json = json_encode($details);

        $stmt = $conn->prepare("INSERT INTO exam_results (user_id, exam_id, attempt_id, score, passed, details) VALUES (?, ?, ?, ?, ?, ?)");
        $passed_int = $passed ? 1 : 0;
        $stmt->bind_param("issdis", $user_id, $exam_id, $attempt_id, $score, $passed_int, $details_json);
        $stmt->execute();
    }

    json_response([
        'totalQuestions' => $total,
        'correctAnswers' => $correct,
        'score' => $score,
        'passed' => (bool) $passed,
        'answers' => $details,
    ]);
}
?>