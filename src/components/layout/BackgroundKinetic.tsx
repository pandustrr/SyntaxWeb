'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundKinetic() {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.05, 0.03]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
            {/* Architectural Squares/Grid Background */}
            <div
                className="absolute inset-0 opacity-[var(--grid-opacity)]"
                style={{
                    backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Smaller Technical Grid */}
            <div
                className="absolute inset-0 opacity-[calc(var(--grid-opacity)*0.6)]"
                style={{
                    backgroundImage: `linear-gradient(var(--grid-line) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--grid-line) 0.5px, transparent 0.5px)`,
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Kinetic Moving Squares */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.01, 0.03, 0.01],
                            x: [0, 50, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute border border-border"
                        style={{
                            width: `${(i + 1) * 150}px`,
                            height: `${(i + 1) * 150}px`,
                            left: `${i * 15}%`,
                            top: `${i * 10}%`,
                        }}
                    />
                ))}
            </div>

            {/* BLUEPRINT_V01 Master Structure */}
            <motion.div
                style={{ rotate, opacity }}
                className="absolute inset-0 flex items-center justify-center p-[5%]"
            >
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-foreground opacity-[0.05] stroke-[0.3] fill-transparent">
                    <circle cx="500" cy="500" r="450" />
                    <circle cx="500" cy="500" r="300" />
                    <rect x="200" y="200" width="600" height="600" />
                    <line x1="0" y1="500" x2="1000" y2="500" />
                    <line x1="500" y1="0" x2="500" y2="1000" />
                    <path d="M0,0 L1000,1000 M1000,0 L0,1000" />
                </svg>
            </motion.div>

            {/* HUD Status Text Fixed */}
            <div className="absolute bottom-12 left-12 flex flex-col gap-2">
                <span className="text-[9px] font-mono text-foreground opacity-10 uppercase tracking-[0.8em] font-black">
                    BLUEPRINT_V0.1
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-r from-foreground/10 to-transparent" />
            </div>

            {/* Subtle Gradient for depth */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.03)_0%,transparent_50%)]" />

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
    );
}
