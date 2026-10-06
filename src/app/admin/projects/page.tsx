'use client';

import { useState, useEffect } from 'react';
import { ProjectTable } from '@/modules/admin';
import Button from '@/modules/shared/components/ui/Button';
import Modal from '@/modules/shared/components/ui/Modal';
import { useProjects } from '@/modules/admin';
import type { AdminProject } from '@/modules/admin';
import { Plus } from 'lucide-react';

interface ProjectFormData {
  name: string;
  description: string;
  status: string;
}

export default function ProjectsPage() {
  const { projects, loading, error, fetchProjects, createProject, updateProject, deleteProject } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<AdminProject | undefined>();
  const [formData, setFormData] = useState<ProjectFormData>({ name: '', description: '', status: 'active' });

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleAdd = () => {
    setSelectedProject(undefined);
    setFormData({ name: '', description: '', status: 'active' });
    setIsModalOpen(true);
  };

  const handleEdit = (project: AdminProject) => {
    setSelectedProject(project);
    setFormData({ name: project.name, description: project.description, status: project.status });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Yakin ingin menghapus project ini?')) {
      await deleteProject(id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProject) {
      await updateProject({ id: selectedProject.id, ...formData });
    } else {
      await createProject(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600">Kelola semua project Anda</p>
        </div>
        <Button variant="primary" onClick={handleAdd}>
          <Plus size={20} className="mr-2" />
          Tambah Project
        </Button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
      )}

      {loading ? (
        <div className="flex items-center justify-center h-48 text-gray-400">Memuat data...</div>
      ) : (
        <ProjectTable projects={projects} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedProject ? 'Edit Project' : 'Tambah Project'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Project</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end pt-2">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Batal</Button>
            <Button type="submit" variant="primary">{selectedProject ? 'Update' : 'Tambah'}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

