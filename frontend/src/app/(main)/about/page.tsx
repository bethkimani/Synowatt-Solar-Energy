import type { Metadata } from 'next';
import React from 'react';
import { AboutContent } from './AboutContent';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { aboutPageJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'About Synowatt Power & Solar Ltd | Solar Energy Contractor Kenya',
  description:
    'Synowatt Power & Solar Ltd is an EPRA-compliant solar energy contractor based at Mountain Mall, Nairobi. Specializing in hybrid solar systems, rooftop solar installation, and lithium battery storage across Kenya.',
  keywords: [
    'about Synowatt',
    'solar energy contractor Kenya',
    'solar companies in Nairobi',
    'solar installers Kenya',
    'EPRA licensed solar Kenya',
    'Synowatt Power and Solar',
    'solar engineering company Nairobi',
    'commercial solar contractor Kenya',
    'lithium battery solar company Kenya',
  ],
  alternates: {
    canonical: `https://${company.website}/about`,
  },
  openGraph: {
    title: 'About Synowatt Power & Solar Ltd | Solar Energy Contractor Kenya',
    description:
      'Learn about Synowatt Power & Solar Ltd — engineering reliable hybrid solar systems and lithium battery storage for homes, businesses, and institutions across Kenya.',
    url: `https://${company.website}/about`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: images.team,
        width: 1200,
        height: 630,
        alt: 'Synowatt Solar Technicians Installing Rooftop Solar in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Synowatt Power & Solar Ltd | Solar Energy Contractor Kenya',
    description:
      'Learn about Synowatt Power & Solar Ltd — engineering reliable hybrid solar systems and lithium battery storage for homes, businesses, and institutions across Kenya.',
    images: [images.team],
  },
};

export default function AboutPage() {
  const schema = aboutPageJsonLd();

  return (
    <>
      {/* Search Engine Schema / Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <AboutContent />
    </>
  );
}