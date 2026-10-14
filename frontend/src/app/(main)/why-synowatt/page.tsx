import type { Metadata } from 'next';
import React from 'react';
import { WhyContent } from './WhyContent';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { whySynowattJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Why Choose Synowatt | EPRA Standards, Tier-1 Solar Hardware & Warranties Kenya',
  description:
    'Learn why homeowners, commercial businesses, and institutions choose Synowatt Power & Solar Ltd. EPRA-certified solar technicians, Tier-1 bifacial panels, 6000+ cycle LiFePO4 batteries, and nationwide support across Kenya.',
  keywords: [
    'why choose synowatt',
    'epra certified solar contractor kenya',
    'licensed solar installer nairobi',
    'tier 1 solar panels kenya',
    'best solar company in kenya',
    'synowatt solar warranties',
    'solar energy contractor kenya',
    'professional solar installation nairobi',
    'commercial solar contractor kenya'
  ],
  alternates: {
    canonical: `https://${company.website}/why-synowatt`,
  },
  openGraph: {
    title: 'Why Choose Synowatt | EPRA Standards, Tier-1 Solar Hardware & Warranties Kenya',
    description:
      'Turnkey solar energy engineering with EPRA-certified installation, Tier-1 hardware warranties, and nationwide operations across Kenya.',
    url: `https://${company.website}/why-synowatt`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: images.groundMount,
        width: 1200,
        height: 630,
        alt: 'Technician inspecting a ground-mounted solar array in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Synowatt | Solar Energy Contractor Kenya',
    description:
      'EPRA-certified solar installation, Tier-1 hardware, and lifetime maintenance support across Kenya.',
    images: [images.groundMount],
  },
};

export default function WhySynowattPage() {
  const schema = whySynowattJsonLd();

  return (
    <>
      {/* Schema.org Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <WhyContent />
    </>
  );
}