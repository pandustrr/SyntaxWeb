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
"[project]/src/modules/pos/orders/order.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosOrderService",
    ()=>PosOrderService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/db/prisma.ts [app-route] (ecmascript)");
;
class PosOrderService {
    /**
   * Transaksi checkout kasir (DB Transaction aman: buat order & kurangi stok)
   */ static async createOrder(businessId, userId, input) {
        if (!businessId || businessId <= 0) {
            throw new Error('Akun Anda belum ditautkan ke toko/bisnis POS manapun.');
        }
        if (!input.items || input.items.length === 0) {
            throw new Error('Keranjang belanja tidak boleh kosong.');
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // 1. Ambil data produk yang dibeli + varian + resep bahan baku
            const productIds = input.items.map((i)=>i.productId);
            const products = await tx.posProduct.findMany({
                where: {
                    id: {
                        in: productIds
                    },
                    businessId
                },
                include: {
                    variants: true,
                    recipes: {
                        include: {
                            material: true
                        }
                    }
                }
            });
            const productMap = new Map(products.map((p)=>[
                    p.id,
                    p
                ]));
            // 2. Kalkulasi subtotal dari server (tidak percaya angka mentah dari client)
            let subtotal = 0;
            const preparedItems = [];
            for (const item of input.items){
                const product = productMap.get(item.productId);
                if (!product) {
                    throw new Error(`Produk dengan ID #${item.productId} tidak ditemukan.`);
                }
                let unitPrice = Number(product.price);
                let variantName = '';
                if (item.variantId) {
                    const variant = product.variants.find((v)=>v.id === item.variantId);
                    if (!variant) {
                        throw new Error(`Varian tidak valid untuk produk ${product.name}.`);
                    }
                    unitPrice += Number(variant.priceAdjustment);
                    variantName = ` (${variant.name})`;
                }
                let modifierPrice = 0;
                let modifierSummary = '';
                if (Array.isArray(item.modifiers) && item.modifiers.length > 0) {
                    for (const m of item.modifiers){
                        const mPrice = Number(m.price || 0) * Number(m.quantity || 1);
                        modifierPrice += mPrice;
                    }
                    const modNames = item.modifiers.map((m)=>m.name).join(', ');
                    modifierSummary = ` + [${modNames}]`;
                }
                unitPrice += modifierPrice;
                const lineSubtotal = unitPrice * item.quantity;
                subtotal += lineSubtotal;
                // Kurangi stok jika produk memantau stok (trackStock)
                if (product.trackStock) {
                    if (product.stock < item.quantity) {
                        throw new Error(`Stok ${product.name} tidak mencukupi (sisa ${product.stock}).`);
                    }
                    await tx.posProduct.update({
                        where: {
                            id: product.id
                        },
                        data: {
                            stock: {
                                decrement: item.quantity
                            }
                        }
                    });
                    // Kurangi stok varian jika varian mencatat stok
                    if (item.variantId) {
                        const variant = product.variants.find((v)=>v.id === item.variantId);
                        if (variant && variant.stock !== null) {
                            await tx.posProductVariant.update({
                                where: {
                                    id: item.variantId
                                },
                                data: {
                                    stock: {
                                        decrement: item.quantity
                                    }
                                }
                            });
                        }
                    }
                }
                // Otomatisasi pemotongan bahan baku resep (BOM)
                if (product.recipes && product.recipes.length > 0) {
                    for (const recipe of product.recipes){
                        const recipeAmount = Number(recipe.amount);
                        if (recipeAmount > 0) {
                            const neededAmount = recipeAmount * item.quantity;
                            await tx.posMaterial.update({
                                where: {
                                    id: recipe.materialId
                                },
                                data: {
                                    currentStock: {
                                        decrement: neededAmount
                                    }
                                }
                            });
                        }
                    }
                }
                const fullNotes = [
                    item.notes,
                    modifierSummary ? `Add-on: ${item.modifiers.map((m)=>`${m.name}${Number(m.price) > 0 ? ` (+Rp ${m.price})` : ''}`).join(', ')}` : null
                ].filter(Boolean).join(' | ');
                preparedItems.push({
                    productId: product.id,
                    variantId: item.variantId || null,
                    productName: `${product.name}${variantName}${modifierSummary}`,
                    price: unitPrice,
                    quantity: item.quantity,
                    subtotal: lineSubtotal,
                    notes: fullNotes || null
                });
            }
            // 3. Validasi & Kalkulasi Voucher Promo
            let discount = Number(input.discount || 0);
            let appliedPromoCode = null;
            if (input.promoCode) {
                const cleanCode = input.promoCode.trim().toUpperCase();
                const promo = await tx.posPromotion.findFirst({
                    where: {
                        businessId,
                        code: cleanCode,
                        isActive: true
                    }
                });
                if (promo) {
                    const now = new Date();
                    const isNotExpired = !promo.endDate || new Date(promo.endDate) >= now;
                    const hasQuota = promo.usageLimit === null || promo.usageCount < promo.usageLimit;
                    const meetsMinPurchase = subtotal >= Number(promo.minPurchase);
                    if (isNotExpired && hasQuota && meetsMinPurchase) {
                        appliedPromoCode = promo.code;
                        let promoDiscount = 0;
                        if (promo.type === 'percentage') {
                            promoDiscount = Math.round(subtotal * Number(promo.discountValue) / 100);
                        } else {
                            promoDiscount = Number(promo.discountValue);
                        }
                        discount = Math.max(discount, promoDiscount);
                        await tx.posPromotion.update({
                            where: {
                                id: promo.id
                            },
                            data: {
                                usageCount: {
                                    increment: 1
                                }
                            }
                        });
                    }
                }
            }
            // 4. Kalkulasi total
            const tax = Number(input.tax || 0);
            const total = Math.max(0, subtotal - discount + tax);
            const paidAmount = Number(input.paidAmount || 0);
            if (input.paymentMethod === 'cash' && paidAmount < total) {
                throw new Error(`Jumlah bayar tunai (Rp ${paidAmount}) kurang dari total tagihan (Rp ${total}).`);
            }
            const changeAmount = input.paymentMethod === 'cash' ? Math.max(0, paidAmount - total) : 0;
            // 5. Auto-link ke Shift kasir aktif bila tidak dikirim & validasi tenant shift
            let resolvedShiftId = null;
            if (input.shiftId) {
                const targetShift = await tx.posShift.findFirst({
                    where: {
                        id: input.shiftId,
                        businessId,
                        status: 'open'
                    },
                    select: {
                        id: true
                    }
                });
                if (targetShift) {
                    resolvedShiftId = targetShift.id;
                }
            }
            if (!resolvedShiftId) {
                const openShift = await tx.posShift.findFirst({
                    where: {
                        businessId,
                        userId,
                        status: 'open'
                    },
                    orderBy: {
                        id: 'desc'
                    },
                    select: {
                        id: true
                    }
                });
                if (openShift) {
                    resolvedShiftId = openShift.id;
                }
            }
            // 6. Integrasi CRM Member Loyalitas
            let resolvedCustomerId = null;
            if (input.customerId) {
                const customer = await tx.posCustomer.findFirst({
                    where: {
                        id: input.customerId,
                        businessId
                    }
                });
                if (customer) {
                    resolvedCustomerId = customer.id;
                    const pointsEarned = Math.floor(total / 10000); // 1 Poin per kelipatan Rp 10.000
                    const newTotalSpend = Number(customer.totalSpend) + total;
                    // Auto-upgrade tier membership
                    let newLevel = customer.membershipLevel;
                    if (newTotalSpend >= 5000000) newLevel = 'Platinum';
                    else if (newTotalSpend >= 2000000) newLevel = 'Gold';
                    else if (newTotalSpend >= 500000) newLevel = 'Silver';
                    await tx.posCustomer.update({
                        where: {
                            id: customer.id
                        },
                        data: {
                            totalSpend: {
                                increment: total
                            },
                            totalVisit: {
                                increment: 1
                            },
                            totalPoints: {
                                increment: pointsEarned
                            },
                            membershipLevel: newLevel
                        }
                    });
                }
            }
            // 7. Otomatisasi Status Meja Dine-in -> Occupied & Validasi Tenant Meja
            const orderType = input.orderType || 'dine_in';
            let resolvedTableId = null;
            if (input.tableId) {
                const table = await tx.posCafeTable.findFirst({
                    where: {
                        id: input.tableId,
                        businessId
                    }
                });
                if (table) {
                    resolvedTableId = table.id;
                    if (orderType === 'dine_in') {
                        await tx.posCafeTable.update({
                            where: {
                                id: table.id
                            },
                            data: {
                                status: 'occupied'
                            }
                        });
                    }
                }
            }
            // 8. Generate Order Number unik anti-bentrok: TRX-[BIZ]-[YYYYMMDD]-[SEQ]-[RANDOM]
            const today = new Date();
            const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
            const bizPrefix = String(businessId).padStart(2, '0');
            const countToday = await tx.posOrder.count({
                where: {
                    businessId,
                    createdAt: {
                        gte: new Date(today.getFullYear(), today.getMonth(), today.getDate())
                    }
                }
            });
            // Loop pencegahan benturan milidetik saat multi-device checkout serentak
            let orderNumber = '';
            let isUnique = false;
            let attempt = 0;
            while(!isUnique && attempt < 5){
                attempt++;
                const randomSuffix = Math.floor(1000 + Math.random() * 9000);
                const sequence = String(countToday + attempt).padStart(4, '0');
                orderNumber = `TRX-${bizPrefix}-${dateStr}-${sequence}-${randomSuffix}`;
                const existing = await tx.posOrder.findFirst({
                    where: {
                        orderNumber
                    },
                    select: {
                        id: true
                    }
                });
                if (!existing) {
                    isUnique = true;
                }
            }
            // 9. Simpan Order & Items
            const order = await tx.posOrder.create({
                data: {
                    businessId,
                    userId,
                    customerId: resolvedCustomerId,
                    shiftId: resolvedShiftId,
                    tableId: resolvedTableId,
                    promoCode: appliedPromoCode,
                    orderNumber,
                    orderType,
                    subtotal,
                    discount,
                    tax,
                    total,
                    paymentMethod: input.paymentMethod,
                    paymentStatus: 'paid',
                    paidAmount: input.paymentMethod === 'cash' ? paidAmount : total,
                    changeAmount,
                    status: input.status || (orderType === 'dine_in' ? 'pending' : 'completed'),
                    notes: input.notes || null,
                    createdAt: input.createdAt ? new Date(input.createdAt) : undefined,
                    items: {
                        create: preparedItems
                    }
                },
                include: {
                    items: true,
                    table: true,
                    customer: {
                        select: {
                            id: true,
                            name: true,
                            phone: true,
                            membershipLevel: true,
                            totalPoints: true
                        }
                    },
                    user: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    business: {
                        select: {
                            name: true,
                            address: true,
                            phone: true,
                            receiptNotes: true,
                            receiptHeader: true,
                            receiptFooter: true,
                            receiptPaperSize: true,
                            showLogoOnReceipt: true,
                            showWifiOnReceipt: true,
                            wifiPassword: true
                        }
                    }
                }
            });
            return order;
        });
    }
    /**
   * Mengambil riwayat transaksi terkini untuk kasir & KDS
   */ static async getOrderHistory(businessId, options) {
        const where = {
            businessId
        };
        if (options?.status && options.status !== 'all') {
            if (options.status === 'active' || options.status === 'kds') {
                where.status = {
                    in: [
                        'pending',
                        'preparing',
                        'ready'
                    ]
                };
            } else {
                where.status = options.status;
            }
        }
        if (options?.tableId) {
            where.tableId = options.tableId;
        }
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
            take: options?.limit || 50,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: true,
                table: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                customer: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        membershipLevel: true,
                        totalPoints: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        return orders.map((o)=>({
                ...o,
                order_number: o.orderNumber,
                payment_method: o.paymentMethod,
                channel: o.orderType,
                created_at: o.createdAt.toISOString(),
                cafe_table: o.table ? {
                    id: o.table.id,
                    code: o.table.name,
                    name: o.table.name
                } : null,
                customer: o.customer ? {
                    id: o.customer.id,
                    name: o.customer.name,
                    phone: o.customer.phone,
                    membershipLevel: o.customer.membershipLevel
                } : {
                    name: 'Pelanggan Umum'
                },
                items: o.items.map((it)=>({
                        ...it,
                        name_snapshot: it.productName,
                        unit_price: Number(it.price)
                    }))
            }));
    }
    /**
   * Mengambil detail transaksi tunggal lengkap (untuk cetak ulang struk / popup detail)
   */ static async getOrderById(businessId, orderId) {
        const order = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.findFirst({
            where: {
                id: orderId,
                businessId
            },
            include: {
                items: {
                    include: {
                        variant: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                },
                table: {
                    select: {
                        id: true,
                        name: true,
                        capacity: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                customer: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        email: true,
                        membershipLevel: true,
                        totalPoints: true
                    }
                },
                business: {
                    select: {
                        id: true,
                        name: true,
                        address: true,
                        phone: true,
                        logoUrl: true,
                        receiptHeader: true,
                        receiptFooter: true,
                        receiptNotes: true,
                        receiptPaperSize: true,
                        showLogoOnReceipt: true,
                        showWifiOnReceipt: true,
                        wifiPassword: true,
                        taxPercent: true,
                        isTaxInclusive: true,
                        servicePercent: true
                    }
                }
            }
        });
        if (!order) {
            throw new Error('Pesanan tidak ditemukan atau Anda tidak memiliki akses.');
        }
        return {
            ...order,
            order_number: order.orderNumber,
            payment_method: order.paymentMethod,
            channel: order.orderType,
            created_at: order.createdAt.toISOString(),
            cafe_table: order.table ? {
                id: order.table.id,
                code: order.table.name,
                name: order.table.name
            } : null,
            customer: order.customer || {
                name: 'Pelanggan Umum'
            },
            items: order.items.map((it)=>({
                    ...it,
                    name_snapshot: it.productName,
                    unit_price: Number(it.price)
                }))
        };
    }
    /**
   * Update status pesanan (e.g. pending -> processing -> ready -> completed)
   * Otomatis membebaskan meja saat completed / cancelled jika tidak ada order aktif lain
   */ static async updateOrderStatus(businessId, orderId, status) {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.findFirst({
            where: {
                id: orderId,
                businessId
            }
        });
        if (!existing) {
            throw new Error('Pesanan tidak ditemukan atau Anda tidak memiliki akses.');
        }
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.update({
            where: {
                id: orderId
            },
            data: {
                status
            }
        });
        // Lepas status meja jika pesanan selesai atau dibatalkan
        if ([
            'completed',
            'cancelled'
        ].includes(status) && existing.tableId) {
            const remainingOrders = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.count({
                where: {
                    businessId,
                    tableId: existing.tableId,
                    id: {
                        not: orderId
                    },
                    status: {
                        in: [
                            'pending',
                            'preparing',
                            'ready'
                        ]
                    }
                }
            });
            if (remainingOrders === 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posCafeTable.updateMany({
                    where: {
                        id: existing.tableId,
                        businessId
                    },
                    data: {
                        status: 'available'
                    }
                });
            }
        }
        return updated;
    }
    /**
   * Batalkan pesanan dan kembalikan stok produk, varian, dan bahan baku resep (BOM)
   */ static async cancelOrder(businessId, orderId, reason) {
        const order = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].posOrder.findFirst({
            where: {
                id: orderId,
                businessId
            },
            include: {
                items: true
            }
        });
        if (!order) {
            throw new Error('Pesanan tidak ditemukan atau Anda tidak memiliki akses.');
        }
        if (order.status === 'cancelled') {
            return order;
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$db$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // 1. Kembalikan stok item produk yang sebelumnya telah dipotong
            for (const item of order.items){
                const product = await tx.posProduct.findUnique({
                    where: {
                        id: item.productId
                    }
                });
                if (product && product.trackStock) {
                    await tx.posProduct.update({
                        where: {
                            id: item.productId
                        },
                        data: {
                            stock: {
                                increment: item.quantity
                            }
                        }
                    });
                    if (item.variantId) {
                        await tx.posProductVariant.update({
                            where: {
                                id: item.variantId
                            },
                            data: {
                                stock: {
                                    increment: item.quantity
                                }
                            }
                        });
                    }
                }
            }
            // 2. Kembalikan stok bahan baku resep (BOM)
            const orderProducts = await tx.posProduct.findMany({
                where: {
                    id: {
                        in: order.items.map((it)=>it.productId)
                    }
                },
                include: {
                    recipes: true
                }
            });
            const prodMap = new Map(orderProducts.map((p)=>[
                    p.id,
                    p
                ]));
            for (const item of order.items){
                const prod = prodMap.get(item.productId);
                if (prod && prod.recipes && prod.recipes.length > 0) {
                    for (const recipe of prod.recipes){
                        const returnAmount = Number(recipe.amount) * item.quantity;
                        await tx.posMaterial.update({
                            where: {
                                id: recipe.materialId
                            },
                            data: {
                                currentStock: {
                                    increment: returnAmount
                                }
                            }
                        });
                    }
                }
            }
            // 3. Rollback loyalitas CRM jika transaksi punya member
            if (order.customerId) {
                const pointsDeducted = Math.floor(Number(order.total) / 10000);
                await tx.posCustomer.update({
                    where: {
                        id: order.customerId
                    },
                    data: {
                        totalSpend: {
                            decrement: Number(order.total)
                        },
                        totalVisit: {
                            decrement: 1
                        },
                        totalPoints: {
                            decrement: pointsDeducted
                        }
                    }
                });
            }
            // 4. Rollback pemakaian promo
            if (order.promoCode) {
                await tx.posPromotion.updateMany({
                    where: {
                        businessId,
                        code: order.promoCode
                    },
                    data: {
                        usageCount: {
                            decrement: 1
                        }
                    }
                });
            }
            // 5. Bebaskan meja jika tidak ada order aktif lain
            if (order.tableId) {
                const remainingOrders = await tx.posOrder.count({
                    where: {
                        businessId,
                        tableId: order.tableId,
                        id: {
                            not: order.id
                        },
                        status: {
                            in: [
                                'pending',
                                'preparing',
                                'ready'
                            ]
                        }
                    }
                });
                if (remainingOrders === 0) {
                    await tx.posCafeTable.updateMany({
                        where: {
                            id: order.tableId,
                            businessId
                        },
                        data: {
                            status: 'available'
                        }
                    });
                }
            }
            return await tx.posOrder.update({
                where: {
                    id: orderId
                },
                data: {
                    status: 'cancelled',
                    notes: reason ? `Dibatalkan: ${reason}` : 'Dibatalkan oleh kasir/dapur'
                }
            });
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
"[project]/src/app/api/pos/orders/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$orders$2f$order$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/orders/order.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pos/core/pos-response.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const body = await request.json();
        const order = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$orders$2f$order$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosOrderService"].createOrder(session.businessId, session.userId, {
            orderType: body.orderType || body.order_type || (body.channel === 'dine_in' ? 'dine_in' : body.channel === 'take_away' ? 'take_away' : 'dine_in'),
            tableId: body.tableId !== undefined ? body.tableId : body.table_id !== undefined ? body.table_id : body.cafe_table_id,
            customerId: body.customerId !== undefined ? body.customerId : body.customer_id,
            shiftId: body.shiftId !== undefined ? body.shiftId : body.shift_id,
            promoCode: body.promoCode || body.promo_code,
            discount: body.discount !== undefined ? Number(body.discount) : 0,
            tax: body.tax !== undefined ? Number(body.tax) : 0,
            paymentMethod: body.paymentMethod || body.payment_method || 'cash',
            paidAmount: body.paidAmount !== undefined ? Number(body.paidAmount) : Number(body.paid_amount || 0),
            status: body.status || undefined,
            notes: body.notes,
            createdAt: body.createdAt || body.created_at || undefined,
            items: (body.items || []).map((it)=>({
                    productId: it.productId || it.product_id,
                    variantId: it.variantId || it.variant_id || null,
                    quantity: Number(it.quantity || 1),
                    notes: it.notes
                }))
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(order, 'Transaksi kasir berhasil disimpan', 201);
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal menyimpan transaksi', 400);
    }
}
async function GET(request) {
    try {
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosSessionFromRequest"])(request);
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])('Unauthorized', 401);
        }
        const { searchParams } = new URL(request.url);
        const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 50;
        const status = searchParams.get('status') || undefined;
        const dateFrom = searchParams.get('date_from') || undefined;
        const dateTo = searchParams.get('date_to') || undefined;
        const tableParam = searchParams.get('cafe_table_id') || searchParams.get('table_id') || searchParams.get('tableId');
        const tableId = tableParam ? Number(tableParam) : undefined;
        const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$orders$2f$order$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PosOrderService"].getOrderHistory(session.businessId, {
            limit,
            status,
            dateFrom,
            dateTo,
            tableId
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiSuccess"])(orders, 'Riwayat transaksi berhasil diambil');
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pos$2f$core$2f$pos$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apiError"])(error.message || 'Gagal mengambil riwayat transaksi', 400);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c3ba5320._.js.map