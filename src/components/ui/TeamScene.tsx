/// <reference types="@react-three/fiber" />
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, Suspense } from 'react';
import { Text, PerspectiveCamera, Shadow, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const MEMBERS = [
    {
        name: "PANDU S.",
        role: "LEAD DEVELOPER",
        color: "#22D3EE",
        skinColor: "#f5c99a",
        clothColor: "#22D3EE",
    },
    {
        name: "SYNTX_CORE",
        role: "AI ARCHITECT",
        color: "#9b5de5",
        skinColor: "#c7956c",
        clothColor: "#1a1a2e",
    }
];

// Card layout constants
const FRONT = { pos: new THREE.Vector3(0, 0, 0), rotY: 0, scale: 1 };
const BACK  = { pos: new THREE.Vector3(1.1, -0.5, -2.2), rotY: 0.45, scale: 0.87 };

// ───────────────────────────────────────────────
// Stylized 3D Human Character
// ───────────────────────────────────────────────
function HumanFigure({ color, skinColor, clothColor, isFront }: {
    color: string; skinColor: string; clothColor: string; isFront: boolean;
}) {
    const bodyRef  = useRef<THREE.Group>(null);
    const headRef  = useRef<THREE.Mesh>(null);
    const lArmRef  = useRef<THREE.Group>(null);
    const rArmRef  = useRef<THREE.Group>(null);
    const lLegRef  = useRef<THREE.Group>(null);
    const rLegRef  = useRef<THREE.Group>(null);
    const timeRef  = useRef(Math.random() * 100);

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

    const opacity = isFront ? 1 : 0.5;

    return (
        <group position={[0, 0.3, 0.15]} scale={[0.78, 0.78, 0.78]}>
            {/* ── HEAD GROUP ── */}
            <mesh ref={headRef} position={[0, 2.15, 0]}>
                {/* Face / Head */}
                <sphereGeometry args={[0.52, 32, 32]} />
                <meshStandardMaterial color={skinColor} roughness={0.6} transparent opacity={opacity} />
            </mesh>
            {/* Hair */}
            <mesh position={[0, 2.5, -0.05]}>
                <sphereGeometry args={[0.54, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.8} transparent opacity={opacity} />
            </mesh>
            {/* Eyes */}
            <mesh position={[-0.18, 2.2, 0.46]}>
                <sphereGeometry args={[0.06, 8, 8]} />
                <meshBasicMaterial color="#111" transparent opacity={opacity} />
            </mesh>
            <mesh position={[0.18, 2.2, 0.46]}>
                <sphereGeometry args={[0.06, 8, 8]} />
                <meshBasicMaterial color="#111" transparent opacity={opacity} />
            </mesh>
            {/* Eye shine */}
            <mesh position={[-0.15, 2.23, 0.50]}>
                <sphereGeometry args={[0.025, 6, 6]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={opacity} />
            </mesh>
            <mesh position={[0.21, 2.23, 0.50]}>
                <sphereGeometry args={[0.025, 6, 6]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={opacity} />
            </mesh>
            {/* Neck */}
            <mesh position={[0, 1.68, 0]}>
                <cylinderGeometry args={[0.15, 0.18, 0.38, 12]} />
                <meshStandardMaterial color={skinColor} roughness={0.6} transparent opacity={opacity} />
            </mesh>

            {/* ── BODY / TORSO ── */}
            <group ref={bodyRef} position={[0, 0.9, 0]}>
                {/* Main torso */}
                <mesh>
                    <boxGeometry args={[0.9, 1.1, 0.52]} />
                    <meshStandardMaterial color={clothColor} roughness={0.4} metalness={0.2} transparent opacity={opacity} />
                </mesh>
                {/* Shirt collar detail */}
                <mesh position={[0, 0.52, 0.25]}>
                    <boxGeometry args={[0.32, 0.15, 0.05]} />
                    <meshBasicMaterial color={color} transparent opacity={isFront ? 0.9 : 0.4} />
                </mesh>
                {/* Chest badge glow */}
                <mesh position={[0.25, 0.2, 0.27]}>
                    <boxGeometry args={[0.15, 0.1, 0.02]} />
                    <meshBasicMaterial color={color} transparent opacity={isFront ? 0.8 : 0.3} />
                </mesh>

                {/* ── LEFT ARM ── */}
                <group ref={lArmRef} position={[-0.62, 0.35, 0]}>
                    {/* Upper arm */}
                    <mesh position={[-0.18, -0.28, 0]}>
                        <capsuleGeometry args={[0.15, 0.5, 6, 12]} />
                        <meshStandardMaterial color={clothColor} roughness={0.4} transparent opacity={opacity} />
                    </mesh>
                    {/* Forearm */}
                    <mesh position={[-0.22, -0.8, 0]}>
                        <capsuleGeometry args={[0.12, 0.42, 6, 12]} />
                        <meshStandardMaterial color={skinColor} roughness={0.6} transparent opacity={opacity} />
                    </mesh>
                    {/* Hand */}
                    <mesh position={[-0.24, -1.12, 0]}>
                        <sphereGeometry args={[0.13, 12, 12]} />
                        <meshStandardMaterial color={skinColor} roughness={0.6} transparent opacity={opacity} />
                    </mesh>
                </group>

                {/* ── RIGHT ARM ── */}
                <group ref={rArmRef} position={[0.62, 0.35, 0]}>
                    <mesh position={[0.18, -0.28, 0]}>
                        <capsuleGeometry args={[0.15, 0.5, 6, 12]} />
                        <meshStandardMaterial color={clothColor} roughness={0.4} transparent opacity={opacity} />
                    </mesh>
                    <mesh position={[0.22, -0.8, 0]}>
                        <capsuleGeometry args={[0.12, 0.42, 6, 12]} />
                        <meshStandardMaterial color={skinColor} roughness={0.6} transparent opacity={opacity} />
                    </mesh>
                    <mesh position={[0.24, -1.12, 0]}>
                        <sphereGeometry args={[0.13, 12, 12]} />
                        <meshStandardMaterial color={skinColor} roughness={0.6} transparent opacity={opacity} />
                    </mesh>
                </group>
            </group>

            {/* ── HIPS ── */}
            <mesh position={[0, 0.28, 0]}>
                <boxGeometry args={[0.82, 0.38, 0.46]} />
                <meshStandardMaterial color={clothColor} roughness={0.5} transparent opacity={opacity} />
            </mesh>

            {/* ── LEFT LEG ── */}
            <group ref={lLegRef} position={[-0.25, 0.1, 0]}>
                {/* Thigh */}
                <mesh position={[0, -0.42, 0]}>
                    <capsuleGeometry args={[0.18, 0.6, 6, 12]} />
                    <meshStandardMaterial color="#2a2a3a" roughness={0.6} transparent opacity={opacity} />
                </mesh>
                {/* Shin */}
                <mesh position={[0, -1.05, 0]}>
                    <capsuleGeometry args={[0.14, 0.55, 6, 12]} />
                    <meshStandardMaterial color="#2a2a3a" roughness={0.6} transparent opacity={opacity} />
                </mesh>
                {/* Shoe */}
                <mesh position={[0.04, -1.47, 0.1]}>
                    <boxGeometry args={[0.22, 0.12, 0.42]} />
                    <meshStandardMaterial color="#111" roughness={0.3} metalness={0.4} transparent opacity={opacity} />
                </mesh>
            </group>

            {/* ── RIGHT LEG ── */}
            <group ref={rLegRef} position={[0.25, 0.1, 0]}>
                <mesh position={[0, -0.42, 0]}>
                    <capsuleGeometry args={[0.18, 0.6, 6, 12]} />
                    <meshStandardMaterial color="#2a2a3a" roughness={0.6} transparent opacity={opacity} />
                </mesh>
                <mesh position={[0, -1.05, 0]}>
                    <capsuleGeometry args={[0.14, 0.55, 6, 12]} />
                    <meshStandardMaterial color="#2a2a3a" roughness={0.6} transparent opacity={opacity} />
                </mesh>
                <mesh position={[0.04, -1.47, 0.1]}>
                    <boxGeometry args={[0.22, 0.12, 0.42]} />
                    <meshStandardMaterial color="#111" roughness={0.3} metalness={0.4} transparent opacity={opacity} />
                </mesh>
            </group>

            {/* Ground shadow disc under feet */}
            <mesh position={[0, -1.38, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.5, 24]} />
                <meshBasicMaterial color={color} transparent opacity={isFront ? 0.15 : 0.05} />
            </mesh>
        </group>
    );
}

// ───────────────────────────────────────────────
// Card Component
// ───────────────────────────────────────────────
function Card({
    member,
    isFront,
    onClick
}: {
    member: typeof MEMBERS[0];
    isFront: boolean;
    onClick: () => void;
}) {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    const animRef = useRef({
        posX: 0, posY: 0, posZ: 0,
        rotY: 0, rotX: 0,
        scale: 1,
        time: Math.random() * 100,
        initialized: false,
    });

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        const a = animRef.current;

        if (!a.initialized) {
            const s = isFront ? FRONT : BACK;
            a.posX = s.pos.x; a.posY = s.pos.y; a.posZ = s.pos.z;
            a.rotY = s.rotY; a.scale = s.scale;
            a.initialized = true;
        }

        a.time += delta;
        const target = isFront ? FRONT : BACK;
        const sp = delta * 5.5;

        a.posX  = THREE.MathUtils.lerp(a.posX, target.pos.x, sp);
        a.posY  = THREE.MathUtils.lerp(a.posY, target.pos.y, sp);
        a.posZ  = THREE.MathUtils.lerp(a.posZ, target.pos.z, sp);
        a.scale = THREE.MathUtils.lerp(a.scale, target.scale, sp);

        let tRotY = target.rotY;
        let tRotX = 0;
        if (isFront && hovered) {
            tRotY = state.mouse.x * 0.3;
            tRotX = -state.mouse.y * 0.18;
        }
        a.rotY = THREE.MathUtils.lerp(a.rotY, tRotY, sp);
        a.rotX = THREE.MathUtils.lerp(a.rotX, tRotX, sp);

        const float = isFront
            ? Math.sin(a.time * 1.1) * 0.06
            : Math.sin(a.time * 0.8 + 1.5) * 0.03;

        groupRef.current.position.set(a.posX, a.posY + float, a.posZ);
        groupRef.current.rotation.set(a.rotX, a.rotY, 0);
        groupRef.current.scale.setScalar(a.scale);
    });

    return (
        <group
            ref={groupRef}
            onClick={isFront ? onClick : undefined}
            onPointerOver={() => { if (isFront) setHovered(true); }}
            onPointerOut={() => setHovered(false)}
        >
            {/* Card dark back face */}
            <mesh position={[0, 0, -0.06]}>
                <boxGeometry args={[3.0, 4.6, 0.02]} />
                <meshStandardMaterial color="#060609" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Card glass body — use Standard not Physical for perf */}
            <mesh>
                <boxGeometry args={[3.0, 4.6, 0.06]} />
                <meshStandardMaterial
                    color="#e8eeff"
                    transparent
                    opacity={isFront ? 0.08 : 0.04}
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>

            {/* Accent glow border */}
            <mesh>
                <boxGeometry args={[3.04, 4.64, 0.03]} />
                <meshBasicMaterial
                    color={member.color}
                    transparent
                    opacity={isFront ? 0.2 : 0.06}
                />
            </mesh>

            {/* Top color strip */}
            <mesh position={[0, 2.28, 0.04]}>
                <planeGeometry args={[2.8, 0.055]} />
                <meshBasicMaterial color={member.color} transparent opacity={isFront ? 0.7 : 0.15} />
            </mesh>

            {/* ── 3D Human Figure ── */}
            <HumanFigure
                color={member.color}
                skinColor={member.skinColor}
                clothColor={member.clothColor}
                isFront={isFront}
            />

            {/* Separator line */}
            <mesh position={[0, -1.55, 0.05]}>
                <planeGeometry args={[2.3, 0.01]} />
                <meshBasicMaterial color={member.color} transparent opacity={isFront ? 0.5 : 0.08} />
            </mesh>

            {/* Name */}
            <Text
                position={[0, -1.82, 0.05]}
                fontSize={0.26}
                color={isFront ? "#111111" : "#999999"}
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.06}
            >
                {member.name}
            </Text>

            {/* Role */}
            <Text
                position={[0, -2.12, 0.05]}
                fontSize={0.11}
                color={member.color}
                fillOpacity={isFront ? 0.8 : 0.2}
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.12}
            >
                {member.role}
            </Text>

            {/* Click hint */}
            {isFront && (
                <Text
                    position={[0, -2.38, 0.05]}
                    fontSize={0.085}
                    color="#aaaaaa"
                    fillOpacity={0.35}
                    anchorX="center"
                    anchorY="middle"
                    letterSpacing={0.15}
                >
                    CLICK TO SWITCH
                </Text>
            )}
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
                        <sphereGeometry args={[big ? 0.05 : 0.025, 8, 8]} />
                        <meshBasicMaterial color={color} transparent opacity={big ? 0.85 : 0.4} />
                    </mesh>
                );
            })}
        </group>
    );
}

