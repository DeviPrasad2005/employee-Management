// src/components/EmployeeForm.jsx
import { useState, useEffect } from "react";

export default function EmployeeForm({ initialData = { name: "", email: "", position: "" }, onSubmit }) {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm(initialData);
  }, [initialData]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.position.trim()) newErrors.position = "Position is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 glass-effect p-6 sm:p-10 rounded-3xl shadow-2xl max-w-lg w-full mx-auto">
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm sm:text-base font-bold text-gray-800 mb-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full px-4 py-3 sm:px-5 sm:py-4 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-base bg-white/70 hover:bg-white"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors.name}
        </p>}
      </div>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm sm:text-base font-bold text-gray-800 mb-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@company.com"
          className="w-full px-4 py-3 sm:px-5 sm:py-4 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-base bg-white/70 hover:bg-white"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors.email}
        </p>}
      </div>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm sm:text-base font-bold text-gray-800 mb-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Position
        </label>
        <input
          type="text"
          name="position"
          value={form.position}
          onChange={handleChange}
          placeholder="Job title"
          className="w-full px-4 py-3 sm:px-5 sm:py-4 border-2 border-indigo-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-base bg-white/70 hover:bg-white"
        />
        {errors.position && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors.position}
        </p>}
      </div>
      <button 
        type="submit" 
        className="w-full gradient-primary text-white py-3 sm:py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-bold text-base sm:text-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 mt-2"
      >
        Submit
      </button>
    </form>
  );
}
