'use client';

import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PartnersPage() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] border-[1px] border-black rotate-12" />
        <div className="absolute top-[20%] right-[-5%] w-[80%] h-[80%] border-[1px] border-black -rotate-6" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="flex flex-col items-center"
        >
          <div className="w-20 h-20 border border-black/5 flex items-center justify-center text-black mb-12 bg-black/[0.02] rounded-full">
            <Construction size={32} strokeWidth={1.5} />
          </div>

          <h1 className="text-6xl md:text-[8rem] font-black text-black tracking-tighter uppercase font-['Teko'] leading-[0.8] mb-8">
            PARTNERS <br />
            <span className="text-[#EEEEEE]">SECTION</span>
          </h1>

          <div className="w-24 h-[1px] bg-[#22D3EE] mb-12 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

          <p className="text-xl md:text-2xl text-slate-500 font-medium tracking-tight uppercase leading-relaxed mb-16 max-w-xl mx-auto">
            Kami sedang membangun ekosistem kolaborasi baru. <br />
            Halaman ini sedang dalam pengembangan.
          </p>

          <Link 
            href="/"
            className="group flex items-center gap-4 px-10 py-5 border border-black/10 text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-black hover:text-white transition-all duration-500"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
            BACK TO MISSION
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-black text-black/20 tracking-[1em] uppercase">
        ARCHIVE_V01
      </div>
    </section>
  );
}
