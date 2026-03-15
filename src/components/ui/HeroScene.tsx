/// <reference types="@react-three/fiber" />
'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Object3D from './Object';
import * as THREE from 'three';

export default function HeroScene() {
  return (
    <div className="w-screen h-screen fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}
        dpr={Math.min(window?.devicePixelRatio ?? 1, 1.5)}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
        shadows={false}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 8, 5]} intensity={1} />
          <Object3D />
        </Suspense>
      </Canvas>
    </div>
  );
}
