// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-purple-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500 font-medium">
          © {currentYear} Task Collab. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500 font-medium">
          <a href="#" className="hover:text-purple-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-purple-600 transition">Terms of Service</a>
          <a href="#" className="hover:text-purple-600 transition">Help Center</a>
        </div>
      </div>
    </footer>
  );
}