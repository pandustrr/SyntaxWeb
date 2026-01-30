'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className={`
        relative w-full max-w-4xl transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/20 dark:border-gray-800/30 py-2 rounded-2xl' 
          : 'bg-white/40 dark:bg-gray-950/40 backdrop-blur-md border border-white/10 dark:border-gray-800/20 py-2.5 rounded-2xl'}
      `}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-brand-red/10">
              S
            </div>
            <span className="text-lg font-black text-gray-900 dark:text-white hidden sm:block">
              SyntaxWeb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-gray-50/50 dark:bg-gray-800/20 p-1 rounded-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative z-10
                    ${isActive 
                      ? 'text-brand-red dark:text-brand-orange bg-white dark:bg-gray-900 shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>




          <div className="flex items-center gap-2">
            <div className="scale-90 hover:scale-100 transition-transform duration-300">
              <ThemeToggle />
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>


        {/* Mobile Menu */}
        <div className={`
          absolute top-full left-0 right-0 mt-4 mx-2 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-gray-800/30 shadow-2xl transition-all duration-300
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all
                  ${pathname === link.href 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

