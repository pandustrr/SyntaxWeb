#!/bin/bash

# ==============================================================================
# SYNTAX WEB - CPANEL AUTO DEPLOYMENT SCRIPT (PRODUCTION RECOVERY)
# ==============================================================================
# Skrip ini mengotomatiskan proses update untuk server produksi SyntaxWeb.id
# Disesuaikan khusus untuk CloudLinux LVE, Phusion Passenger, dan Node.js v22
# ==============================================================================

# 1. Konfigurasi
APP_NAME="syntaxweb-app"
PROJECT_DIR="${HOME}/${APP_NAME}"
BRANCH="${1:-main}"

echo "🚀 Memulai Proses Deploy ke Produksi..."
cd "$PROJECT_DIR" || cd "$(dirname "$0")" || { echo "❌ Direktori tidak ditemukan!"; exit 1; }

echo "📍 Direktori: $(pwd)"
echo "🌿 Branch: $BRANCH"

# Coba memuat environment Node.js di path standar cPanel (CloudLinux nodevenv)
# Prioritaskan v22 (sesuai konfigurasi cPanel v22.23.4), lalu fallback v20, lalu v18
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

# Prioritaskan runtime Node.js v22 di CloudLinux
export PATH="/opt/alt/alt-nodejs22/root/usr/bin:/opt/alt/alt-nodejs20/root/usr/bin:$PATH"

# Batasi thread untuk cPanel CloudLinux Shared Hosting (mencegah EAGAIN / Resource temporarily unavailable)
export RAYON_NUM_THREADS=1
export UV_THREADPOOL_SIZE=1
export NEXT_PRIVATE_WORKER_THREADS=0
export NODE_OPTIONS="--max-old-space-size=1536"

# Bersihkan hanya proses build zombie lama agar kuota proses (nproc) lega
pkill -9 -u "$(whoami)" -f "next-build|prisma-cli|jest-worker" 2>/dev/null || true
sleep 1

# 2. Update dari Git
echo "📥 Menarik kode terbaru dari GitHub..."
PREV_COMMIT=$(git rev-parse HEAD 2>/dev/null || echo "none")
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"
CURR_COMMIT=$(git rev-parse HEAD 2>/dev/null || echo "none")

# Jika skrip diperbarui dari Git, reload eksekusi agar bash membaca file terbaru tanpa offset issue
if [ "$PREV_COMMIT" != "$CURR_COMMIT" ] && [ -z "$DEPLOY_RESTARTED" ]; then
    echo "🔄 Skrip deployment diperbarui dari Git, memuat ulang eksekusi..."
    export DEPLOY_RESTARTED=1
    exec bash "$0" "$@"
fi

# 3. Instalasi Dependencies
echo "📦 Memeriksa dependencies..."
if [ ! -d "node_modules" ] || [ ! -d "node_modules/next" ]; then
    echo "📦 node_modules belum lengkap, menginstal dependencies..."
    npm install --legacy-peer-deps --no-audit --no-fund
elif git diff HEAD@{1} HEAD --name-only 2>/dev/null | grep -q -E 'package\.json|package-lock\.json'; then
    echo "📦 package.json berubah, memperbarui dependencies..."
    npm install --legacy-peer-deps --no-audit --no-fund --prefer-offline
else
    echo "⚡ Dependencies sudah lengkap dan up-to-date."
fi

# 4. Prisma Setup
echo "💎 Menyiapkan Prisma Client..."
if command -v npx &> /dev/null; then
    RAYON_NUM_THREADS=1 UV_THREADPOOL_SIZE=1 npx prisma generate
    echo "✅ Prisma Client siap."
fi

# 5. Build Project Check
echo "🔍 Menyeimbangkan folder build (.next)..."
if [ -f ".next/BUILD_ID" ] && [ -f ".next/prerender-manifest.json" ]; then
    echo "⚡ Folder build (.next) valid dan lengkap! Melewati build di server."
else
    echo "🔨 Folder .next belum lengkap, mencoba build di server..."
    pkill -9 -u "$(whoami)" -f "next-build" 2>/dev/null || true
    sleep 1
    RAYON_NUM_THREADS=1 UV_THREADPOOL_SIZE=1 NEXT_PRIVATE_WORKER_THREADS=0 nice -n 19 ./node_modules/.bin/next build --no-lint
    if [ $? -ne 0 ]; then
        echo "❌ Build di server gagal! Periksa log."
        exit 1
    fi
fi
echo "✅ Build siap."

# 6. Restart Aplikasi (Phusion Passenger / PM2)
if command -v pm2 &> /dev/null && pm2 list | grep -q "$APP_NAME"; then
    echo "♻️ Restarting application with PM2..."
    pm2 restart "$APP_NAME"
else
    echo "♻️ Restarting via Phusion Passenger (cPanel)..."
    mkdir -p tmp
    touch tmp/restart.txt
    echo "✅ tmp/restart.txt diperbarui (Passenger otomatis reload)."
fi

echo "✅ Deployment Berhasil Selesai!"
echo "------------------------------------------------------------------------------"


