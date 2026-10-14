import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { Navbar } from '@/components/Navbar';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.synowatt.com'),
  title: {
    default: 'Synowatt Solar Energy | Solar Power Systems & Lithium Storage Kenya',
    template: '%s | Synowatt Solar Energy Kenya',
  },
  description:
    'EPRA-certified solar engineering contractor in Kenya. Hybrid solar systems, Tier-1 monocrystalline panels, LiFePO4 battery storage, solar water pumping, and maintenance across Nairobi and nationwide.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}