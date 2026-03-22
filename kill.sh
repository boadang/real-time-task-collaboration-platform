#!/bin/bash

echo "==================================================="
echo "🛑 DANG TAT HE THONG REAL-TIME COLLABORATION 🛑"
echo "==================================================="

echo "1. Dang tat Backend (NestJS)..."
# Tắt thông qua tên tiến trình
pkill -f "npm run start:dev" 2>/dev/null
pkill -f "nest start" 2>/dev/null
# Ép tắt cứng thông qua Port (Dựa vào log trước đó mình thấy bạn dùng port 5000)
fuser -k 5000/tcp 2>/dev/null

echo "2. Dang tat Frontend (React/Vite)..."
# Tắt thông qua tên tiến trình
pkill -f "npm run dev" 2>/dev/null
pkill -f "vite" 2>/dev/null
# Ép tắt cứng thông qua Port mặc định của Vite
fuser -k 5173/tcp 2>/dev/null

echo ""
echo "✅ Da dong toan bo server thanh cong!"
echo "💡 Cac cua so terminal phu bay gio da ngung chay server, ban co the tat chung bang dau X."