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
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/modules/pos/core/pos-jwt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signPosToken",
    ()=>signPosToken,
    "verifyPosToken",
    ()=>verifyPosToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET || 'syntaxweb_pos_jwt_secret_key_2026';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const JWT_EXPIRES_IN = '30d'; // 30 hari untuk kasir/tablet offline-friendly
function signPosToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
}
function verifyPosToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch  {
        return null;
    }
}
}),
"[project]/src/modules/pos/auth/auth.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosAuthService",
    ()=>PosAuthService,
    "resolveUserPermissions",
    ()=>resolveUserPermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-jwt.ts [app-route] (ecmascript)");
;
;
;
function resolveUserPermissions(role, customPermissionsJson, businessRolePermissionsJson) {
    const cleanRole = (role || '').toLowerCase();
    // 1. OWNER selalu default mendapatkan SEMUA 12 FITUR!
    if ([
        'owner',
        'admin',
        'super_admin'
    ].includes(cleanRole)) {
        return [
            'dashboard',
            'pos',
            'tables',
            'kds',
            'products',
            'inventory',
            'customers',
            'promotions',
            'employees',
            'attendance',
            'reports',
            'settings'
        ];
    }
    // 2. Jika user memiliki izin khusus perorangan yang diatur Owner
    if (customPermissionsJson) {
        try {
            const parsed = JSON.parse(customPermissionsJson);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch (_) {}
    }
    // 3. Jika outlet memiliki template per-role yang diatur SuperAdmin di /admin/cafes
    if (businessRolePermissionsJson) {
        try {
            const bizPerms = JSON.parse(businessRolePermissionsJson);
            const roleMapped = cleanRole === 'kitchen_bar' || cleanRole === 'barista' ? 'kitchen' : cleanRole === 'kasir' ? 'cashier' : cleanRole;
            if (Array.isArray(bizPerms[roleMapped]) && bizPerms[roleMapped].length > 0) {
                return bizPerms[roleMapped];
            }
        } catch (_) {}
    }
    // 4. Default role standar
    if (cleanRole === 'manager') {
        return [
            'dashboard',
            'pos',
            'tables',
            'kds',
            'products',
            'inventory',
            'customers',
            'promotions',
            'employees',
            'attendance',
            'reports'
        ];
    }
    if ([
        'kitchen',
        'kitchen_bar',
        'barista'
    ].includes(cleanRole)) {
        return [
            'kds',
            'inventory'
        ];
    }
    // Default cashier / kasir
    return [
        'pos',
        'tables',
        'kds',
        'customers',
        'promotions',
        'employees'
    ];
}
class PosAuthService {
    static async login(input) {
        const { emailOrUsername, password } = input;
        if (!emailOrUsername || !password) {
            throw new Error('Email/username dan password wajib diisi.');
        }
        // Cari user berdasarkan email atau username
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
            where: {
                OR: [
                    {
                        email: emailOrUsername
                    },
                    {
                        username: emailOrUsername
                    }
                ]
            },
            include: {
                business: true
            }
        });
        if (!user) {
            throw new Error('Akun tidak ditemukan.');
        }
        // Verifikasi password (bcrypt atau fallback plaintext)
        let isPasswordValid = false;
        try {
            isPasswordValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
        } catch  {
            isPasswordValid = false;
        }
        if (!isPasswordValid && user.password === password) {
            isPasswordValid = true;
        }
        if (!isPasswordValid) {
            throw new Error('Password salah.');
        }
        // Validasi tenant / business
        if (!user.businessId || !user.business) {
            if (user.role === 'admin' || user.role === 'super_admin') {
                // Ambil toko aktif pertama (default tenant) agar SuperAdmin dapat langsung mengoperasikan & menguji POS
                const activeBusiness = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posBusiness.findFirst({
                    where: {
                        isActive: true
                    },
                    orderBy: {
                        id: 'asc'
                    }
                });
                if (activeBusiness) {
                    const adminSession = {
                        userId: user.id,
                        businessId: activeBusiness.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        businessName: activeBusiness.name,
                        permissions: resolveUserPermissions(user.role, user.permissions, activeBusiness.rolePermissions)
                    };
                    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signPosToken"])(adminSession);
                    return {
                        token,
                        user: adminSession,
                        business: {
                            id: activeBusiness.id,
                            name: activeBusiness.name,
                            slug: activeBusiness.slug,
                            address: activeBusiness.address,
                            phone: activeBusiness.phone,
                            receiptNotes: activeBusiness.receiptNotes,
                            status: activeBusiness.status,
                            isTrial: activeBusiness.isTrial,
                            trialEndsAt: activeBusiness.trialEndsAt,
                            enableDashboard: activeBusiness.enableDashboard,
                            enablePos: activeBusiness.enablePos,
                            enableTables: activeBusiness.enableTables,
                            enableKds: activeBusiness.enableKds,
                            enableProducts: activeBusiness.enableProducts,
                            enableInventory: activeBusiness.enableInventory,
                            enableCustomers: activeBusiness.enableCustomers,
                            enablePromotions: activeBusiness.enablePromotions,
                            enableEmployees: activeBusiness.enableEmployees,
                            attendanceMode: activeBusiness.attendanceMode,
                            enableReports: activeBusiness.enableReports,
                            enableSettings: activeBusiness.enableSettings,
                            taxPercent: Number(activeBusiness.taxPercent ?? 10.0),
                            isTaxInclusive: Boolean(activeBusiness.isTaxInclusive ?? false),
                            servicePercent: Number(activeBusiness.servicePercent ?? 0.0)
                        }
                    };
                }
            }
            throw new Error('Pengguna ini belum terdaftar di toko/bisnis POS manapun.');
        }
        if (user.business.status === 'PENDING_APPROVAL') {
            throw new Error('Pendaftaran kafe sedang menunggu persetujuan SuperAdmin Syntax. Silakan hubungi admin.');
        }
        if (user.business.status === 'SUSPENDED') {
            throw new Error('Akun bisnis kafe ini sedang dinonaktifkan sementara oleh Administrator.');
        }
        if (user.business.status === 'REJECTED') {
            throw new Error('Pendaftaran kafe ini ditolak oleh Administrator.');
        }
        if (!user.business.isActive) {
            throw new Error('Toko/bisnis saat ini sedang dinonaktifkan.');
        }
        // Cek batas waktu masa uji coba gratis (Trial Expiry)
        if (user.business.isTrial && user.business.trialEndsAt) {
            const now = new Date();
            const expiry = new Date(user.business.trialEndsAt);
            if (now > expiry) {
                throw new Error(`Masa uji coba gratis (Trial) kafe Anda telah berakhir pada ${expiry.toLocaleDateString('id-ID')}. Silakan hubungi SuperAdmin Syntax untuk aktivasi lisensi tenant resmi.`);
            }
        }
        const session = {
            userId: user.id,
            businessId: user.business.id,
            name: user.name,
            email: user.email,
            role: user.role,
            businessName: user.business.name,
            permissions: resolveUserPermissions(user.role, user.permissions, user.business.rolePermissions)
        };
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signPosToken"])(session);
        return {
            token,
            user: session,
            business: {
                id: user.business.id,
                name: user.business.name,
                slug: user.business.slug,
                address: user.business.address,
                phone: user.business.phone,
                receiptNotes: user.business.receiptNotes,
                status: user.business.status,
                isTrial: user.business.isTrial,
                trialEndsAt: user.business.trialEndsAt,
                enableDashboard: user.business.enableDashboard,
                enablePos: user.business.enablePos,
                enableTables: user.business.enableTables,
                enableKds: user.business.enableKds,
                enableProducts: user.business.enableProducts,
                enableInventory: user.business.enableInventory,
                enableCustomers: user.business.enableCustomers,
                enablePromotions: user.business.enablePromotions,
                enableEmployees: user.business.enableEmployees,
                attendanceMode: user.business.attendanceMode,
                enableReports: user.business.enableReports,
                enableSettings: user.business.enableSettings,
                taxPercent: Number(user.business.taxPercent ?? 10.0),
                isTaxInclusive: Boolean(user.business.isTaxInclusive ?? false),
                servicePercent: Number(user.business.servicePercent ?? 0.0)
            }
        };
    }
    static async registerCafe(input) {
        const { businessName, name, email, password, phone, address, isTrial, trialDays } = input;
        const cleanEmail = email.trim().toLowerCase();
        const cleanBiz = businessName.trim();
        const cleanName = name.trim();
        if (!cleanBiz || !cleanName || !cleanEmail || !password) {
            throw new Error('Nama bisnis, nama pemilik, email, dan password wajib diisi.');
        }
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
            where: {
                OR: [
                    {
                        email: cleanEmail
                    },
                    {
                        username: cleanEmail
                    }
                ]
            }
        });
        if (existingUser) {
            throw new Error('Email atau username sudah terdaftar. Silakan gunakan email lain atau hubungi admin.');
        }
        const baseSlug = cleanBiz.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || 'cafe';
        const randomSuffix = Math.floor(1000 + Math.random() * 9000);
        let slug = `${baseSlug}-${randomSuffix}`;
        const existingSlug = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posBusiness.findUnique({
            where: {
                slug
            }
        });
        if (existingSlug) {
            slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
        }
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        const isFreeTrial = Boolean(isTrial);
        const validTrialDays = Number(trialDays && trialDays > 0 ? trialDays : 14);
        const trialEndsAt = isFreeTrial ? new Date(Date.now() + validTrialDays * 24 * 60 * 60 * 1000) : null;
        const initialStatus = isFreeTrial ? 'ACTIVE' : 'PENDING_APPROVAL';
        let resolvedPlanId = input.planId ? Number(input.planId) : null;
        if (!resolvedPlanId && input.planCode) {
            const foundPlan = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posSubscriptionPlan.findUnique({
                where: {
                    code: input.planCode.toLowerCase()
                }
            });
            if (foundPlan) resolvedPlanId = foundPlan.id;
        }
        const business = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posBusiness.create({
            data: {
                name: cleanBiz,
                slug,
                address: address?.trim() || null,
                phone: phone?.trim() || null,
                status: initialStatus,
                isTrial: isFreeTrial,
                trialEndsAt,
                planId: resolvedPlanId,
                subscribedAt: !isFreeTrial && resolvedPlanId ? new Date() : null,
                isActive: true,
                receiptHeader: address ? `Selamat Datang di ${cleanBiz}\n${address}` : cleanBiz,
                receiptNotes: 'Terima kasih atas kunjungan Anda!',
                receiptFooter: 'WiFi: SyntaxGuest',
                receiptPaperSize: '58mm',
                showLogoOnReceipt: true,
                showWifiOnReceipt: false,
                taxPercent: 10.00,
                isTaxInclusive: false,
                servicePercent: 0.00,
                categories: {
                    create: [
                        {
                            name: 'Kopi & Espresso',
                            sortOrder: 1
                        },
                        {
                            name: 'Non-Kopi',
                            sortOrder: 2
                        },
                        {
                            name: 'Makanan & Snack',
                            sortOrder: 3
                        }
                    ]
                },
                tables: {
                    create: [
                        {
                            name: 'Meja 01',
                            capacity: 4,
                            status: 'available'
                        },
                        {
                            name: 'Meja 02',
                            capacity: 4,
                            status: 'available'
                        },
                        {
                            name: 'Meja 03',
                            capacity: 2,
                            status: 'available'
                        },
                        {
                            name: 'Meja 04',
                            capacity: 6,
                            status: 'available'
                        }
                    ]
                }
            }
        });
        const cleanUsernameBase = cleanEmail.split('@')[0].replace(/[^a-z0-9_-]/gi, '') || 'user';
        let username = `${cleanUsernameBase}-${randomSuffix}`;
        const existingUsername = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                username
            }
        });
        if (existingUsername) {
            username = `${cleanUsernameBase}-${Date.now().toString().slice(-4)}`;
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.create({
            data: {
                name: cleanName,
                email: cleanEmail,
                username,
                password: hashedPassword,
                role: 'owner',
                pin: '0000',
                businessId: business.id
            }
        });
        const session = {
            userId: user.id,
            businessId: business.id,
            name: user.name,
            email: user.email,
            role: user.role,
            businessName: business.name
        };
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signPosToken"])(session);
        return {
            token,
            user: session,
            business: {
                id: business.id,
                name: business.name,
                slug: business.slug,
                status: business.status,
                address: business.address,
                phone: business.phone,
                isTrial: business.isTrial,
                trialEndsAt: business.trialEndsAt,
                taxPercent: Number(business.taxPercent ?? 10.0),
                isTaxInclusive: Boolean(business.isTaxInclusive ?? false),
                servicePercent: Number(business.servicePercent ?? 0.0)
            },
            message: isFreeTrial ? `Pendaftaran uji coba gratis berhasil! Masa aktif uji coba ${validTrialDays} hari.` : 'Pendaftaran kafe berhasil! Status saat ini: Menunggu Persetujuan SuperAdmin.'
        };
    }
    static async getProfile(userId) {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: userId
            },
            include: {
                business: true
            }
        });
        if (!user) throw new Error('User tidak ditemukan.');
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            business: user.business
        };
    }
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/modules/pos/core/pos-response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiError",
    ()=>apiError,
    "apiSuccess",
    ()=>apiSuccess,
    "corsHeaders",
    ()=>corsHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
};
function apiSuccess(data, message = 'Success', status = 200) {
    const body = {
        success: true,
        message,
        data
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(body, {
        status,
        headers: corsHeaders
    });
}
function apiError(message = 'An error occurred', status = 400, errors) {
    const body = {
        success: false,
        message,
        ...errors ? {
            errors
        } : {}
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(body, {
        status,
        headers: corsHeaders
    });
}
}),
"[project]/src/app/api/pos/auth/pin-login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-jwt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$auth$2f$auth$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/auth/auth.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-response.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    try {
        const body = await request.json().catch(()=>({}));
        const { businessId, pin } = body;
        const bId = Number(businessId);
        const cleanPin = String(pin || '').trim();
        if (!bId || isNaN(bId)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('ID Outlet/Bisnis wajib dikirim.', 400);
        }
        if (!cleanPin) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('PIN Kasir wajib diisi.', 400);
        }
        // Cari user di tenant toko ini yang memiliki PIN cocok
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
            where: {
                businessId: bId,
                pin: cleanPin
            },
            include: {
                business: true
            }
        });
        if (!user || !user.business) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('PIN Kasir tidak cocok dengan akun staf manapun di outlet ini.', 401);
        }
        if (!user.business.isActive || user.business.status !== 'ACTIVE') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Toko/bisnis saat ini sedang dinonaktifkan atau belum disetujui.', 403);
        }
        const session = {
            userId: user.id,
            businessId: user.business.id,
            name: user.name,
            email: user.email,
            role: user.role,
            businessName: user.business.name,
            permissions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$auth$2f$auth$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveUserPermissions"])(user.role, user.permissions, user.business.rolePermissions)
        };
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signPosToken"])(session);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])({
            token,
            user: session,
            business: {
                id: user.business.id,
                name: user.business.name,
                slug: user.business.slug,
                address: user.business.address,
                phone: user.business.phone,
                receiptNotes: user.business.receiptNotes,
                status: user.business.status,
                isTrial: user.business.isTrial,
                trialEndsAt: user.business.trialEndsAt,
                enableDashboard: user.business.enableDashboard,
                enablePos: user.business.enablePos,
                enableTables: user.business.enableTables,
                enableKds: user.business.enableKds,
                enableProducts: user.business.enableProducts,
                enableInventory: user.business.enableInventory,
                enableCustomers: user.business.enableCustomers,
                enablePromotions: user.business.enablePromotions,
                enableEmployees: user.business.enableEmployees,
                attendanceMode: user.business.attendanceMode,
                enableReports: user.business.enableReports,
                enableSettings: user.business.enableSettings,
                taxPercent: Number(user.business.taxPercent ?? 10.0),
                isTaxInclusive: Boolean(user.business.isTaxInclusive ?? false),
                servicePercent: Number(user.business.servicePercent ?? 0.0)
            }
        }, `Masuk berhasil sebagai ${user.name} (${user.role.toUpperCase()})`);
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal masuk dengan PIN', 500);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cb392051._.js.map