'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Monitor, ExternalLink, Satellite, ShieldCheck, Zap, Cpu, Activity, Database } from 'lucide-react';
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
    image: '/portfolio/mahapena.feb.unej.ac.id_.png',
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
    image: '/portfolio/hmrpmunej.id_.png',
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
    image: '/portfolio/balikkucingstudio.com_.png',
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
    image: '/portfolio/afstudio.my.id_.png',
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
    image: '/portfolio/strategix.grapadikonsultan.co.id_.png',
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
    image: '/portfolio/sugoi8management.com_.png',
    description: 'Event management agency profile and digital solutions.',
    tech: ['Event Core', 'Management', 'Digital'],
    link: 'https://sugoi8management.com/',
    problem: 'Disorganized event ticketing systems and lack of professional agency profiling.',
    impact: 'Integrated an end-to-end event management system that successfully handled 5 major regional events.'
  }
];

// ───────────────────────────────────────────────
// Browser Satellite Component
// ───────────────────────────────────────────────
function BrowserSatellite({ project, index, total, isPaused, onHover }: {
  project: Project;
  index: number;
  total: number;
  isPaused: boolean;
  onHover: (project: Project | null) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  // Orbit parameters
  const angleOffset = (index / total) * Math.PI * 2;
  const [orbitAngle, setOrbitAngle] = useState(angleOffset);

  useEffect(() => {
    if (isPaused || isHovered) return;
    const interval = setInterval(() => {
      setOrbitAngle(prev => prev + 0.001);
    }, 16);
    return () => clearInterval(interval);
  }, [isPaused, isHovered]);

  // Calculate elliptical position
  const radiusX = 1400; // Orbit width
  const radiusY = 300;  // Orbit tilt height
  const x = Math.cos(orbitAngle) * radiusX;
  const z = Math.sin(orbitAngle) * 800; // Depth
  const y = Math.sin(orbitAngle) * radiusY;

  // Depth sorting
  const isFront = z > 0;
  const scale = isFront ? 1 + (z / 800) * 0.25 : 0.85 + (z / 800) * 0.2;
  const opacity = isFront ? 1 : 0.4;
  const blur = isFront ? 0 : 4;

  return (
    <motion.div
      style={{
        x, y,
        z: z,
        scale,
        opacity,
        filter: `blur(${blur}px)`,
        zIndex: Math.round(z + 1000),
      }}
      className="absolute transform-style-3d cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(project);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
    >
      {/* Browser Window Satelite */}
      <div className={`
                relative w-[400px] md:w-[600px] bg-card/80 backdrop-blur-xl
                border ${isHovered ? 'border-cyan-400' : 'border-cyan-500/20'} 
                rounded-xl overflow-hidden shadow-2xl transition-all duration-500
                ${isHovered ? 'shadow-cyan-500/30' : 'shadow-black/50 dark:shadow-black/80'}
            `}>
        {/* Macbook Header Bar */}
        <div className="flex items-center justify-between px-5 h-10 bg-muted/50 border-b border-foreground/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
          </div>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[8px] font-mono text-cyan-400/80 tracking-widest uppercase animate-pulse"
            >
              SCANNING_PROJECT_DATA...
            </motion.span>
          )}
          <div className="flex gap-4">
            <Satellite size={12} className="text-cyan-500/40" />
            <ShieldCheck size={12} className="text-cyan-500/40" />
          </div>
        </div>

        {/* Screenshot Container */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{ objectPosition: 'top' }}
            animate={isHovered ? { objectPosition: 'bottom' } : { objectPosition: 'top' }}
            transition={{ duration: 8, ease: "linear" }}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />

          {/* Dark Overlay for branding contrast - Only in dark mode or when not hovered */}
          {!isHovered && (
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
          )}
        </div>

        {/* Information Layer */}
        <div className="p-8">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-black text-cyan-500/40 tracking-[0.5em] uppercase mb-1">
                [ {project.category} ]
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none font-['Teko'] shadow-cyan-500 text-glow">
                {project.title}
              </h3>
            </div>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:text-black transition-all group/link"
              >
                <ExternalLink size={20} className="group-hover/link:rotate-45 transition-transform" />
              </Link>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`
                    absolute inset-0 pointer-events-none transition-opacity duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                    bg-gradient-to-tr from-cyan-500/5 to-transparent
                `} />
      </div>

      {/* Reflection / Glow under card */}
      <div className={`
                absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-10 
                bg-cyan-500/10 blur-[40px] rounded-full transition-opacity duration-500
                ${isHovered ? 'opacity-100 scale-150' : 'opacity-50'}
            `} />
    </motion.div>
  );
}

