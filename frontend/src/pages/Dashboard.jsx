// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeCards from "../components/EmployeeCards";
import SearchBar from "../components/SearchBar";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [view, setView] = useState("table"); // table or cards
  const [searchQuery, setSearchQuery] = useState("");

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    // Navigate to edit page
    window.location.href = `/edit/${employee.id}`;
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setView(view === "table" ? "cards" : "table")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
          >
            {view === "table" ? "Card View" : "Table View"}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-md">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      {/* Employees */}
      {filteredEmployees.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No employees found</p>
          <p className="text-gray-400 mt-2">Try adjusting your search or add a new employee.</p>
        </div>
      ) : view === "table" ? (
        <EmployeeTable employees={filteredEmployees} fetchEmployees={fetchEmployees} />
      ) : (
        <EmployeeCards employees={filteredEmployees} fetchEmployees={fetchEmployees} onEdit={handleEdit} />
      )}
    </div>
  );
}
