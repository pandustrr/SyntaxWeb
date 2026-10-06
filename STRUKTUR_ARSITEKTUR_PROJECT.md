# Dokumentasi Arsitektur & Struktur Project SyntaxWeb (Next.js 15 & TypeScript)

Dokumentasi lengkap arsitektur sistem, struktur modular, konfigurasi teknologi, alur database, dan panduan deployment produksi cPanel hosting.

---

## 📑 Daftar Isi
1. [Tech Stack & Spesifikasi](#1-tech-stack--spesifikasi)
2. [Arsitektur Direktori (Modular Architecture)](#2-arsitektur-direktori-modular-architecture)
3. [Modul & Komponen Utama](#3-modul--komponen-utama)
4. [Alur Database & Authentication](#4-alur-database--authentication)
5. [Animasi & Grafis 3D](#5-animasi--grafis-3d)
6. [Konfigurasi Path Alias & Webpack](#6-konfigurasi-path-alias--webpack)
7. [Panduan Menjalankan di Lokal](#7-panduan-menjalankan-di-lokal)
8. [Panduan Deployment Otomatis ke cPanel Shared Hosting](#8-panduan-deployment-otomatis-ke-cpanel-shared-hosting)

---

## 1. Tech Stack & Spesifikasi

- **Framework**: Next.js 15.3.5 (App Router, Webpack-optimized for CloudLinux hosting)
- **Runtime & Bahasa**: Node.js 22 LTS & TypeScript 5.7+
- **Database & ORM**: MySQL + Prisma ORM v6.19
- **Styling**: Tailwind CSS v3.4 + Autoprefixer + PostCSS
- **Animasi & Interaksi**:
  - Framer Motion v12
  - GSAP v3.14
  - Lenis Smooth Scroll v1.3
- **3D Graphics & Canvas**:
  - Three.js + `@react-three/fiber` + `@react-three/drei`
  - OGL (WebGL framework)
- **Icons**: Lucide React
- **Web Server Hosting**: Phusion Passenger (cPanel CloudLinux Shared Hosting)

---

## 2. Arsitektur Direktori (Modular Architecture)

Project SyntaxWeb mengadopsi pola **Modular Vertical Slice Architecture**: setiap fitur independen dikelompokkan ke dalam direktori modul masing-masing (`src/modules/*`), dipisahkan dari konfigurasi inti (`src/core/*`) dan routing halaman (`src/app/*`).

```
SyntaxWeb/
├── prisma/
│   ├── schema.prisma              # Definisi model database MySQL
│   ├── seed.mjs                   # Seeder data awal
│   └── migrations/                # Riwayat migrasi Prisma
│
├── public/                        # Static assets (gambar, favicon, logo)
│
├── src/
│   ├── app/                       # Next.js App Router (Routing Entrypoints)
│   │   ├── (public)/              # Route Group untuk halaman publik
│   │   │   ├── layout.tsx         # Public Layout (Navbar, Footer, Lenis, Kinetic BG)
│   │   │   ├── page.tsx           # Homepage (/)
│   │   │   ├── contact/page.tsx   # Contact Page (/contact)
│   │   │   ├── partners/page.tsx  # Partners Page (/partners)
│   │   │   ├── portfolio/page.tsx # Portfolio Page (/portfolio)
│   │   │   ├── pricelist/page.tsx # Pricelist Page (/pricelist)
│   │   │   └── services/page.tsx  # Services Page (/services)
│   │   │
│   │   ├── admin/                 # Route Group untuk Panel Admin
│   │   │   ├── layout.tsx         # Admin Shell (Sidebar dinamis & Header)
│   │   │   ├── page.tsx           # Dashboard Admin (/admin)
│   │   │   ├── login/page.tsx     # Admin Login (/admin/login)
│   │   │   ├── projects/page.tsx  # Manajemen Portfolio Projects (/admin/projects)
│   │   │   └── users/page.tsx     # Manajemen Akun Pengguna (/admin/users)
│   │   │
│   │   ├── api/                   # API Routes (Backend Endpoints)
│   │   │   └── admin/
│   │   │       ├── auth/route.ts  # Endpoint Autentikasi Admin
│   │   │       └── projects/route.ts # Endpoint CRUD Projects
│   │   │
│   │   ├── globals.css            # Style global, utility noise, scanline, & custom scroll
│   │   └── layout.tsx             # Root layout (Theme provider, Fonts, HTML root)
│   │
│   ├── core/                      # Core System & Shared Backend Layer
│   │   ├── auth/
│   │   │   └── session.ts         # JWT token management & session validation
│   │   ├── db/
│   │   │   └── prisma.ts          # Singleton PrismaClient instance
│   │   ├── utils/
│   │   │   └── helpers.ts         # Global utility functions (format, string, cn)
│   │   └── index.ts               # Barrel export core
│   │
│   ├── config/
│   │   ├── constants.ts           # Global project constants & URLs
│   │   └── translations/          # Multi-language dictionary (ID / EN)
│   │
│   ├── modules/                   # Feature-Driven Business Modules
│   │   ├── home/                  # Modul Homepage (HeroSection, ServicesPreview)
│   │   ├── portfolio/             # Modul Portfolio (ProjectCard Full BG + Tabs)
│   │   ├── pricelist/             # Modul Pricelist (PricelistSection + WA Modal)
│   │   ├── contact/               # Modul Kontak (ContactForm & Actions)
│   │   ├── admin/                 # Modul Admin Panel (Actions, Components, Hooks)
│   │   └── shared/                # Komponen bersama (Navbar, Footer, Modal, UI)
│   │
│   └── middleware.ts              # Route protection middleware untuk /admin/*
│
├── deploy_production.sh           # Automated deployment script untuk cPanel
├── next.config.mjs                # Konfigurasi Next.js & Webpack path aliases
├── package.json                   # Dependencies & scripts
└── tsconfig.json                  # Konfigurasi TypeScript compiler
```


---

## 3. Modul & Komponen Utama

### A. Modul Shared (`@/modules/shared`)
- **`Navbar`**: Navigasi responsif dengan glassmorphism, indikator status, link dinamis, dan theme toggle.
- **`Footer`**: Footer estetis dengan identitas brand, link sosial media, dan hak cipta.
- **`BackgroundKinetic` & `IntroLoader`**: Visual latar dinamis dan transisi animasi intro halaman awal.
- **`ScrollProgress` & `Lenis`**: Smooth inertia-based scroll bar & mouse wheel experience.
- **`Modal`, `Button`, `Input`**: UI kit atomik dengan styling Tailwind dan varian status.

### B. Modul Portfolio (`@/modules/portfolio`)
- **`ProjectCard`**: Kartu showcase berlatar belakang visual penuh (*full card background*) dengan:
  - Tab navigasi internal (*Overview, Challenge/Problem, Solution/Impact*).
  - Magnetic hover effect responsif terhadap kursor.
  - Tag teknologi dan tautan langsung ke demo proyek.
- **`PortfolioSection`**: Daftar kurasi proyek terpilih (*SELECTED WORKS*) dengan filtering kategori.

### C. Modul Pricelist (`@/modules/pricelist`)
- **`PricelistSection`**: Grid perbandingan tingkatan paket website (Starter, Business, Enterprise).
- **`Modal "Pilih Paket"`**: Dialog interaktif dilengkapi pemilih Add-On kustom, perhitungan estimasi instan, dan tombol Checkout langsung diarahkan ke WhatsApp resmi (`+6281230487469`) dengan pesan otomatis tersusun rapi.

### D. Modul Admin Panel (`@/modules/admin`)
- **`LoginForm`**: Autentikasi aman terintegrasi dengan validasi kredensial hash bcrypt.
- **`ProjectTable`**: Tabel manajemen CRUD data portfolio secara dinamis.
- **`UserForm`**: Pengelolaan administrator internal sistem.
- **Server Actions**: Operasi mutasi data langsung tanpa boilerplate API manual (`auth.ts`, `projects.ts`, `users.ts`).

---

## 4. Alur Database & Authentication

### Schema Prisma (`prisma/schema.prisma`)
1. **User**: Menyimpan administrator sistem (`id`, `name`, `email`, `password` ter-hash, `role`, `createdAt`).
2. **Project**: Menyimpan portofolio yang dapat diedit admin (`id`, `title`, `slug`, `description`, `coverImage`, `category`, `liveUrl`, `featured`).
3. **Service & Inquiry**: Menyimpan paket layanan dan pesan prospek masuk dari form kontak.

### Alur Autentikasi (JWT + Cookie):
1. Pengunjung/admin membuka URL `/admin/*`.
2. `src/middleware.ts` memeriksa token session cookie.
3. Jika belum terautentikasi: otomatis dialihkan (*redirect*) ke `/admin/login`.
4. Submit login diproses oleh `loginAction` -> dicocokkan dengan record database via `prisma.user` -> dibuat token JWT aman bertanda tangan -> disimpan pada cookie HTTP-only.
5. Setelah login valid: diarahkan ke `/admin` dashboard.

---

## 5. Animasi & Grafis 3D

1. **Lenis Smooth Scroll**: Diintegrasikan di `(public)/layout.tsx` menggunakan `requestAnimationFrame` untuk pergerakan halaman yang lembut.
2. **Framer Motion**: Digunakan pada transisi rute, entrance section, kartu modal interaktif (`AnimatePresence`), dan magnetic button.
3. **Three.js & React Three Fiber**: Menopang canvas interaktif 3D (Hero orb, particle cloud, kinetic background).
4. **Micro-Interactions**:
   - `DecryptedText`: Efek animasi teks ala cyberpunk/hacker.
   - `SpotlightCard`: Highlight dinamis mengikuti koordinat kursor mouse.
   - `Scanline effect`: Garis scan CRT halus di latar belakang.

---

## 6. Konfigurasi Path Alias & Webpack

Untuk menjamin kompatibilitas pada server Linux/cPanel tanpa error resolusi modul, path aliases didaftarkan ganda di `tsconfig.json` dan `next.config.mjs`:

### Path Aliases yang Didukung:
- `@/*` ➔ `./src/*`
- `@/core` ➔ `./src/core/index.ts`
- `@/config` ➔ `./src/config/constants.ts`
- `@/modules/shared` ➔ `./src/modules/shared/index.ts`
- `@/modules/home` ➔ `./src/modules/home/index.ts`
- `@/modules/contact` ➔ `./src/modules/contact/index.ts`
- `@/modules/portfolio` ➔ `./src/modules/portfolio/index.ts`
- `@/modules/pricelist` ➔ `./src/modules/pricelist/index.ts`
- `@/modules/admin` ➔ `./src/modules/admin/index.ts`

---

## 7. Panduan Menjalankan di Lokal

### Prasyarat:
- Node.js versi 18, 20, atau 22
- MySQL server (XAMPP / Laragon / Docker)

### Langkah Menjalankan:
```bash
# 1. Masuk ke direktori
cd e:\Pandu-Projek\SyntaxWeb

# 2. Instalasi dependencies
npm install --legacy-peer-deps

# 3. Setup environment (.env)
# DATABASE_URL="mysql://root:@localhost:3306/syntaxweb_db"

# 4. Generate Prisma Client
npx prisma generate

# 5. Push schema database (jika ada perubahan)
npx prisma db push

# 6. Jalankan local dev server
npm run dev
```
Akses di browser: `http://localhost:3000`

---

## 8. Panduan Deployment Otomatis ke cPanel Shared Hosting

cPanel Shared Hosting (CloudLinux LVE) membatasi jumlah thread proses (`nproc`). Next.js 15 dikonfigurasi secara khusus agar build berjalan stabil dalam single-thread mode (`UV_THREADPOOL_SIZE=1` dan `NEXT_PRIVATE_WORKER_THREADS=0`).

### File Deployment Otomatis: `deploy_production.sh`

```bash
#!/bin/bash
PROJECT_DIR="/home2/syntaxwe/syntaxweb-app"
BRANCH="main"

echo "🚀 Memulai Proses Deploy ke Produksi..."
cd $PROJECT_DIR || { echo "❌ Direktori tidak ditemukan!"; exit 1; }

# Update repo git
git fetch origin $BRANCH
git reset --hard origin/$BRANCH

# Aktifkan Node.js 22 Virtualenv cPanel
source /home2/syntaxwe/nodevenv/syntaxweb-app/22/bin/activate
export PATH="/opt/alt/alt-nodejs22/root/usr/bin:$PATH"

# Install Dependencies & Prisma
npm install --legacy-peer-deps
npx prisma generate

# Build Next.js dengan single-thread & low nice priority
NEXT_PRIVATE_WORKER_THREADS=0 UV_THREADPOOL_SIZE=1 nice -n 19 npx next build --no-lint

# Restart Phusion Passenger App
mkdir -p tmp
touch tmp/restart.txt
echo "✅ Deployment Berhasil Selesai!"
```

### Cara Menjalankan Deploy di Server SSH:
Cukup jalankan satu baris perintah berikut:
```bash
cd ~/syntaxweb-app && bash deploy_production.sh
```

Aplikasi otomatis ter-pull, ter-compile, dan direstart tanpa downtime 503.

