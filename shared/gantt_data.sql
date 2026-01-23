-- Additions to support Gantt Editor in Module 4

-- -------------------------------------------------------------
-- CLEANUP (Drop in reverse dependency order to avoid FK errors)
-- -------------------------------------------------------------
DROP TABLE IF EXISTS `user_gantt_state`;
DROP TABLE IF EXISTS `module_gantt_rows`;
DROP TABLE IF EXISTS `module_gantt_pages`;

-- -------------------------------------------------------------
-- CREATE TABLES
-- -------------------------------------------------------------

-- 1. Table for Gantt Pages (Groups of activities)
CREATE TABLE `module_gantt_pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module_id` varchar(50) NOT NULL,
  `page_number` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_gantt_pages_module` (`module_id`),
  CONSTRAINT `fk_gantt_pages_module` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Table for Gantt Rows (Activities)
CREATE TABLE `module_gantt_rows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `page_id` int(11) NOT NULL,
  `activity_text` varchar(255) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_gantt_rows_page` (`page_id`),
  CONSTRAINT `fk_gantt_rows_page` FOREIGN KEY (`page_id`) REFERENCES `module_gantt_pages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Table for User Progress/Edits (Colors and active cells)
CREATE TABLE `user_gantt_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `row_id` int(11) NOT NULL,
  `week_number` int(11) NOT NULL, -- 1 to 5
  `is_active` tinyint(1) DEFAULT 1,
  `color_hex` varchar(20) DEFAULT '#f97316',
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_user_gantt_cell` (`user_id`, `row_id`, `week_number`),
  CONSTRAINT `fk_user_gantt_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user_gantt_row` FOREIGN KEY (`row_id`) REFERENCES `module_gantt_rows` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -------------------------------------------------------------
-- INSERT DATA for Module 4
-- -------------------------------------------------------------

-- Insert Pages
INSERT INTO `module_gantt_pages` (`id`, `module_id`, `page_number`, `title`) VALUES
(1, 'modulo-4', 1, 'Formato 1'),
(2, 'modulo-4', 2, 'Formato 2');

-- Insert Rows for Page 1
INSERT INTO `module_gantt_rows` (`page_id`, `activity_text`, `sort_order`) VALUES
(1, 'Actividad 1', 1),
(1, 'Actividad 2', 2),
(1, 'Actividad 3', 3),
(1, 'Actividad 4', 4),
(1, 'Actividad 5', 5);

-- Insert Rows for Page 2
INSERT INTO `module_gantt_rows` (`page_id`, `activity_text`, `sort_order`) VALUES
(2, 'Actividad A', 1),
(2, 'Actividad B', 2),
(2, 'Actividad C', 3);

-- -------------------------------------------------------------
-- 4. Table for User Gantt Data (JSON Blob implementation)
--    This supersedes the strictly relational approach for flexible
--    per-session format editing.
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_gantt_data` (
  `user_id` int(11) NOT NULL,
  `data` json DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_user_gantt_json_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
