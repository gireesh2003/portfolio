import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/portfolio/Navigation';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gireesh Pandya | Aspiring Quant & Data Analyst',
  description: 'Aspiring Quant & Data Analyst specializing in machine learning, quantitative analysis, algorithmic trading, and financial data science.',
  keywords: 'data analyst, quant, machine learning, Python, SQL, statistics, finance, algorithmic trading, data science',
  authors: [{ name: 'Gireesh Pandya' }],
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
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen bg-black">
            <Navigation />
            <main className="relative">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
