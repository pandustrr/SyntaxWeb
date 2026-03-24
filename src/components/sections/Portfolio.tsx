'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Satellite, ShieldCheck, Zap, Activity, Cpu } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
  problem: string;
  impact: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'MAHAPENA',
    category: 'ORGANIZATION',
    image: '/portfolio/mahapena.feb.unej.ac.id_.jpg',
    description: 'Unit Kegiatan Mahasiswa Pecinta Alam FEB Universitas Jember platform.',
    tech: ['Next.js', 'Tailwind', 'High Performance'],
    link: 'https://mahapena.feb.unej.ac.id/',
    problem: 'Fragmented community communication and lack of digital presence for nature enthusiasts.',
    impact: 'Established a centralized hub that increased member engagement by 40% and simplified information sharing.'
  },
  {
    id: 2,
    title: 'HMRPM',
    category: 'TECHNOLOGY',
    image: '/portfolio/hmrpmunej.id_.jpg',
    description: 'Mechanical Engineering Student Association digital hub.',
    tech: ['React', 'Node.js', 'Architecture'],
    link: 'https://hmrpmunej.id/',
    problem: 'Manual academic documentation and inefficient communication between mechanical engineering students.',
    impact: 'Automated 70% of administrative tasks and created a unified platform for over 500 active students.'
  },
  {
    id: 3,
    title: 'BALIKKUCING',
    category: 'CREATIVE AGENCY',
    image: '/portfolio/balikkucingstudio.com_.jpg',
    description: 'Fresh visual identity and creative agency platform.',
    tech: ['Brand Design', 'UI/UX', 'Innovation'],
    link: 'https://balikkucingstudio.com/',
    problem: 'Traditional agency branding that failed to capture the high-tech, futuristic vision of the studio.',
    impact: 'Redesigned the entire digital identity, leading to a 200% increase in international inquiries.'
  },
  {
    id: 4,
    title: 'AF STUDIO',
    category: 'PHOTOGRAPHY',
    image: '/portfolio/afstudio.my.id_.jpg',
    description: 'Professional photography studio landing page.',
    tech: ['Elegance', 'Visual Arts', 'Portfolio'],
    link: 'https://afstudio.my.id/',
    problem: 'Ineffective portfolio display and low client conversion rates for luxury photography services.',
    impact: 'Created a high-impact visual gallery that improved appointment booking rates by 50%.'
  },
  {
    id: 5,
    title: 'STRATEGIX',
    category: 'AI SYSTEM',
    image: '/portfolio/strategix.grapadikonsultan.co.id_.jpg',
    description: 'Intelligent business management with AI SWORT analysis.',
    tech: ['AI Engine', 'Next.js', 'Analytics'],
    link: 'https://strategix.grapadikonsultan.co.id/',
    problem: 'Complex and time-consuming manual SWOT analysis for small to medium enterprise consultants.',
    impact: 'Developed an AI-driven engine that generates strategic reports in seconds instead of hours.'
  },
  {
    id: 6,
    title: 'SUGOI 8',
    category: 'EVENT MGT',
    image: '/portfolio/sugoi8management.com_.jpg',
    description: 'Event management agency profile and digital solutions.',
    tech: ['Event Core', 'Management', 'Digital'],
    link: 'https://sugoi8management.com/',
    problem: 'Disorganized event ticketing systems and lack of professional agency profiling.',
    impact: 'Integrated an end-to-end event management system that successfully handled 5 major regional events.'
  }
];

// ───────────────────────────────────────────────
// Magnetic Project Card
// ───────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: x * 0.1, y: y * 0.1 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      animate={{ x: mousePos.x, y: mousePos.y }}
      className="group relative"
    >
      <div className={`
        relative aspect-[4/5] md:aspect-video rounded-2xl overflow-hidden bg-card/40 backdrop-blur-xl border 
        transition-all duration-500 transform-gpu
        ${isHovered ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20 scale-[1.02]' : 'border-white/10 shadow-black/50'}
      `}>
        {/* Background Texture/Noise */}
        <div className="absolute inset-0 noise opacity-10 pointer-events-none" />

        {/* Project Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.1, filter: 'brightness(0.6) blur(2px)' } : { scale: 1, filter: 'brightness(0.4) blur(0px)' }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index < 2}
            />
          </motion.div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black text-cyan-400 tracking-[0.3em] uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/20">
              {project.category}
            </span>
            <div className="flex gap-2">
              <Satellite size={14} className="text-cyan-400/50" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter font-['Teko'] leading-none drop-shadow-lg">
              {project.title}
            </h3>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 20 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-gray-300 line-clamp-2 mb-4 font-medium max-w-md">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-cyan-400/60 uppercase text-[9px] font-black tracking-widest">
                <span className="flex items-center gap-2"><Zap size={10} /> v4.0.2</span>
                <span className="flex items-center gap-2"><Cpu size={10} /> PRO_AI</span>
              </div>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg text-xs font-bold transition-colors"
                >
                  VIEW_LIVE <ExternalLink size={14} />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Scanning Line Effect on Hover */}
        {isHovered && (
          <motion.div
            initial={{ top: '-100%' }}
            animate={{ top: '200%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none z-20"
          />
        )}
      </div>
    </motion.div>
  );
}

// ───────────────────────────────────────────────
// Portfolio Main Section
// ───────────────────────────────────────────────
export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative min-h-screen py-32 bg-background overflow-hidden px-6 lg:px-12">
      {/* Background Ambience - Optimized */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Layer */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-cyan-500/30" />
              <span className="text-[10px] font-black text-cyan-400 tracking-[1em] uppercase">SYSTEM_ARCHIVE</span>
              <div className="h-[1px] w-12 bg-cyan-500/30" />
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-foreground uppercase tracking-tighter font-['Teko'] leading-[0.8] mb-8">
              SELECTED <span className="text-transparent border-text-cyan">WORKS</span>
            </h2>
            <div className="inline-block px-6 py-2 border border-cyan-500/20 rounded-full backdrop-blur-md bg-white/5">
              <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest flex items-center gap-3">
                <Activity size={10} className="animate-pulse" /> OPTIMIZED_PROJECT_LISTING_V4.0
              </p>
            </div>
          </motion.div>
        </div>

        {/* High Performance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-24 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-1 bg-gradient-to-b from-cyan-500/50 to-transparent h-20" />
            <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.5em]">END_OF_ARCHIVE</p>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .border-text-cyan {
          -webkit-text-stroke: 1px rgba(34, 211, 238, 0.4);
        }
        .transform-gpu {
          transform: translateZ(0); /* Force hardware acceleration */
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
