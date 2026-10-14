import type { Metadata } from 'next';
import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { HomeIntro } from '@/components/home/HomeIntro';
import { ServiceHighlights } from '@/components/home/ServiceHighlights';
import { WhyPreview } from '@/components/home/WhyPreview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { LatestPosts } from '@/components/home/LatestPosts';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { HomeFaq } from '@/components/home/HomeFaq';
import { CtaBanner } from '@/components/CtaBanner';
import { company } from '@/data/company';
import { homePageJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Synowatt Power & Solar Ltd | Solar Installation & Hybrid Solar Systems Kenya',
  description:
    'Leading EPRA-compliant solar energy contractor in Kenya. We engineer and install hybrid solar systems, commercial rooftop solar, and high-cycle lithium battery storage for homes, businesses, and institutions across Nairobi and nationwide.',
  keywords: [
    'solar installation Kenya',
    'hybrid solar systems Kenya',
    'solar panels Nairobi',
    'lithium battery solar storage Kenya',
    'commercial solar Kenya',
    'residential solar systems Kenya',
    'solar power systems Kenya',
    'solar water pump Kenya',
    'EPRA solar contractor Kenya',
    'Synowatt solar',
    'solar companies in Nairobi',
    'solar inverter battery Kenya',
    'off-grid solar systems Kenya'
  ],
  alternates: {
    canonical: `https://${company.website}`,
  },
  openGraph: {
    title: 'Synowatt Power & Solar Ltd | Solar Installation & Hybrid Solar Systems Kenya',
    description:
      'Turn-key solar energy solutions across Kenya — hybrid solar systems, rooftop installations, lithium battery storage, and 24/7 blackout protection.',
    url: `https://${company.website}`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: `https://${company.website}${company.logo}`,
        width: 800,
        height: 600,
        alt: 'Synowatt Power & Solar Ltd Logo',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synowatt Power & Solar Ltd | Solar Energy Systems Kenya',
    description:
      'Reliable solar energy solutions for Kenyan homes and businesses. Hybrid solar power, battery storage, and professional installations.',
    images: [`https://${company.website}${company.logo}`],
  },
};

export default function HomePage() {
  const schema = homePageJsonLd();

  return (
    <>
      {/* Search Engine Schema / Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <Hero />
      <Stats />
      <HomeIntro />
      <ServiceHighlights />
      <WhyPreview />
      <Process />
      <FeaturedProjects />
      <LatestPosts />
      <HomeFaq />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
