import type { Metadata } from 'next';
import React from 'react';
import { SolutionsContent } from './SolutionsContent';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { solarPackages } from '@/data/solutions';
import { solutionsIndexJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Hybrid Solar System Packages Kenya | 3.2kVA, 5kVA & 10kVA Solar Kits | Synowatt',
  description:
    'Engineered hybrid solar solutions in Kenya. Turnkey 3.2kVA, 5kVA & 10kVA solar power packages with Tier-1 bifacial panels, lithium LiFePO4 batteries, and smart pure sine wave inverters with nationwide installation.',
  keywords: [
    'hybrid solar systems Kenya',
    'solar packages Kenya',
    '5kva solar system Kenya',
    '3.2kva solar system price Kenya',
    '10kva commercial solar Kenya',
    'solar inverter and battery Kenya',
    'lithium solar battery Kenya',
    'solar installation Nairobi',
    'solar system sizing Kenya',
    'Synowatt solar packages',
    'off grid solar systems Kenya'
  ],
  alternates: {
    canonical: `https://${company.website}/solutions`,
  },
  openGraph: {
    title: 'Hybrid Solar System Packages Kenya | 3.2kVA, 5kVA & 10kVA Solar Kits | Synowatt',
    description:
      'Engineered hybrid solar solutions in Kenya. Turnkey 3.2kVA, 5kVA & 10kVA solar power packages with Tier-1 bifacial panels, lithium LiFePO4 batteries, and smart pure sine wave inverters.',
    url: `https://${company.website}/solutions`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: images.inverterBattery,
        width: 1200,
        height: 630,
        alt: 'Wall-mounted hybrid inverter and lithium battery storage unit in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid Solar System Packages Kenya | Synowatt',
    description:
      'Turnkey 3.2kVA, 5kVA & 10kVA hybrid solar systems with Tier-1 panels and lithium battery storage across Kenya.',
    images: [images.inverterBattery],
  },
};

export default function SolutionsPage() {
  const schema = solutionsIndexJsonLd(solarPackages);

  return (
    <>
      {/* Schema.org Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <SolutionsContent />
    </>
  );
}