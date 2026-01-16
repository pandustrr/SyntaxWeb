# Struktur Project SyntaxWeb (Enterprise Standard)

Berikut adalah struktur folder lengkap project SyntaxWeb. Struktur ini mengadopsi pola "Feature-First" dan "Layered Architecture" yang sangat umum digunakan di project Next.js berskala besar (Enterprise).

---

## 📂 `src/` (Root Source)

Semua kode sumber aplikasi berada di sini.

### 1. `src/app/` (Router & Pages)

Menggunakan **App Router**, struktur folder di sini menentukan URL website.

- **`(public)/`** (Grouping Folder)
  - _Deskripsi_: Kelompok halaman yang bisa diakses siapa saja (pengunjung umum). Nama foldernya pakai kurung `()` agar tidak muncul di URL.
  - `about/`: Halaman Tentang Kami (`/about`).
  - `services/`: Halaman Layanan (`/services`).
  - `page.js`: Halaman Depan / Landing Page (`/`).
- **`(admin)/`** (Grouping Folder)
  - _Deskripsi_: Area khusus admin yang butuh login.
  - `dashboard/`: Halaman utama admin (`/dashboard`).
- **`(auth)/`** (Grouping Folder)
  - _Deskripsi_: Area autentikasi.
  - `login/`: Halaman login (`/login`).
- **`api/`**
  - _Deskripsi_: REST API Endpoints untuk komunikasi dengan pihak ketiga (Mobile Apps, Webhook).

---

### 2. `src/actions/` (Server Actions)

- _Analogi (Laravel)_: **Controller**.
- _Fungsi_: Berisi fungsi-fungsi backend (Node.js) yang dipanggil langsung oleh Frontend. Menggantikan peran "API internal".
- _Contoh Penggunaan_: Fungsi `login(formData)` dipanggil saat tombol submit dikocok.

---

### 3. `src/components/` (UI Library)

Tempat semua potongan tampilan (React Components).

- **`ui/`** (Atomic / Base Components)
  - _Fungsi_: Komponen kecil, _stateless_, dan reusable. Tidak boleh ada _business logic_ di sini.
  - _Isi_: `Button`, `Input`, `Card`, `Modal`, `Checkbox`.
- **`modules/`** (Feature Modules / Widget)
  - _Fungsi_: Gabungan dari beberapa komponen UI yang membentuk fitur spesifik.
  - _Isi_: `Navbar` (berisi Link + Logo + UserMenu), `HeroSection` (berisi Judul + Button + Image), `Sidebar`.

---

### 4. `src/lib/` (Libraries & Configuration)

- _Fungsi_: Tempat inisialisasi library eksternal. File di sini biasanya "Single Instance" (dibuat sekali dipakai selamanya).
- _Isi_:
  - `prisma.js`: Koneksi database utama.
  - `utils.js`: Fungsi helper umum (misal format tanggal, format rupiah).

---

### 5. `src/middleware.js` (Security Gatekeeper)

- _Lokasi_: Harus di root `src/`, tidak boleh di dalam folder lain.
- _Fungsi_: Kode yang dieksekusi **paling pertama** sebelum request masuk ke halaman manapun.
- _Tugas Utama_: Cek Cookie Session. Kalau mau masuk `/dashboard` tapi tidak punya cookie, tendang ke `/login`.

---

### 6. `src/clients/` (Third Party Clients)

- _Fungsi_: Jika web kita butuh ngobrol sama API orang lain.
- _Contoh_: `axiosInstance.js`, `googleDrveClient.js`.

---

### 7. Lain-lain

- `.env`: Kunci rahasia (Password DB, API Key). **JANGAN DISHARE**.
- `prisma/schema.prisma`: Denah Database. Semua tabel didefinisikan di sini.
- `prisma/seed.mjs`: Script untuk mengisi data awal (Admin pertama, Kategori awal).

---

## 📌 Rangkuman Alur Kerja

1.  **Pengunjung** buka `syntaxweb.com/dashboard`.
2.  **Middleware** (`src/middleware.js`) menyetop di pintu gerbang. "Mana tiket (cookie)-mu?".
3.  Jika punya tiket -> Boleh masuk ke folder `src/app/(admin)/dashboard`.
4.  Halaman Dashboard merender komponen dari `src/components/modules/Sidebar`.
5.  Dashboard memanggil `src/actions/getStats` untuk minta data statistik.
6.  Action `getStats` meminjam `src/lib/prisma` untuk ambil data dari MySQL.
7.  Data dikirim balik ke Dashboard -> Tampil di layar.
