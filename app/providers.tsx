'use client';

import { ThemeProvider } from 'next-themes';
import { StoreProvider } from '@/store/StoreProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <StoreProvider>
        {children}
      </StoreProvider>
    </ThemeProvider>
  );
}