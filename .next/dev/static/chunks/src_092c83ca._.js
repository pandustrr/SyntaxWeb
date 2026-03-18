(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/layout/Navbar.tsx'\n\nMerge conflict marker encountered.");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/translations/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$translations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/translations/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('id');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const savedLang = localStorage.getItem('language');
            if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
                setLanguageState(savedLang);
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$translations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
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
_s(LanguageProvider, "M6hjFqIotlMmi4Q/sqB7fDv8y/8=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/layout/Footer.tsx'\n\nMerge conflict marker encountered.");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/components/layout/BackgroundKinetic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundKinetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function BackgroundKinetic() {
    _s();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        90
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5,
        1
    ], [
        0.03,
        0.05,
        0.03
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FFFFFF]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.02]",
                style: {
                    backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
                    backgroundSize: '20px 20px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    ...Array(6)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: [
                                0.01,
                                0.03,
                                0.01
                            ],
                            x: [
                                0,
                                50,
                                0
                            ],
                            y: [
                                0,
                                30,
                                0
                            ]
                        },
                        transition: {
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute border border-black/10",
                        style: {
                            width: `${(i + 1) * 150}px`,
                            height: `${(i + 1) * 150}px`,
                            left: `${i * 15}%`,
                            top: `${i * 10}%`
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    rotate,
                    opacity
                },
                className: "absolute top-[-10%] left-[-10%] w-[120%] h-[120%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 1000 1000",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-full h-full stroke-black stroke-[0.3] fill-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "500",
                            cy: "500",
                            r: "450"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "500",
                            cy: "500",
                            r: "300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "200",
                            y: "200",
                            width: "600",
                            height: "600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "500",
                            x2: "1000",
                            y2: "500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "500",
                            y1: "0",
                            x2: "500",
                            y2: "1000"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,0 L1000,1000 M1000,0 L0,1000"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.01)_0%,transparent_50%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.03)_100%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/BackgroundKinetic.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(BackgroundKinetic, "X9hMiPZ1ySNt6PkD06O9boSnj4E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = BackgroundKinetic;
var _c;
__turbopack_context__.k.register(_c, "BackgroundKinetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/IntroLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function IntroLoader({ onComplete }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroLoader.useEffect": ()=>{
            const duration = 2000; // 2 seconds
            const intervalTime = 20;
            const steps = duration / intervalTime;
            const increment = 100 / steps;
            const interval = setInterval({
                "IntroLoader.useEffect.interval": ()=>{
                    setProgress({
                        "IntroLoader.useEffect.interval": (prev)=>{
                            const next = prev + increment;
                            if (next >= 100) {
                                clearInterval(interval);
                                return 100;
                            }
                            return next;
                        }
                    }["IntroLoader.useEffect.interval"]);
                }
            }["IntroLoader.useEffect.interval"], intervalTime);
            const timer = setTimeout(onComplete, duration + 500);
            return ({
                "IntroLoader.useEffect": ()=>{
                    clearInterval(interval);
                    clearTimeout(timer);
                }
            })["IntroLoader.useEffect"];
        }
    }["IntroLoader.useEffect"], [
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 1
        },
        exit: {
            opacity: 0,
            scale: 1.1,
            transition: {
                duration: 0.8,
                ease: [
                    0.43,
                    0.13,
                    0.23,
                    0.96
                ]
            }
        },
        className: "fixed inset-0 z-[100] bg-[#FFFFFF] flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-[0.05]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                            backgroundSize: '100px 100px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/IntroLoader.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-50",
                        style: {
                            backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
                            backgroundSize: '20px 20px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/IntroLoader.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/IntroLoader.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    ...Array(4)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -100,
                            y: -100
                        },
                        animate: {
                            opacity: [
                                0,
                                0.03,
                                0
                            ],
                            x: [
                                0,
                                100,
                                0
                            ],
                            y: [
                                0,
                                50,
                                0
                            ]
                        },
                        transition: {
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute border border-black/10",
                        style: {
                            width: `${(i + 1) * 200}px`,
                            height: `${(i + 1) * 200}px`,
                            left: `${i * 20}%`,
                            top: `${i * 15}%`
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/layout/IntroLoader.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/IntroLoader.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: 20,
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    y: 0,
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                className: "flex flex-col items-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#22D3EE] tracking-[0.4em]",
                                children: [
                                    Math.round(progress),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/IntroLoader.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-5xl md:text-8xl font-bold text-black tracking-tighter uppercase font-['Teko'] leading-none",
                                children: [
                                    "SYNTAX",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#22D3EE]",
                                        children: "WEB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/IntroLoader.tsx",
                                        lineNumber: 101,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/IntroLoader.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/IntroLoader.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-64 h-[3px] bg-black/5 mt-2 relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                width: "0%"
                            },
                            animate: {
                                width: `${progress}%`
                            },
                            transition: {
                                ease: "linear"
                            },
                            className: "absolute inset-0 bg-[#22D3EE]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/IntroLoader.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/IntroLoader.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.8
                        },
                        className: "text-[9px] uppercase tracking-[0.8em] text-slate-400 mt-8 font-bold",
                        children: "System • Innovation • Intelligence"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/IntroLoader.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/IntroLoader.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/IntroLoader.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_s(IntroLoader, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = IntroLoader;
var _c;
__turbopack_context__.k.register(_c, "IntroLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ScrollProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollProgress() {
    _s();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 right-12 h-screen w-[1px] bg-black/5 z-[60] pointer-events-none hidden lg:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 w-full bg-[#22D3EE] origin-top h-full",
                style: {
                    scaleY
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ScrollProgress.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-[-4px] w-2 h-2 rounded-full border border-black/10"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ScrollProgress.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-[-4px] w-2 h-2 rounded-full border border-black/10"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ScrollProgress.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ScrollProgress.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(ScrollProgress, "DYjmooZjqcwZ2P4CrTU2thLPLQE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SuppressWarnings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuppressWarnings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function SuppressWarnings() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuppressWarnings.useEffect": ()=>{
            const originalWarn = console.warn;
            const suppressedPatterns = [
                'THREE.Clock: This module has been deprecated',
                'THREE.Timer instead',
                'PCFSoftShadowMap has been deprecated'
            ];
            console.warn = ({
                "SuppressWarnings.useEffect": (...args)=>{
                    const message = args.join(' ');
                    const isSuppressed = suppressedPatterns.some({
                        "SuppressWarnings.useEffect.isSuppressed": (pattern)=>message.includes(pattern)
                    }["SuppressWarnings.useEffect.isSuppressed"]);
                    if (!isSuppressed) {
                        originalWarn.apply(console, args);
                    }
                }
            })["SuppressWarnings.useEffect"];
            return ({
                "SuppressWarnings.useEffect": ()=>{
                    console.warn = originalWarn;
                }
            })["SuppressWarnings.useEffect"];
        }
    }["SuppressWarnings.useEffect"], []);
    return null;
}
_s(SuppressWarnings, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SuppressWarnings;
var _c;
__turbopack_context__.k.register(_c, "SuppressWarnings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(public)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/(public)/layout.tsx'\n\nMerge conflict marker encountered.");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_092c83ca._.js.map