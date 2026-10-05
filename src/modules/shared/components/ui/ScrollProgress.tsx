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
        <div className="fixed top-0 right-12 h-screen w-[1px] bg-black/5 z-[60] pointer-events-none hidden lg:block">
            <motion.div
                className="absolute top-0 left-0 w-full bg-[#22D3EE] origin-top h-full"
                style={{ scaleY }}
            />

            {/* Visual Accents */}
            <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full border border-black/10" />
            <div className="absolute bottom-0 left-[-4px] w-2 h-2 rounded-full border border-black/10" />

        </div>
    );
}
