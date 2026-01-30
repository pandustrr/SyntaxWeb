# Struktur Project SyntaxWeb - TypeScript

## 📁 Struktur Direktori

```
src/
├─ app/
│  ├─ (public)/                 // Halaman umum (URL tetap clean)
│  │  ├─ layout.tsx             // Layout dengan Navbar & Footer
│  │  ├─ page.tsx               // Homepage (/)
│  │  ├─ about/page.tsx         // Halaman About (/about)
│  │  ├─ services/page.tsx      // Halaman Services (/services)
│  │  └─ contact/page.tsx       // Halaman Contact (/contact)
│  │
│  ├─ admin/                    // Admin panel (/admin)
│  │  ├─ login/
│  │  │  └─ page.tsx            // Login admin (/admin/login)
│  │  │
│  │  ├─ layout.tsx             // Layout admin dengan sidebar
│  │  ├─ page.tsx               // Dashboard admin
│  │  ├─ projects/page.tsx      // Halaman Projects
│  │  └─ users/page.tsx         // Halaman Users
│  │
│  ├─ api/
│  │  └─ admin/
│  │     ├─ auth/route.ts       // API login/logout admin
│  │     └─ projects/route.ts   // API CRUD projects
│  │
│  ├─ globals.css               // Global styles & animations
│  └─ layout.tsx                // Root layout
│
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx             // Navbar untuk halaman publik
│  │  ├─ Footer.tsx             // Footer untuk halaman publik
│  │  └─ AdminSidebar.tsx       // Sidebar untuk admin panel
│  │
│  ├─ sections/
│  │  ├─ Hero.tsx               // Hero section homepage
│  │  ├─ Services.tsx           // Services section
│  │  └─ Portfolio.tsx          // Portfolio section
│  │
│  ├─ admin/
│  │  ├─ LoginForm.tsx          // Form login admin
│  │  ├─ ProjectTable.tsx       // Tabel projects
│  │  └─ UserForm.tsx           // Form tambah/edit user
│  │
│  └─ ui/
│     ├─ Button.tsx             // Komponen button reusable
│     ├─ Input.tsx              // Komponen input reusable
│     └─ Modal.tsx              // Komponen modal reusable
│
├─ lib/
│  ├─ prisma.ts                 // Prisma client
│  ├─ auth.ts                   // Helper auth/session
│  └─ utils.ts                  // Utility functions
│
├─ middleware.ts                // Middleware untuk protect /admin/*
├─ tsconfig.json                // TypeScript configuration
└─ jsconfig.json                // JavaScript configuration (backup)
```

## 🎨 Komponen yang Sudah Dibuat

### UI Components

- **Button**: Komponen button dengan variant (primary, secondary, outline, danger) dan size (sm, md, lg)
- **Input**: Komponen input dengan label, error handling, dan helper text
- **Modal**: Komponen modal dengan berbagai ukuran

### Layout Components

- **Navbar**: Navigasi untuk halaman publik dengan active state
- **Footer**: Footer dengan informasi kontak dan navigasi
- **AdminSidebar**: Sidebar navigasi untuk admin panel

### Section Components

- **Hero**: Hero section dengan animasi dan gradient background
- **Services**: Grid layanan dengan icon dan hover effects
- **Portfolio**: Portfolio dengan filter kategori

### Admin Components

- **LoginForm**: Form login dengan error handling
- **ProjectTable**: Tabel untuk menampilkan dan manage projects
- **UserForm**: Form untuk tambah/edit user

## 🔧 Fitur yang Sudah Diimplementasikan

### Halaman Publik

- ✅ Homepage dengan Hero, Services, dan Portfolio sections
- ✅ About page dengan informasi perusahaan
- ✅ Services page dengan detail layanan
- ✅ Contact page dengan form kontak

### Admin Panel

- ✅ Login page dengan authentication
- ✅ Dashboard dengan statistik
- ✅ Projects management page
- ✅ Users management page dengan CRUD operations

### API Routes

- ✅ `/api/admin/auth` - Login dan logout
- ✅ `/api/admin/projects` - CRUD operations untuk projects

### Middleware

- ✅ Protection untuk admin routes
- ✅ Redirect ke login jika belum authenticated
- ✅ Redirect ke dashboard jika sudah login

## 🎯 Teknologi yang Digunakan

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Prisma** - Database ORM
- **MySQL** - Database Engine
- **Lucide React** - Icons
- **clsx & tailwind-merge** - Utility untuk className

## 🚀 Cara Menjalankan Project

### 1. Persiapan Database (MySQL)

- Pastikan **XAMPP** atau **MySQL Service** sudah berjalan (Running).
- Buat database baru dengan nama `syntaxweb_db` di phpMyAdmin atau MySQL Client Anda.
- Cek file `.env` dan pastikan `DATABASE_URL` sudah benar:
  ```env
  DATABASE_URL="mysql://root@localhost:3306/syntaxweb_db"
  ```

### 2. Instalasi & Setup

Buka terminal dan jalankan perintah berikut secara berurutan:

```bash
# Install library/dependencies
npm install

# Generate Prisma Client (Matikan npm run dev jika error EPERM)
npx prisma generate

# Sinkronisasi schema ke database
npx prisma db push
```

### 3. Menjalankan Server

```bash
# Jalankan mode development
npm run dev
```

Akses aplikasi di `http://localhost:3000`.

---

## 📊 Database Flow & Schema

Project ini menggunakan **Prisma ORM** untuk berinteraksi dengan MySQL. Schema didefinisikan di `prisma/schema.prisma`.

### Model Utama:

1.  **User**: Menyimpan data akun admin (email, username, password, name, role).
2.  **Project**: Menyimpan data portfolio project yang ditampilkan di halaman publik (name, description, status).
3.  **Service**: Menyimpan data layanan yang ditawarkan.
4.  **Portfolio**: Data tambahan untuk galeri project.

### Flow Database:

- **Admin Panel** (`/admin`) -> Mengirim request ke **API Routes** (`/api/admin/*`) -> **Prisma Client** melakukan operasi CRUD ke **MySQL Database**.
- **Public Page** (`/`) -> Melakukan fetch data melalui API atau langsung menggunakan Prisma (Server Component) untuk menampilkan data project/layanan ke pengunjung.

---

## 🔄 Workflow System

### 1. Authentication Flow

- User akses `/admin`.
- `middleware.ts` mengecek cookie `session`.
- Jika tidak ada, di-redirect ke `/admin/login`.
- Di `/admin/login`, user memasukkan email & password -> `/api/admin/auth` memverifikasi data DB -> Jika benar, cookie `session` dibuat -> User masuk ke Dashboard.

### 2. Content Management Flow

- Admin menambah project baru di `/admin/projects`.
- Data dikirim ke `/api/admin/projects` (POST).
- Prisma menyimpan data ke tabel `Project`.
- Halaman publik (`/`) secara otomatis akan menampilkan project terbaru tersebut karena datanya diambil langsung dari database.

---

## 🔐 Keamanan & Catatan

- **Middleware**: Memastikan area `/admin` tidak bisa diakses tanpa login.
- **TypeScript**: Memberikan proteksi terhadap error tipe data saat development.
- **Port In Use**: Jika port 3000 error, pastikan tidak ada terminal lain yang sedang menjalankan `npm run dev`.
- **EPERM Error**: Jika muncul saat `prisma generate`, hentikan dulu terminal yang menjalankan server Next.js.
