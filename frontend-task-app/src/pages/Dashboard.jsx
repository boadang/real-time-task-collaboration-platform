import { CheckCircle, Video, Sparkles, Clock, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dashboardService } from "../services/dashboardServices";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return navigate('/login');

        const data = await dashboardService.getSummary();
        setDashboardData(data);
      } catch (err) {
        if (err.message === "401") navigate('/login');
        else setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center text-purple-600 space-y-4 min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="font-medium animate-pulse">Organizing your workspace...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-red-500 space-y-4 min-h-[60vh] bg-red-50/50 rounded-3xl border border-red-100 p-12">
        <AlertCircle size={48} />
        <div className="text-center">
          <p className="font-bold text-xl">System Error</p>
          <p className="text-red-400">{error}</p>
        </div>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-2 bg-white text-red-600 rounded-xl shadow-sm border border-red-200 hover:bg-red-50 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* BENTO GRID SYSTEM 
        - md:h-[calc(100vh-180px)]: Đảm bảo grid chiếm đủ không gian màn hình trừ đi header/footer
        - md:grid-rows-3: Ép 3 hàng có chiều cao bằng nhau (1fr mỗi hàng)
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 md:h-[calc(100vh-180px)] min-h-[700px]">

        {/* 1. HERO BOX (Row 1, Col 1-2) */}
        <div className="md:col-span-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[2.5rem] p-8 shadow-lg shadow-purple-200/50 relative overflow-hidden group flex flex-col justify-center">
          <Sparkles size={160} className="absolute -right-8 -top-8 text-white opacity-10 group-hover:rotate-12 transition-transform duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Hi, {dashboardData?.user?.username || 'User'}!
            </h2>
            <p className="text-purple-100 text-lg max-w-md leading-relaxed">
              Your productivity is peaking! You've finished 
              <span className="font-bold text-yellow-300 px-2 underline decoration-2 underline-offset-4">
                {dashboardData?.stats?.completedTasks || 0} tasks
              </span> 
              successfully this week.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/taskboard" className="px-6 py-3 bg-white text-purple-700 font-bold rounded-2xl hover:scale-105 transition-transform shadow-md">
                My Tasks
              </Link>
            </div>
          </div>
        </div>

        {/* 2. MEETING ROOM (Row 1, Col 3) */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all group">
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <Video size={28} />
            </div>
            {dashboardData?.activeMeeting && (
               <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> LIVE
               </span>
            )}
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-xl">Lounge</h3>
            <p className="text-sm text-slate-400 mt-1">Quick sync with team</p>
          </div>
          <Link to="/lounge" className="w-full py-3 bg-slate-900 text-white text-center font-bold rounded-2xl hover:bg-slate-800 transition-colors">
            Join Now
          </Link>
        </div>

        {/* 3. NEXT DEADLINE (Row 1, Col 4) */}
        <div className="bg-amber-300 rounded-[2.5rem] p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-amber-400 rounded-full opacity-40 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          <div className="w-14 h-14 rounded-2xl bg-amber-400/50 flex items-center justify-center text-amber-900 relative z-10">
            <Clock size={28} />
          </div>
          <div className="relative z-10">
            <h3 className="font-bold text-amber-900 text-xl mb-1">Deadline</h3>
            <p className="text-sm text-amber-800 font-bold line-clamp-2 leading-snug">
              {dashboardData?.nextDeadline?.title || 'No upcoming deadlines'}
            </p>
            {dashboardData?.nextDeadline?.date && (
               <p className="text-[11px] mt-2 font-black uppercase tracking-tighter text-amber-900/60">
                 Due: {dashboardData.nextDeadline.date}
               </p>
            )}
          </div>
        </div>

        {/* 4. ACTIVE TASKS (Row 2-3, Col 1-3) */}
        <div className="md:col-span-3 md:row-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <CheckCircle size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-2xl tracking-tight">Active Missions</h3>
            </div>
            <Link to="/tasks" className="text-sm font-bold text-indigo-600 hover:underline px-4 py-2 bg-indigo-50 rounded-xl">View Schedule</Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1 overflow-hidden">
            {dashboardData?.activeTasks?.length > 0 ? (
              dashboardData.activeTasks.slice(0, 6).map((task) => (
                <div key={task.id} className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:border-indigo-200 hover:bg-white hover:shadow-sm transition-all cursor-pointer group/task">
                  <h4 className="font-bold text-slate-700 group-hover:text-indigo-700 transition-colors line-clamp-2">
                    {task.title}
                  </h4>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="px-3 py-1 bg-white text-[10px] font-black rounded-lg shadow-sm border border-slate-100 text-slate-500 uppercase tracking-widest">
                      {task.status}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-600">
                      {dashboardData.user?.username?.charAt(0).toUpperCase()}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center text-slate-400 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
                <Sparkles size={32} className="mb-2 opacity-20" />
                <p className="font-medium">Everything is done! Relax time.</p>
              </div>
            )}
          </div>
        </div>

        {/* 5. RECENT ACTIVITY (Row 2-3, Col 4) */}
        <div className="md:row-span-2 bg-slate-900 rounded-[2.5rem] p-6 shadow-xl flex flex-col overflow-hidden">
          <h3 className="font-bold text-white mb-6 flex gap-3 items-center text-lg">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            Live Activity
          </h3>
          
          <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
            {dashboardData?.activeTasks?.length > 0 ? (
              dashboardData.activeTasks.map((task) => (
                <div key={task.id} className="group cursor-default">
                  <p className="text-xs text-slate-400 mb-1 font-medium italic">Just now</p>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-slate-100 text-xs line-clamp-2 leading-relaxed">
                      {task.title}
                    </h4>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex items-center justify-center text-slate-600 text-sm italic">
                Waiting for updates...
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}