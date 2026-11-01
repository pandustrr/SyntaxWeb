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
"[project]/src/modules/pos/customers/customer.store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosCustomerService",
    ()=>PosCustomerService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
;
class PosCustomerService {
    static async getCustomers(businessId, query = '') {
        try {
            const q = query.trim();
            const whereClause = {
                businessId
            };
            if (q) {
                whereClause.OR = [
                    {
                        name: {
                            contains: q
                        }
                    },
                    {
                        phone: {
                            contains: q
                        }
                    },
                    {
                        email: {
                            contains: q
                        }
                    }
                ];
            }
            const list = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCustomer.findMany({
                where: whereClause,
                orderBy: {
                    id: 'desc'
                }
            });
            return list.map((c)=>({
                    id: c.id,
                    name: c.name,
                    phone: c.phone || '',
                    email: c.email || '',
                    total_points: c.totalPoints,
                    total_spend: Number(c.totalSpend),
                    total_visit: c.totalVisit,
                    membership_level: {
                        name: c.membershipLevel || 'Bronze'
                    }
                }));
        } catch (e) {
            console.error('[PosCustomerService.getCustomers] error:', e);
            return [];
        }
    }
    static async createCustomer(businessId, data) {
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCustomer.create({
            data: {
                businessId,
                name: data.name || 'Pelanggan Baru',
                phone: data.phone || '',
                email: data.email || '',
                totalPoints: Number(data.total_points ?? 0),
                totalSpend: Number(data.total_spend ?? 0),
                totalVisit: Number(data.total_visit ?? 1),
                membershipLevel: data.membership_level?.name || 'Bronze'
            }
        });
        return {
            id: created.id,
            name: created.name,
            phone: created.phone || '',
            email: created.email || '',
            total_points: created.totalPoints,
            total_spend: Number(created.totalSpend),
            total_visit: created.totalVisit,
            membership_level: {
                name: created.membershipLevel
            }
        };
    }
    static async updateCustomer(businessId, id, data) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCustomer.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!existing) throw new Error('Pelanggan tidak ditemukan di outlet Anda');
        const updateData = {};
        if (data.name !== undefined) updateData.name = data.name;
        if (data.phone !== undefined) updateData.phone = data.phone;
        if (data.email !== undefined) updateData.email = data.email;
        if (data.total_points !== undefined) updateData.totalPoints = Number(data.total_points);
        if (data.total_spend !== undefined) updateData.totalSpend = Number(data.total_spend);
        if (data.total_visit !== undefined) updateData.totalVisit = Number(data.total_visit);
        if (data.membership_level?.name) updateData.membershipLevel = data.membership_level.name;
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCustomer.update({
            where: {
                id
            },
            data: updateData
        });
        return {
            id: updated.id,
            name: updated.name,
            phone: updated.phone || '',
            email: updated.email || '',
            total_points: updated.totalPoints,
            total_spend: Number(updated.totalSpend),
            total_visit: updated.totalVisit,
            membership_level: {
                name: updated.membershipLevel
            }
        };
    }
    static async deleteCustomer(businessId, id) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCustomer.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!existing) throw new Error('Pelanggan tidak ditemukan di outlet Anda');
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCustomer.delete({
            where: {
                id
            }
        });
        return true;
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
"[project]/src/app/api/pos/customers/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$customers$2f$customer$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/customers/customer.store.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-response.ts [app-route] (ecmascript)");
;
;
;
async function PUT(request, { params }) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const { id } = await params;
        const body = await request.json();
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$customers$2f$customer$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosCustomerService"].updateCustomer(session.businessId, Number(id), body);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(updated, 'Data pelanggan berhasil diperbarui');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal memperbarui pelanggan', 400);
    }
}
async function DELETE(request, { params }) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const { id } = await params;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$customers$2f$customer$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosCustomerService"].deleteCustomer(session.businessId, Number(id));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(null, 'Pelanggan berhasil dihapus');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal menghapus pelanggan', 400);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ea048a54._.js.map