// ───────────────────────────────────────────────
// Deck Scene
// ───────────────────────────────────────────────
function DeckScene() {
    const [frontIndex, setFrontIndex] = useState(0);
    const backIndex = (frontIndex + 1) % MEMBERS.length;
    const swap = () => setFrontIndex(p => (p + 1) % MEMBERS.length);

    return (
        <>
            <Card member={MEMBERS[backIndex]}  isFront={false} onClick={swap} />
            <Card member={MEMBERS[frontIndex]} isFront={true}  onClick={swap} />
            <ParticleRing color={MEMBERS[frontIndex].color} />
        </>
    );
}

// ───────────────────────────────────────────────
// Export
// ───────────────────────────────────────────────
export default function TeamScene() {
    return (
        <div className="w-full h-full min-h-[580px] cursor-pointer select-none">
            <Canvas
                gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
                dpr={Math.min(window?.devicePixelRatio ?? 1, 1.5)}
                onCreated={({ gl }) => { gl.shadowMap.type = THREE.PCFShadowMap; }}
            >
                <PerspectiveCamera makeDefault position={[0, 0.4, 8.5]} fov={44} />

                {/* Studio lighting */}
                <ambientLight intensity={0.7} />
                <directionalLight position={[4, 8, 6]} intensity={1.8} />
                <pointLight position={[-5, 4, 5]} intensity={1.2} color="#a0d8ff" />
                <pointLight position={[5, -3, 4]} intensity={0.6} color="#ffffff" />

                <Suspense fallback={null}>
                    <DeckScene />
                </Suspense>

                <Shadow
                    opacity={0.07}
                    scale={[6, 6, 1]}
                    position={[0, -3.6, -1]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </Canvas>
        </div>
    );
}
