'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <Sparkles size={16} />
          <span>Solusi Web Development Profesional</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Wujudkan Website
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Impian Anda
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Kami menciptakan website modern, responsif, dan berkualitas tinggi 
          yang membantu bisnis Anda berkembang di era digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Mulai Sekarang
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-white text-gray-700 rounded-xl font-medium border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600">Project Selesai</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Klien Puas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
            <div className="text-gray-600">Tahun Pengalaman</div>
          </div>
        </div>
      </div>
    </section>
  );
}
