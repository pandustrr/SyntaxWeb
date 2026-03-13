'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/images/project-1.jpg',
      description: 'Platform e-commerce modern dengan fitur lengkap',
      tech: ['Next.js', 'Tailwind', 'Prisma'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'web',
      image: '/images/project-2.jpg',
      description: 'Website perusahaan dengan desain profesional',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Mobile App Landing',
      category: 'landing',
      image: '/images/project-3.jpg',
      description: 'Landing page untuk aplikasi mobile',
      tech: ['Next.js', 'Framer Motion'],
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      category: 'dashboard',
      image: '/images/project-4.jpg',
      description: 'Dashboard analytics dengan visualisasi data',
      tech: ['React', 'Chart.js', 'Express'],
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Portfolio Personal',
      category: 'landing',
      image: '/images/project-5.jpg',
      description: 'Portfolio website untuk freelancer',
      tech: ['Next.js', 'Tailwind'],
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Admin Panel',
      category: 'dashboard',
      image: '/images/project-6.jpg',
      description: 'Admin panel dengan fitur CRUD lengkap',
      tech: ['React', 'Material UI', 'Firebase'],
      link: '#',
      github: '#',
    },
  ];

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'web', label: 'Website' },
    { id: 'landing', label: 'Landing Page' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="min-h-screen flex items-center py-32 bg-transparent relative overflow-hidden snap-start">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="text-start flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
        >
          <div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                variants={{
                  initial: { y: "110%" },
                  animate: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="text-5xl md:text-8xl font-black text-[#F2F2F2] tracking-tighter"
              >
                Selected <span className="text-[#B6B09F]">Artifacts</span>
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.p
                variants={{
                  initial: { y: "110%" },
                  animate: { y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="text-lg text-gray-500 max-w-xl font-medium tracking-tight"
              >
                A curated collection of our most impactful digital constructions and architectural experiments.
              </motion.p>
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-6 border-b border-white/5 pb-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-700 pb-2 border-b-2
                  ${activeFilter === filter.id
                    ? 'text-[#B6B09F] border-[#B6B09F]'
                    : 'text-gray-700 border-transparent hover:text-[#F2F2F2]'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#000000] border-r border-b border-white/5 overflow-hidden transition-all duration-700 aspect-square"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-1000"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#B6B09F08_25%,transparent_25%,transparent_50%,#B6B09F08_50%,#B6B09F08_75%,transparent_75%,transparent)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-[#000000]/60 group-hover:bg-[#000000]/20 transition-colors duration-700" />
              </motion.div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                <div className="overflow-hidden mb-4">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap gap-4"
                  >
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-[9px] font-black uppercase tracking-[0.3em] text-[#B6B09F]">
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>

                <div className="overflow-hidden mb-8">
                  <motion.h3
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl md:text-4xl font-black text-[#F2F2F2] tracking-tighter uppercase leading-[0.9]"
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex gap-8 group/link"
                >
                  <a href={project.link} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-[#B6B09F] transition-all duration-500">
                    Explore <ExternalLink size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </motion.div>
              </div>

              {/* Architectural Frame - very subtle */}
              <div className="absolute inset-[2px] border border-[#B6B09F]/0 group-hover:border-[#B6B09F]/20 transition-all duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
