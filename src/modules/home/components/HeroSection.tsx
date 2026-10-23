'use client';

import { motion } from 'framer-motion';
import DecryptedText from '@/modules/shared/animations/DecryptedText';

export default function Hero() {
  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background transition-colors duration-500">

      {/* ── BACKGROUND: Blueprint Grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
            backgroundSize: '15px 15px',
          }}
        />
      </div>

      {/* Radial vignette — fade grid ke background */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, var(--background) 75%)' }}
      />

      {/* Glow kiri */}
      <div className="absolute z-[2] pointer-events-none top-[5%] left-[-8%] w-[550px] h-[550px] rounded-full bg-[#22D3EE]/[0.06] dark:bg-[#22D3EE]/[0.1] blur-[130px]" />
      {/* Glow kanan bawah */}
      <div className="absolute z-[2] pointer-events-none bottom-[0%] right-[-8%] w-[420px] h-[420px] rounded-full bg-[#22D3EE]/[0.04] dark:bg-[#22D3EE]/[0.07] blur-[110px]" />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] z-[3] pointer-events-none bg-gradient-to-r from-transparent via-[#22D3EE]/25 to-transparent"
        animate={{ top: ['8%', '92%', '8%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute' }}
      />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 z-[3] pointer-events-none">
        <div className="w-8 h-[1px] bg-[#22D3EE]/25" /><div className="w-[1px] h-8 bg-[#22D3EE]/25" />
      </div>
      <div className="absolute top-8 right-8 z-[3] pointer-events-none flex flex-col items-end">
        <div className="w-8 h-[1px] bg-[#22D3EE]/25" /><div className="w-[1px] h-8 bg-[#22D3EE]/25 ml-auto" />
      </div>
      <div className="absolute bottom-8 left-8 z-[3] pointer-events-none flex flex-col justify-end">
        <div className="w-[1px] h-8 bg-[#22D3EE]/25" /><div className="w-8 h-[1px] bg-[#22D3EE]/25" />
      </div>
      <div className="absolute bottom-8 right-8 z-[3] pointer-events-none flex flex-col items-end justify-end">
        <div className="w-[1px] h-8 bg-[#22D3EE]/25 ml-auto" /><div className="w-8 h-[1px] bg-[#22D3EE]/25" />
      </div>




      {/* ── CONTENT LAYER ── */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Heading SYNTAX WEB */}
          <div className="relative w-full flex flex-col items-center justify-center min-h-[35vh] md:min-h-[50vh] gap-0">
            {/* SYNTAX */}
            <h1 className="text-[22vw] md:text-[20vw] font-bold text-foreground tracking-tight uppercase font-['Teko'] leading-[0.85] select-none pointer-events-none drop-shadow-[0_2px_20px_rgba(34,211,238,0.1)]">
              <DecryptedText
                text="SYNTAX"
                animateOn="view"
                revealDirection="center"
                speed={40}
                className="text-foreground"
                encryptedClassName="text-brand-cyan/20"
                sequential={true}
              />
            </h1>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-6 hidden md:flex flex-col items-center gap-6 z-20 pointer-events-auto"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/40 [writing-mode:vertical-lr]">EXPLORE</span>
          <motion.div
            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-foreground/20"
          />
        </motion.div>
      </div>
    </section>
  );
}

