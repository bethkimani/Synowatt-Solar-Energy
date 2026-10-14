import type { Metadata } from 'next';
import React from 'react';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { solarCalculatorJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Solar Calculator Kenya | Sizing & KPLC Savings Estimator',
  description:
    'Free solar sizing and savings calculator for homes, businesses and farms in Kenya. Calculate required solar panel wattage, hybrid inverter rating, LiFePO4 battery capacity, and estimated monthly KPLC bill savings.',
  keywords: [
    'solar calculator Kenya',
    'solar system size calculator Kenya',
    'how many solar panels do I need Kenya',
    'solar battery sizing calculator',
    'solar panel cost calculator Nairobi',
    '5kva solar system Kenya sizing',
    'solar savings calculator Kenya',
    'KPLC token bill solar savings',
    'solar power calculator Kenya',
    'hybrid solar system sizing Nairobi',
    'EPRA solar sizing standards',
  ],
  alternates: {
    canonical: `https://${company.website}/solar-calculator`,
  },
  openGraph: {
    title: 'Solar Sizing & Savings Calculator Kenya | Synowatt Power & Solar Ltd',
    description:
      'Estimate your required solar array capacity, inverter rating, and lithium battery storage based on your actual monthly KPLC electricity bill or key household appliances.',
    url: `https://${company.website}/solar-calculator`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: images.installing,
        width: 1200,
        height: 630,
        alt: 'Synowatt Solar Sizing and Savings Calculator Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Sizing & Savings Calculator Kenya | Synowatt',
    description:
      'Calculate solar panels, hybrid inverters, and battery storage for your home or business in Kenya with Synowatt.',
    images: [images.installing],
  },
};

export default function SolarCalculatorPage() {
  const schema = solarCalculatorJsonLd();

  return (
    <>
      {/* Schema.org WebApplication, Breadcrumbs, and FAQPage without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <SolarCalculator />
    </>
  );
}
