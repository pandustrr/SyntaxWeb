'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 right-12 h-screen w-[1px] bg-white/5 z-[60] pointer-events-none hidden lg:block">
            <motion.div
                className="absolute top-0 left-0 w-full bg-[#B6B09F] origin-top h-full"
                style={{ scaleY }}
            />

            {/* Visual Accents */}
            <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full border border-[#B6B09F]/20" />
            <div className="absolute bottom-0 left-[-4px] w-2 h-2 rounded-full border border-[#B6B09F]/20" />

            <div className="absolute top-1/2 left-4 text-[8px] font-black uppercase tracking-[0.5em] text-gray-700 [writing-mode:vertical-lr] -translate-y-1/2">
                SCROLL PROGRESS
            </div>
        </div>
    );
}
