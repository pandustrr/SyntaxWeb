'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] as any, delay: 1.2 }}
            className="fixed inset-0 z-[100] bg-[#000000] flex items-center justify-center pointer-events-none"
        >
            <div className="overflow-hidden">
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
                    className="flex flex-col items-center"
                >
                    <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        SYNTAX<span className="text-[#B6B09F]">WEB</span>
                    </span>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "circOut" as any }}
                        className="w-full h-[2px] bg-[#B6B09F] mt-4 origin-left"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mt-4 font-black"
                    >
                        Digital Architecture
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
}
