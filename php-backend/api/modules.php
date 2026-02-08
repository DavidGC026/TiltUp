<?php
require_once '../config/db.php';
require_once 'auth.php'; // Ensure session is started

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'] ?? '', '/'));
$id = $_GET['id'] ?? ($request[0] ?? null);

// Ensure user is logged in for these operations
// We can allow GET without login if we just return 0 progress, but for this app config it seems better to require login or handle guest.
// For now, if no user_id, progress will simply be null/0.
$user_id = $_SESSION['user_id'] ?? 0;

switch ($method) {
    case 'GET':
        if ($id) {
            get_module($id, $user_id);
        } else {
            get_all_modules($user_id);
        }
        break;
    case 'POST':
        // Only admin should create modules (check role in future)
        create_module();
        break;
    case 'PUT':
    case 'PATCH': // Support PATCH for progress updates
        if ($id) {
            update_module($id, $user_id);
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

function get_all_modules($user_id)
{
    global $conn;

    // Join with module_progress for the specific user
    $sql = "SELECT m.*, 
                   COALESCE(mp.progress, 0) as progress, 
                   COALESCE(mp.completed, 0) as completed 
            FROM modules m 
            LEFT JOIN module_progress mp ON m.id = mp.module_id AND mp.user_id = ?
            ORDER BY m.number ASC";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$result) {
        json_response(['error' => $conn->error], 500);
    }

    $modules = [];
    while ($row = $result->fetch_assoc()) {
        // Cast types
        $row['number'] = (int) $row['number'];
        $row['progress'] = (int) $row['progress'];
        $row['completed'] = (bool) $row['completed'];
        $modules[] = $row;
    }

    json_response($modules);
}

function get_module($id, $user_id)
{
    global $conn;
    $id = $conn->real_escape_string($id);

    $sql = "SELECT m.*, 
                   COALESCE(mp.progress, 0) as progress, 
                   COALESCE(mp.completed, 0) as completed 
            FROM modules m 
            LEFT JOIN module_progress mp ON m.id = mp.module_id AND mp.user_id = ? 
            WHERE m.id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $user_id, $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$result) {
        json_response(['error' => $conn->error], 500);
    }

    $module = $result->fetch_assoc();
    if (!$module) {
        json_response(['error' => 'Module not found'], 404);
    }

    $module['number'] = (int) $module['number'];
    $module['progress'] = (int) $module['progress'];
    $module['completed'] = (bool) $module['completed'];

    json_response($module);
}

function create_module()
{
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

function update_module($id, $user_id)
{
    global $conn;
    $data = get_request_data();
    $id = $conn->real_escape_string($id);

    // Check if we are updating progress (user specific) or content (admin/global)
    // For simplicity, if progress/completed are present, we update module_progress.
    // If other fields are present, we update modules table (assuming admin check passed elsewhere or we trust input for now)

    // Handle Progress Update
    if (isset($data['progress']) || isset($data['completed'])) {
        if (!$user_id) {
            json_response(['error' => 'User not logged in'], 401);
        }

        // Get current progress or create default
        $check_sql = "SELECT id FROM module_progress WHERE user_id = ? AND module_id = ?";
        $stmt_check = $conn->prepare($check_sql);
        $stmt_check->bind_param("is", $user_id, $id);
        $stmt_check->execute();
        $res_check = $stmt_check->get_result();

        $progress = isset($data['progress']) ? intval($data['progress']) : null;
        $completed = isset($data['completed']) ? ($data['completed'] ? 1 : 0) : null;

        if ($res_check->num_rows > 0) {
            // Update
            $row = $res_check->fetch_assoc();
            $mp_id = $row['id'];

            $updates = [];
            $types = "";
            $params = [];

            if ($progress !== null) {
                $updates[] = "progress = ?";
                $types .= "i";
                $params[] = $progress;
            }
            if ($completed !== null) {
                $updates[] = "completed = ?";
                $types .= "i";
                $params[] = $completed;
            }

            if (!empty($updates)) {
                $sql = "UPDATE module_progress SET " . implode(', ', $updates) . ", updated_at = NOW() WHERE id = ?";
                $types .= "i";
                $params[] = $mp_id;

                $stmt = $conn->prepare($sql);
                $stmt->bind_param($types, ...$params);
                $stmt->execute();
            }

        } else {
            // Insert
            $prog_val = $progress !== null ? $progress : 0;
            $comp_val = $completed !== null ? $completed : 0;

            $stmt = $conn->prepare("INSERT INTO module_progress (user_id, module_id, progress, completed) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("isii", $user_id, $id, $prog_val, $comp_val);
            $stmt->execute();
        }

        // Return updated module
        get_module($id, $user_id);
        return;
    }

    // Handle Global Module Content Update (title, description, etc.)
    // This part remains similar but potentially restricted to admin
    $updates = [];
    if (isset($data['title'])) {
        $updates[] = "title = '" . $conn->real_escape_string($data['title']) . "'";
    }
    // Add other fields as needed

    if (!empty($updates)) {
        $sql = "UPDATE modules SET " . implode(', ', $updates) . " WHERE id = '$id'";
        if ($conn->query($sql)) {
            get_module($id, $user_id);
        } else {
            json_response(['error' => $conn->error], 500);
        }
    } else {
        // If we only updated progress, we already returned. If we are here, nothing was done.
        json_response(['message' => 'No changes made']);
    }
}

function delete_module($id)
{
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