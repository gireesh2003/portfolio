import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/portfolio/Navigation';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gireesh  | Creative Developer & Designer',
  description: 'Full-stack developer specializing in modern web technologies, 3D experiences, and creative digital solutions.',
  keywords: 'developer, designer, portfolio, React, Three.js, WebGL, creative coding',
  authors: [{ name: 'Gireesh ' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-black">
          <Navigation />
          <main className="relative">
            {children}
          </main>
        </div>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}