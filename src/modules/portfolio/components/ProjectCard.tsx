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
  const [activeTab, setActiveTab] = useState<'overview' | 'problem' | 'impact'>('overview');
  const cardRef = useRef<HTMLDivElement>(null);

  const statusIcons = [Satellite, ShieldCheck, Zap, Activity, Cpu, Satellite];
  const StatusIcon = statusIcons[index % statusIcons.length];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm cursor-pointer"
      style={{ willChange: 'transform' }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
            <StatusIcon size={10} className="text-cyan-400" />
            <span className="text-[9px] font-black text-cyan-400 tracking-[0.3em] uppercase">{project.category}</span>
          </div>
        </div>

        {/* Project Number */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-black text-white/20 tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tighter font-['Teko'] leading-tight mb-4 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-4 border-b border-white/5 pb-2">
          {(['overview', 'problem', 'impact'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[9px] font-black uppercase tracking-[0.3em] pb-1 transition-colors ${
                activeTab === tab
                  ? 'text-cyan-400 border-b border-cyan-400'
                  : 'text-foreground/30 hover:text-foreground/60'
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
            className="text-sm text-foreground/60 leading-relaxed font-medium min-h-[3rem]"
          >
            {activeTab === 'overview' && project.description}
            {activeTab === 'problem' && project.problem}
            {activeTab === 'impact' && project.impact}
          </motion.p>
        </AnimatePresence>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[9px] font-black text-foreground/40 border border-white/5 rounded tracking-widest uppercase bg-white/[0.02]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-[9px] font-black text-foreground/20 tracking-widest uppercase">
            SYN_{String(project.id).padStart(3, '0')}
          </span>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/20 hover:border-cyan-500 text-cyan-400 hover:text-black rounded-lg text-xs font-bold transition-colors"
            >
              VIEW_LIVE <ExternalLink size={14} />
            </Link>
          )}
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
    </motion.div>
  );
}
