(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SyntaxWeb/src/components/ui/Object.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Object3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function Object3D({ activeProject, isFocused, progress }) {
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wireframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerCoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trailsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { mouse } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    // Floating animation constants
    const floatAmplitude = 0.2;
    const floatSpeed = 1.5;
    // Multi-texture state
    const [textures, setTextures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const activeTextureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevTextureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initial geometries
    const icosahedronGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo[icosahedronGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](1, 0)
    }["Object3D.useMemo[icosahedronGeom]"], []);
    const innerIcosahedronGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo[innerIcosahedronGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.35, 1)
    }["Object3D.useMemo[innerIcosahedronGeom]"], []);
    // Generate complex particle data & energy trails
    const { particlePositions, trailPositions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Object3D.useMemo": ()=>{
            const count = 120;
            const pPos = new Float32Array(count * 3);
            const connections = [];
            for(let i = 0; i < count; i++){
                const r = 0.4 + Math.random() * 0.5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
                pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                pPos[i * 3 + 2] = r * Math.cos(phi);
                if (i > 0 && Math.random() > 0.85) {
                    const targetIdx = Math.floor(Math.random() * i);
                    connections.push(pPos[i * 3], pPos[i * 3 + 1], pPos[i * 3 + 2]);
                    connections.push(pPos[targetIdx * 3], pPos[targetIdx * 3 + 1], pPos[targetIdx * 3 + 2]);
                }
            }
            return {
                particlePositions: pPos,
                trailPositions: new Float32Array(connections)
            };
        }
    }["Object3D.useMemo"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Object3D.useEffect": ()=>{
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            const projectUrls = {
                'ukm': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
                'sugoi': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
                'af': 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000',
                'bk': 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000',
                'strategix': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
                'hmrp': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000'
            };
            Object.entries(projectUrls).forEach({
                "Object3D.useEffect": ([id, url])=>{
                    loader.load(url, {
                        "Object3D.useEffect": (tex)=>{
                            tex.wrapS = tex.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                            setTextures({
                                "Object3D.useEffect": (prev)=>({
                                        ...prev,
                                        [id]: tex
                                    })
                            }["Object3D.useEffect"]);
                        }
                    }["Object3D.useEffect"]);
                }
            }["Object3D.useEffect"]);
        }
    }["Object3D.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Object3D.useEffect": ()=>{
            if (activeProject && textures[activeProject]) {
                prevTextureRef.current = activeTextureRef.current;
                activeTextureRef.current = textures[activeProject];
            } else if (!activeProject) {
                prevTextureRef.current = activeTextureRef.current;
                activeTextureRef.current = null;
            }
        }
    }["Object3D.useEffect"], [
        activeProject,
        textures
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Object3D.useFrame": (state, delta)=>{
            const time = state.clock.getElapsedTime();
            // Global Scaling - Cap it to prevent camera clipping
            const targetScale = progress > 0.01 ? __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].mapLinear(progress, 0.01, 1, 1, 4) : 1;
            meshRef.current?.scale.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](targetScale, targetScale, targetScale), 0.1);
            if (coreRef.current) {
                const spin = activeProject ? 3.0 : 0.8;
                coreRef.current.rotation.y += delta * 0.2 * spin;
            }
            // Pulse the inner core
            if (innerCoreRef.current) {
                const pulse = 0.8 + Math.sin(time * 2) * 0.4;
                const coreMat = innerCoreRef.current.material;
                coreMat.emissiveIntensity = pulse * 2.0;
                innerCoreRef.current.rotation.x += delta * 0.5;
                innerCoreRef.current.rotation.z -= delta * 0.3;
            }
            // Swirl particles & trails
            if (particlesRef.current) particlesRef.current.rotation.y += delta * 0.15;
            if (trailsRef.current) trailsRef.current.rotation.y += delta * 0.15;
            // Rotate HUD Rings & Handle their visibility/scale to avoid glitch
            if (ringsRef.current) {
                // Fade out rings if too large
                ringsRef.current.visible = targetScale < 3;
                ringsRef.current.children.forEach({
                    "Object3D.useFrame": (ring, i)=>{
                        ring.rotation.x += delta * (0.2 + i * 0.1);
                        ring.rotation.y += delta * (0.3 - i * 0.15);
                    }
                }["Object3D.useFrame"]);
            }
            // Magnetic Tilt
            if (meshRef.current) {
                meshRef.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(meshRef.current.rotation.x, mouse.y * 0.3, 0.05);
                meshRef.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(meshRef.current.rotation.y, mouse.x * 0.3, 0.05);
                meshRef.current.position.y = Math.sin(time * 1.5) * 0.15;
            }
        }
    }["Object3D.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: meshRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: ringsRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            rotation: [
                                Math.PI / 2,
                                0,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                    args: [
                                        1.4,
                                        0.005,
                                        16,
                                        100
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: "#22d3ee",
                                    transparent: true,
                                    opacity: 0.3,
                                    wireframe: true
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                                    lineNumber: 143,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            rotation: [
                                0,
                                Math.PI / 4,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                    args: [
                                        1.6,
                                        0.003,
                                        16,
                                        100
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: "#22d3ee",
                                    transparent: true,
                                    opacity: 0.2,
                                    wireframe: true
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            rotation: [
                                Math.PI / 3,
                                Math.PI / 6,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                    args: [
                                        1.2,
                                        0.008,
                                        16,
                                        6
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: "#22d3ee",
                                    transparent: true,
                                    opacity: 0.4,
                                    wireframe: true
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
                    ref: particlesRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                                attach: "attributes-position",
                                count: particlePositions.length / 3,
                                array: particlePositions,
                                itemSize: 3
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                                lineNumber: 158,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                            size: 0.02,
                            color: "#22d3ee",
                            transparent: true,
                            opacity: 0.6,
                            sizeAttenuation: true
                        }, void 0, false, {
                            fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                            lineNumber: 160,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                    ref: trailsRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                                attach: "attributes-position",
                                count: trailPositions.length / 3,
                                array: trailPositions,
                                itemSize: 3
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                                lineNumber: 165,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                            lineNumber: 164,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                            color: "#22d3ee",
                            transparent: true,
                            opacity: 0.15
                        }, void 0, false, {
                            fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                            lineNumber: 167,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                    lineNumber: 163,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: innerCoreRef,
                    geometry: innerIcosahedronGeom,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#22d3ee",
                        emissive: "#22d3ee",
                        emissiveIntensity: 2,
                        roughness: 0,
                        metalness: 1,
                        wireframe: true
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                    lineNumber: 171,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: coreRef,
                    geometry: icosahedronGeom,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshTransmissionMaterial"], {
                        backside: true,
                        samples: 8,
                        resolution: 256,
                        transmission: 1,
                        roughness: 0.1,
                        thickness: 1.2,
                        ior: 1.2,
                        chromaticAberration: 0.06,
                        anisotropy: 0.1,
                        distortion: 0.1,
                        distortionScale: 0.3,
                        temporalDistortion: 0.5,
                        color: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                        lineNumber: 176,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: wireframeRef,
                    geometry: icosahedronGeom,
                    scale: 1.6,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#ffffff",
                        wireframe: true,
                        transparent: true,
                        opacity: 0.1,
                        metalness: 1,
                        roughness: 0
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                        lineNumber: 194,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
                    lineNumber: 193,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
            lineNumber: 138,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/SyntaxWeb/src/components/ui/Object.tsx",
        lineNumber: 137,
        columnNumber: 9
    }, this);
}
_s(Object3D, "EzaPvEhdynSg4yv1JEJSw6Tx51Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Object3D;
var _c;
__turbopack_context__.k.register(_c, "Object3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/ui/Scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$ui$2f$Object$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/components/ui/Object.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Scene({ activeProject, isFocused, progress }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        shadows: true,
        camera: {
            position: [
                0,
                0,
                5
            ],
            fov: 32
        },
        gl: {
            antialias: false,
            alpha: true,
            powerPreference: "high-performance"
        },
        dpr: 1,
        style: {
            width: '100%',
            height: '100%'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                    preset: "city"
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Scene.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.6
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Scene.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                    position: [
                        10,
                        10,
                        10
                    ],
                    angle: 0.15,
                    penumbra: 1,
                    intensity: 1
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Scene.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        -10,
                        -10,
                        -10
                    ],
                    intensity: 0.5
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Scene.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$ui$2f$Object$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activeProject: activeProject,
                    isFocused: isFocused,
                    progress: progress
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/ui/Scene.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/SyntaxWeb/src/components/ui/Scene.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/SyntaxWeb/src/components/ui/Scene.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = Scene;
var _c;
__turbopack_context__.k.register(_c, "Scene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/ui/HeroScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$ui$2f$Scene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/components/ui/Scene.tsx [app-client] (ecmascript)");
/// <reference types="@react-three/fiber" />
'use client';
;
;
;
function HeroScene({ activeProject = null, isFocused = false, progress = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-0 overflow-hidden pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$ui$2f$Scene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeProject: activeProject,
                isFocused: isFocused,
                progress: progress
            }, void 0, false, {
                fileName: "[project]/SyntaxWeb/src/components/ui/HeroScene.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/SyntaxWeb/src/components/ui/HeroScene.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/SyntaxWeb/src/components/ui/HeroScene.tsx",
        lineNumber: 17,
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
"[project]/SyntaxWeb/src/components/ui/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/SyntaxWeb/src/components/ui/HeroScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=SyntaxWeb_src_components_ui_2d360876._.js.map