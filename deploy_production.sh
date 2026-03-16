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

# 3. Instalasi Dependencies
echo "📦 Menginstal dependencies..."
npm install

# 4. Prisma Setup
echo "💎 Sinkronisasi Database (Prisma)..."
npx prisma generate

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
