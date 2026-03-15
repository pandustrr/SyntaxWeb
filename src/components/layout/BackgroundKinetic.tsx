'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundKinetic() {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.08, 0.03]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
            {/* Architectural Grid Lines */}
            <div className="absolute inset-0 flex justify-between px-[10%] pointer-events-none opacity-[0.05]">
                <div className="w-[1px] h-full bg-[#B6B09F]" />
                <div className="w-[1px] h-full bg-[#B6B09F]" />
                <div className="w-[1px] h-full bg-[#B6B09F]" />
                <div className="w-[1px] h-full bg-[#B6B09F]" />
            </div>

            {/* BLUEPRINT_V01 Master Structure */}
            <motion.div
                style={{ rotate, opacity }}
                className="absolute inset-0 flex items-center justify-center p-[5%]"
            >
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-[80%] h-[80%] stroke-[#B6B09F] stroke-[0.2] fill-transparent">
                    {/* Nested Squares (The Blueprint Structure) */}
                    <rect x="50" y="50" width="900" height="900" />
                    <rect x="150" y="150" width="700" height="700" />
                    <rect x="250" y="250" width="500" height="500" />
                    <rect x="350" y="350" width="300" height="300" />

                    {/* Structural Diagonals */}
                    <line x1="50" y1="50" x2="950" y2="950" />
                    <line x1="950" y1="50" x2="50" y2="950" />

                    {/* Vertex Connectors */}
                    <line x1="500" y1="50" x2="500" y2="950" strokeWidth="0.1" />
                    <line x1="50" y1="500" x2="950" y2="500" strokeWidth="0.1" />

                    {/* Glowing Vertices */}
                    <circle cx="500" cy="500" r="2" fill="#B6B09F" opacity="0.5" />
                    <circle cx="50" cy="50" r="1.5" fill="#B6B09F" opacity="0.3" />
                    <circle cx="950" cy="50" r="1.5" fill="#B6B09F" opacity="0.3" />
                    <circle cx="50" cy="950" r="1.5" fill="#B6B09F" opacity="0.3" />
                    <circle cx="950" cy="950" r="1.5" fill="#B6B09F" opacity="0.3" />
                </svg>
            </motion.div>

            {/* HUD Status Text Fixed */}
            <div className="absolute bottom-12 left-12 flex flex-col gap-2">
                <span className="text-[9px] font-mono text-[#B6B09F]/20 uppercase tracking-[0.8em] font-black">
                    BLUEPRINT_V0.1
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#B6B09F]/20 to-transparent" />
            </div>

            {/* Subtle Gradient for depth */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(182,176,159,0.02)_0%,transparent_50%)]" />

            {/* Vignette for focus */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
        </div>
    );
}
