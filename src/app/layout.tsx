import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syntax Web | From Concept to Intelligent Innovation',
  description: 'Transforming ideas into intelligent digital innovations. Expert web development powered by modern AI and architectural excellence.',
};

import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300..700&family=IBM+Plex+Sans:wght@100..700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-['IBM_Plex_Sans'] relative bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
