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
          className="bg-gradient-to-br from-white to-blue-50 p-5 sm:p-8 rounded-2xl shadow-2xl hover:shadow-2xl border border-gray-100 transition duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[260px]"
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-md">
              {emp.name.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-lg sm:text-2xl font-bold ml-4 sm:ml-5 text-gray-900 tracking-tight">{emp.name}</h2>
          </div>
          <p className="text-gray-700 mb-1 sm:mb-2 flex items-center text-sm sm:text-base">
            <span className="font-semibold mr-1">Email:</span> {emp.email}
          </p>
          <p className="text-gray-700 mb-4 sm:mb-6 flex items-center text-sm sm:text-base">
            <span className="font-semibold mr-1">Position:</span> {emp.position}
          </p>
          <div className="flex gap-2 sm:gap-3 mt-auto">
            <button
              onClick={() => onEdit(emp)}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={() => handleDelete(emp.id)}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 text-sm sm:text-base"
            >
              <FaTrash /> Delete
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
