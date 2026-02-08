<?php
header('Content-Type: application/json');

echo json_encode([
    'GET' => $_GET,
    'POST' => $_POST,
    'SERVER_QUERY_STRING' => $_SERVER['QUERY_STRING'] ?? null,
    'SERVER_PATH_INFO' => $_SERVER['PATH_INFO'] ?? null,
    'REQUEST_URI' => $_SERVER['REQUEST_URI'] ?? null,
    'PHP_SELF' => $_SERVER['PHP_SELF'] ?? null
], JSON_PRETTY_PRINT);
?>