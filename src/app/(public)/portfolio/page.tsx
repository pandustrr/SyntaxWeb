'use client';

import { PortfolioSection } from '@/modules/portfolio';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20 min-h-screen"
    >
      <PortfolioSection />
    </motion.div>
  );
}
