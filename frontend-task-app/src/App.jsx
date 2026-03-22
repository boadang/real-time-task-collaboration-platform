// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import MeetingRoom from './pages/MeetingRoom';
import UserProfile from './pages/UserProfile';
import TaskBoard from './pages/TaskBoard';
import ProtectedRoute from './components/ProtectedRoute';
import { LoungeRoom } from './pages/LoungeRoom';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path='/lounge' element={<LoungeRoom />} />
            <Route path="/taskboard" element={<TaskBoard />} />
            <Route path="/meeting" element={<MeetingRoom />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;