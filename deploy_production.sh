#!/bin/bash

# ==============================================================================
# SYNTAX WEB - CPANEL AUTO DEPLOYMENT SCRIPT
# ==============================================================================
# This script automates the update process for the production server.
# It pulls the latest code, installs dependencies, generates Prisma,
# and builds the Next.js application.
# ==============================================================================

# 1. Configuration
PROJECT_DIR="$(pwd)"
BRANCH="main" # Change to target branch if different

echo "🚀 Starting Deployment Process..."
echo "📍 Directory: $PROJECT_DIR"
echo "🌿 Branch: $BRANCH"

# 2. Update Codebase
echo "📥 Pulling latest changes from Git..."
git fetch origin $BRANCH
git reset --hard origin/$BRANCH

# 3. Install Dependencies
echo "📦 Installing/Updating dependencies..."
# Use npm ci for clean, reproducible production installs
npm install --production=false

# 4. Prisma Setup
echo "💎 Generating Prisma Client..."
npx prisma generate

# 5. Build Project
echo "🏗️ Building Next.js application..."
npm run build

# 6. Restart Application (Optional - for PM2 users)
# If you are using PM2 to manage your Next.js process, uncomment the lines below:
# echo "♻️ Restarting application process..."
# pm2 restart syntax-web --update-env || pm2 start npm --name "syntax-web" -- start

echo "✅ Deployment Successful!"
echo "------------------------------------------------------------------------------"
