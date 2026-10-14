import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { ProjectsContent } from './ProjectsContent';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { projects } from '@/data/projects';
import { projectsPageJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Completed Solar Energy Projects in Kenya | Installations Portfolio | Synowatt',
  description:
    'Browse verified residential, commercial, and institutional solar panel and hybrid inverter installations completed by Synowatt Power & Solar Ltd across Nairobi, Karen, Runda, Thika Road, Kiambu, and Nakuru.',
  keywords: [
    'solar projects Kenya',
    'solar installations Nairobi',
    'residential solar installations Kenya',
    'commercial rooftop solar Kenya',
    'solar installer Karen Nairobi',
    'solar power installation Thika Road',
    'solar borehole pumping projects Kenya',
    'hybrid solar system projects',
    'EPRA solar contractor projects',
    'Synowatt solar projects'
  ],
  alternates: {
    canonical: `https://${company.website}/projects`,
  },
  openGraph: {
    title: 'Completed Solar Energy Projects in Kenya | Synowatt Power & Solar Ltd',
    description:
      'Explore verified solar panel, hybrid inverter, and lithium battery storage projects completed by Synowatt across Nairobi and nationwide.',
    url: `https://${company.website}/projects`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: images.commercialRoof,
        width: 1200,
        height: 630,
        alt: 'Commercial rooftop solar installation completed by Synowatt in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Completed Solar Projects in Kenya | Synowatt',
    description:
      'Verified residential, commercial, and institutional solar installations across Kenya.',
    images: [images.commercialRoof],
  },
};

export default function ProjectsPage() {
  const schema = projectsPageJsonLd(projects);

  return (
    <>
      {/* Schema.org Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <ProjectsContent />
    </>
  );
}