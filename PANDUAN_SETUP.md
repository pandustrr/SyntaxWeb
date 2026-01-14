# Panduan Setup QwertyWeb (Laravel 11 + Inertia + React)

Berikut adalah panduan lengkap untuk memulai project QwertyWeb.

## 1. Perintah Instalasi (Command Line)

Jalankan perintah ini satu per satu di terminal (Powershell/CMD) **di dalam folder QwertyWeb**.

### 1. Install Laravel 11 (Spesifik Versi 11)

```bash
composer create-project laravel/laravel:^11.0 .
```

### 2. Install Library Server-side Inertia

```bash
composer require inertiajs/inertia-laravel
```

### 3. Buat Middleware Inertia

```bash
php artisan inertia:middleware
```

### 4. Install Dependencies Frontend (React, Vite Plugin, Inertia Client)

```bash
npm install react react-dom @inertiajs/react @vitejs/plugin-react
```

### 5. Install TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 2. Konfigurasi File

Setelah instalasi selesai, Anda perlu mengubah beberapa file.

### A. Aktifkan Middleware

Buka `bootstrap/app.php` dan tambahkan middleware inertia:

```php
use App\Http\Middleware\HandleInertiaRequests;

return Application::configure(basePath: dirname(__DIR__))
    // ... bagian lain
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
    })
    // ...
```

### B. Setup Vite (`vite.config.js`)

Ubah file `vite.config.js` menjadi:

```javascript
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.jsx",
      refresh: true,
    }),
    react(),
  ],
});
```

### C. Setup Root Template (`resources/views/app.blade.php`)

Buat file baru `resources/views/app.blade.php` (hapus `welcome.blade.php` jika mau):

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
    />
    @vite('resources/js/app.jsx') @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
```

### D. Setup Main React File (`resources/js/app.jsx`)

Buat file `resources/js/app.jsx`:

```javascript
import "./bootstrap";
import "../css/app.css";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "QwertyWeb";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx")
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
});
```

### E. Setup Tailwind (`tailwind.config.js`)

Update content di `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### F. Setup CSS (`resources/css/app.css`)

Tambahkan directives Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Struktur Project QwertyWeb

Buat struktur folder berikut di `resources/js`:

```text
resources/js/
├── Components/         # Komponen UI Reusable
│   ├── UI/            # Button, Input, Card (Atomic design)
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ServiceCard.jsx
├── Layouts/
│   ├── GuestLayout.jsx # Layout publik (Landing page)
│   └── AppLayout.jsx   # Layout dashboard client/admin
├── Pages/
│   ├── Home.jsx        # Landing Page
│   ├── Services/       # Halaman detail jasa
│   │   ├── Index.jsx
│   │   └── Show.jsx
│   ├── Portfolio/      # Halaman portofolio
│   ├── Contact.jsx     # Halaman kontak
│   └── Dashboard/      # Halaman admin/client area
└── app.jsx
```

## 4. Menjalankan Project

Buka dua terminal:

**Terminal 1 (Backend)**

```bash
php artisan serve
```

**Terminal 2 (Frontend)**

```bash
npm run dev
```
