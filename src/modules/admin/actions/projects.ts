'use server';

import { prisma } from '@/core/db/prisma';
import { getSession } from '@/core/auth/session';
import type { AdminProject } from '../types';

async function requireAuth() {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
  return session;
}

export async function getProjectsAction(): Promise<{ projects: AdminProject[]; error?: string }> {
  try {
    await requireAuth();
    const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
    return {
      projects: projects.map((p) => ({
        ...p,
        createdAt: p.createdAt.toISOString(),
      })),
    };
  } catch (error: any) {
    return { projects: [], error: error.message };
  }
}

export async function createProjectAction(
  data: Pick<AdminProject, 'name' | 'description' | 'status'>
): Promise<{ project?: AdminProject; error?: string }> {
  try {
    await requireAuth();
    if (!data.name || !data.description) {
      return { error: 'Nama dan deskripsi harus diisi.' };
    }
    const project = await prisma.project.create({
      data: { name: data.name, description: data.description, status: data.status || 'active' },
    });
    return { project: { ...project, createdAt: project.createdAt.toISOString() } };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function updateProjectAction(
  data: Pick<AdminProject, 'id' | 'name' | 'description' | 'status'>
): Promise<{ project?: AdminProject; error?: string }> {
  try {
    await requireAuth();
    if (!data.id) return { error: 'ID project harus diisi.' };
    const project = await prisma.project.update({
      where: { id: data.id },
      data: { name: data.name, description: data.description, status: data.status },
    });
    return { project: { ...project, createdAt: project.createdAt.toISOString() } };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteProjectAction(id: number): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAuth();
    await prisma.project.delete({ where: { id } });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
