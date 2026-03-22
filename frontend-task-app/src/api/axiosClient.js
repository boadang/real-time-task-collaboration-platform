// src/api/axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000', // Địa chỉ Backend của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: Tự động đính kèm Token vào mỗi request sau khi đăng nhập thành công
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;