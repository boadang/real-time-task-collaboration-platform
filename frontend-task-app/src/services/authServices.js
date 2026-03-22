// services/authServices.js

// Lời khuyên: Trong dự án thực tế, nên đưa URL này vào file môi trường (.env)
// Ví dụ: const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/auth';

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;
console.log(import.meta.env.API_URL);//undefined ?

const authServices = {
  /**
   * Đăng nhập người dùng
   */
  login: async (username, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Parse dữ liệu JSON từ server trả về
      const data = await response.json();
      console.log(data);

      // Kiểm tra HTTP status code (response.ok = true nếu status nằm trong 200-299)
      if (!response.ok) {
        // Ném ra thông báo lỗi chi tiết từ server (ví dụ: "Sai mật khẩu") 
        // hoặc lỗi mặc định nếu server không gửi kèm message
        throw new Error(data.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại.');
      }

      // Lưu trữ thông tin xác thực
      if (data.token) {
        localStorage.setItem('token', data.token);
        // Nếu API trả về cả thông tin user, bạn có thể lưu lại để hiển thị avatar/tên:
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data; 
    } catch (error) {
      console.error('Lỗi ở authServices.login:', error);
      throw error; // Quăng lỗi ra để component (Login.jsx) bắt được và hiển thị lên UI
    }
  },

  /**
   * Đăng ký người dùng mới
   */
  register: async (username, email, password) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Đăng ký thất bại. Tên đăng nhập hoặc email đã tồn tại.');
      }

      return data;
    } catch (error) {
      console.error('Lỗi ở authServices.register:', error);
      throw error;
    }
  },

  /**
   * Đăng xuất người dùng
   */
  logout: () => {
    // Xóa toàn bộ dữ liệu xác thực khỏi localStorage
    localStorage.removeItem('token');
    // localStorage.removeItem('user'); // Mở comment dòng này nếu bạn có lưu user
  },

  /**
   * Tiện ích: Kiểm tra trạng thái đăng nhập
   */
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
};

export default authServices;