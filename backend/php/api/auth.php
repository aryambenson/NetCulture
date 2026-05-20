<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['ok' => false, 'error' => 'Method not allowed'], 405);
}

$body = read_json_body();
$email = strtolower(trim((string)($body['email'] ?? '')));
$password = (string)($body['password'] ?? '');

if ($email === '' || $password === '') {
    json_response(['ok' => false, 'error' => 'Email and password are required'], 422);
}

// Replace this with a users table lookup and password_verify in production.
$adminEmail = getenv('NETCULTURE_ADMIN_EMAIL') ?: 'admin@netculture.in';
$adminHash = getenv('NETCULTURE_ADMIN_PASSWORD_HASH') ?: '';

if ($email !== $adminEmail || $adminHash === '' || !password_verify($password, $adminHash)) {
    json_response(['ok' => false, 'error' => 'Invalid credentials'], 401);
}

json_response([
    'ok' => true,
    'token' => bin2hex(random_bytes(32)),
    'expiresIn' => 3600
]);
