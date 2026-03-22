import DialogNotification from "../components/DialogNotification";

const API = `${import.meta.env.VITE_API_URL}/dashboard`;

export const dashboardService = {
  getSummary: async () => {
    try {
      // Luôn lấy token mới nhất từ localStorage
      const token = localStorage.getItem('token');
      
      const res = await fetch(`${API}/summary`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem('token');
          throw new Error("401"); // Ném mã lỗi để UI tự chuyển về Login
        }
        throw new Error('Không thể tải dữ liệu Dashboard');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
};