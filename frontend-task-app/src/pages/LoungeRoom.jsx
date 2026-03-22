import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Mic, MicOff, Video as VideoIcon, VideoOff, 
  Users, Lock, LogIn, PlusCircle, Link as LinkIcon, 
  Settings, ShieldCheck
} from "lucide-react";

export function LoungeRoom() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  
  const [isCamOn, setIsCamOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(false);
  const [stream, setStream] = useState(null);
  const [activeTab, setActiveTab] = useState('join');
  const [joinId, setJoinId] = useState("");
  
  const [createForm, setCreateForm] = useState({
    id: "", 
    name: "",
    capacity: 10,
    password: ""
  });

  useEffect(() => {
    const startCamera = async () => {
      if (isCamOn) {
        try {
          const mediaStream = await navigator.mediaDevices.getUserMedia({ 
            video: { width: 1280, height: 720 }, 
            audio: isMicOn 
          });
          setStream(mediaStream);
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
          }
        } catch (error) {
          console.error("Camera access denied:", error);
          setIsCamOn(false);
        }
      } else {
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
          setStream(null);
        }
      }
    };
    startCamera();
    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop());
    };
  }, [isCamOn]);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!joinId) return;
    if (stream) stream.getTracks().forEach(track => track.stop());
    navigate(`/meeting/room/${joinId}`, { state: { isCamOn, isMicOn } });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!createForm.id || !createForm.name) return;
    if (stream) stream.getTracks().forEach(track => track.stop());
    navigate(`/meeting/room/${createForm.id}`, { state: { isCamOn, isMicOn } });
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[600px]">
        
        {/* CỘT TRÁI: PREVIEW CAMERA (Bento Style) */}
        <div className="lg:w-7/12 flex flex-col gap-4">
          <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-200/50 border-4 border-white">
            {isCamOn ? (
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="w-full h-full object-cover transform scale-x-[-1]" 
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-900">
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700">
                  <VideoOff size={40} className="text-slate-600" />
                </div>
                <p className="font-semibold tracking-wide uppercase text-xs">Camera is resting</p>
              </div>
            )}

            {/* Overlay Status */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              <div className={`px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 border ${isMicOn ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-red-500/20 border-red-500/50 text-red-400'}`}>
                {isMicOn ? <Mic size={16} /> : <MicOff size={16} />}
                <span className="text-xs font-bold uppercase">{isMicOn ? 'On' : 'Muted'}</span>
              </div>
            </div>
            
            <div className="absolute top-6 right-6">
               <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl text-white transition-colors">
                  <Settings size={20} />
               </button>
            </div>
          </div>

          {/* Camera Controls */}
          <div className="flex justify-center gap-4 py-2">
            <button 
              onClick={() => setIsMicOn(!isMicOn)} 
              className={`group relative p-5 rounded-2xl transition-all duration-300 ${isMicOn ? 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-200' : 'bg-red-500 text-white shadow-lg shadow-red-200 hover:bg-red-600'}`}
            >
              {isMicOn ? <Mic size={28} /> : <MicOff size={28} />}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {isMicOn ? 'Mute Mic' : 'Unmute Mic'}
              </span>
            </button>
            
            <button 
              onClick={() => setIsCamOn(!isCamOn)} 
              className={`group relative p-5 rounded-2xl transition-all duration-300 ${isCamOn ? 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-200' : 'bg-red-500 text-white shadow-lg shadow-red-200 hover:bg-red-600'}`}
            >
              {isCamOn ? <VideoIcon size={28} /> : <VideoOff size={28} />}
               <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {isCamOn ? 'Stop Video' : 'Start Video'}
              </span>
            </button>
          </div>
        </div>

        {/* CỘT PHẢI: FORM (Card Style) */}
        <div className="lg:w-5/12">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100 h-full flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Meeting Lounge</h1>
              <p className="text-slate-500 font-medium">Configure your room before joining</p>
            </div>

            {/* Custom Tab Triggers */}
            <div className="flex bg-slate-100/80 p-1.5 rounded-2xl mb-8">
              <button 
                onClick={() => setActiveTab('join')}
                className={`flex-1 py-3 text-sm font-black rounded-xl transition-all ${activeTab === 'join' ? 'bg-white shadow-md text-purple-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                JOIN ROOM
              </button>
              <button 
                onClick={() => setActiveTab('create')}
                className={`flex-1 py-3 text-sm font-black rounded-xl transition-all ${activeTab === 'create' ? 'bg-white shadow-md text-purple-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                CREATE NEW
              </button>
            </div>

            {/* TAB CONTENT: JOIN */}
            {activeTab === 'join' && (
              <form onSubmit={handleJoin} className="space-y-6 flex-1 flex flex-col animate-in slide-in-from-right-4 duration-500">
                <div className="flex-1">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Room Identity</label>
                  <div className="relative group">
                    <LogIn className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" size={20} />
                    <input 
                      type="text" 
                      placeholder="Enter room ID (e.g. daily-sync)"
                      value={joinId}
                      onChange={(e) => setJoinId(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all font-medium"
                    />
                  </div>
                </div>
                <button 
                  disabled={!joinId}
                  type="submit" 
                  className="w-full py-4 bg-slate-900 hover:bg-purple-600 disabled:bg-slate-200 text-white font-black rounded-[1.5rem] transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-slate-200"
                >
                  ENTER THE ROOM <LogIn size={20} />
                </button>
              </form>
            )}

            {/* TAB CONTENT: CREATE */}
            {activeTab === 'create' && (
              <form onSubmit={handleCreate} className="space-y-5 animate-in slide-in-from-left-4 duration-500">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">New Room Slug</label>
                    <div className="flex items-center bg-purple-50 border border-purple-100 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-200 transition-all">
                      <LinkIcon size={16} className="text-purple-400 mr-2" />
                      <input 
                        type="text" 
                        placeholder="my-cool-room"
                        value={createForm.id}
                        onChange={(e) => setCreateForm({...createForm, id: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                        className="bg-transparent w-full focus:outline-none font-bold text-purple-700 placeholder:text-purple-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Display Name</label>
                    <input 
                      type="text" 
                      placeholder="Weekly Design Sync"
                      value={createForm.name}
                      onChange={(e) => setCreateForm({...createForm, name: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-purple-500 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1 text-center">Capacity</label>
                      <div className="flex items-center justify-center gap-3 bg-slate-50 rounded-2xl p-2 border border-slate-200">
                         <Users size={16} className="text-slate-400" />
                         <input 
                          type="number" 
                          value={createForm.capacity}
                          onChange={(e) => setCreateForm({...createForm, capacity: Number(e.target.value)})}
                          className="bg-transparent w-12 text-center font-bold text-slate-700 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1 text-center">Privacy</label>
                      <div className="flex items-center justify-center gap-3 bg-slate-50 rounded-2xl p-2 border border-slate-200">
                         <ShieldCheck size={16} className={`transition-colors ${createForm.password ? 'text-purple-600' : 'text-slate-400'}`} />
                         <input 
                          type="password" 
                          placeholder="Pass?"
                          value={createForm.password}
                          onChange={(e) => setCreateForm({...createForm, password: e.target.value})}
                          className="bg-transparent w-16 text-center text-xs font-bold outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  disabled={!createForm.id || !createForm.name}
                  type="submit" 
                  className="w-full py-4 mt-2 bg-purple-600 hover:bg-indigo-600 disabled:bg-slate-200 text-white font-black rounded-[1.5rem] transition-all flex justify-center items-center gap-2 shadow-lg shadow-purple-100"
                >
                  INITIALIZE ROOM <PlusCircle size={20} />
                </button>
              </form>
            )}
            
            <p className="mt-8 text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
               Encrypted & Secure Communication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}