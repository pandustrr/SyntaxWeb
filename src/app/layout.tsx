import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SyntaxWeb - Web Development Solutions',
  description: 'Solusi web development profesional untuk bisnis Anda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
