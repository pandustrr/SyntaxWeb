module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/ThemeProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeProvider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/translations/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    id: {
        nav: {
            contact: 'Kontak',
            home: 'Beranda',
            pricelist: 'Daftar Harga',
            partners: 'Partner'
        },
        pricelist: {
            title: 'Investasi',
            subtitle: 'Digital',
            description: 'Dari Konsep Menuju Inovasi Cerdas. Pilih paket yang sesuai dengan kebutuhan bisnis Anda.',
            plans: [
                {
                    name: 'Starter Website',
                    price: 'Rp 999.000',
                    desc: 'Cocok untuk UMKM atau personal brand yang baru mulai online.',
                    pages: [
                        'Landing Page',
                        'Home',
                        'About',
                        'Layanan',
                        'Contact'
                    ],
                    features: [
                        'Website statis (fast loading)',
                        'Responsive design',
                        'Admin panel sederhana',
                        'Manajemen akun admin'
                    ]
                },
                {
                    name: 'Business Website',
                    price: 'Mulai Rp 1.399.000',
                    desc: 'Cocok untuk bisnis yang ingin website lebih profesional dan dinamis.',
                    pages: [
                        'Home',
                        'About',
                        'Layanan',
                        'Contact'
                    ],
                    features: [
                        'Admin panel management',
                        'CRUD hero background',
                        'Responsive design',
                        'Struktur website dinamis'
                    ]
                },
                {
                    name: 'Professional',
                    price: 'Rp 2.499.000',
                    desc: 'Cocok untuk perusahaan yang membutuhkan website lengkap dan fleksibel.',
                    pages: [
                        'Home',
                        'About',
                        'Layanan',
                        'Contact',
                        'Partner / Portfolio'
                    ],
                    features: [
                        'Admin panel full control',
                        'CRUD semua konten',
                        'Manajemen halaman',
                        'Sistem website scalable'
                    ]
                },
                {
                    name: 'AI Intelligent',
                    price: 'Mulai Rp 3.999.000',
                    desc: 'Website dengan fitur AI untuk interaksi pelanggan dan automasi bisnis.',
                    pages: [
                        'All Professional Features'
                    ],
                    features: [
                        'Integrasi AI Chatbot',
                        'AI Auto Customer Response',
                        'Automasi interaksi',
                        'Integrasi database & API'
                    ]
                }
            ],
            addons: {
                title: 'Add-On Features',
                items: [
                    {
                        name: 'Halaman tambahan',
                        price: 'Rp 200.000'
                    },
                    {
                        name: 'Partner / Portofolio page',
                        price: 'Rp 300.000'
                    },
                    {
                        name: 'Multi bahasa',
                        price: 'Rp 800.000'
                    },
                    {
                        name: 'Maintenance website',
                        price: 'Rp 500.000 / bln'
                    },
                    {
                        name: 'Setup hosting & domain',
                        price: 'Rp 500.000'
                    },
                    {
                        name: 'Custom fitur / sistem',
                        price: 'By Request'
                    }
                ]
            }
        },
        hero: {
            tagline: 'From Concept to Intelligent Innovation',
            heading1: 'MERANCANG',
            heading2: 'WARISAN',
            heading3: 'DIGITAL',
            subtext: 'Mengubah konsep berani menjadi inovasi digital yang cerdas. Kami merancang sistem yang menggabungkan rekayasa modern dengan AI masa depan.',
            cta: 'Lihat Karya',
            stats: {
                systems: 'Sistem',
                uptime: 'Waktu Aktif'
            }
        },
        about: {
            heading: 'Konsep ke',
            subheading: 'Inovasi',
            description: 'Kami percaya setiap ide berani layak mendapatkan eksekusi yang cerdas. Di Syntax Web, kami mengambil konsep awal Anda dan mengembangkannya menjadi ekosistem digital yang inovatif, memanfaatkan AI mutakhir dan rekayasa modern untuk membangun solusi yang mendorong kemajuan nyata.',
            intelligent: {
                title: 'Cerdas',
                desc: 'Sistem bertenaga AI yang dirancang untuk efisiensi puncak.'
            },
            evolution: {
                title: 'Evolusi',
                desc: 'Platform terukur yang tumbuh bersama bisnis Anda.'
            }
        },
        services: {
            title: 'Solusi',
            subtitle: 'Arsitektural',
            description: 'Rekayasa generasi baru untuk brand ambisius yang ingin mendominasi lanskap digital.',
            list: {
                web: {
                    title: 'AI-Enhanced Dev',
                    desc: 'Membangun ekosistem web modern yang terintegrasi dengan teknologi AI untuk efisiensi maksimal.'
                },
                responsive: {
                    title: 'Desain Responsif',
                    desc: 'Pengalaman pengguna yang mulus di semua perangkat dan ukuran layar.'
                },
                design: {
                    title: 'Desain UI/UX',
                    desc: 'Desain visual yang memukau dan pengalaman pengguna yang intuitif untuk mendorong konversi.'
                },
                performance: {
                    title: 'Optimasi Performa',
                    desc: 'Kecepatan pemuatan yang dioptimalkan dan kode efisien untuk Core Web Vitals yang sempurna.'
                },
                security: {
                    title: 'Keamanan Siber',
                    desc: 'Implementasi standar keamanan tertinggi untuk melindungi data bisnis Anda.'
                },
                intelligent: {
                    title: 'Sistem Cerdas',
                    desc: 'Otomatisasi bisnis melalui solusi digital cerdas yang dirancang untuk pertumbuhan eksponensial.'
                }
            }
        },
        portfolio: {
            title: 'Artefak',
            subtitle: 'Pilihan',
            description: 'Koleksi kurasi dari konstruksi digital paling berdampak dan eksperimen arsitektural kami.',
            filters: {
                all: 'SEMUA KARYA',
                web: 'WEBSITE',
                landing: 'LANDING PAGE',
                dashboard: 'DASHBOARD'
            },
            viewAll: 'Lihat Semua Arsip',
            explore: 'Eksplorasi'
        },
        contact: {
            heading: 'Mari',
            subheading: 'Membangun',
            description: 'Siap untuk meningkatkan kehadiran digital Anda? Kami tersedia untuk kemitraan khusus mulai MMXXIV.',
            emailLabel: 'Surat Elektronik',
            form: {
                nameLabel: 'Nama / Perusahaan',
                namePlaceholder: 'contoh: PT Maju Jaya',
                messageLabel: 'Detail Pertanyaan',
                messagePlaceholder: 'Jelaskan visi Anda',
                submit: 'Mulai Proyek'
            }
        },
        footer: {
            description: 'Arsitektur digital kustom untuk perusahaan dan brand yang berpikiran maju. Keunggulan rekayasa di setiap piksel.',
            navigation: 'Navigasi',
            architecture: 'Arsitektur',
            rights: 'HAK CIPTA DILINDUNGI.',
            terms: 'Ketentuan Kerja',
            privacy: 'Privasi'
        }
    },
    en: {
        nav: {
            contact: 'Contact',
            home: 'Home',
            pricelist: 'Pricelist',
            partners: 'Partners'
        },
        pricelist: {
            title: 'Digital',
            subtitle: 'Investment',
            description: 'From Concept to Intelligent Innovation. Choose a plan that fits your business needs.',
            plans: [
                {
                    name: 'Starter Website',
                    price: 'Rp 999.000',
                    desc: 'Perfect for SMEs or personal brands just starting online.',
                    pages: [
                        'Landing Page',
                        'Home',
                        'About',
                        'Services',
                        'Contact'
                    ],
                    features: [
                        'Static website (fast loading)',
                        'Responsive design',
                        'Simple admin panel',
                        'Admin account management'
                    ]
                },
                {
                    name: 'Business Website',
                    price: 'Starts Rp 1.399.000',
                    desc: 'For businesses wanting a professional and dynamic website.',
                    pages: [
                        'Home',
                        'About',
                        'Services',
                        'Contact'
                    ],
                    features: [
                        'Admin panel management',
                        'CRUD hero background',
                        'Responsive design',
                        'Dynamic website structure'
                    ]
                },
                {
                    name: 'Professional',
                    price: 'Rp 2.499.000',
                    desc: 'For companies needing a complete and flexible website.',
                    pages: [
                        'Home',
                        'About',
                        'Services',
                        'Contact',
                        'Partner / Portfolio'
                    ],
                    features: [
                        'Full control admin panel',
                        'CRUD all content',
                        'Page management',
                        'Scalable website system'
                    ]
                },
                {
                    name: 'AI Intelligent',
                    price: 'Starts Rp 3.999.000',
                    desc: 'AI-powered website for customer interaction and business automation.',
                    pages: [
                        'All Professional Features'
                    ],
                    features: [
                        'AI Chatbot integration',
                        'AI Auto Customer Response',
                        'User interaction automation',
                        'Database & API integration'
                    ]
                }
            ],
            addons: {
                title: 'Add-On Features',
                items: [
                    {
                        name: 'Additional page',
                        price: 'Rp 200.000'
                    },
                    {
                        name: 'Partner / Portfolio page',
                        price: 'Rp 300.000'
                    },
                    {
                        name: 'Multi language',
                        price: 'Rp 800.000'
                    },
                    {
                        name: 'Website maintenance',
                        price: 'Rp 500.000 / mo'
                    },
                    {
                        name: 'Hosting & domain setup',
                        price: 'Rp 500.000'
                    },
                    {
                        name: 'Custom features / system',
                        price: 'By Request'
                    }
                ]
            }
        },
        hero: {
            tagline: 'From Concept to Intelligent Innovation',
            heading1: 'CRAFTING',
            heading2: 'DIGITAL',
            heading3: 'LEGACIES',
            subtext: 'Turning bold concepts into intelligent digital innovations. We architect systems that combine modern engineering with future-ready AI.',
            cta: 'View Work',
            stats: {
                systems: 'Systems',
                uptime: 'Up-time'
            }
        },
        about: {
            heading: 'Concept to',
            subheading: 'Innovation',
            description: 'We believe every bold idea deserves an intelligent execution. At Syntax Web, we take your initial concepts and evolve them into innovative digital ecosystems, leveraging cutting-edge AI and modern engineering to build solutions that drive real progress.',
            intelligent: {
                title: 'Intelligent',
                desc: 'AI-powered systems engineered for peak efficiency.'
            },
            evolution: {
                title: 'Evolution',
                desc: 'Scalable platforms that grow alongside your business.'
            }
        },
        services: {
            title: 'Architectural',
            subtitle: 'Solutions',
            description: 'Next-generation engineering for ambitious brands looking to dominate the digital landscape.',
            list: {
                web: {
                    title: 'AI-Enhanced Dev',
                    desc: 'Building modern web ecosystems integrated with AI technology for maximum efficiency.'
                },
                responsive: {
                    title: 'Responsive Design',
                    desc: 'Seamless user experience across all devices and screen sizes.'
                },
                design: {
                    title: 'UI/UX Design',
                    desc: 'Stunning visual designs and intuitive user experiences to drive conversion.'
                },
                performance: {
                    title: 'Performance Optimization',
                    desc: 'Optimized loading speeds and efficient code for perfect Core Web Vitals.'
                },
                security: {
                    title: 'Cyber Security',
                    desc: 'Implementation of highest security standards to protect your business data.'
                },
                intelligent: {
                    title: 'Intelligent Systems',
                    desc: 'Business automation through smart digital solutions designed for exponential growth.'
                }
            }
        },
        portfolio: {
            title: 'Selected',
            subtitle: 'Artifacts',
            description: 'A curated collection of our most impactful digital constructions and architectural experiments.',
            filters: {
                all: 'ALL WORKS',
                web: 'WEBSITE',
                landing: 'LANDING PAGE',
                dashboard: 'DASHBOARD'
            },
            viewAll: 'View Full Archive',
            explore: 'Explore'
        },
        contact: {
            heading: "Let's",
            subheading: 'Construct',
            description: 'Ready to elevate your digital presence? We are available for specialized partnerships starting MMXXIV.',
            emailLabel: 'Electronic Mail',
            form: {
                nameLabel: 'Name / Enterprise',
                namePlaceholder: 'e.g. Acme Corp',
                messageLabel: 'Inquiry Details',
                messagePlaceholder: 'Describe your vision',
                submit: 'Assemble Project'
            }
        },
        footer: {
            description: 'Bespoke digital architecture for enterprises and forward-thinking brands. Engineering excellence at every pixel.',
            navigation: 'Navigation',
            architecture: 'Architecture',
            rights: 'ALL RIGHTS RESERVED.',
            terms: 'Terms of Work',
            privacy: 'Privacy'
        }
    }
};
}),
"[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$translations$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/translations/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('id');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedLang = localStorage.getItem('language');
        if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
            setLanguageState(savedLang);
        }
    }, []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$translations$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/LanguageContext.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = ("TURBOPACK compile-time value", "undefined") == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>H(m, l)), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>c === "system" ? E() : c), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = o;
        if (!r) return;
        o === "system" && s && (r = E());
        let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g)=>{
            g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
        };
        if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
            let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
            P.style.colorScheme = D;
        }
        C == null || C();
    }, [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = typeof o == "function" ? o(c) : o;
        n(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = E(o);
        y(r), c === "system" && s && !e && S("system");
    }, [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = window.matchMedia(I);
        return o.addListener(A), A(o), ()=>o.removeListener(A);
    }, [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = (r)=>{
            r.key === m && (r.newValue ? n(r.newValue) : f(l));
        };
        return window.addEventListener("storage", o), ()=>window.removeEventListener("storage", o);
    }, [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        S(e != null ? e : c);
    }, [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            theme: c,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: c === "system" ? T : c,
            themes: s ? [
                ...a,
                "system"
            ] : a,
            systemTheme: s ? T : void 0
        }), [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: ("TURBOPACK compile-time truthy", 1) ? d : "TURBOPACK unreachable",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let s;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d5d6fa7._.js.map