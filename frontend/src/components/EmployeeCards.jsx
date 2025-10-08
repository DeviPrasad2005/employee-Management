// src/components/EmployeeCards.jsx
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import API from "../services/api";
import { motion } from "framer-motion"; // ← Import motion

export default function EmployeeCards({ employees, fetchEmployees, onEdit }) {
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
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {employees.map((emp, index) => (
        <motion.div
          key={emp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="glass-effect p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-2xl card-hover flex flex-col justify-between min-h-[240px] sm:min-h-[280px] group"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {emp.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">{emp.name}</h2>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{emp.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 border border-cyan-200">
                  {emp.position}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 sm:gap-3 mt-6">
            <button
              onClick={() => onEdit(emp)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base transform hover:scale-105"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={() => handleDelete(emp.id)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-sm sm:text-base transform hover:scale-105"
            >
              <FaTrash /> Delete
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
