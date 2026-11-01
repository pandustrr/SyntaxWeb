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
"[project]/src/modules/pos/dashboard/dashboard.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosDashboardService",
    ()=>PosDashboardService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
;
class PosDashboardService {
    /**
   * Ringkasan performa penjualan (Hari ini, Minggu ini, Bulan ini)
   */ static async getSummary(businessId) {
        const now = new Date();
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - 7);
        startOfWeek.setHours(0, 0, 0, 0);
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const [todayOrders, weekOrders, monthOrders, totalProducts, totalCustomers] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.findMany({
                where: {
                    businessId,
                    status: {
                        not: 'cancelled'
                    },
                    createdAt: {
                        gte: startOfToday
                    }
                },
                select: {
                    total: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.findMany({
                where: {
                    businessId,
                    status: {
                        not: 'cancelled'
                    },
                    createdAt: {
                        gte: startOfWeek
                    }
                },
                select: {
                    total: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.findMany({
                where: {
                    businessId,
                    status: {
                        not: 'cancelled'
                    },
                    createdAt: {
                        gte: startOfMonth
                    }
                },
                select: {
                    total: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.count({
                where: {
                    businessId,
                    isActive: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCustomer.count({
                where: {
                    businessId
                }
            })
        ]);
        const todayRev = todayOrders.reduce((sum, o)=>sum + Number(o.total), 0);
        const weekRev = weekOrders.reduce((sum, o)=>sum + Number(o.total), 0);
        const monthRev = monthOrders.reduce((sum, o)=>sum + Number(o.total), 0);
        return {
            today: {
                revenue: todayRev,
                orders: todayOrders.length
            },
            week: {
                revenue: weekRev,
                orders: weekOrders.length
            },
            month: {
                revenue: monthRev,
                orders: monthOrders.length
            },
            totals: {
                products: totalProducts,
                customers: totalCustomers
            }
        };
    }
    /**
   * Grafik tren omzet harian
   */ static async getRevenueChart(businessId, days = 7) {
        const result = [];
        const now = new Date();
        for(let i = days - 1; i >= 0; i--){
            const d = new Date(now);
            d.setDate(now.getDate() - i);
            const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
            const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
            const dateStr = dayStart.toISOString().slice(0, 10);
            const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.findMany({
                where: {
                    businessId,
                    status: {
                        not: 'cancelled'
                    },
                    createdAt: {
                        gte: dayStart,
                        lte: dayEnd
                    }
                },
                select: {
                    total: true
                }
            });
            const dayRevenue = orders.reduce((sum, o)=>sum + Number(o.total), 0);
            result.push({
                date: dateStr,
                revenue: dayRevenue,
                orders: orders.length
            });
        }
        return result;
    }
    /**
   * Produk terlaris (Top Selling)
   */ static async getTopProducts(businessId, limit = 5) {
        const items = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrderItem.groupBy({
            by: [
                'productId',
                'productName'
            ],
            where: {
                order: {
                    businessId,
                    status: {
                        not: 'cancelled'
                    }
                }
            },
            _sum: {
                quantity: true,
                subtotal: true
            },
            orderBy: {
                _sum: {
                    quantity: 'desc'
                }
            },
            take: limit
        });
        if (items.length === 0) {
            // Fallback ke produk katalog aktif
            const defaultProds = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.findMany({
                where: {
                    businessId,
                    isActive: true
                },
                take: limit,
                select: {
                    id: true,
                    name: true,
                    price: true
                }
            });
            return defaultProds.map((p)=>({
                    id: p.id,
                    name: p.name,
                    total_qty: 0,
                    revenue: Number(p.price)
                }));
        }
        return items.map((it)=>({
                id: it.productId,
                name: it.productName,
                total_qty: it._sum.quantity || 0,
                revenue: Number(it._sum.subtotal || 0)
            }));
    }
    /**
   * Deteksi stok menipis / kritis (Menu Produk + Bahan Baku Gudang)
   */ static async getLowStock(businessId) {
        const [products, materials] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posProduct.findMany({
                where: {
                    businessId,
                    isActive: true,
                    trackStock: true,
                    stock: {
                        lte: 20
                    }
                },
                include: {
                    category: {
                        select: {
                            name: true
                        }
                    }
                },
                orderBy: {
                    stock: 'asc'
                },
                take: 10
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posMaterial.findMany({
                where: {
                    businessId
                },
                orderBy: {
                    currentStock: 'asc'
                }
            })
        ]);
        const lowMaterials = materials.filter((m)=>Number(m.currentStock) <= Number(m.minimumStock));
        const mappedProducts = products.map((p)=>({
                id: p.id,
                name: p.name,
                type: 'product',
                category: p.category?.name || 'Menu',
                unit: 'porsi',
                current_stock: p.stock ?? 0,
                minimum_stock: 10,
                status: (p.stock ?? 0) <= 0 ? 'out_of_stock' : 'low_stock'
            }));
        const mappedMaterials = lowMaterials.map((m)=>{
            const cur = Number(m.currentStock);
            const min = Number(m.minimumStock);
            return {
                id: m.id,
                name: m.name,
                type: 'material',
                category: m.category || 'Bahan Baku',
                unit: m.unit || 'pcs',
                current_stock: cur,
                minimum_stock: min,
                status: cur <= 0 ? 'out_of_stock' : 'low_stock'
            };
        });
        return [
            ...mappedProducts,
            ...mappedMaterials
        ];
    }
    /**
   * Laporan Penjualan Lengkap (Omzet, HPP/COGS, Profit Bersih, Metode Bayar, Dine-in vs Takeaway)
   */ static async getBusinessReport(businessId, options) {
        const where = {
            businessId,
            status: {
                not: 'cancelled'
            }
        };
        if (options?.dateFrom || options?.dateTo) {
            where.createdAt = {};
            if (options.dateFrom) {
                where.createdAt.gte = new Date(`${options.dateFrom}T00:00:00.000Z`);
            }
            if (options.dateTo) {
                where.createdAt.lte = new Date(`${options.dateTo}T23:59:59.999Z`);
            }
        }
        const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.findMany({
            where,
            include: {
                items: {
                    include: {
                        product: {
                            select: {
                                costPrice: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        let grossRevenue = 0;
        let totalDiscount = 0;
        let totalTax = 0;
        let totalNet = 0;
        let totalEstimatedCOGS = 0;
        const paymentMethods = {
            cash: {
                count: 0,
                total: 0
            },
            qris: {
                count: 0,
                total: 0
            },
            transfer: {
                count: 0,
                total: 0
            }
        };
        const channels = {
            dine_in: {
                count: 0,
                total: 0
            },
            take_away: {
                count: 0,
                total: 0
            }
        };
        for (const order of orders){
            const sub = Number(order.subtotal);
            const disc = Number(order.discount);
            const tax = Number(order.tax);
            const tot = Number(order.total);
            grossRevenue += sub;
            totalDiscount += disc;
            totalTax += tax;
            totalNet += tot;
            // Hitung HPP / COGS estimasi dari costPrice produk
            for (const item of order.items){
                const costPrice = Number(item.product?.costPrice || 0);
                totalEstimatedCOGS += costPrice * item.quantity;
            }
            // Distribusi metode bayar
            const pm = order.paymentMethod.toLowerCase();
            if (!paymentMethods[pm]) {
                paymentMethods[pm] = {
                    count: 0,
                    total: 0
                };
            }
            paymentMethods[pm].count += 1;
            paymentMethods[pm].total += tot;
            // Distribusi channel
            const ch = order.orderType.toLowerCase();
            if (!channels[ch]) {
                channels[ch] = {
                    count: 0,
                    total: 0
                };
            }
            channels[ch].count += 1;
            channels[ch].total += tot;
        }
        const grossProfit = Math.max(0, totalNet - totalEstimatedCOGS);
        const profitMargin = totalNet > 0 ? Math.round(grossProfit / totalNet * 100) : 0;
        const aov = orders.length > 0 ? Math.round(totalNet / orders.length) : 0;
        return {
            total_orders: orders.length,
            gross_revenue: grossRevenue,
            total_discount: totalDiscount,
            total_tax: totalTax,
            net_revenue: totalNet,
            total_cogs: totalEstimatedCOGS,
            gross_profit: grossProfit,
            profit_margin_percent: profitMargin,
            average_order_value: aov,
            payment_methods: paymentMethods,
            channels
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
"[project]/src/app/api/pos/dashboard/revenue-chart/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$dashboard$2f$dashboard$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/dashboard/dashboard.service.ts [app-route] (ecmascript)");
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
        const days = searchParams.get('days') ? Number(searchParams.get('days')) : 7;
        const chart = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$dashboard$2f$dashboard$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosDashboardService"].getRevenueChart(session.businessId, days);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(chart, 'Data grafik omzet berhasil dimuat');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal memuat grafik omzet', 400);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8d8b8c1a._.js.map