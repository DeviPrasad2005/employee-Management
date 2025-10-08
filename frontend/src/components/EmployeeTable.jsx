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
    <div className="overflow-x-auto glass-effect rounded-2xl p-2 sm:p-6 shadow-2xl">
      <table className="min-w-full divide-y divide-indigo-100 text-sm sm:text-base">
        <thead className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
          <tr>
            <th className="px-3 py-4 sm:px-6 sm:py-5 text-left text-xs sm:text-sm font-bold text-indigo-900 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Name
              </div>
            </th>
            <th className="px-3 py-4 sm:px-6 sm:py-5 text-left text-xs sm:text-sm font-bold text-indigo-900 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </div>
            </th>
            <th className="px-3 py-4 sm:px-6 sm:py-5 text-left text-xs sm:text-sm font-bold text-indigo-900 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Position
              </div>
            </th>
            <th className="px-3 py-4 sm:px-6 sm:py-5 text-left text-xs sm:text-sm font-bold text-indigo-900 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white/50 divide-y divide-indigo-50">
          {employees.map((emp, index) => (
            <tr
              key={emp.id}
              className="hover:bg-gradient-to-r hover:from-indigo-50/80 hover:to-purple-50/80 transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <td className="px-3 py-4 sm:px-6 sm:py-5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
                    {emp.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-900">{emp.name}</span>
                </div>
              </td>
              <td className="px-3 py-4 sm:px-6 sm:py-5 whitespace-nowrap text-sm sm:text-base text-gray-600">{emp.email}</td>
              <td className="px-3 py-4 sm:px-6 sm:py-5 whitespace-nowrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 border border-cyan-200">
                  {emp.position}
                </span>
              </td>
              <td className="px-3 py-4 sm:px-6 sm:py-5 whitespace-nowrap">
                <div className="flex gap-2 items-center">
                  <Link
                    to={`/edit/${emp.id}`}
                    className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 hover:from-indigo-600 hover:to-purple-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transform hover:scale-110"
                    title="Edit"
                  >
                    <FaEdit className="text-base sm:text-lg" />
                  </Link>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-red-100 to-pink-100 text-red-700 hover:from-red-600 hover:to-pink-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 transform hover:scale-110"
                    title="Delete"
                  >
                    <FaTrash className="text-base sm:text-lg" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
