// src/components/Header.jsx
import { Bell, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo & Tiêu đề */}
        <div>
          <Link to="/dashboard">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Task <span className="text-purple-600">Collab</span>
            </h1>
          </Link>
          <p className="text-slate-500 text-xs md:text-sm font-medium">Real-time team workspace</p>
        </div>

        {/* Cụm nút Action */}
        <div className="flex gap-3">
          <button className="p-2.5 rounded-xl bg-slate-50 shadow-sm border border-slate-200 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all text-slate-600">
            <Bell size={20} />
          </button>
          <Link to="/profile" className="p-2.5 rounded-xl bg-slate-50 shadow-sm border border-slate-200 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all text-slate-600">
            <UserCircle size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}