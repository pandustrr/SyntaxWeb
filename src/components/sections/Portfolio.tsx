'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import { Github, ArrowUpRight, ChevronRight, Activity, Terminal, Layers } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useSpring,
  useMotionValue
} from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  mockup: React.ReactNode;
}

// Geometric Shard Component for Background Depth
const Shard = ({ index }: { index: number }) => {
  const randomX = useMemo(() => Math.random() * 100, []);
  const randomY = useMemo(() => Math.random() * 100, []);
  const randomRotation = useMemo(() => Math.random() * 360, []);
  const randomScale = useMemo(() => 0.5 + Math.random() * 1.5, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.02, 0.05, 0.02],
        rotate: [randomRotation, randomRotation + 10, randomRotation],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 10 + index * 2,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute pointer-events-none"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        scale: randomScale,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 0L40 20L20 40L0 20L20 0Z" stroke="#B6B09F" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </motion.div>
  );
};

// Sub-component to handle local 3D Tilt tracking
const ProjectCard = ({ project, index, rotateY }: { project: Project, index: number, rotateY: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateYLocal = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateY }}
      className="relative group shrink-0 w-[80vw] md:w-[65vw] lg:w-[48vw]"
    >
      {/* HUD Labeling - Animated on Hover */}
      <div className="absolute -top-14 left-0 flex flex-col gap-2 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="flex items-center gap-3">
          <Terminal size={14} className="text-[#B6B09F]/40" />
          <span className="text-[10px] font-mono text-[#B6B09F]/60 tracking-[0.2em] font-bold">ARTIFACT_0{index + 1}</span>
        </div>
        <motion.div
          className="w-full h-px bg-gradient-to-r from-[#B6B09F]/30 to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Main Card Container with 3D perspective mapping */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY: rotateYLocal,
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[16/9] bg-[#050505] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-visible transition-shadow duration-500 hover:shadow-[0_60px_120px_rgba(182,176,159,0.15)]"
      >
        {/* Holographic Border Frame Layer - Pop out */}
        <div
          style={{ transform: "translateZ(50px)" }}
          className="absolute -inset-[2px] bg-gradient-to-br from-[#B6B09F]/20 via-transparent to-[#B6B09F]/20 opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        />

        <div className="absolute inset-0 overflow-hidden transform-gpu">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            {project.mockup}
            {/* Overlay Glitch/Scan Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(182,176,159,0.02)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>

        {/* Floating HUD Info Panel - Extreme Depth */}
        <div
          style={{ transform: "translateZ(80px)" }}
          className="absolute -bottom-20 left-6 right-6 md:bottom-auto md:left-auto md:top-[12%] md:-right-40 z-30 bg-[#070707]/90 backdrop-blur-3xl border border-white/10 p-10 md:max-w-[400px] shadow-[0_40px_100px_rgba(0,0,0,1)] group-hover:translate-x-8 transition-all duration-700"
        >
          <div className="absolute top-0 right-0 p-4">
            <div className="flex gap-1 items-center">
              <span className="text-[7px] font-mono text-[#B6B09F]/30 uppercase tracking-tighter">Secure_Access</span>
              <div className="w-1.5 h-1.5 bg-[#B6B09F]/40 animate-pulse" />
            </div>
          </div>

          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[9px] font-mono text-[#B6B09F]/60 uppercase tracking-widest mb-1">DATA_STREAM</p>
              <h4 className="text-4xl font-black text-white tracking-tighter uppercase">{project.title}</h4>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#B6B09F] hover:bg-white hover:text-black transition-all duration-500 cursor-pointer group/link">
              <ArrowUpRight size={20} className="group-hover/link:rotate-45 transition-transform" />
            </div>
          </div>

          <p className="text-[13px] text-gray-400 font-medium leading-relaxed mb-8 uppercase tracking-[0.15em] border-l-2 border-[#B6B09F]/20 pl-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map(t => (
              <span key={t} className="text-[8px] font-mono text-[#B6B09F]/60 border border-[#B6B09F]/10 px-3 py-1 uppercase bg-white/5">{t}</span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <a href={project.link} className="text-[10px] font-black text-white uppercase tracking-[0.6em] hover:text-[#B6B09F] transition-all flex items-center gap-2">
              EXECUTE_PATH
            </a>
            <Github size={18} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setCurrentTime(new Date().toISOString().split('T')[1].slice(0, 8));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'UKMK Etalase',
      category: 'platform',
      description: 'Futuristic digital hub for traditional culture transformation and preservation.',
      tech: ['Laravel', 'Inertia', 'Tailwind'],
      link: 'http://ukmketalase.com/',
      github: '#',
      mockup: (
        <div className="w-full h-full bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(182,176,159,0.1)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#B6B09F 1px, transparent 1px), linear-gradient(90deg, #B6B09F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="z-10 text-center">
            <motion.h1
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-4xl font-black text-white tracking-widest leading-none mb-4"
            >
              UKMK <span className="text-[#B6B09F]">ETALASE</span>
            </motion.h1>
            <div className="inline-block px-4 py-2 border border-[#B6B09F]/20 bg-white/5 backdrop-blur-md text-[8px] uppercase tracking-[0.4em] text-[#B6B09F]">
              SYSTEM_LINK_ESTABLISHED
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Sugoi 8 Management',
      category: 'agency',
      description: 'Precision stagecraft and event architecture for high-impact experiences.',
      tech: ['Next.js', 'Tailwind', 'Motion'],
      link: 'https://sugoi8management.com/',
      github: '#',
      mockup: (
        <div className="w-full h-full bg-[#000] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#B6B09F]/5" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#B6B09F]/10" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-[#B6B09F]/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-8xl font-black text-white/5 tracking-tighter">SUGOI</span>
              <span className="text-9xl font-black text-[#B6B09F] -mt-12 opacity-80">8</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Balikkucing Studio',
      category: 'agency',
      description: 'Advanced visual identity and brand engineering studio.',
      tech: ['Next.js', 'Creative Design'],
      link: 'https://balikkucingstudio.com/',
      github: '#',
      mockup: (
        <div className="w-full h-full bg-[#0a0a0a] flex items-center p-8 border-l-8 border-[#B6B09F]">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-2 bg-[#B6B09F]/50" />
            <h2 className="text-5xl font-black text-white tracking-tighter leading-none">
              BK <span className="text-[#B6B09F]">STUDIO</span>
            </h2>
            <p className="text-[10px] font-mono text-[#B6B09F]/40 uppercase tracking-widest mt-4">CORE_VISUAL_ENGINE_v3</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'HMRPM UNEJ',
      category: 'organization',
      description: 'Mechanical engineering community platform with architectural precision.',
      tech: ['Laravel', 'Inertia', 'Tailwind'],
      link: 'https://hmrpmunej.id/',
      github: '#',
      mockup: (
        <div className="w-full h-full bg-[#000] relative flex items-center justify-center p-12">
          <div className="absolute inset-0 border-[20px] border-[#B6B09F]/5" />
          <div className="text-center z-10">
            <Layers className="text-[#B6B09F]/30 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-black text-white tracking-tighter">HMRPM<br /><span className="text-[#B6B09F]">SYSTEMS</span></h2>
          </div>
        </div>
      )
    }
  ];

  const filters = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'agency', label: 'Agencies' },
    { id: 'organization', label: 'Orgs' },
    { id: 'platform', label: 'Platforms' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Duplicate for infinite effect
  const displayProjects = [...filteredProjects, ...filteredProjects];

  return (
    <section id="portfolio" className="relative min-h-screen bg-[#050505] py-20 overflow-hidden">
      <div className="h-full w-full flex flex-col">

        {/* Background - Kinetic Fragments Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {mounted && Array.from({ length: 15 }).map((_, i) => (
            <Shard key={i} index={i} />
          ))}

          {/* Dual Scanning Lines */}
          <motion.div
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B6B09F]/10 to-transparent z-0 opacity-40"
          />
          <motion.div
            animate={{ y: ["100%", "0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 opacity-20"
          />

          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#B6B09F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Header - Kinetic HUD */}
        <div className="px-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-12 shrink-0 mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-[#B6B09F] mb-8 flex items-center gap-6">
              <motion.div
                animate={{ width: [0, 64] }}
                className="h-[2px] bg-[#B6B09F]"
              />
              AUTO_RECV_ARCHIVE
            </h2>
            <h3 className="text-8xl md:text-[8rem] lg:text-[9rem] font-black text-white tracking-tighter uppercase leading-[0.75]">
              WALKING<br /><span className="text-[#B6B09F] italic font-serif">GALLERY</span>
            </h3>
          </motion.div>

          {/* Animated HUD Info Column */}
          <div className="hidden lg:flex flex-col gap-2 text-right">
            <div className="flex items-center justify-end gap-3">
              <span className="text-[8px] font-mono text-gray-700 tracking-[0.5em] uppercase">Motion_Mode</span>
              <span className="text-[9px] font-mono text-[#B6B09F] tracking-widest font-bold uppercase">Infinite_Loop</span>
            </div>
            <div className="flex items-center justify-end gap-3">
              <span className="text-[8px] font-mono text-gray-700 tracking-[0.5em] uppercase">Status</span>
              <span className="text-[9px] font-mono text-[#B6B09F] tracking-widest font-bold uppercase">Auto_Streaming</span>
            </div>
            <div className="w-full h-px bg-white/5 mt-4" />
          </div>

          <div className="hidden md:flex flex-col gap-6 md:text-right">
            <div className="flex gap-10 border-b border-white/5 pb-4">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-700 pb-2 border-b-2
                    ${activeFilter === filter.id ? 'text-[#B6B09F] border-[#B6B09F]' : 'text-gray-700 border-transparent hover:text-white'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Container - Moving Marquee */}
        <div
          className="relative flex items-center h-[600px] w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-[10vw] absolute left-0 will-change-transform" // Hardware acceleration
            style={{ transform: "translateZ(0)" }}
            animate={{
              x: isPaused ? undefined : ["0%", "-50%"]
            }}
            transition={{
              duration: 30, // Regular speed for consistency
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {displayProjects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="perspective-[2500px]">
                <ProjectCard
                  project={project}
                  index={index % filteredProjects.length}
                  rotateY={0}
                />
              </div>
            ))}
          </motion.div>

          {/* Vignette Shadow to hide edges */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        </div>

        {/* Footer HUD - Data Stream */}
        <footer className="mt-20 h-24 px-12 border-t border-white/5 flex items-center justify-between z-20 bg-[#070707]/95 backdrop-blur-xl">
          <div className="flex gap-16 items-center">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-gray-700 uppercase tracking-tighter">System_Mode</span>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B6B09F] animate-pulse" />
                <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">Autonomous</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-[9px] font-mono text-gray-700 uppercase tracking-tighter">System_Clock</span>
              <span className="text-[11px] font-mono text-white/20 uppercase tracking-widest">{currentTime || "00:00:00"}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-gray-700 uppercase tracking-tighter">Stream_Protocol</span>
              <span className="text-[11px] font-mono text-[#B6B09F]/60 tracking-widest uppercase">Auto_Archive_v1.0</span>
            </div>
          </div>

          <div className="flex items-center gap-10 group cursor-pointer">
            <div className="text-right flex flex-col items-end">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] group-hover:text-[#B6B09F] transition-all duration-500">AUTOSCROLL_ENABLED</span>
              <span className="text-[8px] font-mono text-gray-700 uppercase tracking-widest group-hover:text-gray-400">Hover to Inspect Artifacts</span>
            </div>
            <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-[#B6B09F]/60 group-hover:border-[#B6B09F] group-hover:text-[#B6B09F] group-hover:bg-[#B6B09F]/5 group-hover:scale-110 group-hover:rotate-45 transition-all duration-700">
              <ChevronRight size={28} />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
