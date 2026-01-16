<?php
require_once 'config/db.php';

$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$script_name = parse_url($_SERVER['SCRIPT_NAME'], PHP_URL_PATH);
$request = preg_replace('~^' . preg_quote($script_name) . '~', '', $request_uri);
$request = trim($request, '/');

// Parsear rutas
$parts = explode('/', $request);
$endpoint = $parts[0] ?? '';
$_SERVER['PATH_INFO'] = '/' . implode('/', array_slice($parts, 1));

switch ($endpoint) {
    case 'modules':
        include 'api/modules.php';
        break;
    case 'sections':
        include 'api/sections.php';
        break;
    case 'upload':
        include 'api/upload.php';
        break;
    case '':
        json_response(['message' => 'TiltUp API v1.0', 'endpoints' => [
            'GET /modules' => 'Get all modules',
            'GET /modules/{id}' => 'Get specific module',
            'GET /sections/{module_id}' => 'Get sections by module',
            'POST /upload' => 'Upload files'
        ]]);
        break;
    default:
        http_response_code(404);
        json_response(['error' => 'Endpoint not found']);
}
?>
