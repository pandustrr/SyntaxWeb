'use client';

import { PricelistSection } from '@/modules/pricelist';
import { motion } from 'framer-motion';

export default function PricelistPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20 min-h-screen"
    >
      <PricelistSection />
    </motion.div>
  );
}
