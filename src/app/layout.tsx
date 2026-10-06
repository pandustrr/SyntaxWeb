import type { Metadata } from 'next';
import { Teko, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider, LanguageProvider } from '@/modules/shared';

const teko = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-teko',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: 'Syntax Web | From Concept to Intelligent Innovation',
  description:
    'Transforming ideas into intelligent digital innovations. Expert web development powered by modern AI and architectural excellence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${teko.variable} ${ibmPlexSans.variable}`}>
      <body className="antialiased font-sans relative">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

