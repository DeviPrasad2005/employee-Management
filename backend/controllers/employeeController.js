// backend/controllers/employeeController.js
import { EmployeeModel } from "../models/employeeModel.js";

export const getEmployees = async (req, res, next) => {
  try {
    const employees = await EmployeeModel.findAll();
    res.json(employees);
  } catch (err) {
    next(err);
  }
};

export const getEmployeeById = async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: "Not found" });
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

export const createEmployee = async (req, res, next) => {
  try {
    const { name, email, position } = req.body;
    if (!name || !email || !position)
      return res.status(400).json({ message: "All fields are required" });

    const employee = await EmployeeModel.create({ name, email, position });
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

export const updateEmployee = async (req, res, next) => {
  try {
    const { name, email, position } = req.body;
    const { id } = req.params;
    const employee = await EmployeeModel.update(id, { name, email, position });
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    const result = await EmployeeModel.delete(req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
