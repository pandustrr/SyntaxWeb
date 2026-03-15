'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        const timer = setTimeout(onComplete, duration + 500);
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                scale: 1.1,
                transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
            className="fixed inset-0 z-[100] bg-[#FFFFFF] flex items-center justify-center overflow-hidden"
        >
            {/* Background Grid & Squares for Intro */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
                <div 
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>

            {/* Kinetic Moving Squares - Specific for Intro */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -100, y: -100 }}
                        animate={{ 
                            opacity: [0, 0.03, 0],
                            x: [0, 100, 0],
                            y: [0, 50, 0]
                        }}
                        transition={{ 
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute border border-black/10"
                        style={{
                            width: `${(i + 1) * 200}px`,
                            height: `${(i + 1) * 200}px`,
                            left: `${i * 20}%`,
                            top: `${i * 15}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center relative z-10"
            >
                <div className="relative mb-2">
                    <motion.span 
                        className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#22D3EE] tracking-[0.4em]"
                    >
                        {Math.round(progress)}%
                    </motion.span>
                    <span className="text-5xl md:text-8xl font-bold text-black tracking-tighter uppercase font-['Teko'] leading-none">
                        SYNTAX<span className="text-[#22D3EE]">WEB</span>
                    </span>
                </div>
                
                <div className="w-64 h-[3px] bg-black/5 mt-2 relative overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                        className="absolute inset-0 bg-[#22D3EE]"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-[9px] uppercase tracking-[0.8em] text-slate-400 mt-8 font-bold"
                >
                    System • Innovation • Intelligence
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
