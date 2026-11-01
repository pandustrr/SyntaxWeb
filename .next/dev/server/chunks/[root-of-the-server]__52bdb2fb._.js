module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/core/db/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}),
"[project]/src/modules/pos/core/pos-plans.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_POS_PLANS",
    ()=>DEFAULT_POS_PLANS
]);
const DEFAULT_POS_PLANS = [
    {
        id: 1,
        name: 'Paket Starter POS',
        code: 'starter',
        price: 79000,
        period: 'bulan',
        badge: 'Booth / Kedai',
        description: 'Cocok untuk kedai kopi booth, take-away, angkringan modern, dan gerai boba.',
        isPopular: false,
        isActive: true,
        sortOrder: 1,
        benefits: [
            'Kasir POS & Mode Offline (Database SQLite)',
            'Katalog Produk Menu & Cache Foto Disk',
            'Manajemen Shift Kasir & Rekonsiliasi Kas Laci',
            'Cetak Struk Thermal (Bluetooth & LAN Wi-Fi)',
            'Perhitungan Pajak Toko Dinamis (PB1 Resto)',
            'Laporan Omzet Penjualan Harian',
            'Slot Akun: 1 Kasir (+ 1 Owner Toko)'
        ]
    },
    {
        id: 2,
        name: 'Paket Pro Kafe',
        code: 'pro',
        price: 149000,
        period: 'bulan',
        badge: 'Paling Populer',
        description: 'Paling diminati coffee shop dine-in, kafe tongkrongan, bistro, dan resto makan.',
        isPopular: true,
        isActive: true,
        sortOrder: 2,
        benefits: [
            'Semua Fitur Paket Starter Lengkap',
            'Manajemen Meja Dine-in (Denah & Status Meja)',
            'Kitchen Display System (Layar Dapur / Barista)',
            'Inventori Bahan Baku & Resep BOM Otomatis',
            'CRM Member & Program Poin Loyalitas',
            'Voucher & Kupon Promo Kasir',
            'Laporan Laba Kotor & Menu Terlaris',
            'Slot Akun: 1 Manager, 1 Kasir, 1 Kitchen (+ Owner)'
        ]
    },
    {
        id: 3,
        name: 'Paket Enterprise',
        code: 'enterprise',
        price: 299000,
        period: 'bulan',
        badge: 'Multi-Cabang',
        description: 'Solusi lengkap resto keluarga besar, kafe 2-3 lantai, dan bisnis kuliner multi-cabang.',
        isPopular: false,
        isActive: true,
        sortOrder: 3,
        benefits: [
            'Semua Fitur Paket Pro Kafe Lengkap',
            'Mendukung hingga 3 Cabang / Outlet Sekaligus',
            'Absensi Karyawan & Penggajian (Termasuk Slovv Sync)',
            'Akun Staf Bebas Tanpa Batas Kuota',
            'Ekspor Rekap Finansial & Pajak Lengkap (CSV / Excel)',
            'Prioritas Layanan Dukungan Teknis Langsung'
        ]
    },
    {
        id: 4,
        name: 'Paket Beli Putus (Lifetime)',
        code: 'lifetime',
        price: 3900000,
        period: 'lifetime',
        badge: 'Sekali Bayar',
        description: 'Beli lisensi sekali seumur hidup tanpa beban biaya langganan bulanan selamanya.',
        isPopular: false,
        isActive: true,
        sortOrder: 4,
        benefits: [
            '11 Modul Sidebar Aktif Penuh Selamanya',
            'Bebas Biaya Langganan Bulanan Seumur Hidup',
            'Aplikasi Android APK & Windows Desktop Siap Pakai',
            'Meja Dine-in, Dapur KDS, Resep Bahan BOM & CRM Aktif',
            'Slot Akun: 1 Manager, 1 Kasir, 1 Kitchen (+ Owner)',
            'Gratis Cloud Backup Database SyntaxWeb 1 Tahun'
        ]
    }
];
}),
"[project]/src/app/api/pos/plans/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$plans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-plans.ts [app-route] (ecmascript)");
;
;
;
const dynamic = 'force-dynamic';
async function GET() {
    try {
        const config = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posPlatformConfig.findUnique({
            where: {
                key: 'default_trial_days'
            }
        });
        let rawPlans = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posSubscriptionPlan.findMany({
            where: {
                isActive: true
            },
            orderBy: {
                sortOrder: 'asc'
            }
        });
        // Otomatisasi inisialisasi paket standar jika tabel paket di database masih kosong
        if (rawPlans.length === 0) {
            for (const p of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$plans$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_POS_PLANS"]){
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posSubscriptionPlan.upsert({
                    where: {
                        code: p.code
                    },
                    update: {
                        name: p.name,
                        price: p.price,
                        period: p.period,
                        badge: p.badge,
                        description: p.description,
                        isPopular: p.isPopular,
                        isActive: p.isActive,
                        sortOrder: p.sortOrder,
                        benefits: JSON.stringify(p.benefits)
                    },
                    create: {
                        name: p.name,
                        code: p.code,
                        price: p.price,
                        period: p.period,
                        badge: p.badge,
                        description: p.description,
                        isPopular: p.isPopular,
                        isActive: p.isActive,
                        sortOrder: p.sortOrder,
                        benefits: JSON.stringify(p.benefits)
                    }
                });
            }
            rawPlans = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posSubscriptionPlan.findMany({
                where: {
                    isActive: true
                },
                orderBy: {
                    sortOrder: 'asc'
                }
            });
        }
        const defaultTrialDays = config ? Number(config.value) : 14;
        const plans = rawPlans.map((p)=>{
            let parsedBenefits = [];
            try {
                parsedBenefits = JSON.parse(p.benefits);
            } catch  {
                parsedBenefits = [
                    p.benefits
                ];
            }
            return {
                id: p.id,
                name: p.name,
                code: p.code,
                price: Number(p.price),
                period: p.period,
                description: p.description,
                badge: p.badge,
                isPopular: p.isPopular,
                benefits: parsedBenefits
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                defaultTrialDays,
                plans
            }
        }, {
            status: 200
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Gagal memuat paket langganan';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__52bdb2fb._.js.map