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
"[project]/src/modules/pos/core/pos-guard.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPosSessionFromRequest",
    ()=>getPosSessionFromRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-jwt.ts [app-route] (ecmascript)");
;
function getPosSessionFromRequest(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    const token = authHeader.substring(7).trim();
    if (!token) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPosToken"])(token);
}
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
"[project]/src/modules/pos/shifts/shift.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosShiftService",
    ()=>PosShiftService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
;
class PosShiftService {
    /**
   * Mengambil shift yang sedang aktif (status: open) untuk toko/outlet ini
   */ static async getCurrentShift(businessId, _userId) {
        // Cari shift toko yang berstatus 'open'
        const shift = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posShift.findFirst({
            where: {
                businessId,
                status: 'open'
            },
            orderBy: {
                id: 'desc'
            },
            include: {
                orders: {
                    select: {
                        id: true,
                        orderNumber: true,
                        total: true,
                        paymentMethod: true,
                        createdAt: true
                    }
                }
            }
        });
        if (!shift) return null;
        // Hitung ringkasan penerimaan kas sementara
        const cashOrders = shift.orders.filter((o)=>o.paymentMethod === 'cash');
        const nonCashOrders = shift.orders.filter((o)=>o.paymentMethod !== 'cash');
        const totalCashSales = cashOrders.reduce((sum, o)=>sum + Number(o.total), 0);
        const totalNonCashSales = nonCashOrders.reduce((sum, o)=>sum + Number(o.total), 0);
        return {
            ...shift,
            summary: {
                orderCount: shift.orders.length,
                totalCashSales,
                totalNonCashSales,
                totalSales: totalCashSales + totalNonCashSales,
                currentEstimatedCash: Number(shift.startingCash) + totalCashSales
            }
        };
    }
    /**
   * Buka shift kasir baru dengan modal uang kas awal (cash float) & tim roster bertugas
   */ static async openShift(businessId, userId, startingCashOrInput, legacyNotes) {
        if (!businessId || businessId <= 0) {
            throw new Error('Akun Anda belum ditautkan ke toko/bisnis POS manapun.');
        }
        const input = typeof startingCashOrInput === 'number' ? {
            startingCash: startingCashOrInput,
            notes: legacyNotes
        } : startingCashOrInput;
        const startingCash = Number(input.startingCash || 0);
        // Cek apakah ada shift yang masih aktif di toko ini
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posShift.findFirst({
            where: {
                businessId,
                status: 'open'
            }
        });
        if (existing) {
            throw new Error(`Outlet ini masih memiliki shift aktif (${existing.shiftName || 'Shift'}) yang belum ditutup.`);
        }
        const formatArray = (val)=>{
            if (!val) return null;
            if (Array.isArray(val)) return JSON.stringify(val);
            return String(val);
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posShift.create({
            data: {
                businessId,
                userId,
                shiftName: input.shiftName || 'Shift 1 (Pagi)',
                cashierNames: formatArray(input.cashierNames),
                baristaNames: formatArray(input.baristaNames),
                kitchenNames: formatArray(input.kitchenNames),
                leaderName: input.leaderName || null,
                openedByName: input.openedByName || null,
                startingCash,
                notes: input.notes || null,
                status: 'open',
                startTime: new Date()
            }
        });
    }
    /**
   * Tutup shift kasir dan hitung rekonsiliasi kas (selisih uang fisik vs sistem)
   */ static async closeShift(businessId, userId, shiftId, actualCash, notes, closedByName) {
        const shift = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posShift.findFirst({
            where: {
                id: shiftId,
                businessId,
                status: 'open'
            },
            include: {
                orders: {
                    where: {
                        paymentStatus: 'paid'
                    }
                }
            }
        });
        if (!shift) {
            throw new Error('Shift aktif tidak ditemukan.');
        }
        // Hitung total penerimaan kas selama shift ini
        const cashSales = shift.orders.filter((o)=>o.paymentMethod === 'cash').reduce((sum, o)=>sum + Number(o.total), 0);
        const expectedCash = Number(shift.startingCash) + cashSales;
        const difference = actualCash - expectedCash;
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posShift.update({
            where: {
                id: shiftId
            },
            data: {
                status: 'closed',
                endTime: new Date(),
                expectedCash,
                actualCash,
                difference,
                closedByName: closedByName || null,
                notes: notes ? shift.notes ? `${shift.notes}\n${notes}` : notes : shift.notes
            }
        });
    }
    /**
   * Mengambil riwayat seluruh shift kasir
   */ static async getShiftHistory(businessId, limit = 30) {
        const shifts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posShift.findMany({
            where: {
                businessId
            },
            orderBy: {
                id: 'desc'
            },
            take: limit,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        username: true
                    }
                },
                orders: {
                    select: {
                        id: true,
                        total: true,
                        paymentMethod: true
                    }
                }
            }
        });
        return shifts.map((s)=>{
            const cashSales = s.orders.filter((o)=>o.paymentMethod === 'cash').reduce((sum, o)=>sum + Number(o.total), 0);
            const totalSales = s.orders.reduce((sum, o)=>sum + Number(o.total), 0);
            return {
                id: s.id,
                user: {
                    name: s.user?.name || 'Kasir'
                },
                cashier_name: s.user?.name || 'Kasir',
                start_time: s.startTime ? s.startTime.toISOString() : null,
                opened_at: s.startTime ? s.startTime.toISOString() : null,
                end_time: s.endTime ? s.endTime.toISOString() : null,
                closed_at: s.endTime ? s.endTime.toISOString() : null,
                status: s.status,
                starting_cash: Number(s.startingCash),
                opening_cash: Number(s.startingCash),
                expected_cash: s.expectedCash ? Number(s.expectedCash) : null,
                actual_cash: s.actualCash ? Number(s.actualCash) : null,
                difference: s.difference ? Number(s.difference) : 0,
                cash_sales: cashSales,
                total_sales: totalSales,
                transaction_count: s.orders.length,
                notes: s.notes
            };
        });
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
"[project]/src/app/api/pos/shifts/history/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$shifts$2f$shift$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/shifts/shift.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-response.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const { searchParams } = new URL(request.url);
        const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 30;
        const history = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$shifts$2f$shift$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosShiftService"].getShiftHistory(session.businessId, limit);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(history, 'Riwayat shift kasir berhasil diambil');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal memuat riwayat shift', 400);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5488ba87._.js.map