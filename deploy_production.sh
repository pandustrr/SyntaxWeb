#!/bin/bash

# ==============================================================================
# SYNTAX WEB - CPANEL AUTO DEPLOYMENT SCRIPT
# ==============================================================================
# Skrip ini mengotomatiskan proses update untuk server produksi SyntaxWeb.id
# ==============================================================================

# 1. Konfigurasi
PROJECT_DIR="/home2/syntaxwe/syntaxweb-app" # Direktori di cPanel
BRANCH="main"

echo "🚀 Memulai Proses Deploy ke Produksi..."
cd $PROJECT_DIR || { echo "❌ Direktori tidak ditemukan!"; exit 1; }

echo "📍 Direktori: $(pwd)"
echo "🌿 Branch: $BRANCH"

# 2. Update dari Git
echo "📥 Menarik kode terbaru dari GitHub..."
git fetch origin $BRANCH
git reset --hard origin/$BRANCH

# Coba memuat environment Node.js jika ada di path standar cPanel
if [ -f "$HOME/nodevenv/$PROJECT_DIR/22/bin/activate" ]; then
    source "$HOME/nodevenv/$PROJECT_DIR/22/bin/activate"
    echo "✅ Node.js Environment (v22) diaktifkan."
elif [ -f "$HOME/nodevenv/$PROJECT_DIR/20/bin/activate" ]; then
    source "$HOME/nodevenv/$PROJECT_DIR/20/bin/activate"
    echo "✅ Node.js Environment (v20) diaktifkan."
elif [ -f "$HOME/nodevenv/$PROJECT_DIR/18/bin/activate" ]; then
    source "$HOME/nodevenv/$PROJECT_DIR/18/bin/activate"
    echo "✅ Node.js Environment (v18) diaktifkan."
fi

# Daftarkan Path Node.js 22 (Khusus CloudLinux/cPanel) agar sub-proses bisa menemukan 'node'
export PATH="/opt/alt/alt-nodejs22/root/usr/bin:$PATH"

# 3. Instalasi Dependencies
echo "📦 Menginstal dependencies..."
if command -v npm &> /dev/null; then
    npm install --legacy-peer-deps
else
    echo "❌ Error: npm tetap tidak ditemukan. Mohon hubungi support untuk lokasi Node.js 22."
    exit 1
fi

# 4. Prisma Setup
echo "💎 Sinkronisasi Database (Prisma)..."
if command -v npx &> /dev/null; then
    npx prisma generate
fi

# 5. Build Project Check
echo "🔍 Menyeimbangkan folder build (.next)..."
if [ ! -d ".next" ]; then
    echo "⚠️ Folder .next tidak ditemukan! Mencoba melakukan build lokal..."
    npm run build
fi

# 6. Restart Aplikasi
if command -v pm2 &> /dev/null
then
    echo "♻️ Restarting application with PM2..."
    pm2 restart syntaxweb-app || pm2 start npm --name "syntaxweb-app" -- start
else
    echo "♻️ Restarting via Phusion Passenger (cPanel)..."
    mkdir -p tmp
    touch tmp/restart.txt
    echo "✅ tmp/restart.txt diperbarui."
fi

echo "✅ Deployment Berhasil Selesai!"
echo "------------------------------------------------------------------------------"
