<?php
require_once '../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'] ?? '', '/'));
$id = $request[0] ?? null;

switch ($method) {
    case 'GET':
        if ($id) {
            get_module($id);
        } else {
            get_all_modules();
        }
        break;
    case 'POST':
        create_module();
        break;
    case 'PUT':
        if ($id) {
            update_module($id);
        }
        break;
    case 'DELETE':
        if ($id) {
            delete_module($id);
        }
        break;
    default:
        http_response_code(405);
        json_response(['error' => 'Method not allowed']);
}

function get_all_modules() {
    global $conn;
    $result = $conn->query("SELECT * FROM modules ORDER BY number ASC");
    
    if (!$result) {
        json_response(['error' => $conn->error], 500);
    }
    
    $modules = [];
    while ($row = $result->fetch_assoc()) {
        $modules[] = $row;
    }
    
    json_response($modules);
}

function get_module($id) {
    global $conn;
    $id = $conn->real_escape_string($id);
    $result = $conn->query("SELECT * FROM modules WHERE id = '$id'");
    
    if (!$result) {
        json_response(['error' => $conn->error], 500);
    }
    
    $module = $result->fetch_assoc();
    if (!$module) {
        json_response(['error' => 'Module not found'], 404);
    }
    
    json_response($module);
}

function create_module() {
    global $conn;
    $data = get_request_data();
    
    $id = $conn->real_escape_string($data['id'] ?? '');
    $number = intval($data['number'] ?? 0);
    $title = $conn->real_escape_string($data['title'] ?? '');
    $description = $conn->real_escape_string($data['description'] ?? '');
    $content = $conn->real_escape_string($data['content'] ?? '');
    $image_url = $conn->real_escape_string($data['imageUrl'] ?? '');
    
    if (!$id || !$number || !$title) {
        json_response(['error' => 'Missing required fields'], 400);
    }
    
    $sql = "INSERT INTO modules (id, number, title, description, content, image_url) 
            VALUES ('$id', $number, '$title', '$description', '$content', '$image_url')";
    
    if ($conn->query($sql)) {
        json_response(['message' => 'Module created', 'id' => $id], 201);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}

function update_module($id) {
    global $conn;
    $data = get_request_data();
    $id = $conn->real_escape_string($id);
    
    $updates = [];
    
    if (isset($data['progress'])) {
        $updates[] = "progress = " . intval($data['progress']);
    }
    if (isset($data['completed'])) {
        $updates[] = "completed = " . ($data['completed'] ? 1 : 0);
    }
    if (isset($data['title'])) {
        $updates[] = "title = '" . $conn->real_escape_string($data['title']) . "'";
    }
    
    if (empty($updates)) {
        json_response(['error' => 'No fields to update'], 400);
    }
    
    $sql = "UPDATE modules SET " . implode(', ', $updates) . " WHERE id = '$id'";
    
    if ($conn->query($sql)) {
        get_module($id);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}

function delete_module($id) {
    global $conn;
    $id = $conn->real_escape_string($id);
    
    $sql = "DELETE FROM modules WHERE id = '$id'";
    
    if ($conn->query($sql)) {
        json_response(['message' => 'Module deleted']);
    } else {
        json_response(['error' => $conn->error], 500);
    }
}
?>
