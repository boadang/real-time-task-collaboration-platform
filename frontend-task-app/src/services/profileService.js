// src/services/profileService.js

// Vite dùng import.meta.env, thay vì process.env
const API_URL = `${import.meta.env.VITE_API_URL}/profile`; 

export const profileService = {
    getData: async () => {
        try {
            // LUÔN lấy token mới nhất mỗi khi gọi hàm
            const token = localStorage.getItem('token'); 
            
            const res = await fetch(`${API_URL}/get-data`, { // Đảm bảo URL khớp BE
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                }
            });

            if (!res.ok) {
                if (res.status === 401) {
                    localStorage.removeItem('token'); // Cú pháp chuẩn
                    // Ném lỗi 401 ra ngoài để UI bắt được và tự chuyển trang
                    throw new Error("401");
                }
                throw new Error('Can not get the information!');
            }

            const data = await res.json();
            return data;
        } catch (e) {
            // Quăng lỗi ra cho file Component bắt
            throw e; 
        }
    }
}