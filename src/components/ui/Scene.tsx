'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import Object3D from './Object';
import * as THREE from 'three';

export default function Scene({ activeProject, isFocused, progress }: { activeProject: string | null, isFocused: boolean, progress: number }) {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 32 }}
            gl={{
                antialias: false,
                alpha: true,
                powerPreference: "high-performance"
            }}
            dpr={[1, 2]}
            style={{ width: '100%', height: '100%' }}
        >
            <Suspense fallback={null}>
                <Environment preset="city" />
                <ambientLight intensity={0.6} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Object3D
                    activeProject={activeProject}
                    isFocused={isFocused}
                    progress={progress}
                />
            </Suspense>
        </Canvas>
    );
}
