'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
    <section className="py-24 bg-gray-50 dark:bg-gray-950/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white mb-4">
            Portfolio <span className="text-brand-red">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Eksplorasi karya terbaik kami yang menggabungkan estetika dan fungsionalitas.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in text-gray-400">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/10 animate-fade-in'
                  : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-red/5 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-brand-maroon/10 to-brand-orange/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <span className="text-xs font-bold uppercase tracking-widest">Project Preview</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tech Badges on Image */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold rounded-lg border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black text-brand-red dark:text-brand-orange uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-950 dark:text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.link} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-brand-red hover:text-white transition-all shadow-sm">
                      <ExternalLink size={18} />
                    </a>
                    <a href={project.github} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-brand-maroon hover:text-white transition-all shadow-sm">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
