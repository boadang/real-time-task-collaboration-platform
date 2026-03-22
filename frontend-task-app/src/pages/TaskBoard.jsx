import { 
  Plus, ChevronLeft, ChevronRight, Calendar as CalIcon, 
  Settings2, Users, Bell, Search, Info, Clock, CheckCircle2
} from 'lucide-react';
import { useState } from 'react';

export default function TaskBoard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeTask, setActiveTask] = useState(null); // Task đang được chọn để edit

  return (
    <div className="w-full h-[calc(100vh-140px)] flex gap-6 overflow-hidden animate-in fade-in duration-500">
      
      {/* --- CỘT TRÁI: MINI CALENDAR --- */}
      <aside className="w-72 hidden xl:flex flex-col gap-6 h-full">
        <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-slate-800 text-sm uppercase tracking-widest">Schedule</h3>
            <div className="flex gap-1">
              <button className="p-1.5 hover:bg-slate-50 rounded-lg"><ChevronLeft size={16}/></button>
              <button className="p-1.5 hover:bg-slate-50 rounded-lg"><ChevronRight size={16}/></button>
            </div>
          </div>
          
          {/* Giả lập Mini Calendar */}
          <div className="grid grid-cols-7 gap-y-2 text-center mb-4">
            {['S','M','T','W','T','F','S'].map(d => (
              <span key={d} className="text-[10px] font-black text-slate-400">{d}</span>
            ))}
            {Array.from({length: 31}).map((_, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedDate(new Date(2026, 2, i + 1))}
                className={`h-8 w-8 text-xs font-bold rounded-xl flex items-center justify-center transition-all
                  ${i + 1 === 22 ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'hover:bg-purple-50 text-slate-600'}
                  ${i + 1 === 25 ? 'border-b-2 border-purple-400' : ''} 
                `}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-6 border-t border-slate-50">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Shared with</h4>
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" src={`https://i.pravatar.cc/150?u=${i}`} alt="user"/>
                ))}
                <button className="w-8 h-8 rounded-full border-2 border-white bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">+</button>
             </div>
          </div>
        </div>

        {/* Shortcuts / Filters */}
        <div className="bg-slate-900 rounded-[2.5rem] p-6 flex-1 text-white overflow-hidden relative">
           <CalIcon size={120} className="absolute -right-8 -bottom-8 text-white/5 rotate-12" />
           <h3 className="font-bold mb-4 relative z-10">Personal Stats</h3>
           <div className="space-y-4 relative z-10">
              <div className="bg-white/10 p-4 rounded-2xl">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Tasks Today</p>
                <p className="text-2xl font-black">12</p>
              </div>
           </div>
        </div>
      </aside>

      {/* --- PHẦN GIỮA: MAIN KANBAN/DAY VIEW --- */}
      <main className="flex-1 flex flex-col gap-6 overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em] mb-1">Timeline View</p>
            <h2 className="text-2xl font-black text-slate-900">
              {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </h2>
          </div>
          <div className="flex gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input className="pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-purple-200 w-64" placeholder="Search tasks..." />
            </div>
            <button className="p-3 bg-slate-900 text-white rounded-2xl hover:bg-purple-600 transition-all shadow-lg">
              <Plus size={20} />
            </button>
          </div>
        </header>

        {/* Kanban Columns (giống code trước nhưng gọn hơn để đủ chỗ sidebar) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto pb-4 custom-scrollbar">
          <Column title="To Do" tasks={[]} color="bg-slate-200" />
          <Column title="In Progress" tasks={[]} color="bg-purple-500" />
          <Column title="Done" tasks={[]} color="bg-emerald-500" />
        </div>
      </main>

      {/* --- CỘT PHẢI: TASK SETTINGS SIDEBAR --- */}
      <aside className={`w-80 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 flex flex-col gap-8 transition-all duration-500 ${showSidebar ? 'mr-0' : '-mr-[400px]'}`}>
        <div className="flex justify-between items-center">
          <h3 className="font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
            <Settings2 size={18} className="text-purple-600" /> Settings
          </h3>
          <button onClick={() => setShowSidebar(false)} className="p-2 hover:bg-slate-50 rounded-xl text-slate-400"><Plus size={20} className="rotate-45"/></button>
        </div>

        <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-1">
          {/* Form Create/Edit Task */}
          <div className="space-y-4">
             <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Task Title</label>
                <input className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-800 outline-none focus:border-purple-200" placeholder="E.g. Daily Meeting" />
             </div>

             <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Assignee</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">A</div>
                   <span className="text-xs font-bold text-slate-700">Admin (You)</span>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Start</label>
                   <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl text-xs font-bold text-slate-600"><Clock size={14}/> 09:00</div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">End</label>
                   <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl text-xs font-bold text-slate-600"><Clock size={14}/> 10:00</div>
                </div>
             </div>

             <div className="space-y-2 pt-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Visibility</label>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 p-2">
                   <Users size={14} /> Shared with Team
                </div>
             </div>
          </div>
        </div>

        <button className="w-full py-4 bg-purple-600 text-white font-black rounded-2xl shadow-lg shadow-purple-100 flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all uppercase text-xs tracking-widest">
           <CheckCircle2 size={18} /> Sync Schedule
        </button>
      </aside>
    </div>
  );
}

function Column({ title, color }) {
  return (
    <div className="bg-slate-50/50 rounded-[2.5rem] border border-slate-100 flex flex-col h-full">
      <div className="p-6 flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${color}`}></div>
        <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">{title}</h3>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Task cards go here */}
      </div>
    </div>
  );
}