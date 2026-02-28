import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-indigo-400 tracking-wide">DSA Todo</h1>
        <span className="text-xs text-gray-400 hidden sm:block">Striver's A2Z Sheet Tracker</span>
      </div>
      <div className="flex gap-4 text-sm font-medium">
        <Link
          to="/"
          className={`px-4 py-2 rounded-lg transition-colors ${
            location.pathname === "/"
              ? "bg-indigo-600 text-white"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          Home
        </Link>
        <Link
          to="/todo"
          className={`px-4 py-2 rounded-lg transition-colors ${
            location.pathname === "/todo"
              ? "bg-indigo-600 text-white"
              : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          DSA Sheet
        </Link>
      </div>
    </nav>
  );
}