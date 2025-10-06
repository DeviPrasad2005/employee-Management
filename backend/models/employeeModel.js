
// backend/models/employeeModel.js
import { openDb } from "../db.js";

export const EmployeeModel = {
  async findAll() {
    const db = await openDb();
    return db.all("SELECT * FROM employees ORDER BY id DESC");
  },

  async findById(id) {
    const db = await openDb();
    return db.get("SELECT * FROM employees WHERE id = ?", [id]);
  },

  async create(data) {
    const db = await openDb();
    const { name, email, position } = data;
    const result = await db.run(
      "INSERT INTO employees (name, email, position) VALUES (?, ?, ?)",
      [name, email, position]
    );
    return { id: result.lastID, ...data };
  },

  async update(id, data) {
    const db = await openDb();
    const { name, email, position } = data;
    await db.run(
      "UPDATE employees SET name=?, email=?, position=? WHERE id=?",
      [name, email, position, id]
    );
    return { id, ...data };
  },

  async delete(id) {
    const db = await openDb();
    await db.run("DELETE FROM employees WHERE id=?", [id]);
    return { message: "Employee deleted successfully" };
  },
};
