import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return apiError('File gambar tidak ditemukan dalam request (key: file)', 400);
    }

    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedMimeTypes.includes(file.type)) {
      return apiError('Tipe file tidak didukung. Harap upload gambar JPEG, PNG, atau WebP', 400);
    }

    const maxSizeBytes = 5 * 1024 * 1024; // 5 MB
    if (file.size > maxSizeBytes) {
      return apiError('Ukuran file melebihi batas maksimum 5 MB', 400);
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Dapatkan ekstensi file yang aman
    const rawExt = file.name.split('.').pop() || 'jpg';
    const cleanExt = rawExt.toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
    const filename = `pos_${session.businessId}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${cleanExt}`;

    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'pos');
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    const publicUrl = `/uploads/pos/${filename}`;

    return apiSuccess(
      {
        url: publicUrl,
        filename,
        size: file.size,
        mime_type: file.type,
      },
      'Gambar berhasil diunggah',
      201
    );
  } catch (error: any) {
    return apiError(error.message || 'Gagal mengunggah gambar', 500);
  }
}
