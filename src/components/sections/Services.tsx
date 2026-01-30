'use client';

import { Code2, Smartphone, Palette, Zap, ShieldCheck, Headphones, Layers, Layout, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
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
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs font-black text-brand-red uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Pelajari Lebih Lanjut <Zap size={12} className="fill-brand-red" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
