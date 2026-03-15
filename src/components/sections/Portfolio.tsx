'use client';

<<<<<<< HEAD
import { useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Plus, X } from 'lucide-react';
=======
import { useState } from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Layout, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35

interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
  tech: string[];
<<<<<<< HEAD
  client: string;
  year: string;
  role: string;
=======
  link: string;
  github: string;
  color: string;
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
}

export default function Portfolio() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: 'Global Retail CRM',
<<<<<<< HEAD
      category: 'WEB APPLICATION',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200',
      description: 'Sistem manajemen hubungan pelanggan untuk skala enterprise dengan analytics real-time.',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
      client: 'Acme Corp',
      year: '2024',
      role: 'Full-stack Development',
=======
      category: 'web',
      categoryLabel: 'WEB APPLICATION',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Sistem manajemen hubungan pelanggan untuk skala enterprise dengan analytics real-time.',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
      link: '#',
      github: '#',
      color: 'from-brand-red to-brand-maroon',
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
    },
    {
      id: 2,
      title: 'Fintech Dashboard',
<<<<<<< HEAD
      category: 'DASHBOARD',
      image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f85d?auto=format&fit=crop&q=80&w=1200',
      description: 'Visualisasi data keuangan yang kompleks dengan tingkat keamanan perbankan.',
      tech: ['React', 'D3.js', 'Node.js'],
      client: 'FinBank Global',
      year: '2023',
      role: 'Frontend Engineering',
=======
      category: 'dashboard',
      categoryLabel: 'DASHBOARD',
      image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f85d?auto=format&fit=crop&q=80&w=800',
      description: 'Visualisasi data keuangan yang kompleks dengan tingkat keamanan perbankan.',
      tech: ['React', 'D3.js', 'Node.js'],
      link: '#',
      github: '#',
      color: 'from-brand-orange to-amber-500',
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
    },
    {
      id: 3,
      title: 'Premium Watch E-Store',
<<<<<<< HEAD
      category: 'E-COMMERCE',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
      description: 'Pengalaman berbelanja online eksklusif untuk produk jam tangan mewah.',
      tech: ['Next.js', 'Shopify', 'Framer'],
      client: 'Luxury Time',
      year: '2024',
      role: 'UI/UX & Frontend',
=======
      category: 'web',
      categoryLabel: 'E-COMMERCE',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      description: 'Pengalaman berbelanja online eksklusif untuk produk jam tangan mewah.',
      tech: ['Next.js', 'Shopify', 'Framer'],
      link: '#',
      github: '#',
      color: 'from-indigo-500 to-purple-600',
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
    },
    {
      id: 4,
      title: 'Eco-System Landing',
<<<<<<< HEAD
      category: 'LANDING PAGE',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      description: 'Halaman kampanye lingkungan dengan story-telling visual yang imersif.',
      tech: ['Next.js', 'Three.js', 'Tailwind'],
      client: 'Green Earth',
      year: '2023',
      role: 'Creative Development',
=======
      category: 'landing',
      categoryLabel: 'LANDING PAGE',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      description: 'Halaman kampanye lingkungan dengan story-telling visual yang imersif.',
      tech: ['Next.js', 'Three.js', 'Tailwind'],
      link: '#',
      github: '#',
      color: 'from-emerald-500 to-teal-600',
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
    },
    {
      id: 5,
      title: 'SaaS Builder Pro',
<<<<<<< HEAD
      category: 'SAAS PLATFORM',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      description: 'Alat otomatisasi bisnis yang powerful untuk startup dan tim modern.',
      tech: ['React', 'Firebase', 'Recoil'],
      client: 'StartupLab',
      year: '2024',
      role: 'Lead Implementation',
    }
  ], []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
