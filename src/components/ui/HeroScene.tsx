/// <reference types="@react-three/fiber" />
'use client';

import { Suspense } from 'react';
import Scene from './Scene';

export default function HeroScene({
  activeProject = null,
  isFocused = false,
  progress = 0
}: {
  activeProject?: string | null,
  isFocused?: boolean,
  progress?: number
}) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Suspense fallback={null}>
        <Scene activeProject={activeProject} isFocused={isFocused} progress={progress} />
      </Suspense>
    </div>
  );
}
