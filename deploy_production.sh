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

# Tentukan path NPM (Khusus CloudLinux/cPanel)
NPM_PATH="/opt/alt/alt-nodejs22/root/usr/bin/npm"
NPX_PATH="/opt/alt/alt-nodejs22/root/usr/bin/npx"

# 3. Instalasi Dependencies
echo "📦 Menginstal dependencies..."
if [ -f "$NPM_PATH" ]; then
    $NPM_PATH install --legacy-peer-deps
else
    echo "❌ Error: npm tidak ditemukan di $NPM_PATH."
    exit 1
fi

# 4. Prisma Setup
echo "💎 Sinkronisasi Database (Prisma)..."
if [ -f "$NPX_PATH" ]; then
    $NPX_PATH prisma generate
fi

# 5. Build Project
# Langkah ini dimatikan karena build sudah dilakukan di GitHub Actions
# echo "🏗️ Memulai Build Next.js..."
# npm run build

# 6. Restart Aplikasi (PM2)
if command -v pm2 &> /dev/null
then
    echo "♻️ Restarting application with PM2..."
    pm2 restart syntaxweb-app || pm2 start npm --name "syntaxweb-app" -- start
else
    echo "⚠️ PM2 tidak terdeteksi. Silakan gunakan Node.js Selector cPanel untuk restart."
fi

echo "✅ Deployment Berhasil Selesai!"
echo "------------------------------------------------------------------------------"
