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
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav className={`
        relative w-full max-w-5xl transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/20 dark:border-gray-800/30 py-3 rounded-full' 
          : 'bg-white/40 dark:bg-gray-950/40 backdrop-blur-md border border-white/10 dark:border-gray-800/20 py-4 rounded-3xl'}
      `}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
              S
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent hidden sm:block">
              SyntaxWeb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full border border-gray-200/50 dark:border-gray-700/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-900/50'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <Link
              href="/admin/login"
              className="px-5 py-2 bg-gray-900 dark:bg-white dark:text-gray-900 text-white text-sm font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-gray-200 dark:shadow-none"
            >
              Start Project
            </Link>
            
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
          absolute top-full left-0 right-0 mt-4 mx-2 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-800/30 shadow-2xl transition-all duration-300
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

