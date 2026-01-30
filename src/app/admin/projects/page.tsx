'use client';

import { useState } from 'react';
import ProjectTable from '@/components/admin/ProjectTable';
import Button from '@/components/ui/Button';
import { Plus } from 'lucide-react';

export default function ProjectsPage() {
  const [projects] = useState([
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Platform e-commerce dengan fitur lengkap',
      status: 'active',
      createdAt: '2024-01-15',
    },
    {
      id: 2,
      name: 'Corporate Website',
      description: 'Website perusahaan profesional',
      status: 'active',
      createdAt: '2024-01-10',
    },
  ]);

  const handleEdit = (project: any) => {
    console.log('Edit project:', project);
  };

  const handleDelete = (id: number) => {
    console.log('Delete project:', id);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600">Kelola semua project Anda</p>
        </div>
        <Button variant="primary">
          <Plus size={20} className="mr-2" />
          Tambah Project
        </Button>
      </div>

      <ProjectTable
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
