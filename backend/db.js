// backend/db.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const openDb = async () => {
  return open({
    filename: "./database/employees.db",
    driver: sqlite3.Database,
  });
};

export const initDB = async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS employees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      position TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log("🗄️  Database initialized");
};
