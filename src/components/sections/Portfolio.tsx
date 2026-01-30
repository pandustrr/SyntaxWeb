'use client';

import { useState } from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Layout, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  color: string;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Global Retail CRM',
      category: 'web',
      categoryLabel: 'WEB APPLICATION',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Sistem manajemen hubungan pelanggan untuk skala enterprise dengan analytics real-time.',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
      link: '#',
      github: '#',
      color: 'from-brand-red to-brand-maroon',
    },
    {
      id: 2,
      title: 'Fintech Dashboard',
      category: 'dashboard',
      categoryLabel: 'DASHBOARD',
      image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f85d?auto=format&fit=crop&q=80&w=800',
      description: 'Visualisasi data keuangan yang kompleks dengan tingkat keamanan perbankan.',
      tech: ['React', 'D3.js', 'Node.js'],
      link: '#',
      github: '#',
      color: 'from-brand-orange to-amber-500',
    },
    {
      id: 3,
      title: 'Premium Watch E-Store',
      category: 'web',
      categoryLabel: 'E-COMMERCE',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      description: 'Pengalaman berbelanja online eksklusif untuk produk jam tangan mewah.',
      tech: ['Next.js', 'Shopify', 'Framer'],
      link: '#',
      github: '#',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 4,
      title: 'Eco-System Landing',
      category: 'landing',
      categoryLabel: 'LANDING PAGE',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      description: 'Halaman kampanye lingkungan dengan story-telling visual yang imersif.',
      tech: ['Next.js', 'Three.js', 'Tailwind'],
      link: '#',
      github: '#',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 5,
      title: 'SaaS Builder Pro',
      category: 'web',
      categoryLabel: 'SAAS PLATFORM',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      description: 'Alat otomatisasi bisnis yang powerful untuk startup dan tim modern.',
      tech: ['React', 'Firebase', 'Recoil'],
      link: '#',
      github: '#',
      color: 'from-red-600 to-rose-700',
    },
    {
      id: 6,
      title: 'Arch-Interior Showcase',
      category: 'landing',
      categoryLabel: 'PORTFOLIO',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      description: 'Galeri karya arsitektur minimalis dengan fokus pada detail dan pencahayaan.',
      tech: ['Next.js', 'GSAP', 'Sanity'],
      link: '#',
      github: '#',
      color: 'from-gray-700 to-black',
    },
  ];

  const filters = [
    { id: 'all', label: 'SEMUA KARYA' },
    { id: 'web', label: 'WEBSITE' },
    { id: 'landing', label: 'LANDING PAGE' },
    { id: 'dashboard', label: 'DASHBOARD' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="relative py-32 bg-gray-50 dark:bg-gray-950/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="text-brand-red font-black text-xs tracking-[0.3em] uppercase mb-4">Our Masterpieces</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 dark:text-white leading-[1.1]">
              Karya Yang Berbicara <br /> <span className="text-brand-red italic">Lebih Keras</span> Dari Kata.
            </h2>
          </div>
          
          {/* Filter */}
          <div className="flex flex-wrap gap-2 animate-fade-in shrink-0">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-black text-[10px] tracking-widest transition-all duration-300 border ${
                  activeFilter === filter.id
                    ? 'bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-gray-950 dark:border-white shadow-xl translate-y-[-2px]'
                    : 'bg-white dark:bg-gray-900 text-gray-400 dark:text-gray-500 border-gray-100 dark:border-gray-800 hover:border-brand-red/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:translate-y-[-8px]">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                   <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                   
                   {/* Centered Button on Hover */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <a href={project.link} className="px-8 py-3 bg-white text-gray-950 font-black rounded-xl flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform text-xs">
                        Lihat Case Study <ArrowUpRight size={16} />
                      </a>
                   </div>

                   {/* Tech Tags on top left */}
                   <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                       {project.tech.slice(0, 2).map((t, i) => (
                         <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold rounded-lg border border-white/20 uppercase">
                            {t}
                         </span>
                       ))}
                   </div>
                </div>

                {/* Content Section */}
                <div className="p-10">
                   <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-black text-brand-red dark:text-brand-orange uppercase tracking-[.2em]">
                        {project.categoryLabel}
                      </span>
                      <div className="flex gap-2">
                         <a href={project.github} className="text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors">
                            <Github size={18} />
                         </a>
                      </div>
                   </div>
                   
                   <h3 className="text-2xl font-black text-gray-950 dark:text-white mb-4 group-hover:text-brand-red transition-colors">
                      {project.title}
                   </h3>
                   
                   <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed font-medium">
                      {project.description}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-20 text-center">
           <a href="/portfolio" className="inline-flex items-center gap-4 text-gray-950 dark:text-white font-black hover:text-brand-red transition-all group">
              <span className="text-lg">Lihat Seluruh Portofolio</span>
              <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all">
                 <ArrowUpRight size={20} />
              </div>
           </a>
        </div>
      </div>
    </section>
  );
}
