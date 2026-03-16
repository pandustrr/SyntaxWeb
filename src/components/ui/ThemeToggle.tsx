'use client';

import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-8 h-8 rounded-full border border-border bg-card opacity-20" />
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-brand-cyan/20 transition-all duration-300 group shadow-lg"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="moon"
                        initial={{ scale: 0, rotate: 90, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'backOut' }}
                    >
                        <Moon size={18} className="text-brand-cyan" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ scale: 0, rotate: -90, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'backOut' }}
                    >
                        <Sun size={18} className="text-orange-500" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle Glow */}
            <div className="absolute inset-0 rounded-full bg-brand-cyan/0 group-hover:bg-brand-cyan/5 blur-md transition-all duration-500" />
        </button>
    );
}
