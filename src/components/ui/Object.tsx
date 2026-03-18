'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Object3D({ activeProject, isFocused, progress }: { activeProject: string | null, isFocused: boolean, progress: number }) {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Group>(null);
    const coreRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);
    const innerCoreRef = useRef<THREE.Mesh>(null);
    const particlesRef = useRef<THREE.Points>(null);
    const ringsRef = useRef<THREE.Group>(null);
    const trailsRef = useRef<THREE.LineSegments>(null);
    const { mouse } = useThree();

    // Floating animation constants
    const floatAmplitude = 0.2;
    const floatSpeed = 1.5;

    // Multi-texture state
    const [textures, setTextures] = useState<Record<string, THREE.Texture>>({});
    const activeTextureRef = useRef<THREE.Texture | null>(null);
    const prevTextureRef = useRef<THREE.Texture | null>(null);

    // Initial geometries
    const icosahedronGeom = useMemo(() => new THREE.IcosahedronGeometry(1, 0), []);
    const innerIcosahedronGeom = useMemo(() => new THREE.IcosahedronGeometry(0.35, 1), []);

    // Generate complex particle data & energy trails
    const { particlePositions, trailPositions } = useMemo(() => {
        const count = 120;
        const pPos = new Float32Array(count * 3);
        const connections: number[] = [];

        for (let i = 0; i < count; i++) {
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
    }, []);

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        const projectUrls: Record<string, string> = {
            'ukm': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
            'sugoi': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
            'af': 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000',
            'bk': 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000',
            'strategix': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
            'hmrp': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
        };

        Object.entries(projectUrls).forEach(([id, url]) => {
            loader.load(url, (tex) => {
                tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
                setTextures(prev => ({ ...prev, [id]: tex }));
            });
        });
    }, []);

    useEffect(() => {
        if (activeProject && textures[activeProject]) {
            prevTextureRef.current = activeTextureRef.current;
            activeTextureRef.current = textures[activeProject];
        } else if (!activeProject) {
            prevTextureRef.current = activeTextureRef.current;
            activeTextureRef.current = null;
        }
    }, [activeProject, textures]);

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();

        // Global Scaling - Cap it to prevent camera clipping
        const targetScale = progress > 0.01 ? THREE.MathUtils.mapLinear(progress, 0.01, 1, 1, 4) : 1;
        meshRef.current?.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        if (coreRef.current) {
            const spin = activeProject ? 3.0 : 0.8;
            coreRef.current.rotation.y += delta * 0.2 * spin;
        }

        // Pulse the inner core
        if (innerCoreRef.current) {
            const pulse = 0.8 + Math.sin(time * 2) * 0.4;
            const coreMat = innerCoreRef.current.material as THREE.MeshStandardMaterial;
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
            ringsRef.current.children.forEach((ring, i) => {
                ring.rotation.x += delta * (0.2 + i * 0.1);
                ring.rotation.y += delta * (0.3 - i * 0.15);
            });
        }

        // Magnetic Tilt
        if (meshRef.current) {
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.3, 0.05);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.3, 0.05);
            meshRef.current.position.y = Math.sin(time * 1.5) * 0.15;
        }
    });

    return (
        <group ref={groupRef}>
            <group ref={meshRef}>
                {/* 1. HUD Orbit Rings */}
                <group ref={ringsRef}>
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[1.4, 0.005, 16, 100]} />
                        <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} wireframe />
                    </mesh>
                    <mesh rotation={[0, Math.PI / 4, 0]}>
                        <torusGeometry args={[1.6, 0.003, 16, 100]} />
                        <meshBasicMaterial color="#22d3ee" transparent opacity={0.2} wireframe />
                    </mesh>
                    <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
                        <torusGeometry args={[1.2, 0.008, 16, 6]} />
                        <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} wireframe />
                    </mesh>
                </group>

                {/* 2. Neural Energy Field */}
                <points ref={particlesRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" count={particlePositions.length / 3} array={particlePositions} itemSize={3} />
                    </bufferGeometry>
                    <pointsMaterial size={0.02} color="#22d3ee" transparent opacity={0.6} sizeAttenuation />
                </points>

                <lineSegments ref={trailsRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" count={trailPositions.length / 3} array={trailPositions} itemSize={3} />
                    </bufferGeometry>
                    <lineBasicMaterial color="#22d3ee" transparent opacity={0.15} />
                </lineSegments>

                {/* 3. The Core Artifact */}
                <mesh ref={innerCoreRef} geometry={innerIcosahedronGeom}>
                    <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} roughness={0} metalness={1} wireframe />
                </mesh>

                <mesh ref={coreRef} geometry={icosahedronGeom}>
                    <MeshTransmissionMaterial
                        backside
                        samples={8}
                        resolution={256}
                        transmission={1}
                        roughness={0.1}
                        thickness={1.2}
                        ior={1.2}
                        chromaticAberration={0.06}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.3}
                        temporalDistortion={0.5}
                        color="#ffffff"
                    />
                </mesh>

                <mesh ref={wireframeRef} geometry={icosahedronGeom} scale={1.6}>
                    <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.1} metalness={1} roughness={0} />
                </mesh>
            </group>
        </group >
    );
}
