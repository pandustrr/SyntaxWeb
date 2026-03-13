'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/5 py-40 pb-64 snap-start relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mb-12 block"
            >
              <span className="text-4xl font-black text-[#F2F2F2] tracking-tighter uppercase whitespace-nowrap">SYNTAX<span className="text-[#B6B09F]">WEB</span></span>
            </a>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-medium tracking-tight">
              Bespoke digital architecture for enterprises and forward-thinking brands.
              Engineering excellence at every pixel, established MMXXIV.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black text-[#F2F2F2] text-[10px] uppercase tracking-[0.5em] mb-10">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-600 hover:text-[#B6B09F] text-xs font-black uppercase tracking-widest transition-all duration-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture (formerly Contact) */}
          <div>
            <h4 className="font-black text-[#F2F2F2] text-[10px] uppercase tracking-[0.5em] mb-10">Architecture</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-gray-600">
              <li className="hover:text-[#F2F2F2] transition-all duration-500 cursor-pointer">Syntax Tower, 88</li>
              <li className="hover:text-[#F2F2F2] transition-all duration-500 cursor-pointer">Jakarta, Indonesia</li>
              <li className="pt-4">
                <a href="mailto:office@syntaxweb.com" className="text-[#B6B09F] hover:tracking-widest transition-all duration-700">
                  office@syntaxweb.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 mt-40 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.6em]">
            © MMXXIV SYNTAXWEB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-16">
            <Link href="/terms" className="text-gray-800 hover:text-[#B6B09F] text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Work</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
