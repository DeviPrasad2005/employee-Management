import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: "/", name: "Dashboard" },
    { path: "/add", name: "Add Employee" },
    // Future: Reports, Settings, etc.
  ];

  return (
    <aside className="hidden md:flex w-64 h-screen bg-gradient-to-b from-blue-100 to-blue-200 text-blue-900 flex-col p-4 sm:p-8 shadow-2xl border-r border-gray-100">
      <h1 className="text-xl sm:text-2xl font-extrabold mb-6 sm:mb-10 text-center tracking-tight text-blue-700">Employee Manager</h1>
      <nav className="flex flex-col gap-3 sm:gap-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold text-base transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              location.pathname === link.path
                ? "bg-blue-600 text-white shadow-md"
                : "hover:bg-blue-200 hover:text-blue-900"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
