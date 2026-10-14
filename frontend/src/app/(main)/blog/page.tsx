import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { BlogContent } from './BlogContent';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { blogIndexJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Solar Energy Blog Kenya | Installation Guides, Tips & News | Synowatt',
  description:
    'Practical solar energy tips, hybrid inverter sizing guides, lithium battery maintenance advice, and clean energy news for Kenyan homes and businesses from Synowatt Power & Solar Ltd.',
  keywords: [
    'solar blog kenya',
    'solar energy tips kenya',
    'solar panel guide nairobi',
    'solar battery maintenance kenya',
    'synowatt solar articles',
    'solar power news kenya',
    'how solar works kenya',
    'solar sizing guide kenya'
  ],
  alternates: {
    canonical: `https://${company.website}/blog`,
  },
  openGraph: {
    title: 'Solar Energy Blog Kenya | Synowatt Power & Solar Ltd',
    description:
      'Practical guides, technology updates, and sizing advice for solar power in Kenya.',
    url: `https://${company.website}/blog`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: images.panelTypes,
        width: 1200,
        height: 630,
        alt: 'Solar energy insights and educational guides in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Energy Blog Kenya | Synowatt',
    description:
      'Expert advice on solar installation, lithium battery storage, and energy savings in Kenya.',
    images: [images.panelTypes],
  },
};

export default function BlogPage() {
  const schema = blogIndexJsonLd();

  return (
    <>
      {/* Schema.org Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <Suspense fallback={null}>
        <BlogContent />
      </Suspense>
    </>
  );
}