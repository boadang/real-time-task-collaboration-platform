#!/bin/bash

echo "==================================================="
echo "🚀 KHOI DONG HE THONG REAL-TIME COLLABORATION 🚀"
echo "==================================================="

# Khởi động Backend NestJS trong cửa sổ mới
echo "Dang khoi dong Backend NestJS..."
gnome-terminal --title="NestJS_Backend" -- bash -c "cd real-time-task-platform && npm run start:dev; exec bash"

# Khởi động Frontend React trong cửa sổ mới
echo "Dang khoi dong Frontend React..."
gnome-terminal --title="React_Frontend" -- bash -c "cd frontend-task-app && npm run dev; exec bash"

echo ""
echo "✅ Da mo 2 terminal thanh cong!"