<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_admin_token();

$body = read_json_body();
$type = (string)($body['type'] ?? 'blog');

if (!in_array($type, ['blog', 'testimonial', 'media', 'seo'], true)) {
    json_response(['ok' => false, 'error' => 'Invalid content type'], 422);
}

json_response([
    'ok' => true,
    'message' => "{$type} content queued for persistence",
    'payload' => $body
]);