// ───────────────────────────────────────────────
// Project Intelligence Panel (Sidebar)
// ───────────────────────────────────────────────
function ProjectIntelligencePanel({ project }: { project: Project | null }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] w-80 md:w-96 hidden lg:block"
        >
          <div className="bg-card/40 backdrop-blur-2xl border border-cyan-500/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {/* Header / ID Code */}
            <div className="px-6 py-4 bg-cyan-500/10 border-b border-cyan-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">PROJECT_ANALYSIS_v4.0</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-500/40">ID: {project.id}00X</span>
            </div>

            <div className="p-8 space-y-8">
              {/* Title Area */}
              <div>
                <p className="text-[10px] font-black text-cyan-500/40 tracking-[0.4em] uppercase mb-1">MODULE_TITLE</p>
                <h3 className="text-4xl font-black text-foreground uppercase tracking-tighter font-['Teko'] leading-none">
                  {project.title}
                </h3>
              </div>

              {/* Problem Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-500/60">
                  <Activity size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">PROBLEM_DETECTED</span>
                </div>
                <div className="p-4 bg-red-500/5 border-l-2 border-red-500/30 rounded-r-lg">
                  <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>
              </div>

              {/* Impact Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-500/60">
                  <Cpu size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">SOLUTION_IMPACT</span>
                </div>
                <div className="p-4 bg-cyan-500/5 border-l-2 border-cyan-500/30 rounded-r-lg">
                  <p className="text-sm text-foreground/70 leading-relaxed font-medium italic">
                    "{project.impact}"
                  </p>
                </div>
              </div>

              {/* System Specs */}
              <div className="pt-6 border-t border-foreground/5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[9px] font-black text-foreground/30 uppercase tracking-widest mb-1">TECH_STACK</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[9px] font-black text-foreground/30 uppercase tracking-widest mb-1">STATUS</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[10px] font-mono text-green-500/80 tracking-widest">OPTIMIZED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Scanning Line */}
            <div className="h-1 w-full bg-foreground/5 relative overflow-hidden">
              <motion.div
                animate={{ left: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/3 bg-cyan-500/40 blur-sm"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ───────────────────────────────────────────────
// Portfolio Main Section
// ───────────────────────────────────────────────
export default function Portfolio() {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <section
      id="portfolio"
      className="relative min-h-[120vh] py-32 bg-background overflow-hidden flex flex-col items-center justify-center transition-colors duration-500"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[200px]" />
      </div>

      {/* Galactic Title Layer */}
      <div className="relative z-10 text-center mb-32 select-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-cyan-500/30" />
            <span className="text-[10px] font-black text-cyan-400 tracking-[1em] uppercase">SYSTEM_ARCHIVE</span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          <h2 className="text-8xl md:text-[12rem] font-black text-foreground uppercase tracking-tighter font-['Teko'] leading-none">
            GALACTIC <span className="text-transparent border-text-cyan">ORBIT</span>
          </h2>
          <div className="mt-8 px-6 py-2 border border-cyan-500/20 rounded-full backdrop-blur-md">
            <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest flex items-center gap-3">
              <Zap size={10} className="animate-pulse" /> ROTATING_DEPLOYED_MODULES_V4.0
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3D Galactic Scene Container */}
      <div className="relative w-full h-[600px] md:h-[800px] perspective-[4000px] overflow-visible">
        {/* Subtle Orbit Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2800px] h-[600px] border border-cyan-500/5 rounded-[100%] rotate-3 -skew-x-12 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2800px] h-[600px] border border-dashed border-cyan-500/10 rounded-[100%] rotate-[-2deg] skew-x-12 pointer-events-none" />

        {/* Render 3D Satellites */}
        <div className="relative w-full h-full transform-style-3d flex items-center justify-center">
          {PROJECTS.map((project, index) => (
            <BrowserSatellite
              key={project.id}
              project={project}
              index={index}
              total={PROJECTS.length}
              isPaused={isPaused}
              onHover={setHoveredProject}
            />
          ))}
        </div>
      </div>

      <ProjectIntelligencePanel project={hoveredProject} />

      {/* Control UI */}
      <div className="relative z-10 mt-20 flex flex-col items-center">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="group flex flex-col items-center gap-4 transition-all duration-500"
        >
          <div className="w-16 h-[2px] bg-cyan-500/20 relative overflow-hidden">
            <motion.div
              animate={isPaused ? { x: 0 } : { x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
            />
          </div>
          <span className="text-[10px] font-black text-cyan-400 group-hover:tracking-[0.8em] transition-all tracking-[0.5em] uppercase">
            {isPaused ? 'RESUME_ORBIT' : 'HOVER_TO_INSPECT'}
          </span>
        </button>
      </div>

      <style jsx global>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .text-glow {
            text-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
        }
        .border-text-cyan {
            -webkit-text-stroke: 1px rgba(34, 211, 238, 0.3);
        }
      `}</style>
    </section>
  );
}
