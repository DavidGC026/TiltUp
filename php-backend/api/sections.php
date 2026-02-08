<?php
require_once '../config/db.php';
require_once 'auth.php'; // Ensure session is started

$method = $_SERVER['REQUEST_METHOD'];

// Obtener module_id desde query string o PATH_INFO
$module_id = $_GET['module_id'] ?? null;
$path = trim($_SERVER['PATH_INFO'] ?? '', '/');
if (!$module_id && $path) {
    $parts = explode('/', $path);
    $module_id = $parts[0] ?? null;
}

// User context
$user_id = $_SESSION['user_id'] ?? 0;

switch ($method) {
    case 'GET':
        // check if this is a request for a specific section '/api/sections/section-id' which logic is inside sections.php usually handled via rewrites or query params
        // But here we rely on standard query params or simple logic. 
        // If 'id' param is present or path looks like a section id (not module id), we might need get_section.
        // However, existing logic uses module_id to get all. 
        // Let's rely on how the frontend calls it.
        // Frontend calls: /api/sections.php?module_id=X

        if ($module_id) {
            get_sections_by_module($module_id, $user_id);
        } else {
            // Maybe it's a get_section by id request if we support it via query param 'id'
            $section_id = $_GET['id'] ?? null;
            if ($section_id) {
                get_section($section_id, $user_id);
            } else {
                http_response_code(400);
                json_response(['error' => 'module_id or id required']);
            }
        }
        break;
    case 'POST':
        // Check if it is a completion action on a specific section
        $request_parts = explode('/', $path);
        // /api/sections/sec-1/complete
        if (count($request_parts) >= 2 && $request_parts[1] === 'complete') {
            mark_section_complete($request_parts[0], $user_id);
        } else {
            create_section();
        }
        break;
    case 'PUT':
        update_section();
        break;
    case 'DELETE':
        delete_section();
        break;
    default:
        http_response_code(405);
        json_response(['error' => 'Method not allowed']);
}

function get_sections_by_module($module_id, $user_id)
{
    global $conn;
    $module_id = $conn->real_escape_string($module_id);

    // Join with section_progress
    $sql = "SELECT s.id, s.module_id as moduleId, s.type, s.title, s.content, s.pdf_url as pdfUrl, s.`order`, 
                   COALESCE(sp.completed, 0) as completed
            FROM sections s
            LEFT JOIN section_progress sp ON s.id = sp.section_id AND sp.user_id = ?
            WHERE s.module_id = ? 
            ORDER BY s.`order` ASC";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $user_id, $module_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$result) {
        json_response(['error' => $conn->error], 500);
    }

    $sections = [];
    while ($row = $result->fetch_assoc()) {
        $row['completed'] = (bool) $row['completed'];
        $sections[] = $row;
    }

    json_response($sections);
}

function create_section()
{
    global $conn;
    $data = get_request_data();

    $id = $conn->real_escape_string($data['id'] ?? '');
    $module_id = $conn->real_escape_string($data['module_id'] ?? '');
    $type = $conn->real_escape_string($data['type'] ?? '');
    $title = $conn->real_escape_string($data['title'] ?? '');
    $content = $conn->real_escape_string($data['content'] ?? '');
    $pdf_url = $conn->real_escape_string($data['pdf_url'] ?? '');
    $order = intval($data['order'] ?? 0);

    if (!$id || !$module_id || !$type || !$title) {
        json_response(['error' => 'Missing required fields'], 400);
    }

    // Note: 'completed' in sections table is effectively the default or global status, which we might ignore or keep as 0.
    $sql = "INSERT INTO sections (id, module_id, type, title, content, pdf_url, `order`, completed) 
            VALUES ('$id', '$module_id', '$type', '$title', '$content', '$pdf_url', $order, 0)";

    if ($conn->query($sql)) {
        json_response(['message' => 'Section created', 'id' => $id], 201);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}

function mark_section_complete($section_id, $user_id)
{
    global $conn;
    $section_id = $conn->real_escape_string($section_id);

    if (!$user_id) {
        json_response(['error' => 'User not logged in'], 401);
    }

    // Check if exists
    $check_sql = "SELECT id FROM section_progress WHERE user_id = ? AND section_id = ?";
    $stmt = $conn->prepare($check_sql);
    $stmt->bind_param("is", $user_id, $section_id);
    $stmt->execute();
    $res = $stmt->get_result();

    if ($res->num_rows > 0) {
        // Already exists, maybe update timestamp?
        $row = $res->fetch_assoc();
        $conn->query("UPDATE section_progress SET completed = 1, updated_at = NOW() WHERE id = " . $row['id']);
    } else {
        // Insert
        $stmt_ins = $conn->prepare("INSERT INTO section_progress (user_id, section_id, completed) VALUES (?, ?, 1)");
        $stmt_ins->bind_param("is", $user_id, $section_id);
        $stmt_ins->execute();
    }

    get_section($section_id, $user_id);
}

function get_section($section_id, $user_id)
{
    global $conn;
    $section_id = $conn->real_escape_string($section_id);

    $sql = "SELECT s.id, s.module_id as moduleId, s.type, s.title, s.content, s.pdf_url as pdfUrl, s.`order`, 
                   COALESCE(sp.completed, 0) as completed
            FROM sections s
            LEFT JOIN section_progress sp ON s.id = sp.section_id AND sp.user_id = ?
            WHERE s.id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $user_id, $section_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$result) {
        json_response(['error' => $conn->error], 500);
    }

    $section = $result->fetch_assoc();
    if (!$section) {
        json_response(['error' => 'Section not found'], 404);
    }

    $section['completed'] = (bool) $section['completed'];
    json_response($section);
}

function update_section()
{
    global $conn;
    $data = get_request_data();
    $id = $conn->real_escape_string($data['id'] ?? '');

    if (!$id) {
        json_response(['error' => 'Missing section id'], 400);
    }

    // Logic for admin updating content. 
    // If we want to support un-completing sections for users, we'd need user context here too.
    // Assuming this function is for Admin editing content properties.

    $updates = [];
    if (isset($data['completed'])) {
        // Modifying global completion status? Or user specific? 
        // Existing code modified 'sections' table.
        $updates[] = "completed = " . ($data['completed'] ? 1 : 0);
    }

    if (empty($updates)) {
        json_response(['error' => 'No fields to update'], 400);
    }

    $sql = "UPDATE sections SET " . implode(', ', $updates) . " WHERE id = '$id'";

    if ($conn->query($sql)) {
        // Just return the section raw or with session context
        // Ideally we pass context if we have it, but for admin edit maybe not needed
        $user_id = $_SESSION['user_id'] ?? 0;
        get_section($id, $user_id);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}

function delete_section()
{
    global $conn;
    $data = get_request_data();
    $id = $conn->real_escape_string($data['id'] ?? '');

    if (!$id) {
        json_response(['error' => 'Missing section id'], 400);
    }

    $sql = "DELETE FROM sections WHERE id = '$id'";

    if ($conn->query($sql)) {
        json_response(['message' => 'Section deleted']);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}
?>