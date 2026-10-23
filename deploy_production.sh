#!/bin/bash

# ==============================================================================
# SYNTAX WEB - CPANEL AUTO DEPLOYMENT SCRIPT
# ==============================================================================
# Skrip ini mengotomatiskan proses update untuk server produksi SyntaxWeb.id
# ==============================================================================

# 1. Konfigurasi
APP_NAME="syntaxweb-app"
PROJECT_DIR="${HOME}/${APP_NAME}"
BRANCH="${1:-main}"

echo "🚀 Memulai Proses Deploy ke Produksi..."
cd "$PROJECT_DIR" || cd "$(dirname "$0")" || { echo "❌ Direktori tidak ditemukan!"; exit 1; }

echo "📍 Direktori: $(pwd)"
echo "🌿 Branch: $BRANCH"

# Coba memuat environment Node.js jika ada di path standar cPanel (CloudLinux nodevenv)
if [ -f "$HOME/nodevenv/$APP_NAME/22/bin/activate" ]; then
    source "$HOME/nodevenv/$APP_NAME/22/bin/activate"
    echo "✅ Node.js Environment (v22) diaktifkan."
elif [ -f "$HOME/nodevenv/$APP_NAME/20/bin/activate" ]; then
    source "$HOME/nodevenv/$APP_NAME/20/bin/activate"
    echo "✅ Node.js Environment (v20) diaktifkan."
elif [ -f "$HOME/nodevenv/$APP_NAME/18/bin/activate" ]; then
    source "$HOME/nodevenv/$APP_NAME/18/bin/activate"
    echo "✅ Node.js Environment (v18) diaktifkan."
fi

# Daftarkan Path Node.js (Khusus CloudLinux/cPanel) agar sub-proses bisa menemukan 'node' & 'npm'
export PATH="/opt/alt/alt-nodejs22/root/usr/bin:/opt/alt/alt-nodejs20/root/usr/bin:$PATH"

# 2. Update dari Git
echo "📥 Menarik kode terbaru dari GitHub..."
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

# 3. Instalasi Dependencies
echo "📦 Menginstal dependencies..."
if command -v npm &> /dev/null; then
    npm install --legacy-peer-deps
else
    echo "❌ Error: npm tidak ditemukan. Pastikan Node.js sudah diaktifkan di cPanel 'Setup Node.js App'."
    exit 1
fi

# 4. Prisma Setup
echo "💎 Sinkronisasi Database (Prisma)..."
if command -v npx &> /dev/null; then
    npx prisma generate
fi

# 5. Build Project
echo "🔨 Membangun ulang project (next build)..."
NEXT_PRIVATE_WORKER_THREADS=0 UV_THREADPOOL_SIZE=1 nice -n 19 npx next build --no-lint
if [ $? -ne 0 ]; then
    echo "❌ Build gagal! Deployment dibatalkan."
    exit 1
fi
echo "✅ Build selesai."

# 6. Restart Aplikasi
if command -v pm2 &> /dev/null; then
    echo "♻️ Restarting application with PM2..."
    pm2 restart "$APP_NAME" || pm2 start npm --name "$APP_NAME" -- start
else
    echo "♻️ Restarting via Phusion Passenger (cPanel)..."
    mkdir -p tmp
    touch tmp/restart.txt
    echo "✅ tmp/restart.txt diperbarui (Passenger otomatis reload)."
fi

echo "✅ Deployment Berhasil Selesai!"
echo "------------------------------------------------------------------------------"

