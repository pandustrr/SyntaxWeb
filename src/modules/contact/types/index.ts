// Contact module types
export interface ContactFormData {
  name: string;
  email?: string;
  message: string;
}

export interface ContactSubmitResult {
  success: boolean;
  message: string;
}
