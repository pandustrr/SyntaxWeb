'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Plus, Box, Zap, Briefcase, Rocket } from 'lucide-react';

export default function Pricelist() {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    const icons = [Box, Briefcase, Zap, Rocket];
    const Icon = icons[index % icons.length];
    return <Icon size={24} />;
  };

  return (
    <section id="pricelist" className="min-h-screen flex items-center py-20 lg:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <motion.div
           initial="initial"
           whileInView="animate"
           viewport={{ once: true }}
           transition={{ staggerChildren: 0.1 }}
           className="text-center mb-24 md:mb-40"
        >
          <div className="overflow-hidden mb-6">
            <motion.h2
              variants={{
                initial: { y: "110%" },
                animate: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-6xl md:text-[9rem] font-black text-black tracking-tighter uppercase font-['Teko'] leading-[0.8]"
            >
              PRICING <span className="text-[#EEEEEE] hover:text-[#22D3EE] transition-colors duration-700">COLLOCATIONS</span>
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.p
              variants={{
                initial: { y: "110%" },
                animate: { y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-slate-500 font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs"
            >
              {t.pricelist.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-32 md:mb-48">
          {t.pricelist.plans.map((plan: any, index: number) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="group relative bg-[#F9F9F9] border border-black/5 p-10 flex flex-col items-start hover:border-black/20 transition-all duration-700 h-full shadow-sm"
            >
               {/* Icon */}
               <div className="w-12 h-12 border border-black/5 flex items-center justify-center text-black/20 group-hover:text-[#22D3EE] group-hover:bg-[#22D3EE]/5 group-hover:border-[#22D3EE]/20 transition-all duration-500 mb-10">
                 {getIcon(index)}
               </div>

               <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter uppercase font-['Teko'] mb-1 group-hover:text-[#22D3EE] transition-colors">{plan.name}</h3>
               <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-10 h-10 overflow-hidden italic line-clamp-2">
                 {plan.desc}
               </p>
               
               <div className="text-4xl font-black text-black tracking-tighter uppercase font-['Teko'] mb-12">
                 {plan.price}
               </div>
               
               <div className="w-full space-y-10 flex-grow">
                 {/* Pages */}
                 {plan.pages && plan.pages.length > 0 && (
                   <div>
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">Architecture</p>
                     <div className="flex flex-wrap gap-2">
                       {plan.pages.map((page: string) => (
                         <span key={page} className="text-[10px] font-bold text-black/30 border border-black/5 px-2 py-1 uppercase">{page}</span>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Features */}
                 <div>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">Core Tech</p>
                   <ul className="space-y-3">
                     {plan.features.map((feature: string, fIdx: number) => (
                       <li key={fIdx} className="flex items-start gap-4 text-slate-500 text-[11px] font-medium leading-tight">
                         <div className="mt-1"><Check size={12} className="text-black/20 group-hover:text-[#22D3EE] transition-colors" /></div>
                         {feature}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>

               <button className="w-full mt-12 py-5 border border-black/10 text-black/50 text-[10px] font-black uppercase tracking-[0.6em] group-hover:bg-[#22D3EE] group-hover:text-black group-hover:border-[#22D3EE] transition-all duration-700">
                 SELECT PLAN
               </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-black/5 pt-32"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
            <div>
              <h3 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase font-['Teko'] leading-none">
                <span className="text-[#EEEEEE] hover:text-[#22D3EE] transition-colors duration-700">EXTENSIONS</span>
              </h3>
              <p className="text-slate-500 text-sm font-medium tracking-[0.1em] mt-6">Rincian fitur tambahan untuk skalabilitas sistem.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4">
            {t.pricelist.addons.items.map((item: any, idx: number) => (
              <div key={idx} className="flex justify-between items-center py-8 border-b border-black/5 group hover:border-[#22D3EE]/40 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 border border-black/5 flex items-center justify-center text-black/10 group-hover:text-[#22D3EE] group-hover:border-[#22D3EE]/20 transition-all">
                    <Plus size={16} />
                  </div>
                  <span className="text-xs md:text-sm font-black text-black/50 uppercase tracking-widest group-hover:text-black transition-colors">{item.name}</span>
                </div>
                <div className="text-black font-black font-['Teko'] text-2xl tracking-tighter group-hover:text-[#22D3EE] transition-colors">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
