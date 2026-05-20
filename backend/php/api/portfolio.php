<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    json_response([
        'ok' => true,
        'data' => [
            ['title' => 'AI commerce acceleration', 'sector' => 'Retail technology'],
            ['title' => 'Enterprise operations portal', 'sector' => 'Manufacturing'],
            ['title' => 'Premium digital brand launch', 'sector' => 'Professional services']
        ]
    ]);
}

require_admin_token();
$body = read_json_body();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    json_response(['ok' => true, 'message' => 'Project created', 'project' => $body], 201);
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    json_response(['ok' => true, 'message' => 'Project updated', 'project' => $body]);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    json_response(['ok' => true, 'message' => 'Project deleted']);
}

json_response(['ok' => false, 'error' => 'Method not allowed'], 405);
