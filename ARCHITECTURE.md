# SyntaxWeb — Modular Monolith Architecture

## 🏗️ Filosofi Arsitektur

Project ini menggunakan pola **Modular Monolith** — satu codebase Next.js yang diorganisir
menjadi **modul-modul independen** dengan batas yang jelas. Setiap modul punya API publik
yang dibatasi melalui `index.ts` (barrel export).

```
PRINSIP UTAMA:
  ✅ Import antar modul HANYA melalui index.ts (barrel)
  ✅ Setiap modul atur sendiri: komponen, hooks, types, actions
  ❌ Jangan import langsung dari sub-path modul lain
  ❌ Jangan akses core/db langsung dari komponen (gunakan actions)
```

---

## 📁 Struktur Direktori

```
src/
├── app/                          ← Next.js App Router (routing layer TIPIS)
│   ├── (public)/                 ← Public routes
│   │   ├── page.tsx             ← Home page → import dari @/modules/home
│   │   ├── contact/page.tsx     ← → import dari @/modules/contact
│   │   ├── portfolio/page.tsx   ← → import dari @/modules/portfolio
│   │   ├── pricelist/page.tsx   ← → import dari @/modules/pricelist
│   │   └── services/page.tsx    ← → import dari @/modules/home
│   ├── admin/                   ← Admin routes
│   │   ├── page.tsx            ← Dashboard
│   │   ├── login/page.tsx      ← → import dari @/modules/admin
│   │   ├── projects/page.tsx   ← → import dari @/modules/admin
│   │   └── users/page.tsx      ← → import dari @/modules/admin
│   └── api/admin/              ← API Routes (thin, delegate ke core)
│       ├── auth/route.ts       ← → import dari @/core
│       └── projects/route.ts   ← → import dari @/core
│
├── modules/                     ← ★ INTI MODULAR MONOLITH ★
│   ├── shared/                  ← Cross-cutting concerns
│   │   ├── components/
│   │   │   ├── layout/         ← Navbar, Footer, BackgroundKinetic, IntroLoader
│   │   │   └── ui/             ← Button, Input, Modal, ScrollProgress, dll
│   │   ├── animations/         ← DecryptedText, SplitText, SpotlightCard, TrueFocus
│   │   ├── providers/          ← LanguageProvider, ThemeProvider
│   │   ├── hooks/              ← useLanguage
│   │   ├── types/              ← PaginationMeta, ApiResponse, Theme
│   │   └── index.ts            ← ← PUBLIC API (import dari sini)
│   │
│   ├── home/                    ← Modul: Halaman Utama
│   │   ├── components/         ← HeroSection, AboutSection, ServicesSection
│   │   ├── hooks/              ← (future: useServices, useStats)
│   │   ├── types/              ← ServiceItem, HeroStat
│   │   └── index.ts
│   │
│   ├── portfolio/               ← Modul: Portfolio
│   │   ├── components/         ← PortfolioSection, ProjectCard
│   │   ├── data/               ← projects.ts (static data)
│   │   ├── types/              ← Project
│   │   └── index.ts
│   │
│   ├── pricelist/               ← Modul: Harga
│   │   ├── components/         ← PricelistSection
│   │   ├── data/               ← plans.ts (PLANS, ADD_ONS, BONUSES)
│   │   ├── types/              ← PricePlan, AddOn
│   │   └── index.ts
│   │
│   ├── contact/                 ← Modul: Kontak
│   │   ├── components/         ← ContactSection
│   │   ├── actions/            ← submitContact.ts (Server Action)
│   │   ├── types/              ← ContactFormData, ContactSubmitResult
│   │   └── index.ts
│   │
│   └── admin/                   ← Modul: Admin Panel
│       ├── components/         ← LoginForm, ProjectTable, UserForm, AdminSidebar
│       ├── hooks/              ← useProjects, useAuth
│       ├── actions/            ← auth.ts, projects.ts, users.ts (Server Actions)
│       ├── types/              ← AdminUser, AdminProject, LoginCredentials
│       └── index.ts
│
├── core/                        ← Infrastructure layer (tidak ada UI)
│   ├── db/prisma.ts            ← Prisma client singleton
│   ├── auth/session.ts         ← Cookie session management
│   ├── utils/helpers.ts        ← cn(), formatDate(), dll
│   └── index.ts                ← Barrel export core
│
└── config/                      ← App-wide configuration
    ├── translations/index.ts   ← i18n strings (ID + EN)
    └── constants.ts            ← APP_NAME, ROUTES, BRAND colors
```

---

## 📦 Dependency Rules (Layer Diagram)

```
app/ (routing)
  ↓ imports
modules/ (domain logic)
  ↓ imports
core/ (infrastructure)
  ↓ imports
prisma, next/headers, etc. (external)

config/ ← dapat diakses oleh semua layer
```

**Aturan:**
- `app/` hanya boleh import dari `modules/` (via barrel)
- `modules/` boleh import dari `core/` dan `config/`
- `core/` hanya boleh import dari library external
- Tidak ada circular dependencies antar modul

---

## 🔌 Cara Menambah Modul Baru

Contoh: tambah modul `blog`

```bash
src/modules/blog/
├── components/
│   ├── BlogList.tsx
│   └── BlogPost.tsx
├── actions/
│   └── getBlogPosts.ts     ← 'use server'
├── types/
│   └── index.ts            ← interface BlogPost {}
└── index.ts                ← barrel export
```

Lalu di `src/app/(public)/blog/page.tsx`:
```tsx
import { BlogList } from '@/modules/blog';
```

---

## 🚀 Cara Running

```bash
# Development
npm run dev

# Build
npm run build

# Database
npx prisma migrate dev
npx prisma studio

# Seed
node prisma/seed.mjs
```

---

## 📋 Checklist Pengembangan

- [x] Shared Module (providers, UI, animations, layout)
- [x] Home Module (Hero, About, Services sections)
- [x] Portfolio Module (ProjectCard, PortfolioSection, data)
- [x] Pricelist Module (PricelistSection, plans data)
- [x] Contact Module (ContactSection, submitContact server action)
- [x] Admin Module (LoginForm, ProjectTable, hooks, server actions)
- [x] Core Layer (prisma, auth/session, utils)
- [x] Config Layer (translations, constants)
- [ ] TODO: Email service untuk Contact form (Nodemailer/Resend)
- [ ] TODO: bcrypt untuk password hashing
- [ ] TODO: JWT untuk session yang lebih aman
- [ ] TODO: Portfolio module connect ke database (saat ini static data)
