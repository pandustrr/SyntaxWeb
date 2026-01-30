'use client';

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
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white mb-4">
            Layanan <span className="text-brand-red">Kami</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest text-[10px] font-bold">
            Digital Solution Partners
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-brand-red/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-red/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-gray-700 shadow-sm">
                  <Icon size={24} className="text-brand-red dark:text-brand-orange" />
                </div>
                <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>


  );
}
