import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SyntaxWeb - Web Development Solutions',
  description: 'Solusi web development profesional untuk bisnis Anda',
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

