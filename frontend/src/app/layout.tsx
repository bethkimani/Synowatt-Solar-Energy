import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { Navbar } from '@/components/Navbar';
import './global.css';

export const metadata: Metadata = {
  title: 'Synowatt Solar Energy',
  description: 'Reliable solar energy solutions for homes, businesses and institutions in Kenya — hybrid solar systems, lithium battery storage, professional installation and support.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}