'use client';

<<<<<<< HEAD
=======
import { useEffect } from 'react';
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundKinetic from '@/components/layout/BackgroundKinetic';
import IntroLoader from '@/components/layout/IntroLoader';
import ScrollProgress from '@/components/ui/ScrollProgress';
import SuppressWarnings from '@/components/ui/SuppressWarnings';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Lenis from 'lenis';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
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
    <div className="relative min-h-screen bg-[#FFFFFF] selection:bg-[#22D3EE] selection:text-black">
      {/* Suppress known R3F/Three.js internal deprecation warnings */}
      <SuppressWarnings />
      {/* Noise Overlay Effect */}
      <div className="noise" />
      
      {/* Visual Effects: Scanline */}
      <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden opacity-[0.05]">
        <div className="w-full h-[1px] bg-black animate-scanline" />
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
        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
        animate={{ 
          opacity: loading ? 0 : 1,
          scale: loading ? 0.98 : 1,
          filter: loading ? "blur(10px)" : "blur(0px)"
        }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        <main className="relative">
          {children}
        </main>
        <Footer />
      </motion.div>

      {!loading && <Navbar />}
=======
  useEffect(() => {
    // Tambahkan class zoom ke body saat di halaman publik
    document.body.classList.add('desktop-body-zoom');
    
    return () => {
      // Hapus class saat meninggalkan halaman publik
      document.body.classList.remove('desktop-body-zoom');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
    </div>
  );
}
