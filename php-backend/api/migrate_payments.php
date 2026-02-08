<?php
require_once '../config/db.php';

header('Content-Type: application/json');

// Create user_payments table
$sql = "CREATE TABLE IF NOT EXISTS `user_payments` (
  `id` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `module_id` varchar(50) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `status` enum('pending','completed','failed') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_user_payments_user` (`user_id`),
  KEY `idx_user_payments_module` (`module_id`),
  CONSTRAINT `fk_user_payments_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Table user_payments created successfully']);
} else {
    echo json_encode(['error' => 'Error creating table: ' . $conn->error]);
}
?>