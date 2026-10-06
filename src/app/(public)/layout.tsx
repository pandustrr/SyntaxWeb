'use client';

import { Navbar, Footer, BackgroundKinetic, IntroLoader, ScrollProgress, SuppressWarnings } from '@/modules/shared';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Lenis from 'lenis';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.5,
        infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-background selection:bg-brand-cyan selection:text-black">
      <SuppressWarnings />
      <div className="noise" />

      <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden opacity-[0.05]">
        <div className="w-full h-[1px] bg-white animate-scanline" />
      </div>

      <AnimatePresence mode="wait">
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <BackgroundKinetic />
          <ScrollProgress />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        animate={{
          opacity: loading ? 0 : 1,
          scale: loading ? 0.98 : 1,
          filter: loading ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        <main className="relative">{children}</main>
        <Footer />
      </motion.div>

      {!loading && <Navbar />}
    </div>
  );
}
