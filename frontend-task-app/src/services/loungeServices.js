// Thay đổi URL tùy vào cấu hình của bạn
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const loungeService = {
  // Hàm tạo phòng mới
  createRoom: async (roomData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/lounge/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(roomData)
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Lỗi tạo phòng');
    return data;
  },

  // Hàm xác thực ID phòng khi Join
  verifyRoom: async (roomId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/lounge/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ roomId })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Phòng không tồn tại');
    return data;
  }
};