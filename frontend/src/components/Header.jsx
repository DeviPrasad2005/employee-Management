// src/components/Header.jsx
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-white shadow-md border-b border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <h1 className="text-xl sm:text-3xl font-extrabold text-blue-700 tracking-tight text-center sm:text-left">Employee Management System</h1>
      <nav className="flex gap-4 sm:gap-8">
        <Link
          to="/"
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-700 hover:bg-blue-100 hover:text-blue-900"
        >
          Dashboard
        </Link>
        <Link
          to="/add"
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-700 hover:bg-blue-100 hover:text-blue-900"
        >
          Add Employee
        </Link>
      </nav>
      <Toaster position="top-right" />
    </header>
  );
}
