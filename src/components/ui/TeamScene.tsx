/// <reference types="@react-three/fiber" />
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, Suspense, useMemo, useEffect } from 'react';
import { Text, PerspectiveCamera, Shadow, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const MEMBERS = [
    {
        name: "DIKI FERDIANTO",
        role: "DEVELOPER",
        color: "#22D3EE",
        skinColor: "#f5c99a",
        clothColor: "#22D3EE",
    },
    {
        name: "PANDU SATRIA",
        role: "DEVELOPER",
        color: "#22D3EE",
        skinColor: "#f5c99a",
        clothColor: "#1a1a2e",
    }
];

// Card layout constants
const LEFT_CARD = { pos: new THREE.Vector3(-1.8, -0.4, 0), rotY: 0.15, scale: 0.85 };
const RIGHT_CARD = { pos: new THREE.Vector3(1.8, -0.4, 0), rotY: -0.15, scale: 0.85 };

// ───────────────────────────────────────────────
// Stylized 3D Human Character
// ───────────────────────────────────────────────
function HumanFigure({ color, skinColor, clothColor }: {
    color: string; skinColor: string; clothColor: string;
}) {
    const bodyRef = useRef<THREE.Group>(null);
    const headRef = useRef<THREE.Mesh>(null);
    const lArmRef = useRef<THREE.Group>(null);
    const rArmRef = useRef<THREE.Group>(null);
    const lLegRef = useRef<THREE.Group>(null);
    const rLegRef = useRef<THREE.Group>(null);
    const timeRef = useRef(Math.random() * 100);

    useFrame((_, delta) => {
        timeRef.current += delta;
        const t = timeRef.current;

        // Breathing – gentle torso scale
        if (bodyRef.current) {
            bodyRef.current.scale.y = 1 + Math.sin(t * 1.4) * 0.012;
        }
        // Head slight nod / drift
        if (headRef.current) {
            headRef.current.rotation.y = Math.sin(t * 0.7) * 0.12;
            headRef.current.rotation.z = Math.sin(t * 0.5) * 0.03;
        }
        // Arm swing (idle)
        if (lArmRef.current) lArmRef.current.rotation.x = Math.sin(t * 1.1) * 0.15;
        if (rArmRef.current) rArmRef.current.rotation.x = -Math.sin(t * 1.1) * 0.15;
        // Leg slight shift (weight shift)
        if (lLegRef.current) lLegRef.current.rotation.x = Math.sin(t * 0.6) * 0.04;
        if (rLegRef.current) rLegRef.current.rotation.x = -Math.sin(t * 0.6) * 0.04;
    });

    return (
        <group position={[0, 0.3, 0.15]} scale={[0.78, 0.78, 0.78]}>
            {/* ── HEAD GROUP ── */}
            <mesh ref={headRef} position={[0, 2.15, 0]}>
                <sphereGeometry args={[0.52, 16, 16]} />
                <meshStandardMaterial color={skinColor} roughness={0.6} />
            </mesh>
            <mesh position={[0, 2.5, -0.05]}>
                <sphereGeometry args={[0.54, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
            </mesh>
            <mesh position={[-0.18, 2.2, 0.46]}>
                <sphereGeometry args={[0.06, 8, 8]} />
                <meshBasicMaterial color="#111" />
            </mesh>
            <mesh position={[0.18, 2.2, 0.46]}>
                <sphereGeometry args={[0.06, 8, 8]} />
                <meshBasicMaterial color="#111" />
            </mesh>
            <mesh position={[-0.15, 2.23, 0.50]}>
                <sphereGeometry args={[0.025, 6, 6]} />
                <meshBasicMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0.21, 2.23, 0.50]}>
                <sphereGeometry args={[0.025, 6, 6]} />
                <meshBasicMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0, 1.68, 0]}>
                <cylinderGeometry args={[0.15, 0.18, 0.38, 8]} />
                <meshStandardMaterial color={skinColor} roughness={0.6} />
            </mesh>

            <group ref={bodyRef} position={[0, 0.9, 0]}>
                <mesh>
                    <boxGeometry args={[0.9, 1.1, 0.52]} />
                    <meshStandardMaterial color={clothColor} roughness={0.4} metalness={0.2} />
                </mesh>
                <mesh position={[0, 0.52, 0.25]}>
                    <boxGeometry args={[0.32, 0.15, 0.05]} />
                    <meshBasicMaterial color={color} opacity={0.9} transparent />
                </mesh>
                <mesh position={[0.25, 0.2, 0.27]}>
                    <boxGeometry args={[0.15, 0.1, 0.02]} />
                    <meshBasicMaterial color={color} opacity={0.8} transparent />
                </mesh>

                <group ref={lArmRef} position={[-0.62, 0.35, 0]}>
                    <mesh position={[-0.18, -0.28, 0]}>
                        <capsuleGeometry args={[0.15, 0.5, 4, 8]} />
                        <meshStandardMaterial color={clothColor} roughness={0.4} />
                    </mesh>
                    <mesh position={[-0.22, -0.8, 0]}>
                        <capsuleGeometry args={[0.12, 0.42, 4, 8]} />
                        <meshStandardMaterial color={skinColor} roughness={0.6} />
                    </mesh>
                    <mesh position={[-0.24, -1.12, 0]}>
                        <sphereGeometry args={[0.13, 8, 8]} />
                        <meshStandardMaterial color={skinColor} roughness={0.6} />
                    </mesh>
                </group>
                <group ref={rArmRef} position={[0.62, 0.35, 0]}>
                    <mesh position={[0.18, -0.28, 0]}>
                        <capsuleGeometry args={[0.15, 0.5, 4, 8]} />
                        <meshStandardMaterial color={clothColor} roughness={0.4} />
                    </mesh>
                    <mesh position={[0.22, -0.8, 0]}>
                        <capsuleGeometry args={[0.12, 0.42, 4, 8]} />
                        <meshStandardMaterial color={skinColor} roughness={0.6} />
                    </mesh>
                    <mesh position={[0.24, -1.12, 0]}>
                        <sphereGeometry args={[0.13, 8, 8]} />
                        <meshStandardMaterial color={skinColor} roughness={0.6} />
                    </mesh>
                </group>
            </group>

            <mesh position={[0, 0.28, 0]}>
                <boxGeometry args={[0.82, 0.38, 0.46]} />
                <meshStandardMaterial color={clothColor} roughness={0.5} />
            </mesh>
            <group ref={lLegRef} position={[-0.25, 0.1, 0]}>
                <mesh position={[0, -0.42, 0]}>
                    <capsuleGeometry args={[0.18, 0.6, 4, 8]} />
                    <meshStandardMaterial color="#2a2a3a" roughness={0.6} />
                </mesh>
                <mesh position={[0, -1.05, 0]}>
                    <capsuleGeometry args={[0.14, 0.55, 4, 8]} />
                    <meshStandardMaterial color="#2a2a3a" roughness={0.6} />
                </mesh>
                <mesh position={[0.04, -1.47, 0.1]}>
                    <boxGeometry args={[0.22, 0.12, 0.42]} />
                    <meshStandardMaterial color="#111" roughness={0.3} metalness={0.4} />
                </mesh>
            </group>
            <group ref={rLegRef} position={[0.25, 0.1, 0]}>
                <mesh position={[0, -0.42, 0]}>
                    <capsuleGeometry args={[0.18, 0.6, 4, 8]} />
                    <meshStandardMaterial color="#2a2a3a" roughness={0.6} />
                </mesh>
                <mesh position={[0, -1.05, 0]}>
                    <capsuleGeometry args={[0.14, 0.55, 4, 8]} />
                    <meshStandardMaterial color="#2a2a3a" roughness={0.6} />
                </mesh>
                <mesh position={[0.04, -1.47, 0.1]}>
                    <boxGeometry args={[0.22, 0.12, 0.42]} />
                    <meshStandardMaterial color="#111" roughness={0.3} metalness={0.4} />
                </mesh>
            </group>

            <mesh position={[0, -1.38, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.5, 12]} />
                <meshBasicMaterial color={color} transparent opacity={0.12} />
            </mesh>
        </group>
    );
}

