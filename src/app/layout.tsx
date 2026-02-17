import { PropsWithChildren } from 'react';
import 'aos/dist/aos.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { RouteProvider } from '@/providers/router-provider';
import { Theme } from '@/providers/theme';
import '@/styles/globals.css';
import { cx } from '@/utils/cx';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Bryan Fernando — Portfolio',
  description: 'Welcome to my portfolio!',
};

export const viewport: Viewport = {
  themeColor: '#eaaa08',
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx(inter.variable, 'bg-primary antialiased')}>
        <Navbar />

        <main className="min-h-screen">
          <RouteProvider>
            <Theme>{children}</Theme>
          </RouteProvider>
        </main>

        <Footer />
      </body>
    </html>
  );
}
