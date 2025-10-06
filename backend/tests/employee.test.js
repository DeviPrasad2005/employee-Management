// backend/tests/employee.test.js
import request from "supertest";
import express from "express";
import employeeRoutes from "../routes/employeeRoutes.js";
import { initDB } from "../db.js";

const app = express();
app.use(express.json());
app.use("/api/employees", employeeRoutes);

beforeAll(async () => {
  await initDB();
});

describe("Employee API CRUD", () => {
  let createdId;

  it("should create a new employee", async () => {
    const res = await request(app)
      .post("/api/employees")
      .send({ name: "Test User", email: "testuser@example.com", position: "Tester" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    createdId = res.body.id;
  });

  it("should get all employees", async () => {
    const res = await request(app).get("/api/employees");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should get an employee by id", async () => {
    const res = await request(app).get(`/api/employees/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", createdId);
  });

  it("should update an employee", async () => {
    const res = await request(app)
      .put(`/api/employees/${createdId}`)
      .send({ name: "Updated User", email: "testuser@example.com", position: "Lead Tester" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name", "Updated User");
  });

  it("should delete an employee", async () => {
    const res = await request(app).delete(`/api/employees/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
  });
});
