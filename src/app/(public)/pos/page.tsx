'use client';

import { PosAppSection } from '@/modules/home';
import { motion } from 'framer-motion';

export default function PosPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20 min-h-screen"
    >
      <PosAppSection />
    </motion.div>
  );
}
