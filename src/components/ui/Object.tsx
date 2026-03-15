/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Floating geometric shape — one instance
function FloatingShape({
    geo,
    position,
    speed,
    amplitude,
    rotSpeed,
    color,
    opacity,
    phase,
}: {
    geo: THREE.BufferGeometry;
    position: [number, number, number];
    speed: number;
    amplitude: number;
    rotSpeed: [number, number, number];
    color: string;
    opacity: number;
    phase: number;
}) {
    const ref = useRef<THREE.Mesh>(null);
    const t = useRef(phase);

    useFrame((_, delta) => {
        if (!ref.current) return;
        t.current += delta * speed;
        ref.current.position.y = position[1] + Math.sin(t.current) * amplitude;
        ref.current.position.x = position[0] + Math.cos(t.current * 0.7) * amplitude * 0.4;
        ref.current.rotation.x += delta * rotSpeed[0];
        ref.current.rotation.y += delta * rotSpeed[1];
        ref.current.rotation.z += delta * rotSpeed[2];
    });

    return (
        <mesh ref={ref} position={position} geometry={geo}>
            <meshStandardMaterial
                color={color}
                transparent
                opacity={opacity}
                roughness={0.3}
                metalness={0.6}
                wireframe={false}
            />
        </mesh>
    );
}

// Wireframe shape ring orbiting a center
function WireOrbit({
    radius,
    speed,
    geo,
    color,
    tiltX,
    tiltZ,
}: {
    radius: number;
    speed: number;
    geo: THREE.BufferGeometry;
    color: string;
    tiltX: number;
    tiltZ: number;
}) {
    const ref = useRef<THREE.Group>(null);
    const t = useRef(Math.random() * Math.PI * 2);

    useFrame((_, delta) => {
        if (!ref.current) return;
        t.current += delta * speed;
        ref.current.rotation.y = t.current;
        ref.current.rotation.x = tiltX;
        ref.current.rotation.z = tiltZ;
    });

    return (
        <group ref={ref}>
            <mesh position={[radius, 0, 0]} geometry={geo}>
                <meshBasicMaterial color={color} transparent opacity={0.12} wireframe />
            </mesh>
        </group>
    );
}

// Large ambient ring plane (decorative circle outline)
function AmbientRing({ radius, color, rotX }: { radius: number; color: string; rotX: number }) {
    const ref = useRef<THREE.Mesh>(null);
    const t = useRef(0);

    useFrame((_, delta) => {
        if (!ref.current) return;
        t.current += delta * 0.08;
        ref.current.rotation.z = t.current;
        ref.current.rotation.x = rotX + Math.sin(t.current * 0.3) * 0.05;
    });

    const geom = useMemo(() => new THREE.TorusGeometry(radius, 0.008, 3, 64), [radius]);

    return (
        <mesh ref={ref} geometry={geom}>
            <meshBasicMaterial color={color} transparent opacity={0.08} />
        </mesh>
    );
}

