#!/bin/bash
# ==============================================================================
# SEED DATABASE HELPER FOR CPANEL CLOUDLINUX
# ==============================================================================

cd "$(dirname "$0")"

# Aktifkan virtual environment Node.js CloudLinux jika tersedia
for v in 22 20 18; do
    if [ -f "$HOME/nodevenv/syntaxweb-app/$v/bin/activate" ]; then
        source "$HOME/nodevenv/syntaxweb-app/$v/bin/activate"
        break
    fi
done

export PATH="/opt/alt/alt-nodejs22/root/usr/bin:/opt/alt/alt-nodejs20/root/usr/bin:/opt/alt/alt-nodejs18/root/usr/bin:$PATH"

if ! command -v node &> /dev/null; then
    echo "❌ Node.js binary tidak ditemukan di PATH!"
    exit 1
fi

echo "🌱 Menjalankan Seeding Data POS..."
node prisma/seed.mjs
