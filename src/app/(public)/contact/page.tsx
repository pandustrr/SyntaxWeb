'use client';

import { ContactSection } from '@/modules/contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20"
    >
      <ContactSection />
    </motion.div>
  );
}

