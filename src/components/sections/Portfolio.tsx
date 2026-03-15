'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Plus, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SpotlightCard from '@/components/animations/SpotlightCard';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  client: string;
  year: string;
  role: string;
  link?: string;
}

export default function Portfolio() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: 'Mahapena FEB UNEJ',
      category: 'ORGANIZATION',
      image: '/portfolio/mahapena.png',
      description: 'Platform Unit Kegiatan Mahasiswa Pecinta Alam FEB Universitas Jember. Dirancang untuk memperkuat identitas digital serta manajemen kegiatan alam bebas.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      client: 'MAHAPENA FEB UNEJ',
      year: '2024',
      role: 'Full-stack Development',
      link: 'https://mahapena.feb.unej.ac.id/'
    },
    {
      id: 2,
      title: 'HMRPM UNEJ',
      category: 'ORGANIZATION',
      image: '/portfolio/hmrpm.png',
      description: 'Hub digital Himpunan Mahasiswa Rekayasa Perancangan Mekanik. Menyediakan platform aspirasi, kreativitas, dan inovasi teknologi bagi mahasiswa mesin.',
      tech: ['React', 'Node.js', 'Tailwind'],
      client: 'HMRPM UNEJ',
      year: '2024',
      role: 'Web Development',
      link: 'https://hmrpmunej.id/'
    },
    {
      id: 3,
      title: 'UKMK ETALASE',
      category: 'ARTS & CULTURE',
      image: '/portfolio/etalase.png',
      description: 'Etalase digital karya seni mahasiswa. Platform kurasi yang menampilkan visualisasi kreatif dalam berbagai cabang kesenian.',
      tech: ['Next.js', 'Motion', 'Tailwind CSS'],
      client: 'UKM Kesenian Etalase',
      year: '2023',
      role: 'Frontend Engineering',
      link: 'https://ukmketalase.com/'
    },
    {
      id: 4,
      title: 'AF Studio',
      category: 'LANDING PAGE',
      image: '/portfolio/afstudio.png',
      description: 'Landing page studio fotografi profesional dengan fokus pada pengalaman visual yang elegan dan abadi.',
      tech: ['Next.js', 'GSAP', 'Tailwind'],
      client: 'AF Studio',
      year: '2024',
      role: 'UX Architecture',
      link: 'https://afstudio.my.id/'
    },
    {
      id: 5,
      title: 'Balikkucing Studio',
      category: 'CREATIVE AGENCY',
      image: '/portfolio/balikkucing.png',
      description: 'Platform agensi kreatif dengan identitas visual yang segar. "Desain rasa jeruk" yang menonjolkan keunikan grafis dan ilustrasi.',
      tech: ['React', 'API Integration', 'Tailwind'],
      client: 'Balikkucing Studio',
      year: '2024',
      role: 'Creative Tech Lead',
      link: 'https://balikkucingstudio.com/'
    },
    {
      id: 6,
      title: 'Grapadi Strategix',
      category: 'WEB APPLICATION',
      image: '/portfolio/strategix.png',
      description: 'Sistem manajemen bisnis cerdas dengan fitur proyeksi finansial otomatis dan analisis SWOT bertenaga AI.',
      tech: ['Next.js', 'AI Engine', 'PostgreSQL'],
      client: 'Grapadi Strategix',
      year: '2024',
      role: 'AI System Design',
      link: 'https://strategix.grapadikonsultan.co.id/'
    },
    {
      id: 7,
      title: 'Sugoi8 Management',
      category: 'EVENT MANAGEMENT',
      image: '/portfolio/sugoi8.png',
      description: 'Website profil agensi manajemen event yang menonjolkan profesionalitas dan eksekusi kreatif di setiap proyek.',
      tech: ['Next.js', 'Tailwind', 'Motion'],
      client: 'Sugoi 8',
      year: '2024',
      role: 'Lead Implementation',
      link: 'https://sugoi8management.com/'
    }
  ], []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const radius = 1000;
  const totalProjects = projects.length;
  const angleStep = 360 / totalProjects;

  const getHostname = (url?: string) => {
    if (!url) return '';
    try {
      return new URL(url).hostname;
    } catch (e) {
      return url.replace(/^https?:\/\//, '').split('/')[0];
    }
  };

  return (
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
                  className="absolute w-[300px] md:w-[480px] aspect-[4/5] transform-style-3d"
                >
                  <SpotlightCard 
                    className="w-full h-full bg-white border border-black/5 overflow-hidden group cursor-pointer shadow-2xl shadow-black/5"
                    spotlightColor="rgba(34, 211, 238, 0.1)"
                  >
                    <div 
                      className="relative w-full h-full transition-all duration-1000"
                      onClick={() => setSelectedProject(project)}
                    >
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
                  </SpotlightCard>
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
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            key="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-white overflow-y-auto no-scrollbar"
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
                <div className="lg:w-1/2 w-full flex flex-col gap-10">
                  <div className="aspect-video bg-black/[0.02] border border-black/5 flex items-center justify-center group overflow-hidden relative">
                    <img src={selectedProject.image} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" alt="" />
                    <div className="absolute flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center mb-6 group-hover:bg-[#22D3EE] group-hover:text-black transition-all">
                        <ArrowUpRight size={32} className="text-black" />
                      </div>
                      <span className="text-[10px] font-black tracking-[0.5em] text-black/50 group-hover:text-black uppercase">Visual Representation</span>
                    </div>
                  </div>

                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-8 border border-black/10 hover:border-[#22D3EE] transition-all"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.5em]">Live Website</span>
                        <span className="text-xl font-black text-black uppercase font-['Teko'] tracking-widest">{getHostname(selectedProject.link)}</span>
                      </div>
                      <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-[#22D3EE] group-hover:text-black transition-all">
                        <ExternalLink size={24} />
                      </div>
                    </a>
                  )}
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
