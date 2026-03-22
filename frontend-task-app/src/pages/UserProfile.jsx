import { Mail, Shield, Award, Activity, User as UserIcon, Lock, Save, Camera, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileService } from "../services/profileService";
import DialogNotification from "../components/DialogNotification";

export default function UserProfile() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // State cho việc chỉnh sửa
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ username: "", currentPassword: "", newPassword: "" });

  const [dialog, setDialog] = useState({ isOpen: false, title: "", message: "", type: "error" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return navigate('/login');

        const res = await profileService.getData();
        setProfileData(res);
        setEditForm((prev) => ({ ...prev, username: res.username }));
        setLoading(false);
      } catch (e) {
        setLoading(false);
        if (e.message === "401") navigate('/login');
        else setDialog({ isOpen: true, title: "Error", message: "Could not load profile", type: "error" });
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // Logic gọi API update profile ở đây (profileService.update...)
    setDialog({ isOpen: true, title: "Success", message: "Profile updated successfully!", type: "success" });
    setIsEditing(false);
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto animate-in fade-in duration-700">
      <DialogNotification 
        isOpen={dialog.isOpen}
        onClose={() => setDialog({ ...dialog, isOpen: false })}
        title={dialog.title}
        message={dialog.message}
        type={dialog.type}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: AVATAR & BASIC INFO (4/12) */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-5xl font-black text-white shadow-xl shadow-purple-200">
                {profileData?.username?.charAt(0).toUpperCase()}
              </div>
              <button className="absolute -bottom-2 -right-2 p-3 bg-white rounded-2xl shadow-md border border-slate-100 text-purple-600 hover:scale-110 transition-transform">
                <Camera size={18} />
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{profileData?.username}</h2>
              <p className="text-slate-400 font-medium flex items-center gap-2 justify-center mt-1">
                <Mail size={14} /> {profileData?.email}
              </p>
            </div>

            <div className="w-full grid grid-cols-2 gap-3 mt-8">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tasks</p>
                <p className="text-xl font-bold text-slate-800">{profileData?.tasks_tasks_assigned_toTousers?.length || 0}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Boards</p>
                <p className="text-xl font-bold text-slate-800">{profileData?.boards?.length || 0}</p>
              </div>
            </div>
          </div>

          {/* BADGE CARD */}
          <div className="bg-amber-300 rounded-[2.5rem] p-8 flex items-center gap-6 relative overflow-hidden group">
            <Award size={80} className="absolute -right-4 -bottom-4 text-amber-400 opacity-50 group-hover:rotate-12 transition-transform" />
            <div className="relative z-10">
              <p className="text-amber-900 font-black text-xs uppercase tracking-widest mb-1">Current Rank</p>
              <h3 className="text-2xl font-black text-amber-950">Elite Member</h3>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SETTINGS & FORMS (8/12) */}
        <div className="md:col-span-8 flex flex-col gap-6">
          
          {/* ACCOUNT SETTINGS FORM */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-10">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Account Security</h3>
              </div>
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-purple-600 transition-colors"
                >
                  EDIT PROFILE
                </button>
              )}
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Username</label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      disabled={!isEditing}
                      type="text"
                      value={editForm.username}
                      onChange={(e) => setEditForm({...editForm, username: e.target.value})}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-purple-200 outline-none transition-all disabled:opacity-60 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      disabled
                      type="email"
                      value={profileData?.email}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-100 border border-slate-100 rounded-2xl cursor-not-allowed opacity-60 font-medium"
                    />
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="pt-6 border-t border-slate-50 animate-in slide-in-from-top-4">
                  <h4 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
                    <Lock size={16} className="text-purple-500" /> Change Password
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      onChange={(e) => setEditForm({...editForm, currentPassword: e.target.value})}
                    />
                    <input 
                      type="password"
                      placeholder="New Password"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      onChange={(e) => setEditForm({...editForm, newPassword: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-100"
                  >
                    <Save size={18} /> SAVE CHANGES
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-4 bg-slate-100 text-slate-500 font-black rounded-2xl hover:bg-slate-200 transition-all"
                  >
                    CANCEL
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* ACTIVITY CARD */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center text-purple-400">
                <Activity size={32} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">Activity Status</h3>
                <p className="text-slate-400 text-sm">You are doing great this week!</p>
              </div>
            </div>
            <div className="flex gap-4">
               <div className="text-center px-6 border-r border-white/10">
                  <p className="text-white text-2xl font-black">24</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Days Streak</p>
               </div>
               <div className="text-center px-6">
                  <p className="text-purple-400 text-2xl font-black">92%</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Efficiency</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}