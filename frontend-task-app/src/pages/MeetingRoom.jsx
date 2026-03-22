import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  MonitorUp,
  PhoneOff,
  Users,
  MessageSquare,
  User,
  MoreVertical,
  CircleDot
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MeetingRoom() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="w-full h-[calc(100vh-180px)] min-h-[650px] flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-500">
      
      {/* 1. HEADER: Thông tin cuộc họp (Bento Style) */}
      <header className="flex justify-between items-center bg-white/80 backdrop-blur-md rounded-[2rem] border border-purple-100 shadow-sm p-5 px-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
            <Video size={24} />
          </div>
          <div>
            <h1 className="font-black text-slate-900 text-xl tracking-tight">
              Sprint Planning Meeting
            </h1>
            <div className="flex items-center gap-3 mt-0.5">
               <span className="flex items-center gap-1.5 text-[10px] font-black text-red-500 bg-red-50 px-2 py-0.5 rounded-lg border border-red-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  <CircleDot size={12} className="animate-pulse" /> {/* Dùng CircleDot ở đây */}
                    REC
               </span>
               <p className="text-xs font-bold text-slate-400">01:23:45</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50 text-slate-400 hover:text-purple-600 transition-all border border-slate-100 hover:border-purple-100">
            <Users size={20} />
          </button>
          <button className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50 text-slate-400 hover:text-purple-600 transition-all border border-slate-100 hover:border-purple-100 relative">
            <MessageSquare size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-3.5 rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 transition-all border border-slate-100">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {/* 2. VIDEO GRID SYSTEM */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 overflow-hidden">
        
        {/* MAIN SPEAKER (3/4 Width) */}
        <div className="lg:col-span-3 bg-slate-900 rounded-[2.5rem] border-4 border-white shadow-2xl shadow-purple-200/50 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-purple-600/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
              <MonitorUp size={14} />
              DEV A – PRESENTING
            </div>
          </div>
          
          {/* Giả lập Video Content */}
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="w-32 h-32 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <User size={64} className="text-slate-600" />
            </div>
            <p className="mt-4 text-slate-500 font-bold tracking-widest text-[10px] uppercase">Waiting for screen share...</p>
          </div>

          {/* Label tên dưới góc */}
          <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10 text-white text-xs font-bold">
            Frontend Lead (Bao)
          </div>
        </div>

        {/* SIDEBAR CAMERAS (1/4 Width) */}
        <div className="flex flex-col gap-6">
          {/* YOUR CAMERA */}
          <div className="flex-1 bg-slate-800 rounded-[2rem] border-4 border-white shadow-lg flex items-center justify-center relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10 text-[10px] bg-purple-500 text-white font-black px-3 py-1 rounded-lg">
              YOU
            </div>
            {isVideoOff ? (
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                  <User size={24} className="text-slate-500" />
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-slate-700/50 flex items-center justify-center">
                 <Video size={32} className="text-purple-400 opacity-30" />
              </div>
            )}
            {isMuted && (
              <div className="absolute top-4 right-4 bg-red-500 p-1.5 rounded-lg text-white shadow-lg">
                <MicOff size={14} />
              </div>
            )}
          </div>

          {/* OTHER USER */}
          <div className="flex-1 bg-slate-800 rounded-[2rem] border-4 border-white shadow-lg flex items-center justify-center relative overflow-hidden group">
             <div className="absolute top-4 left-4 z-10 text-[10px] bg-white/20 backdrop-blur-md text-white font-black px-3 py-1 rounded-lg border border-white/10">
              DEV B
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
              <User size={24} className="text-slate-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. FLOATING CONTROLS (Center Bottom) */}
      <div className="flex justify-center items-center gap-6 py-4">
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-xl px-8 py-4 rounded-[2.5rem] border border-purple-100 shadow-xl shadow-purple-200/40">
          
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`group relative p-4 rounded-2xl transition-all duration-300 shadow-sm
              ${isMuted
                ? "bg-red-500 text-white shadow-red-200"
                : "bg-slate-50 text-slate-600 hover:bg-purple-50 hover:text-purple-600 border border-slate-100"}
            `}
          >
            {isMuted ? <MicOff size={22}/> : <Mic size={22}/>}
          </button>

          <button
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={`group relative p-4 rounded-2xl transition-all duration-300 shadow-sm
              ${isVideoOff
                ? "bg-red-500 text-white shadow-red-200"
                : "bg-slate-50 text-slate-600 hover:bg-purple-50 hover:text-purple-600 border border-slate-100"}
            `}
          >
            {isVideoOff ? <VideoOff size={22}/> : <Video size={22}/>}
          </button>

          <div className="w-px h-8 bg-slate-100 mx-2"></div>

          <button className="p-4 rounded-2xl bg-slate-50 text-slate-600 hover:bg-purple-50 hover:text-purple-600 border border-slate-100 transition-all shadow-sm">
            <MonitorUp size={22}/>
          </button>

          <Link
            to="/"
            className="flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-slate-900 hover:text-white text-slate-900 font-black text-sm rounded-2xl transition-all shadow-lg shadow-yellow-200 hover:shadow-slate-200 uppercase tracking-widest"
          >
            <PhoneOff size={20}/>
            Leave
          </Link>
        </div>
      </div>

    </div>
  );
}