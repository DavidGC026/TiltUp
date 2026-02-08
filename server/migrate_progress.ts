import { db, poolConnection } from "./db";
import { sql } from "drizzle-orm";

async function main() {
    console.log("Migration started...");

    try {
        // 1. Create users table if not exists (it should exist, but just in case or for consistency)
        // Actually, users table already exists in the dump, so we might skip or use IF NOT EXISTS
        // But we defined it in Drizzle schema now.

        // 2. Create module_progress table
        console.log("Creating module_progress table...");
        await db.execute(sql`
      CREATE TABLE IF NOT EXISTS module_progress (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        module_id VARCHAR(50) NOT NULL,
        progress INT NOT NULL DEFAULT 0,
        completed BOOLEAN NOT NULL DEFAULT 0,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE,
        UNIQUE KEY unique_user_module (user_id, module_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

        // 3. Create section_progress table
        console.log("Creating section_progress table...");
        await db.execute(sql`
      CREATE TABLE IF NOT EXISTS section_progress (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        section_id VARCHAR(50) NOT NULL,
        completed BOOLEAN NOT NULL DEFAULT 0,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE,
        UNIQUE KEY unique_user_section (user_id, section_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

        console.log("Migration completed successfully.");
    } catch (error) {
        console.error("Migration failed:", error);
    } finally {
        await poolConnection.end();
    }
}

main();
