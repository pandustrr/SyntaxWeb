# 🎯 SyntaxWeb - Final Reference

## 🔗 Rute Utama

| Rute           | Lokasi File                         | Deskripsi       |
| -------------- | ----------------------------------- | --------------- |
| `/`            | `src/app/(public)/page.jsx`         | Landing Page    |
| `/about`       | `src/app/(public)/about/page.jsx`   | Halaman About   |
| `/contact`     | `src/app/(public)/contact/page.jsx` | Halaman Contact |
| `/admin/login` | `src/app/admin/login/page.jsx`      | Login Admin     |
| `/admin`       | `src/app/admin/page.jsx`            | Dashboard Admin |

## 🛠️ Komponen Penting

### UI (`src/components/ui/`)

- `Button.jsx`: Tombol dengan varian (primary, secondary, danger, outline, ghost).
- `Input.jsx`: Input field dengan dukungan label dan pesan error.

### Admin (`src/components/admin/`)

- `LoginForm.jsx`: Form login admin yang modular.
- `Sidebar.jsx`: Navigasi samping panel admin.
- `Topbar.jsx`: Bar bagian atas panel admin dengan info user.

### Layout (`src/components/layout/`)

- `Navbar.jsx`: Navigasi utama untuk pengunjung publik.

## 📡 API Endpoints

- `POST /api/admin/auth`: Masuk (Login)
- `DELETE /api/admin/auth`: Keluar (Logout)
- `GET /api/admin/projects`: List Projek (Admin)

---

**Catatan**: Semua rute `/admin` dilindungi oleh `middleware.js`.
