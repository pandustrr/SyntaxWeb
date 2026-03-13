'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: "110%" },
    animate: {
      y: 0,
      transition: { duration: 1.2, ease: "circOut" as any }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent snap-start">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="overflow-hidden mb-10">
            <motion.div
              variants={itemVariants}
              className="px-5 py-2 border border-[#B6B09F]/20 flex items-center gap-3"
            >
              <Sparkles size={14} className="text-[#B6B09F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B6B09F]">
                Architecting Excellence
              </span>
            </motion.div>
          </div>

          {/* Heading with Masked Reveals */}
          <div className="mb-12">
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={itemVariants}
                className="text-7xl md:text-[10rem] font-black text-[#F2F2F2] leading-[0.85] tracking-tighter"
              >
                CRAFTING
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={itemVariants}
                className="text-7xl md:text-[10rem] font-black text-[#B6B09F] leading-[0.85] tracking-tighter"
              >
                DIGITAL
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={itemVariants}
                className="text-7xl md:text-[10rem] font-black text-[#F2F2F2] leading-[0.85] tracking-tighter"
              >
                LEGACIES
              </motion.h1>
            </div>
          </div>

          {/* Subtext */}
          <div className="overflow-hidden mb-14 max-w-2xl px-4">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 font-medium tracking-tight leading-relaxed"
            >
              Transforming complex visions into high-performance digital systems.
              Our architectural approach ensures precision and longevity.
            </motion.p>
          </div>

          {/* CTA */}
          <div className="overflow-hidden">
            <motion.button
              variants={itemVariants}
              whileHover={{
                backgroundColor: "#F2F2F2",
                color: "#000000",
                letterSpacing: "0.5em"
              }}
              className="px-12 py-6 border border-[#F2F2F2] text-[#F2F2F2] text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700"
            >
              View Work
            </motion.button>
          </div>
        </motion.div>

        {/* Stats - Architectural style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute bottom-12 right-6 hidden lg:flex gap-16 border-r border-[#B6B09F]/10 pr-12"
        >
          <div className="text-right">
            <div className="text-4xl font-black text-[#F2F2F2] tracking-tighter">150+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Systems</div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black text-[#F2F2F2] tracking-tighter">99.9%</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Up-time</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-12 flex flex-col items-center gap-6"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 [writing-mode:vertical-lr]">EXPLORE</span>
          <motion.div
            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-[#B6B09F]"
          />
        </motion.div>
      </div>
    </section>
  );
}
