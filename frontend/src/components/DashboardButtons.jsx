// src/components/DashboardButtons.jsx
import { motion } from "framer-motion";

export default function DashboardButtons({ buttons }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 mb-8">
      {buttons.map((btn, index) => (
        <motion.button
          key={btn.label}
          onClick={btn.onClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15, type: "spring", stiffness: 150 }}
          className={`px-8 py-4 text-lg font-bold rounded-xl shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400
            ${btn.label.includes("Add") ? "bg-green-600 hover:bg-green-700 text-white" : ""}
            ${btn.label.includes("View") ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
            ${btn.label.includes("Search") ? "bg-yellow-500 hover:bg-yellow-600 text-white" : ""}
          `}
        >
          {btn.label}
        </motion.button>
      ))}
    </div>
  );
}
