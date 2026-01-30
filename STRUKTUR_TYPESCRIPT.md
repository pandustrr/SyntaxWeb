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
- **Lucide React** - Icons
- **clsx & tailwind-merge** - Utility untuk className

## 📝 Catatan Penting

1. **TypeScript**: Semua file sudah menggunakan `.tsx` untuk komponen React dan `.ts` untuk utility files
2. **Path Alias**: Menggunakan `@/*` untuk import dari folder `src/`
3. **Animasi**: Custom animations sudah ditambahkan di `globals.css`
4. **Session**: Menggunakan cookies untuk session management
5. **Middleware**: Protect admin routes dari unauthorized access

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Setup database (jika menggunakan Prisma)
npx prisma generate
npx prisma db push

# Run development server
npm run dev
```

## 📌 TODO

- [ ] Implementasi password hashing dengan bcrypt
- [ ] Tambahkan validation lebih lengkap
- [ ] Implementasi upload image untuk projects
- [ ] Tambahkan pagination untuk tabel
- [ ] Implementasi search dan filter
- [ ] Tambahkan unit tests
- [ ] Setup environment variables
- [ ] Implementasi email notifications

## 🔐 Security Notes

- Password saat ini belum di-hash (TODO: implement bcrypt)
- Session menggunakan simple cookie (TODO: implement JWT atau session store)
- Perlu tambahkan CSRF protection
- Perlu tambahkan rate limiting untuk API

## 📱 Responsive Design

Semua komponen sudah responsive dengan breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
