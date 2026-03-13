'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundKinetic() {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.08, 0.03]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
            {/* Architectural Geometric Grid Element */}
            <motion.div
                style={{ rotate, opacity }}
                className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]"
            >
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#B6B09F] stroke-[0.3] fill-transparent">
                    <circle cx="500" cy="500" r="450" />
                    <circle cx="500" cy="500" r="300" />
                    <rect x="200" y="200" width="600" height="600" />
                    <line x1="0" y1="500" x2="1000" y2="500" />
                    <line x1="500" y1="0" x2="500" y2="1000" />
                    <path d="M0,0 L1000,1000 M1000,0 L0,1000" />
                </svg>
            </motion.div>

            {/* Noise Overlay - Essential for premium texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            {/* Vignette for focus */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        </div>
    );
}
