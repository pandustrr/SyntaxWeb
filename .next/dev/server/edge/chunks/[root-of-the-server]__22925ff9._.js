(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__22925ff9._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/config/constants.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// App-wide constants
__turbopack_context__.s([
    "ADMIN_ROUTES",
    ()=>ADMIN_ROUTES,
    "APP_EMAIL",
    ()=>APP_EMAIL,
    "APP_LOCATION",
    ()=>APP_LOCATION,
    "APP_NAME",
    ()=>APP_NAME,
    "APP_URL",
    ()=>APP_URL,
    "BRAND_CYAN",
    ()=>BRAND_CYAN,
    "PUBLIC_ROUTES",
    ()=>PUBLIC_ROUTES,
    "SESSION_COOKIE",
    ()=>SESSION_COOKIE,
    "SESSION_MAX_AGE",
    ()=>SESSION_MAX_AGE
]);
const APP_NAME = 'SyntaxWeb';
const APP_EMAIL = 'office@syntaxweb.com';
const APP_LOCATION = 'Jember, Jawa Timur, Indonesia';
const APP_URL = 'https://syntaxweb.com';
const BRAND_CYAN = '#22D3EE';
const SESSION_COOKIE = 'session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const ADMIN_ROUTES = {
    dashboard: '/admin',
    login: '/admin/login',
    projects: '/admin/projects',
    users: '/admin/users'
};
const PUBLIC_ROUTES = {
    home: '/',
    contact: '/contact',
    portfolio: '/portfolio',
    pricelist: '/pricelist',
    partners: '/partners',
    services: '/services'
};
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/constants.ts [middleware-edge] (ecmascript)");
;
;
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
};
function middleware(request) {
    const { pathname } = request.nextUrl;
    // Handle CORS for all API routes (especially POS API used by Flutter web)
    if (pathname.startsWith('/api/')) {
        if (request.method === 'OPTIONS') {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](null, {
                status: 204,
                headers: corsHeaders
            });
        }
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        Object.entries(corsHeaders).forEach(([key, value])=>{
            response.headers.set(key, value);
        });
        return response;
    }
    // Protect admin routes (except login)
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const session = request.cookies.get('session');
        if (!session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ROUTES"].login, request.url));
        }
    }
    // Redirect to dashboard if already logged in
    if (pathname === '/admin/login') {
        const session = request.cookies.get('session');
        if (session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ADMIN_ROUTES"].dashboard, request.url));
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/admin/:path*',
        '/api/:path*'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__22925ff9._.js.map