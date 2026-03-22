//src/components/DialogNotification.jsx
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function DialogNotification({
    isOpen,
    onClose,
    message,
    title,
    type = 'success'
}) {
    if (!isOpen) {
        return null;
    }

    // Cấu hình màu sắc và icon dựa vào type bạn chọn
    const themeConfig = {
        success: {
            icon: <CheckCircle2 className="w-8 h-8 text-yellow-500" />,
            iconBg: "bg-yellow-50",
            buttonBg: "bg-yellow-500 hover:bg-yellow-600 text-white",
        },
        error: {
            // Note nhỏ: Icon mình dùng purple-600 để nổi bật trên cái nền purple-100 của bạn
            icon: <AlertCircle className="w-8 h-8 text-purple-600" />, 
            iconBg: "bg-purple-100", 
            buttonBg: "bg-purple-500 hover:bg-purple-600 text-white",
        }
    };

    const activeTheme = themeConfig[type] || themeConfig.success;

    return (
        // Overlay (Lớp nền đen mờ đằng sau)
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity">
            
            // Modal Container
            <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 animate-in fade-in zoom-in duration-200">
                
                {/* Nút X để đóng ở góc phải */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Nội dung chính */}
                <div className="flex flex-col items-center text-center mt-2">
                    
                    {/* Icon với viền tròn màu nền */}
                    <div className={`p-4 rounded-full mb-4 ${activeTheme.iconBg}`}>
                        {activeTheme.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {title}
                    </h3>

                    {/* Message */}
                    <p className="text-slate-500 mb-6">
                        {message}
                    </p>

                    {/* Nút xác nhận */}
                    <button
                        onClick={onClose}
                        className={`w-full py-3 rounded-xl font-semibold transition-colors ${activeTheme.buttonBg}`}
                    >
                        Xác nhận
                    </button>
                    
                </div>
            </div>
        </div>
    );
}