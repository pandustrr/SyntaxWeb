'use client';

import { useState, useCallback } from 'react';
import { getProjectsAction, createProjectAction, updateProjectAction, deleteProjectAction } from '../actions/projects';
import type { AdminProject } from '../types';

export function useProjects() {
  const [projects, setProjects] = useState<AdminProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    const result = await getProjectsAction();
    if (result.error) {
      setError(result.error);
    } else {
      setProjects(result.projects);
    }
    setLoading(false);
  }, []);

  const createProject = useCallback(async (data: Pick<AdminProject, 'name' | 'description' | 'status'>) => {
    const result = await createProjectAction(data);
    if (!result.error && result.project) {
      setProjects((prev) => [result.project!, ...prev]);
    }
    return result;
  }, []);

  const updateProject = useCallback(async (data: Pick<AdminProject, 'id' | 'name' | 'description' | 'status'>) => {
    const result = await updateProjectAction(data);
    if (!result.error && result.project) {
      setProjects((prev) => prev.map((p) => (p.id === data.id ? result.project! : p)));
    }
    return result;
  }, []);

  const deleteProject = useCallback(async (id: number) => {
    const result = await deleteProjectAction(id);
    if (result.success) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
    return result;
  }, []);

  return { projects, loading, error, fetchProjects, createProject, updateProject, deleteProject };
}
