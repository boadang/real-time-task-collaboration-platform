// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import authServices from '../services/authServices';

export default function ProtectedRoute() {
  const isAuth = authServices.isAuthenticated();

  if (!isAuth) {
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
}