import type { Metadata } from 'next';
import React from 'react';
import { ServicesContent } from './ServicesContent';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { servicesIndexJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Solar Energy Services Kenya | Installation, Hybrid Systems & Storage | Synowatt',
  description:
    'Comprehensive solar energy engineering services across Kenya by Synowatt Power & Solar Ltd. Certified solar panel installation, hybrid solar systems, lithium battery storage, solar water pumping, and commercial solar in Nairobi and nationwide.',
  keywords: [
    'solar energy services Kenya',
    'solar installation Nairobi',
    'hybrid solar systems Kenya',
    'lithium battery storage Kenya',
    'solar water pump Kenya',
    'solar water heater Kenya',
    'commercial solar Kenya',
    'residential solar systems Kenya',
    'solar maintenance Nairobi',
    'off-grid solar power Kenya',
    'EPRA certified solar contractor',
  ],
  alternates: {
    canonical: `https://${company.website}/services`,
  },
  openGraph: {
    title: 'Solar Energy Services Kenya | Synowatt Power & Solar Ltd',
    description:
      'Turn-key solar energy services for homes, businesses, and agriculture in Kenya. Hybrid systems, rooftop panels, lithium storage, and water pumping.',
    url: `https://${company.website}/services`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: images.commercialRoof,
        width: 1200,
        height: 630,
        alt: 'Commercial Solar PV Rooftop Installation in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Energy Services Kenya | Synowatt Power & Solar Ltd',
    description:
      'Comprehensive solar energy services across Kenya. Hybrid solar power, lithium battery storage, solar water pumping, and certified installation.',
    images: [images.commercialRoof],
  },
};

export default function ServicesPage() {
  const schema = servicesIndexJsonLd(services);

  return (
    <>
      {/* Search Engine Schema / Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <ServicesContent />
    </>
  );
}