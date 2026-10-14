import type { Metadata } from 'next';
import React from 'react';
import { ContactContent } from './ContactContent';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { contactPageJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Contact Us & Request a Free Solar Quote | Synowatt Power & Solar Ltd Kenya',
  description:
    'Request a free solar energy quote and site assessment from Synowatt Power & Solar Ltd. Call or WhatsApp +254 799 188 830, email info@synowatt.com, or visit our offices at Mountain Mall, Thika Road, Nairobi.',
  keywords: [
    'contact synowatt solar',
    'solar quote kenya',
    'solar company nairobi contact',
    'free solar assessment kenya',
    'solar panels thika road',
    'mountain mall solar company',
    'solar installer phone number nairobi',
    'solar installation quote nairobi',
    'hybrid solar system price kenya'
  ],
  alternates: {
    canonical: `https://${company.website}/contact`,
  },
  openGraph: {
    title: 'Contact Synowatt Power & Solar Ltd | Free Solar Quote Kenya',
    description:
      'Get in touch with EPRA-certified solar contractors in Kenya for custom residential, commercial, or agricultural solar assessments and proposals.',
    url: `https://${company.website}/contact`,
    siteName: 'Synowatt Power & Solar Ltd',
    images: [
      {
        url: images.aerial,
        width: 1200,
        height: 630,
        alt: 'Synowatt Solar Energy Contractor headquarters in Nairobi, Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Synowatt Solar | Free Solar Quote Kenya',
    description:
      'Call +254 799 188 830 or request a customized solar quote from Synowatt Power & Solar Ltd.',
    images: [images.aerial],
  },
};

export default function ContactPage() {
  const schema = contactPageJsonLd();

  return (
    <>
      {/* Schema.org Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <ContactContent />
    </>
  );
}