=======
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
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const radius = 1000;
  const totalProjects = projects.length;
  const angleStep = 360 / totalProjects;

  return (
<<<<<<< HEAD
    <section 
      ref={containerRef} 
      id="portfolio" 
      className="relative h-[400vh] bg-white overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Title Layer */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.h2 
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 0.05, 0.05, 0]),
              scale: useTransform(smoothProgress, [0, 1], [0.8, 1.2])
            }}
            className="text-[15vw] lg:text-[20vw] font-black text-black uppercase tracking-tighter font-['Teko'] whitespace-nowrap"
          >
            P O R T F O L I O
          </motion.h2>
        </div>

        {/* 3D Carousel */}
        <div className="relative w-full h-full flex items-center justify-center perspective-[3000px]">
          <motion.div 
            style={{ 
              rotateY: useTransform(smoothProgress, [0, 1], [0, -360]),
            }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d"
          >
            {projects.map((project, index) => {
              const angle = index * angleStep;
              return (
                <motion.div
                  key={project.id}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                  className="absolute w-[300px] md:w-[480px] aspect-[4/5] bg-white border border-black/5 overflow-hidden group cursor-pointer shadow-2xl shadow-black/5"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative w-full h-full transition-all duration-1000">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      <p className="text-[10px] font-bold text-black/40 group-hover:text-[#22D3EE] tracking-[0.4em] mb-4 uppercase transition-colors">
                        {project.category}
                      </p>
                      <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none mb-6 font-['Teko']">
                        {project.title}
                      </h3>
                      <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#22D3EE] group-hover:border-[#22D3EE] group-hover:text-black transition-all duration-700 text-black">
                        <Plus size={24} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Bar */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
           <span className="text-[10px] font-black text-black/10 tracking-[0.5em] uppercase mb-4">MAPPING COLLECTION</span>
           <div className="w-[200px] h-[1px] bg-black/5 relative overflow-hidden">
             <motion.div 
               style={{ scaleX: smoothProgress }}
               className="absolute inset-0 bg-[#22D3EE] origin-left shadow-[0_0_20px_rgba(34,211,238,0.3)]"
             />
           </div>
=======
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
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto no-scrollbar"
          >
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setSelectedProject(null)}
              className="fixed top-8 right-8 z-[110] w-14 h-14 bg-black text-white flex items-center justify-center rounded-full hover:bg-[#22D3EE] hover:text-black transition-all shadow-2xl"
            >
              <X size={28} />
            </motion.button>

            <div className="min-h-screen w-full flex flex-col">
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-[70vh] relative overflow-hidden"
              >
                <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                <div className="absolute bottom-16 left-0 w-full px-6 lg:px-24">
                  <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-7xl md:text-[14rem] font-black text-black uppercase tracking-tighter leading-none font-['Teko']"
                  >
                    {selectedProject.title}
                  </motion.h1>
                </div>
              </motion.div>

              <div className="px-6 lg:px-24 py-32 grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-black/5 bg-white">
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.5em]">Project</p>
                  <p className="text-xl font-black text-black uppercase font-['Teko']">{selectedProject.title}</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.5em]">Role</p>
                  <p className="text-xl font-black text-black uppercase font-['Teko']">{selectedProject.role}</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.5em]">Year</p>
                  <p className="text-xl font-black text-black uppercase font-['Teko']">{selectedProject.year}</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.5em]">Tech</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-4 py-2 border border-black/10 text-[10px] font-black text-black uppercase hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

               <div className="px-6 lg:px-24 py-32 flex flex-col lg:flex-row gap-32 items-start bg-white">
                <div className="lg:w-1/2">
                   <h2 className="text-5xl font-black text-black uppercase tracking-tighter mb-10 font-['Teko']">VISION & <span className="text-[#EEEEEE]">EXECUTION</span></h2>
                   <p className="text-xl text-slate-500 leading-relaxed font-medium">
                     {selectedProject.description}
                     <br /><br />
                     Menciptakan standar baru dalam desain antarmuka melalui rekayasa modern yang mengutamakan performa tanpa kompromi. Setiap elemen visual adalah hasil dari eksplorasi arsitektural yang mendalam.
                   </p>
                </div>
                <div className="lg:w-1/2 w-full aspect-video bg-black/[0.02] border border-black/5 flex items-center justify-center group overflow-hidden relative">
                   <img src={selectedProject.image} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" alt="" />
                   <div className="absolute flex flex-col items-center">
                     <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center mb-6 group-hover:bg-[#22D3EE] group-hover:text-black transition-all">
                       <ArrowUpRight size={32} className="text-black" />
                     </div>
                     <span className="text-[10px] font-black tracking-[0.5em] text-black/50 group-hover:text-black">VISIT ARCHIVE</span>
                   </div>
                </div>
              </div>

              <div className="px-6 lg:px-24 py-32 mb-20 bg-white text-center">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-[10px] font-black text-black/20 uppercase tracking-[1em] hover:text-[#22D3EE] transition-all hover:tracking-[1.5em]"
                >
                  RETURN TO SELECTION
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