// ───────────────────────────────────────────────
// Card Component
// ───────────────────────────────────────────────
function Card({
    member,
    targetLayout,
    isLight
}: {
    member: typeof MEMBERS[0];
    targetLayout: typeof LEFT_CARD;
    isLight: boolean;
}) {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    const animRef = useRef({
        posX: targetLayout.pos.x,
        posY: targetLayout.pos.y,
        posZ: targetLayout.pos.z,
        rotY: targetLayout.rotY,
        rotX: 0,
        scale: targetLayout.scale,
        time: Math.random() * 100,
    });

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        const a = animRef.current;
        a.time += delta;

        const sp = delta * 5;
        let tRotY = targetLayout.rotY;
        let tRotX = 0;
        let tScale = targetLayout.scale;

        if (hovered) {
            tRotY = state.mouse.x * 0.4 + targetLayout.rotY;
            tRotX = -state.mouse.y * 0.25;
            tScale = targetLayout.scale * 1.05;
        }

        a.rotY = THREE.MathUtils.lerp(a.rotY, tRotY, sp);
        a.rotX = THREE.MathUtils.lerp(a.rotX, tRotX, sp);
        a.scale = THREE.MathUtils.lerp(a.scale, tScale, sp);

        const float = Math.sin(a.time * 1.2) * 0.08;

        groupRef.current.position.set(a.posX, a.posY + float, a.posZ);
        groupRef.current.rotation.set(a.rotX, a.rotY, 0);
        groupRef.current.scale.setScalar(a.scale);
    });

    return (
        <group
            ref={groupRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* Card dark back face */}
            <mesh position={[0, 0, -0.06]}>
                <boxGeometry args={[3.0, 4.6, 0.02]} />
                <meshStandardMaterial color={isLight ? "#f8faff" : "#060609"} metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Card glass body */}
            <mesh>
                <boxGeometry args={[3.0, 4.8, 0.06]} />
                <meshStandardMaterial
                    color={isLight ? "#ffffff" : "#e8eeff"}
                    transparent
                    opacity={isLight ? 0.4 : 0.12}
                    roughness={0.05}
                    metalness={0.2}
                />
            </mesh>

            {/* Accent glow border */}
            <mesh>
                <boxGeometry args={[3.04, 4.84, 0.03]} />
                <meshBasicMaterial color={member.color} transparent opacity={hovered ? 0.4 : (isLight ? 0.25 : 0.15)} />
            </mesh>

            {/* Top color strip */}
            <mesh position={[0, 2.28, 0.04]}>
                <planeGeometry args={[2.8, 0.055]} />
                <meshBasicMaterial color={member.color} transparent opacity={0.6} />
            </mesh>

            {/* ── 3D Human Figure ── */}
            <HumanFigure color={member.color} skinColor={member.skinColor} clothColor={member.clothColor} />

            {/* Name - Adaptive color */}
            <Text
                position={[0, -1.85, 0.15]}
                fontSize={0.36}
                color={isLight ? "#000000" : "#ffffff"}
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.08}
            >
                {member.name}
            </Text>

            {/* Role - Glowing */}
            <Text
                position={[0, -2.25, 0.15]}
                fontSize={0.14}
                color={member.color}
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.15}
            >
                {member.role}
            </Text>
        </group>
    );
}

