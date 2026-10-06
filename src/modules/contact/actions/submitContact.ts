'use server';

import type { ContactFormData, ContactSubmitResult } from '../types';

/**
 * Server Action: Submit contact form
 * TODO: Integrate with email service (Nodemailer / Resend)
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactSubmitResult> {
  try {
    // Validate
    if (!data.name || data.name.trim().length < 2) {
      return { success: false, message: 'Nama minimal 2 karakter.' };
    }
    if (!data.message || data.message.trim().length < 10) {
      return { success: false, message: 'Pesan minimal 10 karakter.' };
    }

    // TODO: Send email via Nodemailer/Resend
    // await sendEmail({ to: 'office@syntaxweb.com', ...data });

    // For now: log and return success
    console.log('[ContactForm] New submission:', data);

    return { success: true, message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.' };
  } catch (error) {
    console.error('[ContactForm] Error:', error);
    return { success: false, message: 'Terjadi kesalahan server. Silakan coba lagi.' };
  }
}
