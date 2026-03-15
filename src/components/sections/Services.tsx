'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import SplitText from '@/components/animations/SplitText';
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Code2, title: t.services.list.web.title, desc: t.services.list.web.desc },
    { icon: Smartphone, title: t.services.list.responsive.title, desc: t.services.list.responsive.desc },
    { icon: Layout, title: t.services.list.design.title, desc: t.services.list.design.desc },
    { icon: Zap, title: t.services.list.performance.title, desc: t.services.list.performance.desc },
    { icon: ShieldCheck, title: t.services.list.security.title, desc: t.services.list.security.desc },
    { icon: Cpu, title: t.services.list.intelligent.title, desc: t.services.list.intelligent.desc },
  ];

  return (
    <section id="services" className="min-h-screen py-20 lg:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 md:mb-32">
          <div className="overflow-hidden">
            <h2 className="text-5xl md:text-9xl font-black text-black tracking-tighter uppercase font-['Teko'] leading-none">
              <SplitText text={t.services.title} className="text-black" />
              <SplitText text={t.services.subtitle} className="text-[#EEEEEE]" />
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-500 text-base md:text-lg max-w-sm font-medium tracking-tight leading-relaxed"
          >
            {t.services.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-12 md:gap-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-start gap-4 md:gap-8"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 border border-black/5 flex items-center justify-center text-black bg-black/[0.03] group-hover:bg-[#22D3EE] group-hover:text-black group-hover:border-[#22D3EE] transition-all duration-500 rounded-lg">
                <service.icon size={20} strokeWidth={1.5} className="md:w-7 md:h-7" />
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-lg md:text-2xl font-black text-black uppercase tracking-tighter font-['Teko'] group-hover:text-[#22D3EE] transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-[10px] md:text-sm font-medium leading-relaxed max-w-full">
                  {service.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-[#22D3EE] uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Pelajari Lebih Lanjut <Zap size={10} className="fill-[#22D3EE]" />
                </div>
              </div>
              {/* Decorative Index */}
              <div className="absolute -top-6 -right-2 text-6xl font-black text-black/[0.03] group-hover:text-[#22D3EE]/10 transition-colors uppercase font-['Teko']">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
