'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-black/5 py-12 pb-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="mb-6 block"
            >
              <span className="text-3xl font-black text-black tracking-tighter uppercase whitespace-nowrap font-['Teko']">SYNTAX<span className="text-[#22D3EE]">WEB</span></span>
            </Link>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md font-medium tracking-tight">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black text-black text-[10px] uppercase tracking-[0.5em] mb-6">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              {[
                { name: t.nav.home, href: '/' },
                { name: t.nav.pricelist, href: '/pricelist' },
                { name: t.nav.contact, href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#22D3EE] text-[10px] font-black uppercase tracking-widest transition-all duration-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="font-black text-black text-[10px] uppercase tracking-[0.5em] mb-6">{t.footer.architecture}</h4>
            <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <li className="hover:text-black transition-all duration-500 cursor-pointer">Jember, Jawa Timur</li>
              <li className="hover:text-black transition-all duration-500 cursor-pointer">Indonesia</li>
              <li className="pt-2">
                <a href="mailto:office@syntaxweb.com" className="text-[#22D3EE] hover:text-[#22D3EE]/80 transition-all duration-700">
                  office@syntaxweb.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-300 text-[9px] font-black uppercase tracking-[0.6em]">
            © {currentYear} SYNTAXWEB. {t.footer.rights}
          </p>
          <div className="flex gap-10">
            <Link href="/terms" className="text-slate-300 hover:text-[#22D3EE] text-[9px] font-black uppercase tracking-widest transition-colors">{t.footer.terms}</Link>
            <Link href="/privacy" className="text-slate-300 hover:text-[#22D3EE] text-[9px] font-black uppercase tracking-widest transition-colors">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
