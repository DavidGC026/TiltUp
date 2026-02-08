<?php
// auth.php
require_once '../config/db.php'; // Aquí ya se ejecuta allow_cors() y se definen las funciones

if (session_status() === PHP_SESSION_NONE) {
    $is_secure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
    session_set_cookie_params([
        'lifetime' => 86400,
        'path' => '/',
        'domain' => '',
        'secure' => $is_secure,
        'httponly' => true,
        'samesite' => $is_secure ? 'None' : 'Lax'
    ]);
    session_start();
}

// Only execute routing if this file is called directly
if (basename($_SERVER['SCRIPT_FILENAME']) === 'auth.php') {
    $method = $_SERVER['REQUEST_METHOD'];
    $action = $_GET['action'] ?? null;

    // Routing
    switch ($method) {
        case 'POST':
            if ($action === 'login')
                login();
            else if ($action === 'logout')
                logout();
            else if ($action === 'register')
                register();
            else
                json_response(['error' => 'Acción no válida'], 400);
            break;
        case 'GET':
            if ($action === 'user')
                get_current_user_data();
            else
                json_response(['error' => 'Acción no válida'], 400);
            break;
        default:
            json_response(['error' => 'Método no permitido'], 405);
    }
}

function login()
{
    global $conn;
    $data = get_request_data();

    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    if (empty($username) || empty($password)) {
        json_response(['error' => 'Usuario y contraseña requeridos'], 400);
    }

    $stmt = $conn->prepare("SELECT id, username, password, role FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($user = $result->fetch_assoc()) {
        if (password_verify($password, $user['password'])) {
            session_regenerate_id(true);
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['role'] = $user['role'];

            json_response([
                'id' => $user['id'],
                'username' => $user['username'],
                'role' => $user['role']
            ]);
        }
    }
    json_response(['error' => 'Credenciales incorrectas'], 401);
}

function get_current_user_data()
{
    if (!isset($_SESSION['user_id'])) {
        json_response(['error' => 'No autenticado'], 401);
    }

    global $conn;
    $stmt = $conn->prepare("SELECT id, username, role FROM users WHERE id = ?");
    $stmt->bind_param("i", $_SESSION['user_id']);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();

    $user ? json_response($user) : json_response(['error' => 'Usuario no encontrado'], 404);
}

function logout()
{
    session_unset();
    session_destroy();
    json_response(['message' => 'Sesión cerrada']);
}

function register()
{
    global $conn;
    $data = get_request_data();
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    if (!$username || !$password) {
        json_response(['error' => 'Datos incompletos'], 400);
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, 'user')");
    $stmt->bind_param("ss", $username, $hash);

    if ($stmt->execute()) {
        json_response(['message' => 'Usuario registrado'], 201);
    } else {
        json_response(['error' => 'Error al registrar'], 500);
    }
}
