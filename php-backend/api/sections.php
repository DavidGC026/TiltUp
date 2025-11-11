<?php
require_once '../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$path = trim($_SERVER['PATH_INFO'] ?? '', '/');
$parts = explode('/', $path);

$module_id = $parts[0] ?? null;
$action = $parts[1] ?? null;
$section_id = $parts[2] ?? null;

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
        if ($action === 'complete' && $section_id) {
            mark_section_complete($section_id);
        } else {
            create_section();
        }
        break;
    case 'PUT':
        if ($module_id) {
            update_section($module_id);
        }
        break;
    case 'DELETE':
        if ($module_id) {
            delete_section($module_id);
        }
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
?>
