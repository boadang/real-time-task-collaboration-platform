import { User, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import authServices from '../services/authServices';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      console.log(username,email,password);
      const res = await authServices.register(username, email, password);
      console.log("Registration successful:", res);
      navigate('/login');
    }catch(e) {
      setError("Đăng ký thất bại. Vui lòng thử lại.");
    }
  }

  useEffect(() => {
    // Kiểm tra nếu đã đăng nhập (ví dụ: kiểm tra token trong localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      // Nếu đã có token, chuyển hướng đến dashboard
      navigate('/dashboard');
    }
  }, [navigate]);
    

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-[2rem] shadow-sm max-w-md w-full border border-slate-100 relative">
        <Link to="/login" className="absolute top-6 left-6 text-slate-400 hover:text-slate-700 transition-colors">
          <ArrowLeft size={24} />
        </Link>
        
        <h2 className="text-2xl font-bold text-center mb-2 mt-4">Tạo tài khoản mới</h2>
        <p className="text-slate-500 text-center mb-8">Tham gia hệ thống quản lý công việc</p>
        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Tên đăng nhập" 
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="password" 
              placeholder="Mật khẩu" 
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 mt-2" onClick={handleRegister}>
            Đăng ký ngay
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-slate-500">
          Đã có tài khoản? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}