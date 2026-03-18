(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Object.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Object3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
/// <reference types="@react-three/fiber" />
'use client';
;
;
;
// Floating geometric shape — one instance
function FloatingShape({ geo, position, speed, amplitude, rotSpeed, color, opacity, phase }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(phase);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FloatingShape.useFrame": (_, delta)=>{
            if (!ref.current) return;
            t.current += delta * speed;
            ref.current.position.y = position[1] + Math.sin(t.current) * amplitude;
            ref.current.position.x = position[0] + Math.cos(t.current * 0.7) * amplitude * 0.4;
            ref.current.rotation.x += delta * rotSpeed[0];
            ref.current.rotation.y += delta * rotSpeed[1];
            ref.current.rotation.z += delta * rotSpeed[2];
        }
    }["FloatingShape.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        position: position,
        geometry: geo,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            color: color,
            transparent: true,
            opacity: opacity,
            roughness: 0.3,
            metalness: 0.6,
            wireframe: false
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Object.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Object.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_s(FloatingShape, "8NFBsYnaxsoLbn8rz790D0vqANM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = FloatingShape;
// Wireframe shape ring orbiting a center
function WireOrbit({ radius, speed, geo, color, tiltX, tiltZ }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.random() * Math.PI * 2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "WireOrbit.useFrame": (_, delta)=>{
            if (!ref.current) return;
            t.current += delta * speed;
            ref.current.rotation.y = t.current;
            ref.current.rotation.x = tiltX;
            ref.current.rotation.z = tiltZ;
        }
    }["WireOrbit.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            position: [
                radius,
                0,
                0
            ],
            geometry: geo,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: color,
                transparent: true,
                opacity: 0.12,
                wireframe: true
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 85,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Object.tsx",
            lineNumber: 84,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Object.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s1(WireOrbit, "8NFBsYnaxsoLbn8rz790D0vqANM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = WireOrbit;
// Large ambient ring plane (decorative circle outline)
function AmbientRing({ radius, color, rotX }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "AmbientRing.useFrame": (_, delta)=>{
            if (!ref.current) return;
            t.current += delta * 0.08;
            ref.current.rotation.z = t.current;
            ref.current.rotation.x = rotX + Math.sin(t.current * 0.3) * 0.05;
        }
    }["AmbientRing.useFrame"]);
    const geom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AmbientRing.useMemo[geom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](radius, 0.008, 3, 64)
    }["AmbientRing.useMemo[geom]"], [
        radius
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        geometry: geom,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
            color: color,
            transparent: true,
            opacity: 0.08
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Object.tsx",
            lineNumber: 107,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Object.tsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
_s2(AmbientRing, "rmh6aw6Px8YXCkorQDKSZSsm9Sc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = AmbientRing;
// Mouse-tracking subtle glow dot
function CursorGlow() {
    _s3();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { mouse, viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const posRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CursorGlow.useFrame": (_, delta)=>{
            if (!ref.current) return;
            const tx = mouse.x * viewport.width / 2;
            const ty = mouse.y * viewport.height / 2;
            posRef.current.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](tx, ty, 0), delta * 4);
            ref.current.position.copy(posRef.current);
        }
    }["CursorGlow.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    0.25,
                    16,
                    16
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: "#22D3EE",
                transparent: true,
                opacity: 0.35
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Object.tsx",
        lineNumber: 127,
        columnNumber: 9
    }, this);
}
_s3(CursorGlow, "3+UWr9Sg+5PZZ0hGA+5ICJsJnXw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = CursorGlow;
function Object3D() {
    _s4();
    // Shared geometries — created once
    const icosa0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo[icosa0]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.35, 0)
    }["Object3D.useMemo[icosa0]"], []);
    const icosa1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo[icosa1]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.6, 0)
    }["Object3D.useMemo[icosa1]"], []);
    const octa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo[octa]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctahedronGeometry"](0.4, 0)
    }["Object3D.useMemo[octa]"], []);
    const tetra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo[tetra]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TetrahedronGeometry"](0.45, 0)
    }["Object3D.useMemo[tetra]"], []);
    const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo[box]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.55, 0.55, 0.55)
    }["Object3D.useMemo[box]"], []);
    const shapes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo[shapes]": ()=>[
                // Left cluster
                {
                    geo: icosa0,
                    pos: [
                        -4.5,
                        0.5,
                        -1.5
                    ],
                    speed: 0.55,
                    amp: 0.4,
                    rot: [
                        0.3,
                        0.5,
                        0.1
                    ],
                    color: '#22D3EE',
                    op: 0.55,
                    ph: 0
                },
                {
                    geo: octa,
                    pos: [
                        -3.0,
                        2.0,
                        -2.5
                    ],
                    speed: 0.4,
                    amp: 0.5,
                    rot: [
                        0.2,
                        0.8,
                        0.2
                    ],
                    color: '#ffffff',
                    op: 0.25,
                    ph: 1
                },
                {
                    geo: tetra,
                    pos: [
                        -5.5,
                        -1.5,
                        -1.0
                    ],
                    speed: 0.7,
                    amp: 0.3,
                    rot: [
                        0.6,
                        0.2,
                        0.4
                    ],
                    color: '#22D3EE',
                    op: 0.3,
                    ph: 2
                },
                {
                    geo: box,
                    pos: [
                        -2.5,
                        -2.5,
                        -3.0
                    ],
                    speed: 0.35,
                    amp: 0.6,
                    rot: [
                        0.4,
                        0.4,
                        0.2
                    ],
                    color: '#000000',
                    op: 0.12,
                    ph: 0.5
                },
                // Right cluster
                {
                    geo: icosa1,
                    pos: [
                        4.0,
                        0.0,
                        -2.0
                    ],
                    speed: 0.5,
                    amp: 0.45,
                    rot: [
                        0.2,
                        0.6,
                        0.1
                    ],
                    color: '#22D3EE',
                    op: 0.5,
                    ph: 3
                },
                {
                    geo: octa,
                    pos: [
                        5.5,
                        1.5,
                        -1.0
                    ],
                    speed: 0.6,
                    amp: 0.35,
                    rot: [
                        0.5,
                        0.3,
                        0.3
                    ],
                    color: '#ffffff',
                    op: 0.2,
                    ph: 1.5
                },
                {
                    geo: tetra,
                    pos: [
                        3.0,
                        -2.0,
                        -3.0
                    ],
                    speed: 0.45,
                    amp: 0.55,
                    rot: [
                        0.3,
                        0.7,
                        0.2
                    ],
                    color: '#22D3EE',
                    op: 0.35,
                    ph: 2.5
                },
                {
                    geo: box,
                    pos: [
                        6.0,
                        -0.5,
                        -2.5
                    ],
                    speed: 0.38,
                    amp: 0.4,
                    rot: [
                        0.7,
                        0.2,
                        0.5
                    ],
                    color: '#000000',
                    op: 0.1,
                    ph: 4
                },
                // Top / center accent
                {
                    geo: icosa0,
                    pos: [
                        0.5,
                        3.5,
                        -2.0
                    ],
                    speed: 0.3,
                    amp: 0.5,
                    rot: [
                        0.2,
                        0.4,
                        0.3
                    ],
                    color: '#22D3EE',
                    op: 0.4,
                    ph: 5
                },
                {
                    geo: octa,
                    pos: [
                        -1.5,
                        3.0,
                        -3.0
                    ],
                    speed: 0.45,
                    amp: 0.4,
                    rot: [
                        0.4,
                        0.3,
                        0.5
                    ],
                    color: '#ffffff',
                    op: 0.18,
                    ph: 6
                },
                // Bottom
                {
                    geo: tetra,
                    pos: [
                        1.0,
                        -3.5,
                        -2.0
                    ],
                    speed: 0.5,
                    amp: 0.45,
                    rot: [
                        0.3,
                        0.6,
                        0.2
                    ],
                    color: '#22D3EE',
                    op: 0.28,
                    ph: 7
                },
                {
                    geo: box,
                    pos: [
                        -1.0,
                        -3.2,
                        -3.5
                    ],
                    speed: 0.4,
                    amp: 0.35,
                    rot: [
                        0.5,
                        0.4,
                        0.3
                    ],
                    color: '#000000',
                    op: 0.1,
                    ph: 8
                }
            ]
    }["Object3D.useMemo[shapes]"], [
        icosa0,
        icosa1,
        octa,
        tetra,
        box
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            shapes.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingShape, {
                    geo: s.geo,
                    position: s.pos,
                    speed: s.speed,
                    amplitude: s.amp,
                    rotSpeed: s.rot,
                    color: s.color,
                    opacity: s.op,
                    phase: s.ph
                }, i, false, {
                    fileName: "[project]/src/components/ui/Object.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WireOrbit, {
                radius: 2.5,
                speed: 0.25,
                geo: icosa1,
                color: "#22D3EE",
                tiltX: 0.4,
                tiltZ: 0.1
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WireOrbit, {
                radius: 3.5,
                speed: 0.18,
                geo: octa,
                color: "#000000",
                tiltX: -0.3,
                tiltZ: 0.5
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WireOrbit, {
                radius: 2.0,
                speed: 0.35,
                geo: tetra,
                color: "#22D3EE",
                tiltX: 0.6,
                tiltZ: -0.2
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 184,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmbientRing, {
                radius: 5.5,
                color: "#22D3EE",
                rotX: 0.3
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmbientRing, {
                radius: 7.0,
                color: "#000000",
                rotX: -0.5
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmbientRing, {
                radius: 4.0,
                color: "#22D3EE",
                rotX: 1.0
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 189,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorGlow, {}, void 0, false, {
                fileName: "[project]/src/components/ui/Object.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Object.tsx",
        lineNumber: 165,
        columnNumber: 9
    }, this);
}
_s4(Object3D, "gKj737ae1rndq1f0vbBeHteWd7A=");
_c4 = Object3D;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "FloatingShape");
__turbopack_context__.k.register(_c1, "WireOrbit");
__turbopack_context__.k.register(_c2, "AmbientRing");
__turbopack_context__.k.register(_c3, "CursorGlow");
__turbopack_context__.k.register(_c4, "Object3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/HeroScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Object$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Object.tsx [app-client] (ecmascript)");
/// <reference types="@react-three/fiber" />
'use client';
;
;
;
;
function HeroScene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen fixed inset-0 z-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    5
                ],
                fov: 35
            },
            style: {
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none'
            },
            dpr: Math.min(window?.devicePixelRatio ?? 1, 1.5),
            gl: {
                antialias: false,
                alpha: true,
                powerPreference: "high-performance"
            },
            shadows: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.6
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroScene.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            5,
                            8,
                            5
                        ],
                        intensity: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroScene.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Object$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroScene.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroScene.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/HeroScene.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/HeroScene.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = HeroScene;
var _c;
__turbopack_context__.k.register(_c, "HeroScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ui/HeroScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_ui_ee7bbfef._.js.map