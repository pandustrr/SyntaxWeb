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
"[project]/src/modules/pos/materials/material.store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosMaterialService",
    ()=>PosMaterialService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
;
class PosMaterialService {
    static async getMaterials(businessId) {
        try {
            const items = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.findMany({
                where: {
                    businessId
                },
                orderBy: {
                    id: 'asc'
                }
            });
            return items.map((m)=>{
                const cur = Number(m.currentStock);
                const min = Number(m.minimumStock);
                return {
                    id: m.id,
                    name: m.name,
                    category: m.category,
                    unit: m.unit,
                    current_stock: cur,
                    minimum_stock: min,
                    cost_per_unit: Number(m.costPerUnit),
                    status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal'
                };
            });
        } catch (e) {
            console.error('[PosMaterialService.getMaterials] error:', e);
            return [];
        }
    }
    static async createMaterial(businessId, data) {
        const cur = Number(data.current_stock ?? data.currentStock ?? 0);
        const min = Number(data.minimum_stock ?? data.minimumStock ?? 5);
        const cost = Number(data.cost_per_unit ?? data.costPerUnit ?? 10000);
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.create({
            data: {
                businessId,
                name: data.name || 'Bahan Baku Baru',
                category: data.category || 'Lainnya',
                unit: data.unit || 'pcs',
                currentStock: cur,
                minimumStock: min,
                costPerUnit: cost
            }
        });
        return {
            id: created.id,
            name: created.name,
            category: created.category,
            unit: created.unit,
            current_stock: Number(created.currentStock),
            minimum_stock: Number(created.minimumStock),
            cost_per_unit: Number(created.costPerUnit),
            status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal'
        };
    }
    static async adjustStock(businessId, id, type, amount) {
        const item = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!item) throw new Error('Bahan baku tidak ditemukan di outlet Anda');
        const cur = Number(item.currentStock);
        const newStock = type === 'in' ? cur + amount : Math.max(0, cur - amount);
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.update({
            where: {
                id
            },
            data: {
                currentStock: newStock
            }
        });
        const min = Number(updated.minimumStock);
        return {
            id: updated.id,
            name: updated.name,
            category: updated.category,
            unit: updated.unit,
            current_stock: newStock,
            minimum_stock: min,
            cost_per_unit: Number(updated.costPerUnit),
            status: newStock <= 0 ? 'out_of_stock' : newStock <= min ? 'low_stock' : 'normal'
        };
    }
    static async getMaterialById(businessId, id) {
        const item = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!item) throw new Error('Bahan baku tidak ditemukan di outlet Anda');
        const cur = Number(item.currentStock);
        const min = Number(item.minimumStock);
        return {
            id: item.id,
            name: item.name,
            category: item.category,
            unit: item.unit,
            current_stock: cur,
            minimum_stock: min,
            cost_per_unit: Number(item.costPerUnit),
            status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal'
        };
    }
    static async updateMaterial(businessId, id, data) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!existing) throw new Error('Bahan baku tidak ditemukan di outlet Anda');
        const updateData = {};
        if (data.name !== undefined) updateData.name = data.name;
        if (data.category !== undefined) updateData.category = data.category;
        if (data.unit !== undefined) updateData.unit = data.unit;
        if (data.current_stock !== undefined || data.currentStock !== undefined) {
            updateData.currentStock = Number(data.current_stock ?? data.currentStock);
        }
        if (data.minimum_stock !== undefined || data.minimumStock !== undefined) {
            updateData.minimumStock = Number(data.minimum_stock ?? data.minimumStock);
        }
        if (data.cost_per_unit !== undefined || data.costPerUnit !== undefined) {
            updateData.costPerUnit = Number(data.cost_per_unit ?? data.costPerUnit);
        }
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.update({
            where: {
                id
            },
            data: updateData
        });
        const cur = Number(updated.currentStock);
        const min = Number(updated.minimumStock);
        return {
            id: updated.id,
            name: updated.name,
            category: updated.category,
            unit: updated.unit,
            current_stock: cur,
            minimum_stock: min,
            cost_per_unit: Number(updated.costPerUnit),
            status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal'
        };
    }
    static async deleteMaterial(businessId, id) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!existing) throw new Error('Bahan baku tidak ditemukan di outlet Anda');
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.delete({
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
"[project]/src/app/api/pos/materials/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$materials$2f$material$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/materials/material.store.ts [app-route] (ecmascript)");
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
        const materials = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$materials$2f$material$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosMaterialService"].getMaterials(session.businessId);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(materials, 'Data inventori bahan baku berhasil dimuat');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal memuat bahan baku', 400);
    }
}
async function POST(request) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const body = await request.json();
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$materials$2f$material$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosMaterialService"].createMaterial(session.businessId, body);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(created, 'Bahan baku berhasil ditambahkan', 201);
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal menambahkan bahan baku', 400);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9a05ffa1._.js.map