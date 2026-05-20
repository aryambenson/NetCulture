<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    require_admin_token();
    json_response([
        'ok' => true,
        'data' => [
            ['name' => 'Aarav Shah', 'company' => 'FinEdge Labs', 'score' => 92, 'need' => 'AI Solutions'],
            ['name' => 'Meera Iyer', 'company' => 'UrbanGrid', 'score' => 86, 'need' => 'Web Application Development']
        ]
    ]);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['ok' => false, 'error' => 'Method not allowed'], 405);
}

$body = read_json_body();
$email = filter_var($body['email'] ?? '', FILTER_VALIDATE_EMAIL);
$name = trim((string)($body['name'] ?? ''));

if ($name === '' || $email === false) {
    json_response(['ok' => false, 'error' => 'Valid name and email are required'], 422);
}

$score = min(100, max(0, (int)($body['score'] ?? 50)));

json_response([
    'ok' => true,
    'lead' => [
        'id' => bin2hex(random_bytes(12)),
        'name' => $name,
        'email' => $email,
        'score' => $score,
        'status' => $score >= 82 ? 'priority' : 'new',
        'createdAt' => gmdate('c')
    ],
    'routing' => ['crm', 'email', 'whatsapp', 'analytics']
], 201);
