'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Satellite, ShieldCheck, Zap, Activity, Cpu } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '../types';

// ───────────────────────────────────────────────
// Magnetic Project Card
// ───────────────────────────────────────────────
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'overview' | 'problem' | 'impact'>('overview');
  const cardRef = useRef<HTMLDivElement>(null);

  const statusIcons = [Satellite, ShieldCheck, Zap, Activity, Cpu, Satellite];
  const StatusIcon = statusIcons[index % statusIcons.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.04;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.04;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      animate={{ x: mousePos.x, y: mousePos.y }}
      className="group relative"
    >
      <div
        className={`
          relative aspect-[4/5] md:aspect-video rounded-2xl overflow-hidden bg-card/40 backdrop-blur-xl border
          transition-all duration-500 transform-gpu
          ${isHovered
            ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20 scale-[1.02]'
            : 'border-white/10 shadow-black/50'}
        `}
      >
        {/* Project Image — full-card background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={
              isHovered
                ? { scale: 1.1, filter: 'brightness(0.45) blur(2px)' }
                : { scale: 1, filter: 'brightness(0.35) blur(0px)' }
            }
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
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
          {/* Top row — category badge + number */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
              <StatusIcon size={10} className="text-cyan-400" />
              <span className="text-[9px] font-black text-cyan-400 tracking-[0.3em] uppercase">
                {project.category}
              </span>
            </div>
            <span className="text-[10px] font-black text-white/20 tracking-widest">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Bottom row — title + hover reveal */}
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
                  {/* Tab Navigation */}
                  <div className="flex gap-4 mb-3 border-b border-white/10 pb-2">
                    {(['overview', 'problem', 'impact'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-[9px] font-black uppercase tracking-[0.3em] pb-1 transition-colors ${
                          activeTab === tab
                            ? 'text-cyan-400 border-b border-cyan-400'
                            : 'text-white/40 hover:text-white/70'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-gray-300 leading-relaxed font-medium max-w-md mb-4 min-h-[3rem]"
                    >
                      {activeTab === 'overview' && project.description}
                      {activeTab === 'problem' && project.problem}
                      {activeTab === 'impact' && project.impact}
                    </motion.p>
                  </AnimatePresence>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer row */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-cyan-400/60 uppercase text-[9px] font-black tracking-widest">
                <span className="flex items-center gap-2">
                  <Zap size={10} /> SYN_{String(project.id).padStart(3, '0')}
                </span>
                <span className="flex items-center gap-2">
                  <Cpu size={10} /> PRO
                </span>
              </div>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none z-20"
          />
        )}
      </div>
    </motion.div>
  );
}

