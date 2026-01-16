<?php
require_once '../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];

// Obtener module_id desde query string o PATH_INFO
$module_id = $_GET['module_id'] ?? null;
$path = trim($_SERVER['PATH_INFO'] ?? '', '/');
if (!$module_id && $path) {
    $parts = explode('/', $path);
    $module_id = $parts[0] ?? null;
}

switch ($method) {
    case 'GET':
        if ($module_id) {
            get_sections_by_module($module_id);
        } else {
            http_response_code(400);
            json_response(['error' => 'module_id required']);
        }
        break;
    case 'POST':
        create_section();
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

function get_sections_by_module($module_id) {
    global $conn;
    $module_id = $conn->real_escape_string($module_id);
    
    $result = $conn->query(
        "SELECT id, module_id as moduleId, type, title, content, pdf_url as pdfUrl, `order`, completed 
         FROM sections 
         WHERE module_id = '$module_id' 
         ORDER BY `order` ASC"
    );
    
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

function create_section() {
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
    
    $sql = "INSERT INTO sections (id, module_id, type, title, content, pdf_url, `order`, completed) 
            VALUES ('$id', '$module_id', '$type', '$title', '$content', '$pdf_url', $order, 0)";
    
    if ($conn->query($sql)) {
        json_response(['message' => 'Section created', 'id' => $id], 201);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}

function mark_section_complete($section_id) {
    global $conn;
    $section_id = $conn->real_escape_string($section_id);
    
    $sql = "UPDATE sections SET completed = 1 WHERE id = '$section_id'";
    
    if ($conn->query($sql)) {
        get_section($section_id);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}

function get_section($section_id) {
    global $conn;
    $section_id = $conn->real_escape_string($section_id);
    
    $result = $conn->query(
        "SELECT id, module_id as moduleId, type, title, content, pdf_url as pdfUrl, `order`, completed 
         FROM sections 
         WHERE id = '$section_id'"
    );
    
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

function update_section() {
    global $conn;
    $data = get_request_data();
    $id = $conn->real_escape_string($data['id'] ?? '');
    
    if (!$id) {
        json_response(['error' => 'Missing section id'], 400);
    }
    
    $updates = [];
    if (isset($data['completed'])) {
        $updates[] = "completed = " . ($data['completed'] ? 1 : 0);
    }
    
    if (empty($updates)) {
        json_response(['error' => 'No fields to update'], 400);
    }
    
    $sql = "UPDATE sections SET " . implode(', ', $updates) . " WHERE id = '$id'";
    
    if ($conn->query($sql)) {
        get_section($id);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}

function delete_section() {
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
