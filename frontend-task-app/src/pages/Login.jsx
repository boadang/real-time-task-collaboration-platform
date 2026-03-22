import { User, Lock } from 'lucide-react';
import { useState } from 'react';
// Gom chung import cho gọn
import { Link, useNavigate } from 'react-router-dom';
import authServices from '../services/authServices';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handLogic = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await authServices.login(username, password);
      console.log("Login successful:", response);
      
      // Chuyển hướng và truyền đúng dữ liệu backend trả về (userId, username)
      navigate('/', {
          state: { 
            user: { id: response.userId, username: response.username }, 
            token: response.token 
          }
      });
    } catch(e) {
      // Lấy câu thông báo lỗi xịn xò từ authServices.js hiển thị lên UI
      setError(e.message || "Đăng nhập thất bại. Vui lòng thử lại.");
    } finally {
      // Nhớ tắt loading dù thành công hay thất bại
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full border border-slate-100">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-slate-500 text-center mb-8">Log in to manage your tasks</p>

        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
        
        {/* Chỉ gắn sự kiện submit ở Form */}
        <form className="space-y-4" onSubmit={handLogic}>
          <div className="relative">
            <User className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-slate-400" size={20} />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {/* Xóa onClick ở đây, thêm hiệu ứng mờ nút khi đang loading */}
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          >
            {loading ? 'Đang xử lý...' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-slate-500">
          Don't have an account? <Link to="/register" className="text-blue-600 cursor-pointer hover:underline">Register right here</Link>
        </p>
      </div>
    </div>
  );
}