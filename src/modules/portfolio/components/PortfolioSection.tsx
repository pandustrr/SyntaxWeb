'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { useLanguage } from '@/modules/shared';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export default function PortfolioSection() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative min-h-screen py-32 bg-background overflow-hidden px-6 lg:px-12">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
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
              SELECTED{' '}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '1px rgba(34, 211, 238, 0.4)' }}
              >
                WORKS
              </span>
            </h2>
            <div className="inline-block px-6 py-2 border border-cyan-500/20 rounded-full backdrop-blur-md bg-white/5">
              <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest flex items-center gap-3">
                <Activity size={10} className="animate-pulse" /> OPTIMIZED_PROJECT_LISTING_V4.0
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer */}
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
    </section>
  );
}
