import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Code2, Rocket, ShieldCheck, Zap, Laptop, Smartphone, Globe, BarChart3, ChevronRight, Globe2, Sparkles, Star } from 'lucide-react';

const Services = dynamic(() => import('@/components/sections/Services'), { ssr: false });
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), { ssr: false });
const Pricelist = dynamic(() => import('@/components/sections/Pricelist'), { ssr: false });

export default function Home() {
  const marqueeItems = [
    "Web Development", "UI/UX Design", "Mobile Apps", "SEO Optimization",
    "Cloud Solutions", "Digital Marketing", "Cyber Security", "E-Commerce"
  ];

  return (
    <main className="relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-brand-red/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[120px] animate-pulse animation-delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-24 px-4 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/5 dark:bg-brand-red/10 border border-brand-red/10 dark:border-brand-red/20 mb-6 backdrop-blur-sm">
                <Sparkles size={14} className="text-brand-red" />
                <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.2em]">
                  Next Generation Web Studio
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] text-gray-950 dark:text-white">
                Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">Digital</span> Presence.
              </h1>

              <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Kami merancang dan membangun ekosistem digital yang bekerja dengan performa luar biasa untuk brand Anda.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto group px-8 py-3.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-bold rounded-xl hover:bg-brand-red dark:hover:bg-brand-red hover:text-white dark:hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 text-sm"
                >
                  Lihat Portofolio
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-gray-900 text-gray-950 dark:text-white font-bold rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm text-center text-sm"
                >
                  Mulai Project
                </Link>
              </div>
            </div>

            {/* Premium Visual Element */}
            <div className="relative animate-fade-in hidden lg:block scale-90 origin-right">
              <div className="relative">
                {/* Main Card */}
                <div className="relative z-10 w-full aspect-video bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5" />
                  <div className="absolute top-0 inset-x-0 h-10 bg-gray-100 dark:bg-gray-800/50 border-b border-gray-200/50 dark:border-gray-700/50 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="pt-16 px-8 flex flex-col items-center">
                    <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-6">
                      <Code2 size={28} />
                    </div>
                    <div className="h-3 w-40 bg-gray-200 dark:bg-gray-800 rounded-full mb-4 animate-pulse" />
                    <div className="h-3 w-24 bg-gray-100 dark:bg-gray-800/50 rounded-full mb-6" />
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="h-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm" />
                      <div className="h-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-10 -right-6 z-20 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 animate-blob">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900 dark:text-white leading-none">99+</div>
                      <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Page Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Running Text Section */}
      <div className="py-6 bg-gray-50 dark:bg-gray-900 overflow-hidden flex whitespace-nowrap border-y border-gray-100 dark:border-gray-800 relative z-20 transition-colors duration-300">
        <div className="flex animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-6 mx-6">
              <span className="text-gray-900/10 dark:text-white/10 font-black text-2xl uppercase tracking-tighter hover:text-brand-red transition-colors duration-500 cursor-default">
                {item}
              </span>
              <Star className="text-brand-red fill-brand-red opacity-30" size={16} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative space-y-24 pb-32">
        <Services />

        {/* Why Choose Us Section */}
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-950 dark:bg-gray-900 rounded-[2rem] px-8 py-16 sm:px-12 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '30px 30px' }} />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                    Membangun Dengan <br />
                    <span className="text-brand-orange">Presisi & Detail.</span>
                  </h2>
                  <p className="text-gray-400 text-base mb-10 max-w-lg">
                    Kami menggabungkan seni desain dengan kekuatan teknologi untuk solusi digital yang eksklusif.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: 'Research & Strategy', color: 'bg-brand-red' },
                      { title: 'Creative UI Design', color: 'bg-brand-orange' },
                      { title: 'Robust Development', color: 'bg-indigo-500' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className={`w-7 h-7 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-[10px] group-hover:rotate-12 transition-transform`}>
                          0{i + 1}
                        </div>
                        <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{item.title}</span>
                        <ChevronRight size={16} className="text-gray-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 scale-95 lg:scale-100">
                  <div className="space-y-4">
                    <div className="h-40 bg-white/5 rounded-2xl border border-white/10 p-5 flex flex-col justify-end hover:bg-white/10 transition-colors">
                      <Laptop className="text-brand-orange mb-2" size={20} />
                      <h4 className="text-white font-bold text-sm">Responsive</h4>
                    </div>
                    <div className="h-56 bg-white/5 rounded-2xl border border-white/10 p-5 flex flex-col justify-end hover:bg-white/10 transition-colors">
                      <Smartphone className="text-brand-red mb-2" size={20} />
                      <h4 className="text-white font-bold text-sm">Mobile First</h4>
                    </div>
                  </div>
                  <div className="space-y-4 pt-10">
                    <div className="h-56 bg-white/5 rounded-2xl border border-white/10 p-5 flex flex-col justify-end hover:bg-white/10 transition-colors">
                      <Globe className="text-indigo-400 mb-2" size={20} />
                      <h4 className="text-white font-bold text-sm">SEO Ready</h4>
                    </div>
                    <div className="h-40 bg-white/5 rounded-2xl border border-white/10 p-5 flex flex-col justify-end hover:bg-white/10 transition-colors">
                      <BarChart3 className="text-emerald-400 mb-2" size={20} />
                      <h4 className="text-white font-bold text-sm">Conversion</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Pricelist />

        <Portfolio />

        {/* Improved CTA Section - Smaller & Refined */}
        <section className="px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative py-16 px-8 rounded-[2rem] bg-gradient-to-br from-brand-red to-brand-maroon overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center text-white mb-6 border border-white/20">
                  <Rocket size={28} />
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 max-w-2xl leading-tight">
                  Siap Untuk Memulai <br /> Digital Legacy Anda?
                </h2>
                <p className="text-white/80 text-base mb-10 max-w-lg font-medium">
                  Jangan biarkan ide besar Anda hanya menjadi rencana. Mari kita wujudkan bersama hari ini.
                </p>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-brand-red font-black rounded-xl hover:bg-brand-orange hover:text-white transition-all shadow-xl hover:scale-105 text-sm"
                >
                  Konsultasi Gratis Sekarang
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
