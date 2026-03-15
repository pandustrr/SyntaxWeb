'use client';

<<<<<<< HEAD
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
=======
import { Code2, Smartphone, Palette, Zap, ShieldCheck, Headphones, Layers, Layout, Rocket } from 'lucide-react';
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35

export default function Services() {
  const { t } = useLanguage();

  const services = [
<<<<<<< HEAD
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-9xl font-black text-black tracking-tighter uppercase font-['Teko'] leading-none">
              {t.services.title} <br />
              <span className="text-[#EEEEEE] hover:text-[#22D3EE] transition-colors duration-700">{t.services.subtitle}</span>
            </h2>
          </motion.div>
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
=======
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Layanan pengembangan website kustom menggunakan tech stack modern untuk performa dan skalabilitas tinggi.',
      color: 'text-brand-red',
      bgColor: 'bg-brand-red/10',
    },
    {
      icon: Smartphone,
      title: 'Responsive Apps',
      description: 'Menjamin pengalaman pengguna yang konsisten di semua perangkat dan ukuran layar secara seamless.',
      color: 'text-brand-orange',
      bgColor: 'bg-brand-orange/10',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Desain visual yang memukau dan pengalaman pengguna yang intuitif untuk meningkatkan konversi.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimasi kecepatan loading dan efisiensi kode untuk Core Web Vitals yang sempurna.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: ShieldCheck,
      title: 'Cyber Security',
      description: 'Implementasi standar keamanan tertinggi untuk melindungi data bisnis dan pengguna Anda.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      icon: Rocket,
      title: 'Digital Growth',
      description: 'Strategi teknis untuk membantu bisnis Anda tumbuh dan mendominasi pasar digital.',
      color: 'text-brand-maroon',
      bgColor: 'bg-brand-maroon/10',
    },
  ];

  return (
    <section className="relative py-32 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Layanan Eksklusif
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white mb-6">
            Solusi <span className="text-brand-red">End-to-End</span> Untuk Anda.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami menyediakan layanan teknologi komprehensif untuk membantu tranformasi digital bisnis Anda menjadi lebih kuat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-10 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800/50 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                  <Icon size={28} className={service.color} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  {service.description}
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs font-black text-brand-red uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Pelajari Lebih Lanjut <Zap size={12} className="fill-brand-red" />
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
