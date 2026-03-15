'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Zap, Shield, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Pembuatan website custom dengan teknologi terkini seperti Next.js, React, dan Node.js.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Website yang tampil sempurna di semua perangkat, dari desktop hingga smartphone.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Website yang cepat dan optimal dengan performa terbaik di kelasnya.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Keamanan website terjamin dengan implementasi best practices terkini.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Dukungan teknis dan maintenance berkelanjutan untuk website Anda.',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="services" className="h-screen flex items-center py-32 bg-transparent relative overflow-hidden snap-start">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="text-start mb-24"
        >
          <div className="overflow-hidden mb-6">
            <motion.h2
              variants={{
                initial: { y: "110%" },
                animate: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-5xl md:text-7xl font-black text-[#F2F2F2] leading-tight tracking-tighter"
            >
              Architectural <span className="text-[#B6B09F]">Solutions</span>
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.p
              variants={{
                initial: { y: "110%" },
                animate: { y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-lg text-[#B6B09F]/60 max-w-2xl font-medium tracking-tight"
            >
              Next-generation engineering for ambitious brands looking to dominate the digital landscape.
            </motion.p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 bg-transparent border border-white/5 hover:bg-white/[0.02] transition-all duration-700 flex flex-col items-start relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B6B09F]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="w-12 h-12 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={32} className="text-[#B6B09F] stroke-[1]" />
                </div>
                <h3 className="text-xl font-black text-[#F2F2F2] mb-6 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
