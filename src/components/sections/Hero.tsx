'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import DecryptedText from '@/components/animations/DecryptedText';

const HeroScene = dynamic(() => import('@/components/ui/HeroScene'), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();

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
    initial: { y: "110%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] pt-32 pb-20">
      {/* Background Glows (Very Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#22D3EE]/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* The 3D Scene - Full Screen Background */}
      <div className="absolute inset-x-0 inset-y-0 z-0 flex items-center justify-center opacity-70 pointer-events-none overflow-visible">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "circOut" }}
            className="w-full h-full min-w-full min-h-full"
          >
            <HeroScene />
          </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Huge Heading Container - Optimized Spacing */}
          <div className="relative w-full flex items-center justify-center min-h-[30vh] md:min-h-[45vh] mt-4 md:mt-8">
            {/* Huge SYNTAX Text with Decrypted Animation */}
            <h1 className="text-[22vw] md:text-[20vw] font-bold text-black tracking-tighter uppercase font-['Teko'] leading-none relative z-10 select-none pointer-events-none">
              <DecryptedText 
                text="SYNTAX" 
                animateOn="view" 
                revealDirection="center"
                speed={70}
                className="text-black"
                encryptedClassName="text-[#22D3EE]/30"
                sequential={true}
              />
            </h1>
          </div>

          {/* Subtext & CTA - Refined and Visible */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-8 mt-6 md:mt-10 z-20"
          >
            <div className="flex flex-col items-center max-w-lg text-center gap-3">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 30 }}
                className="h-[1px] bg-[#22D3EE]"
              />
              <p className="text-[10px] md:text-sm font-bold text-black/60 uppercase tracking-[0.4em] leading-relaxed">
                 <DecryptedText 
                    text="Mengubah konsep berani menjadi invoasi digital" 
                    animateOn="view"
                    speed={40}
                 />
              </p>
            </div>
            
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer flex items-center gap-5 py-4 px-9 border border-black/20 hover:border-[#22D3EE] transition-all duration-500 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 rounded-sm overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-black group-hover:text-white relative z-10 transition-colors duration-300">
                Lihat Karya
              </span>
              <ArrowRight size={14} className="text-black group-hover:text-[#22D3EE] group-hover:translate-x-1 relative z-10 transition-all duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>


        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-6 hidden md:flex flex-col items-center gap-6"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-black/20 [writing-mode:vertical-lr]">EXPLORE</span>
          <motion.div
            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-black/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
