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
# Prioritaskan v20 (LTS paling stabil untuk cPanel LVE), lalu v22, lalu v18
if [ -f "$HOME/nodevenv/$APP_NAME/20/bin/activate" ]; then
    source "$HOME/nodevenv/$APP_NAME/20/bin/activate"
    echo "✅ Node.js Environment (v20) diaktifkan."
elif [ -f "$HOME/nodevenv/$APP_NAME/22/bin/activate" ]; then
    source "$HOME/nodevenv/$APP_NAME/22/bin/activate"
    echo "✅ Node.js Environment (v22) diaktifkan."
elif [ -f "$HOME/nodevenv/$APP_NAME/18/bin/activate" ]; then
    source "$HOME/nodevenv/$APP_NAME/18/bin/activate"
    echo "✅ Node.js Environment (v18) diaktifkan."
fi

# Jika Node 20 tersedia secara sistem di CloudLinux (/opt/alt/alt-nodejs20), prioritaskan agar bebas dari bug DelayedTaskScheduler
if [ -x "/opt/alt/alt-nodejs20/root/usr/bin/node" ]; then
    export PATH="/opt/alt/alt-nodejs20/root/usr/bin:$PATH"
    echo "⚡ Menggunakan runtime Node.js v20 (/opt/alt/alt-nodejs20) untuk stabilitas CloudLinux LVE."
else
    export PATH="/opt/alt/alt-nodejs22/root/usr/bin:/opt/alt/alt-nodejs20/root/usr/bin:$PATH"
fi

# Batasi thread untuk cPanel CloudLinux Shared Hosting (mencegah EAGAIN / Resource temporarily unavailable)
export RAYON_NUM_THREADS=1
export UV_THREADPOOL_SIZE=1
export NEXT_PRIVATE_WORKER_THREADS=0
export NODE_OPTIONS="--max-old-space-size=1536"

# Bersihkan sisa proses build lama yang mungkin menggantung agar kuota proses (nproc) lega
pkill -9 -u "$(whoami)" -f "next|prisma|npx|jest-worker" 2>/dev/null || true
sleep 1

# 2. Update dari Git
echo "📥 Menarik kode terbaru dari GitHub..."
PREV_COMMIT=$(git rev-parse HEAD 2>/dev/null || echo "none")
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"
git checkout HEAD -- .next 2>/dev/null || true
git clean -fd .next/ 2>/dev/null || true
CURR_COMMIT=$(git rev-parse HEAD 2>/dev/null || echo "none")

# Jika skrip diperbarui dari Git, reload eksekusi agar bash membaca file terbaru tanpa offset issue
if [ "$PREV_COMMIT" != "$CURR_COMMIT" ] && [ -z "$DEPLOY_RESTARTED" ]; then
    echo "🔄 Skrip deployment diperbarui dari Git, memuat ulang eksekusi..."
    export DEPLOY_RESTARTED=1
    exec bash "$0" "$@"
fi

# 3. Instalasi Dependencies
echo "📦 Memeriksa dependencies..."
if [ ! -d "node_modules" ]; then
    echo "📦 node_modules belum ada, menginstal dependencies..."
    npm install --legacy-peer-deps --no-audit --no-fund
elif git diff HEAD@{1} HEAD --name-only 2>/dev/null | grep -q -E 'package\.json|package-lock\.json'; then
    echo "📦 package.json berubah, memperbarui dependencies..."
    npm install --legacy-peer-deps --no-audit --no-fund --prefer-offline
else
    echo "⚡ Dependencies sudah up-to-date, melewati npm install."
fi

# 4. Prisma Setup
echo "💎 Sinkronisasi Database (Prisma)..."
if command -v npx &> /dev/null; then
    # Cek apakah Prisma Client belum sinkron dengan skema POS
    if [ ! -d "node_modules/@prisma/client" ] || ! grep -q "PosBusiness" node_modules/@prisma/client/index.d.ts 2>/dev/null || git diff HEAD@{1} HEAD --name-only 2>/dev/null | grep -q "prisma/schema.prisma"; then
        echo "🔄 Memperbarui Prisma Client..."
        RAYON_NUM_THREADS=1 UV_THREADPOOL_SIZE=1 npx prisma generate
    else
        echo "⚡ Prisma client sudah sesuai skema terbaru."
    fi

    echo "🗄️ Sinkronisasi skema database MySQL (prisma db push aman tanpa data loss)..."
    RAYON_NUM_THREADS=1 UV_THREADPOOL_SIZE=1 npx prisma db push --skip-generate || echo "ℹ️ prisma db push dilewati atau sudah sinkron."
fi

# 5. Build Project Check
echo "🔍 Menyeimbangkan folder build (.next)..."
if [ -f ".next/BUILD_ID" ]; then
    echo "⚡ Folder build (.next) valid dari repository! Melewati build di server."
else
    echo "🔨 Folder .next tidak lengkap, mencoba build di server..."
    # Matikan sisa proses node agar kuota nproc lega
    pkill -9 -u "$(whoami)" -f "node" 2>/dev/null || true
    sleep 1
    RAYON_NUM_THREADS=1 UV_THREADPOOL_SIZE=1 NEXT_PRIVATE_WORKER_THREADS=0 nice -n 19 ./node_modules/.bin/next build --no-lint
    if [ $? -ne 0 ]; then
        echo "❌ Build gagal! Deployment dibatalkan."
        exit 1
    fi
fi
echo "✅ Build siap."

# 6. Restart Aplikasi
if command -v pm2 &> /dev/null; then
    echo "♻️ Restarting application with PM2..."
    pm2 restart "$APP_NAME" || pm2 start npm --name "$APP_NAME" -- start
else
    echo "♻️ Restarting via Phusion Passenger (cPanel)..."
    pkill -u "$(whoami)" -f "Passenger NodeApp|next-server" 2>/dev/null || true
    mkdir -p tmp
    touch tmp/restart.txt
    echo "✅ tmp/restart.txt diperbarui (Passenger otomatis reload)."
fi

echo "✅ Deployment Berhasil Selesai!"
echo "------------------------------------------------------------------------------"

