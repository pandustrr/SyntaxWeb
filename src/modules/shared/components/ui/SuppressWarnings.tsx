'use client';

import { useEffect } from 'react';

/**
 * Suppresses known third-party deprecation warnings from Three.js and R3F
 * that originate from their internal implementations (not our code).
 * These warnings are cosmetic only and do not affect functionality.
 */
export default function SuppressWarnings() {
    useEffect(() => {
        const originalWarn = console.warn;
        
        const suppressedPatterns = [
            'THREE.Clock: This module has been deprecated',
            'THREE.Timer instead',
            'PCFSoftShadowMap has been deprecated',
        ];

        console.warn = (...args: unknown[]) => {
            const message = args.join(' ');
            const isSuppressed = suppressedPatterns.some(pattern => 
                message.includes(pattern)
            );
            if (!isSuppressed) {
                originalWarn.apply(console, args);
            }
        };

        return () => {
            console.warn = originalWarn;
        };
    }, []);

    return null;
}
