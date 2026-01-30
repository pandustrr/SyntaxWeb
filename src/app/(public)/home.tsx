import Link from 'next/link';
import { ArrowRight, Code2, Rocket, ShieldCheck, Zap } from 'lucide-react';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background Blobs Animation - Tighter & Subtler */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-maroon rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Live Status: Active
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] text-gray-950 dark:text-white">
                Build Your <span className="text-brand-red italic">Digital Legacy</span> With Us.
              </h1>
              
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Kami mengubah ide brilian Anda menjadi solusi web kelas dunia yang cepat, aman, dan memukau secara visual.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto group px-7 py-3.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-bold rounded-xl hover:bg-brand-red dark:hover:bg-brand-orange hover:text-white dark:hover:text-white transition-all shadow-xl flex items-center justify-center gap-2 text-sm"
                >
                  Lihat Karya Kami
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white dark:bg-gray-950/50 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all shadow-sm text-center text-sm"
                >
                  Hubungi Kami
                </Link>
              </div>

              {/* Stats Mini */}
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 sm:gap-10 border-t border-gray-100 dark:border-gray-800 pt-8">
                <div>
                  <div className="text-2xl font-black text-gray-950 dark:text-white leading-none">50+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">Projects</div>
                </div>
                <div className="w-px h-8 bg-gray-100 dark:bg-gray-800" />
                <div>
                  <div className="text-2xl font-black text-gray-950 dark:text-white leading-none">100%</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">Satisfied</div>
                </div>
                <div className="w-px h-8 bg-gray-100 dark:bg-gray-800" />
                <div>
                  <div className="text-2xl font-black text-gray-950 dark:text-white leading-none">24/7</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">Support</div>
                </div>
              </div>
            </div>

            {/* Visual Element - Compact & Fluid */}
            <div className="relative animate-fade-in hidden lg:block">
              <div className="relative z-10 grid grid-cols-2 gap-4 scale-90 xl:scale-100 origin-right transition-transform">
                <div className="space-y-4 pt-10">
                  <div className="h-40 bg-brand-maroon rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex flex-col justify-end p-5 text-white border border-white/5">
                    <Code2 size={28} className="mb-3 text-brand-orange" />
                    <h3 className="font-bold text-xs uppercase tracking-wider">Clean Code</h3>
                  </div>
                  <div className="h-56 bg-gray-950 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex flex-col justify-end p-5 text-white border border-white/10">
                    <Zap size={28} className="mb-3 text-brand-red" />
                    <h3 className="font-bold text-xs uppercase tracking-wider">Lightning Fast</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-56 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transform hover:-translate-y-1 transition-all duration-500 flex flex-col justify-end p-5">
                    <ShieldCheck size={28} className="mb-3 text-brand-red" />
                    <h3 className="font-bold text-xs uppercase tracking-wider dark:text-white">Secure</h3>
                  </div>
                  <div className="h-40 bg-brand-orange rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex flex-col justify-end p-5 text-white border border-white/10">
                    <Rocket size={28} className="mb-3 text-white" />
                    <h3 className="font-bold text-xs uppercase tracking-wider">Scale Up</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Other Sections */}
      <Services />
      <Portfolio />
    </main>
  );
}