// ───────────────────────────────────────────────
// Orbiting Particles
// ───────────────────────────────────────────────
function ParticleRing({ color }: { color: string }) {
    const ref = useRef<THREE.Group>(null);
    const t = useRef(0);
    useFrame((_, delta) => {
        if (!ref.current) return;
        t.current += delta * 0.45;
        ref.current.rotation.z = t.current;
        ref.current.rotation.x = Math.sin(t.current * 0.28) * 0.07;
    });
    const count = 8;
    return (
        <group ref={ref}>
            {Array.from({ length: count }).map((_, i) => {
                const angle = (i / count) * Math.PI * 2;
                const r = 2.2;
                const big = i % 3 === 0;
                return (
                    <mesh key={i} position={[Math.cos(angle) * r, Math.sin(angle) * r, 0]}>
                        <sphereGeometry args={[big ? 0.05 : 0.025, 4, 4]} />
                        <meshBasicMaterial color={color} transparent opacity={big ? 0.85 : 0.4} />
                    </mesh>
                );
            })}
        </group>
    );
}

// ───────────────────────────────────────────────
// Dual Scene
// ───────────────────────────────────────────────
function DualScene({ isLight }: { isLight: boolean }) {
    return (
        <>
            <Card member={MEMBERS[0]} targetLayout={LEFT_CARD} isLight={isLight} />
            <Card member={MEMBERS[1]} targetLayout={RIGHT_CARD} isLight={isLight} />
            <ParticleRing color={MEMBERS[0].color} />
        </>
    );
}

// ───────────────────────────────────────────────
// Export
// ───────────────────────────────────────────────
export default function TeamScene() {
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-full h-full min-h-[580px]" />;

    return (
        <div className="w-full h-full min-h-[580px] cursor-pointer select-none">
            <Canvas
                gl={{
                    alpha: true,
                    antialias: false,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: false
                }}
                dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1}
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.BasicShadowMap; // Faster than PCF
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0.4, 8.5]} fov={44} />

                {/* Studio lighting - Theme aware */}
                <ambientLight intensity={isLight ? 1.2 : 0.7} />
                <directionalLight position={[4, 8, 6]} intensity={isLight ? 2.5 : 1.8} />
                <pointLight position={[-5, 4, 5]} intensity={isLight ? 1.5 : 1.2} color={isLight ? "#ffffff" : "#a0d8ff"} />
                <pointLight position={[5, -3, 4]} intensity={isLight ? 0.8 : 0.6} color="#ffffff" />

                <Suspense fallback={null}>
                    <DualScene isLight={isLight} />
                </Suspense>

                <Shadow
                    opacity={isLight ? 0.15 : 0.07}
                    scale={[6, 6, 1]}
                    position={[0, -3.6, -1]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </Canvas>
        </div>
    );
}
