// src/components/EmployeeTable.jsx
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import API from "../services/api";
import toast from "react-hot-toast";

export default function EmployeeTable({ employees, fetchEmployees }) {
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await API.delete(`/employees/${id}`);
        toast.success("Employee deleted!");
        fetchEmployees();
      } catch (err) {
        console.error(err);
        toast.error("Failed to delete employee");
      }
    }
  };

  return (
    <div className="overflow-x-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl border border-gray-100 p-2 sm:p-4">
      <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
        <thead className="bg-gradient-to-r from-blue-50 to-blue-100">
          <tr>
            <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-widest">Name</th>
            <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-widest">Email</th>
            <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-widest">Position</th>
            <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-widest">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="hover:bg-blue-50/60 transition duration-200 group"
            >
              <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base font-semibold text-gray-900">{emp.name}</td>
              <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base text-gray-600">{emp.email}</td>
              <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm sm:text-base text-gray-600">{emp.position}</td>
              <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap flex gap-2 items-center">
                <Link
                  to={`/edit/${emp.id}`}
                  className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  title="Edit"
                >
                  <FaEdit className="inline text-base sm:text-lg" />
                </Link>
                <button
                  onClick={() => handleDelete(emp.id)}
                  className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-100 text-red-700 hover:bg-red-600 hover:text-white shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                  title="Delete"
                >
                  <FaTrash className="inline text-base sm:text-lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
