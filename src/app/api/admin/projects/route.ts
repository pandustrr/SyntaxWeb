import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET - Ambil semua projects
export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error('Get projects error:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

// POST - Tambah project baru
export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { name, description, status } = await request.json();

    if (!name || !description) {
      return NextResponse.json(
        { message: 'Nama dan deskripsi harus diisi' },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        name,
        description,
        status: status || 'active',
      },
    });

    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

// PUT - Update project
export async function PUT(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id, name, description, status } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: 'ID project harus diisi' },
        { status: 400 }
      );
    }

    const project = await prisma.project.update({
      where: { id },
      data: {
        name,
        description,
        status,
      },
    });

    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    console.error('Update project error:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

// DELETE - Hapus project
export async function DELETE(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { message: 'ID project harus diisi' },
        { status: 400 }
      );
    }

    await prisma.project.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Project berhasil dihapus' }, { status: 200 });
  } catch (error) {
    console.error('Delete project error:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
