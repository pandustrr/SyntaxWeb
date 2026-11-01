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
"[project]/src/modules/pos/products/product.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosProductService",
    ()=>PosProductService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
;
class PosProductService {
    /**
   * Mengambil daftar kategori untuk tenant yang bersangkutan
   */ static async getCategories(businessId) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCategory.findMany({
            where: {
                businessId
            },
            orderBy: {
                sortOrder: 'asc'
            },
            include: {
                _count: {
                    select: {
                        products: true
                    }
                }
            }
        });
    }
    /**
   * Tambah kategori baru
   */ static async createCategory(businessId, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCategory.create({
            data: {
                businessId,
                name: data.name,
                icon: data.icon || 'coffee'
            }
        });
    }
    /**
   * Update kategori
   */ static async updateCategory(businessId, id, data) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCategory.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!existing) {
            throw new Error('Kategori tidak ditemukan atau Anda tidak memiliki akses.');
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCategory.update({
            where: {
                id
            },
            data
        });
    }
    /**
   * Hapus kategori
   */ static async deleteCategory(businessId, id) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCategory.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!existing) {
            throw new Error('Kategori tidak ditemukan atau Anda tidak memiliki akses.');
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCategory.delete({
            where: {
                id
            }
        });
    }
    /**
   * Tambah produk baru
   */ static async createProduct(businessId, data) {
        let finalDesc = data.description || null;
        if (data.modifierGroups && Array.isArray(data.modifierGroups)) {
            finalDesc = JSON.stringify({
                text: typeof data.description === 'string' ? data.description : '',
                modifierGroups: data.modifierGroups
            });
        }
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.create({
            data: {
                businessId,
                categoryId: data.categoryId || data.category_id ? Number(data.categoryId || data.category_id) : null,
                name: data.name,
                sku: data.sku || `SKU-${Date.now()}`,
                price: Number(data.price),
                costPrice: data.costPrice !== undefined ? Number(data.costPrice) : data.cost_price !== undefined ? Number(data.cost_price) : 0,
                stock: data.stock !== undefined ? Number(data.stock) : 50,
                trackStock: data.trackStock !== undefined ? Boolean(data.trackStock) : data.track_stock !== undefined ? Boolean(data.track_stock) : true,
                image: data.image || null,
                description: finalDesc,
                isActive: data.isActive !== undefined ? Boolean(data.isActive) : data.is_active !== undefined ? Boolean(data.is_active) : true
            }
        });
        if (Array.isArray(data.variants) && data.variants.length > 0) {
            for (const v of data.variants){
                if (!v.name) continue;
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProductVariant.create({
                    data: {
                        productId: created.id,
                        name: v.name,
                        priceAdjustment: Number(v.priceAdjustment || v.price_adjustment || 0),
                        stock: v.stock !== undefined ? Number(v.stock) : null
                    }
                });
            }
        }
        return await this.getProductById(businessId, created.id);
    }
    /**
   * Update produk
   */ static async updateProduct(businessId, id, data) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!existing) {
            throw new Error('Produk tidak ditemukan atau Anda tidak memiliki akses.');
        }
        const updateData = {};
        if (data.name !== undefined) updateData.name = data.name;
        if (data.price !== undefined) updateData.price = Number(data.price);
        if (data.costPrice !== undefined) updateData.costPrice = Number(data.costPrice);
        else if (data.cost_price !== undefined) updateData.costPrice = Number(data.cost_price);
        if (data.stock !== undefined) updateData.stock = Number(data.stock);
        if (data.categoryId !== undefined || data.category_id !== undefined) {
            updateData.categoryId = data.categoryId ? Number(data.categoryId) : data.category_id ? Number(data.category_id) : null;
        }
        if (data.sku !== undefined) updateData.sku = data.sku;
        if (data.image !== undefined) updateData.image = data.image;
        if (data.description !== undefined || data.modifierGroups !== undefined) {
            if (data.modifierGroups && Array.isArray(data.modifierGroups)) {
                updateData.description = JSON.stringify({
                    text: typeof data.description === 'string' ? data.description : existing.description || '',
                    modifierGroups: data.modifierGroups
                });
            } else if (data.description !== undefined) {
                updateData.description = data.description;
            }
        }
        if (data.trackStock !== undefined) updateData.trackStock = Boolean(data.trackStock);
        else if (data.track_stock !== undefined) updateData.trackStock = Boolean(data.track_stock);
        if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);
        else if (data.is_active !== undefined) updateData.isActive = Boolean(data.is_active);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.update({
            where: {
                id
            },
            data: updateData
        });
        if (Array.isArray(data.variants)) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProductVariant.deleteMany({
                where: {
                    productId: id
                }
            });
            for (const v of data.variants){
                if (!v.name) continue;
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProductVariant.create({
                    data: {
                        productId: id,
                        name: v.name,
                        priceAdjustment: Number(v.priceAdjustment || v.price_adjustment || 0),
                        stock: v.stock !== undefined ? Number(v.stock) : null
                    }
                });
            }
        }
        return await this.getProductById(businessId, id);
    }
    static parseModifierGroups(description) {
        if (!description) return [];
        try {
            const parsed = JSON.parse(description);
            if (parsed && Array.isArray(parsed.modifierGroups)) {
                return parsed.modifierGroups;
            }
            if (Array.isArray(parsed)) {
                return parsed;
            }
        } catch (_) {}
        return [];
    }
    /**
   * Mengambil detail produk tunggal lengkap (varian + resep)
   */ static async getProductById(businessId, id) {
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.findFirst({
            where: {
                id,
                businessId
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        icon: true
                    }
                },
                variants: {
                    select: {
                        id: true,
                        name: true,
                        priceAdjustment: true,
                        stock: true
                    }
                },
                recipes: {
                    include: {
                        material: {
                            select: {
                                id: true,
                                name: true,
                                unit: true,
                                costPerUnit: true,
                                currentStock: true
                            }
                        }
                    }
                }
            }
        });
        if (!product) {
            throw new Error('Produk tidak ditemukan atau Anda tidak memiliki akses.');
        }
        return {
            ...product,
            modifierGroups: this.parseModifierGroups(product.description)
        };
    }
    /**
   * Hapus produk
   */ static async deleteProduct(businessId, id) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.findFirst({
            where: {
                id,
                businessId
            }
        });
        if (!existing) {
            throw new Error('Produk tidak ditemukan atau Anda tidak memiliki akses.');
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.delete({
            where: {
                id
            }
        });
    }
    /**
   * Mengambil katalog produk + varian untuk kasir
   */ static async getProducts(businessId, options) {
        const { categoryId, search } = options || {};
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.findMany({
            where: {
                businessId,
                isActive: true,
                ...categoryId ? {
                    categoryId
                } : {},
                ...search ? {
                    OR: [
                        {
                            name: {
                                contains: search
                            }
                        },
                        {
                            sku: {
                                contains: search
                            }
                        }
                    ]
                } : {}
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        icon: true
                    }
                },
                variants: {
                    select: {
                        id: true,
                        name: true,
                        priceAdjustment: true,
                        stock: true
                    }
                }
            },
            orderBy: {
                name: 'asc'
            }
        });
        return products.map((p)=>({
                ...p,
                modifierGroups: this.parseModifierGroups(p.description)
            }));
    }
    /**
   * Mengambil daftar meja cafe
   */ static async getTables(businessId) {
        const tables = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCafeTable.findMany({
            where: {
                businessId
            },
            orderBy: {
                name: 'asc'
            },
            include: {
                orders: {
                    where: {
                        status: {
                            not: 'cancelled'
                        }
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 1,
                    select: {
                        id: true,
                        status: true
                    }
                }
            }
        });
        return tables.map((t)=>({
                id: t.id,
                name: t.name,
                code: t.name,
                capacity: t.capacity,
                status: t.status,
                current_order_id: t.orders[0]?.id || null,
                createdAt: t.createdAt,
                updatedAt: t.updatedAt
            }));
    }
    /**
   * Tambah meja cafe baru
   */ static async createTable(businessId, data) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCafeTable.create({
            data: {
                businessId,
                name: data.name,
                capacity: data.capacity || 4,
                status: data.status || 'available'
            }
        });
    }
    /**
   * Update meja cafe
   */ static async updateTable(businessId, tableId, data) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCafeTable.findFirst({
            where: {
                id: tableId,
                businessId
            }
        });
        if (!existing) {
            throw new Error('Meja tidak ditemukan atau Anda tidak memiliki akses.');
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCafeTable.update({
            where: {
                id: tableId
            },
            data
        });
    }
    /**
   * Hapus meja cafe
   */ static async deleteTable(businessId, tableId) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCafeTable.findFirst({
            where: {
                id: tableId,
                businessId
            }
        });
        if (!existing) {
            throw new Error('Meja tidak ditemukan atau Anda tidak memiliki akses.');
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCafeTable.delete({
            where: {
                id: tableId
            }
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
"[project]/src/app/api/pos/products/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$products$2f$product$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/products/product.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-response.ts [app-route] (ecmascript)");
;
;
;
async function GET(request, { params }) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const { id } = await params;
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$products$2f$product$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosProductService"].getProductById(session.businessId, Number(id));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(product, 'Detail produk berhasil diambil');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Produk tidak ditemukan', 404);
    }
}
async function PUT(request, { params }) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const { id } = await params;
        const body = await request.json();
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$products$2f$product$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosProductService"].updateProduct(session.businessId, Number(id), body);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(updated, 'Produk berhasil diperbarui');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal memperbarui produk', 400);
    }
}
async function DELETE(request, { params }) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const { id } = await params;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$products$2f$product$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosProductService"].deleteProduct(session.businessId, Number(id));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(null, 'Produk berhasil dihapus');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal menghapus produk', 400);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8b4c75b4._.js.map