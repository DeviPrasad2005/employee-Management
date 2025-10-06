import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Dashboard" },
    { path: "/add", name: "Add Employee" },
    { path: "/search", name: "Search Employees" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-tight">Employee Manager</h1>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2.5 rounded-lg text-base font-semibold transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  location.pathname === link.path
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-300 hover:bg-blue-100 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 mt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-base font-semibold transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  location.pathname === link.path
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
