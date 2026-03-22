// src/layouts/SharedLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Layout() {
  return (
    // Sử dụng flex-col và min-h-screen để Header dính trên, Footer dính dưới
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      
      {/* 1. Header luôn ở trên cùng */}
      <Header />

      {/* 2. Vùng nội dung chính (Tự co giãn đẩy Footer xuống dưới) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
        <Outlet /> 
      </main>

      {/* 3. Footer luôn ở dưới cùng */}
      <Footer />
      
    </div>
  );
}