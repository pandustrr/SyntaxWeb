# Panduan Setup SyntaxWeb (Next.js + React + Tailwind)

Panduan ini dirancang untuk membangun brand **SyntaxWeb** menggunakan teknologi terbaru yang fokus pada **SEO** dan **Performa Tinggi**.

> **Catatan tentang Vite:** Next.js menggunakan compiler internal yang sangat cepat (Turbopack/SWC) sebagai pengganti Vite. Ini memungkinkan fitur SEO seperti Server-Side Rendering (SSR) bekerja lebih maksimal dibandingkan React-Vite biasa.

## 1. Persiapan Awal

Pastikan **Node.js (LTS)** sudah terinstal di komputer Anda.

## 2. Perintah Instalasi (Modern Stack)

Jalankan perintah ini di terminal **di dalam folder SyntaxWeb**:

```bash
npx create-next-app@latest .
```

### Konfigurasi Wajib (Untuk SEO & Performa):

Saat muncul pilihan di terminal, pilih seperti berikut:

- **TypeScript?** No (atau pilih Yes jika anda sudah terbiasa)
- **ESLint?** Yes
- **Tailwind CSS?** **Yes** (Wajib untuk desain premium & file ringan)
- **`src/` directory?** Yes
- **App Router?** **Yes** (Sangat penting untuk SEO navigasi)
- **Import Alias?** Yes (`@/*`)

---

## 3. Optimasi SEO di Next.js

Keunggulan utama Next.js adalah kemudahan SEO. Anda bisa mengatur metadata di `src/app/layout.jsx`:

```javascript
export const metadata = {
  title: "SyntaxWeb | Solusi Digital & Website Premium",
  description:
    "Membangun website modern, cepat, dan SEO-friendly untuk brand Anda.",
  keywords: ["jasa website", "syntaxweb", "web development", "react nextjs"],
};
```

---

## 4. Struktur Folder (Clean Architecture)

```text
src/
├── app/               # Folder Utama (Router, Layout, & SEO)
│   ├── layout.jsx     # Template Induk (Navbar/Footer)
│   ├── globals.css    # Tailwind Directives
│   └── page.jsx       # Landing Page Utama SyntaxWeb
├── components/        # Komponen UI Reusable
│   ├── UI/            # Button, Cards, Input
│   └── Layout/        # Navbar.jsx, Footer.jsx
├── lib/               # Utility functions
└── assets/            # Logo & Gambar (Gunakan Next/Image)
```

## 5. Menjalankan Project

```bash
npm run dev
```

Website akan berjalan di `http://localhost:3000`.

---

_Dokumen ini diperbarui untuk memastikan SyntaxWeb memiliki fondasi SEO terbaik._
