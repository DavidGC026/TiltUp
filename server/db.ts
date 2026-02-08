import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "@shared/schema";

export const poolConnection = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || "Imc590923cz4#",
    database: process.env.DB_NAME || "tiltuplearn",
});

export const db = drizzle(poolConnection, { schema, mode: 'default' });
