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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lihat beberapa project yang telah kami kerjakan
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-700 font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
