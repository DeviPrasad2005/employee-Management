// src/pages/SearchEmployee.jsx
import { useState, useEffect } from "react";
import API from "../services/api";
import EmployeeTable from "../components/EmployeeTable";
import SearchBar from "../components/SearchBar";
import toast from "react-hot-toast";

export default function SearchEmployee() {
  const [employees, setEmployees] = useState([]);
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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Search Employees</h1>

      <div className="max-w-md">
        <SearchBar onSearch={handleSearch} />
      </div>

      {filteredEmployees.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No employees found</p>
          <p className="text-gray-400 mt-2">Try adjusting your search criteria.</p>
        </div>
      ) : (
        <EmployeeTable
          employees={filteredEmployees}
          fetchEmployees={fetchEmployees}
        />
      )}
    </div>
  );
}
