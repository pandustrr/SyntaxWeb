# Alur & Dokumentasi Sistem SyntaxWeb

Dokumen ini menjelaskan arsitektur, alur kerja, dan fungsi setiap komponen dalam project **SyntaxWeb**.

---

## 1. Teknologi (Tech Stack)

Project ini dibangun menggunakan "Modern Stack" yang fokus pada performa dan SEO:

- **Next.js (App Router)**: Framework utama untuk Frontend & Backend (Fullstack).
- **Tailwind CSS**: Untuk styling tampilan (UI) yang cepat dan premium.
- **Prisma ORM**: Jembatan penghubung antara kode program dengan Database.
- **MySQL**: Tempat penyimpanan data (Database), bisa menggunakan Laragon/XAMPP.

---

## 2. Struktur Folder & Fungsinya

Berikut adalah peta lokasi file penting agar Anda tidak tersesat:

### 📂 `src/app/` (Halaman Website)

Ini adalah folder utama. Setiap folder di sini menjadi URL di browser.

- **`(public)/`**: Berisi halaman yang dilihat pengunjung umum/client.
  - `page.js`: Halaman Home / Landing Page.
  - `about/page.js`: Halaman Tentang Kami.
  - `services/page.js`: Halaman Daftar Jasa.
  - _(Folder ini pakai tanda kurung agar tidak muncul di nama URL)._
- **`admin/`**: Dashboard khusus pemilik website.
  - `login/page.js`: Halaman login admin.
  - `page.js`: Dashboard utama admin.

### 📂 `src/app/actions/` (Backend Logic)

Di sinilah "otak" aplikasi bekerja. Berisi fungsi-fungsi backend.

- `auth.js`: Menangani proses login, cek password ke database, dan membuat session cookie.

### 📂 `src/lib/` (Konfigurasi Global)

- `prisma.js`: File sakral yang menghubungkan aplikasi ke MySQL. File ini dipanggil setiap kali kita butuh ambil data.

### 📂 `prisma/` (Database Schema)

- `schema.prisma`: Desain tabel database Anda. Jika ingin nambah kolom/tabel, edit di sini.
- `seed.mjs`: Script untuk mengisi data awal (seperti bikin akun admin pertama kali).

---

## 3. Alur Kerja Data (Data Flow)

Berikut adalah contoh bagaimana data mengalir dari Database sampai ke Layar User:

### Kasus A: Pengunjung Melihat Daftar Jasa

1.  **Request**: Pengunjung membuka `syntaxweb.com/services`.
2.  **Server (Next.js)**: Halaman `services/page.js` dimuat di server.
3.  **Database Call**: Halaman memanggil `prisma.service.findMany()` untuk minta semua data jasa dari MySQL.
4.  **Wiring**: Prisma mengambil data dari tabel `Service`.
5.  **Response**: Next.js menyusun HTML yang sudah berisi data jasa tersebut, lalu dikirim ke browser pengunjung (Sangat cepat & SEO Friendly).

### Kasus B: Admin Login

1.  **Input**: Admin isi username & password di form login (`src/app/admin/login`).
2.  **Action**: Saat tombol ditekan, data dikirim ke Server Action `loginAction` di `src/app/actions/auth.js`.
3.  **Validation**: Kode backend mengecek ke prisma: _"Ada gak user dengan nama ini?"_.
4.  **Decision**:
    - Jika **OK**: Buat cookie 'session' -> Redirect ke Dashboard.
    - Jika **Gagal**: Kirim pesan error "Password Salah" ke form login.

---

---

## 5. Perbandingan dengan Laravel (Untuk Anda yang Terbiasa PHP)

Jika Anda familiar dengan Laravel, berikut adalah "kamus terjemahan" agar Anda cepat paham alur Next.js:

| Fitur / Konsep           | Di Laravel (PHP)                        | Di Next.js (Project Ini)                                                        |
| :----------------------- | :-------------------------------------- | :------------------------------------------------------------------------------ |
| **Bahasa Pemrograman**   | PHP                                     | JavaScript / Node.js                                                            |
| **Routing (Alamat Web)** | File `routes/web.php`                   | **Folder System** (`src/app/about/page.js` otomatis jadi url `/about`)          |
| **Controller (Logika)**  | Class Controller (`UserController.php`) | **Server Actions** (`src/app/actions/auth.js`) atau langsung di dalam `page.js` |
| **Model (Database)**     | Eloquent Model (`User.php`)             | **Prisma Schema** (`prisma/schema.prisma`)                                      |
| **Query Database**       | `User::all()`                           | `await prisma.user.findMany()`                                                  |
| **Tampilan (View)**      | Blade Template (`home.blade.php`)       | **React Components** (`page.jsx` / `page.js`)                                   |
| **Styling**              | CSS / Bootstrap biasa                   | **Tailwind CSS** (Utility classes)                                              |
| **Migrasi Database**     | `php artisan migrate`                   | `npx prisma migrate dev`                                                        |
| **Seeding Data**         | `php artisan db:seed`                   | `npx prisma db seed`                                                            |

### Perbedaan Filosofi Utama:

1.  **Fullstack Integration**:

    - **Laravel**: Seringkali memisahkan Backend (API) dan Frontend (Vue/React) atau menyatu tapi pakai Blade.
    - **Next.js**: Backend dan Frontend benar-benar menyatu dalam satu file. Anda bisa query database (Backend) langsung di baris pertama, lalu render HTML (Frontend) di baris berikutnya dalam file yang sama.

2.  **Kecepatan**:
    - **Laravel**: Setiap klik link -> Request baru ke server -> Server render -> Balikin HTML (Refresh halaman).
    - **Next.js**: Seperti aplikasi HP (SPA). Pindah halaman instan tanpa refresh full browser, tapi tetap SEO friendly karena dirender di server dulu.

---

## 4. Cara Mengupdate Project

### Menambah Tabel Baru (Misal: Testimoni)

1.  Buka `prisma/schema.prisma`.
2.  Tambahkan model baru:
    ```prisma
    model Testimonial {
      id      Int    @id @default(autoincrement())
      name    String
      message String
    }
    ```
3.  Jalankan perintah di terminal: `npx prisma migrate dev --name tambah_testimoni`.
4.  Selesai! Tabel sudah jadi di MySQL.

### Menambah Halaman Baru

1.  Buat folder baru di `src/app/(public)/`. Contoh: `contact/`.
2.  Buat file `page.js` di dalamnya.
3.  Isi dengan codingan React component.
