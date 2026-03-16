#!/bin/bash

# ==============================================================================
# SYNTAX WEB - CPANEL AUTO DEPLOYMENT SCRIPT
# ==============================================================================
# Skrip ini mengotomatiskan proses update untuk server produksi SyntaxWeb.id
# ==============================================================================

# 1. Konfigurasi
PROJECT_DIR="/home2/syntaxwe/syntaxweb-app" # Disesuaikan dengan screenshot cPanel Anda
BRANCH="branch-pandu"

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
# Gunakan --include=dev karena kita perlu build (membutuhkan devDependencies)
npm install

# 4. Prisma Setup
echo "💎 Sinkronisasi Database (Prisma)..."
npx prisma generate
# Optional: jalankan migrasi jika diperlukan
# npx prisma migrate deploy

# 5. Build Project
# Langkah ini dimatikan karena build sudah dilakukan di GitHub Actions
# echo "🏗️ Memulai Build Next.js..."
# npm run build

# 6. Restart Aplikasi (PM2)
# Jika Anda menggunakan PM2, aktifkan baris di bawah ini
if command -v pm2 &> /dev/null
then
    echo "♻️ Restarting application with PM2..."
    pm2 restart syntaxweb-app || pm2 start npm --name "syntaxweb-app" -- start
else
    echo "⚠️ PM2 tidak terdeteksi. Silakan jalankan 'npm start' secara manual atau gunakan Node.js Selector cPanel."
fi

echo "✅ Deployment Berhasil Selesai!"
echo "------------------------------------------------------------------------------"
