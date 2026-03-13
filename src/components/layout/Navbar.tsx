'use client';

import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      <nav className="bg-[#000000]/95 backdrop-blur-xl border-t border-white/5 px-8 py-8 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            className="group flex items-center gap-2"
          >
            <span className="text-2xl font-black text-[#F2F2F2] tracking-tighter uppercase whitespace-nowrap">SYNTAX<span className="text-[#B6B09F]">WEB</span></span>
          </a>

          <div className="hidden md:flex items-center gap-12 border-l border-white/5 pl-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 text-gray-600 hover:text-[#F2F2F2] hover:tracking-[0.6em]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-12">
          <Link
            href="/admin/login"
            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 hover:text-[#F2F2F2] transition-colors"
          >
            Partners
          </Link>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-12 py-5 bg-[#F2F2F2] text-[#000000] text-[10px] font-black uppercase tracking-[0.4em] rounded-none hover:bg-[#B6B09F] transition-all duration-700 font-black"
          >
            Start Project
          </a>
        </div>
      </nav>
    </div>
  );
}