// Mouse-tracking subtle glow dot
function CursorGlow() {
    const ref = useRef<THREE.Mesh>(null);
    const { mouse, viewport } = useThree();
    const posRef = useRef(new THREE.Vector3(0, 0, 0));

    useFrame((_, delta) => {
        if (!ref.current) return;
        const tx = (mouse.x * viewport.width) / 2;
        const ty = (mouse.y * viewport.height) / 2;
        posRef.current.lerp(new THREE.Vector3(tx, ty, 0), delta * 4);
        ref.current.position.copy(posRef.current);
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshBasicMaterial color="#22D3EE" transparent opacity={0.35} />
        </mesh>
    );
}

export default function Object3D() {
    // Shared geometries — created once
    const icosa0 = useMemo(() => new THREE.IcosahedronGeometry(0.35, 0), []);
    const icosa1 = useMemo(() => new THREE.IcosahedronGeometry(0.6, 0), []);
    const octa   = useMemo(() => new THREE.OctahedronGeometry(0.4, 0), []);
    const tetra  = useMemo(() => new THREE.TetrahedronGeometry(0.45, 0), []);
    const box    = useMemo(() => new THREE.BoxGeometry(0.55, 0.55, 0.55), []);

    const shapes = useMemo(() => [
        // Left cluster
        { geo: icosa0, pos: [-4.5,  0.5, -1.5] as [number,number,number], speed: 0.55, amp: 0.4, rot: [0.3, 0.5, 0.1] as [number,number,number], color: '#22D3EE', op: 0.55, ph: 0 },
        { geo: octa,   pos: [-3.0,  2.0, -2.5] as [number,number,number], speed: 0.4,  amp: 0.5, rot: [0.2, 0.8, 0.2] as [number,number,number], color: '#ffffff', op: 0.25, ph: 1 },
        { geo: tetra,  pos: [-5.5, -1.5, -1.0] as [number,number,number], speed: 0.7,  amp: 0.3, rot: [0.6, 0.2, 0.4] as [number,number,number], color: '#22D3EE', op: 0.3,  ph: 2 },
        { geo: box,    pos: [-2.5, -2.5, -3.0] as [number,number,number], speed: 0.35, amp: 0.6, rot: [0.4, 0.4, 0.2] as [number,number,number], color: '#000000', op: 0.12, ph: 0.5 },

        // Right cluster
        { geo: icosa1, pos: [4.0,  0.0, -2.0] as [number,number,number], speed: 0.5,  amp: 0.45, rot: [0.2, 0.6, 0.1] as [number,number,number], color: '#22D3EE', op: 0.5,  ph: 3 },
        { geo: octa,   pos: [5.5,  1.5, -1.0] as [number,number,number], speed: 0.6,  amp: 0.35, rot: [0.5, 0.3, 0.3] as [number,number,number], color: '#ffffff', op: 0.2,  ph: 1.5 },
        { geo: tetra,  pos: [3.0, -2.0, -3.0] as [number,number,number], speed: 0.45, amp: 0.55, rot: [0.3, 0.7, 0.2] as [number,number,number], color: '#22D3EE', op: 0.35, ph: 2.5 },
        { geo: box,    pos: [6.0, -0.5, -2.5] as [number,number,number], speed: 0.38, amp: 0.4,  rot: [0.7, 0.2, 0.5] as [number,number,number], color: '#000000', op: 0.1,  ph: 4 },

        // Top / center accent
        { geo: icosa0, pos: [0.5,  3.5, -2.0] as [number,number,number], speed: 0.3,  amp: 0.5, rot: [0.2, 0.4, 0.3] as [number,number,number], color: '#22D3EE', op: 0.4,  ph: 5 },
        { geo: octa,   pos: [-1.5, 3.0, -3.0] as [number,number,number], speed: 0.45, amp: 0.4, rot: [0.4, 0.3, 0.5] as [number,number,number], color: '#ffffff', op: 0.18, ph: 6 },

        // Bottom
        { geo: tetra,  pos: [1.0, -3.5, -2.0] as [number,number,number], speed: 0.5,  amp: 0.45, rot: [0.3, 0.6, 0.2] as [number,number,number], color: '#22D3EE', op: 0.28, ph: 7 },
        { geo: box,    pos: [-1.0, -3.2, -3.5] as [number,number,number], speed: 0.4, amp: 0.35, rot: [0.5, 0.4, 0.3] as [number,number,number], color: '#000000', op: 0.1,  ph: 8 },
    ], [icosa0, icosa1, octa, tetra, box]);

    return (
        <group>
            {/* Floating solids */}
            {shapes.map((s, i) => (
                <FloatingShape
                    key={i}
                    geo={s.geo}
                    position={s.pos}
                    speed={s.speed}
                    amplitude={s.amp}
                    rotSpeed={s.rot}
                    color={s.color}
                    opacity={s.op}
                    phase={s.ph}
                />
            ))}

            {/* Orbiting wireframe shapes */}
            <WireOrbit radius={2.5} speed={0.25} geo={icosa1} color="#22D3EE" tiltX={0.4}  tiltZ={0.1} />
            <WireOrbit radius={3.5} speed={0.18} geo={octa}   color="#000000" tiltX={-0.3} tiltZ={0.5} />
            <WireOrbit radius={2.0} speed={0.35} geo={tetra}  color="#22D3EE" tiltX={0.6}  tiltZ={-0.2} />

            {/* Large decorative rings */}
            <AmbientRing radius={5.5} color="#22D3EE" rotX={0.3} />
            <AmbientRing radius={7.0} color="#000000" rotX={-0.5} />
            <AmbientRing radius={4.0} color="#22D3EE" rotX={1.0} />

            {/* Mouse glow */}
            <CursorGlow />
        </group>
    );
}
