'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Box, Briefcase, Zap, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PricelistPage() {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    const icons = [Box, Briefcase, Zap, Rocket];
    const Icon = icons[index % icons.length];
    return <Icon size={24} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center py-20 md:py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-black uppercase tracking-[0.8em] text-black/30 mb-8"
          >
            Investasi Digital
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="flex items-end justify-center gap-4">
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-black/30 mb-6">Start</span>
              <h1 className="text-[15vw] md:text-[12vw] font-black text-black tracking-tighter uppercase font-['Teko'] leading-none">
                999<span className="text-[#22D3EE]">.</span>000
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-black/40 font-medium tracking-wide mb-12 max-w-md"
          >
            Pilih paket yang sesuai dengan skala bisnis Anda. <br />
            Semua sistem dibangun dengan standar arsitektur modern.
          </motion.p>
        </div>

        {/* Categories / Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {t.pricelist.plans.map((plan: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#F9F9F9] border border-black/5 p-10 flex flex-col items-start hover:border-black/20 transition-all duration-700 h-full shadow-sm"
            >
              <div className="w-12 h-12 border border-black/5 flex items-center justify-center text-black/20 group-hover:text-[#22D3EE] group-hover:bg-[#22D3EE]/5 group-hover:border-[#22D3EE]/20 transition-all duration-500 mb-10">
                {getIcon(index)}
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter uppercase font-['Teko'] mb-1 group-hover:text-[#22D3EE] transition-colors">{plan.name}</h3>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-8 h-10 overflow-hidden italic line-clamp-2">
                {plan.desc}
              </p>


              <div className="w-full space-y-8 flex-grow">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">Core Tech</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-4 text-slate-500 text-[10px] font-medium leading-tight">
                        <div className="mt-1"><Check size={10} className="text-black/20 group-hover:text-[#22D3EE] transition-colors" /></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="https://wa.me/6285733478061"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-12 py-4 border border-black/10 text-black/50 text-[9px] font-black uppercase tracking-[0.6em] group-hover:bg-[#22D3EE] group-hover:text-black group-hover:border-[#22D3EE] transition-all duration-700 text-center"
              >
                DISKUSI
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="flex justify-center pb-32">
          <Link
            href="https://wa.me/6285733478061"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-5 py-5 px-10 border border-black/10 hover:border-[#22D3EE] hover:bg-[#22D3EE] text-[10px] font-black uppercase tracking-[0.5em] text-black hover:text-black transition-all duration-500"
          >
            Hubungi Kami Sekarang
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
