'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundKinetic from '@/components/layout/BackgroundKinetic';
import IntroLoader from '@/components/layout/IntroLoader';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-screen bg-[#000000] selection:bg-[#B6B09F] selection:text-black overflow-hidden">
      <AnimatePresence mode="wait">
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <BackgroundKinetic />
      <ScrollProgress />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        <main>
          {children}
        </main>
        <Footer />
      </motion.div>

      {!loading && <Navbar />}
    </div>
  );
}
