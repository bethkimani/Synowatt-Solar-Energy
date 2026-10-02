'use client';

import React from 'react';
import Link from 'next/link';
import { PageHero } from '../components/PageHero';
import { images } from '../data/images';
import { useSeo } from '../hooks/useSeo';
import { buttonClasses } from '../utils/button';

export default function NotFoundPage() {
  useSeo({ title: 'Page not found', description: 'The page you were looking for could not be found.' });
  return (
    <PageHero
      trail={[{ label: 'Page not found' }]}
      title="We couldn’t find that page"
      subtitle="The page may have moved. Head back home or get in touch — we’re happy to help."
      image={images.aerial}
      imageAlt="Aerial view of homes with rooftop solar panels">
      
      <Link href="/" className={buttonClasses('primary', 'lg')}>
        Back to Home
      </Link>
      <Link href="/contact" className={buttonClasses('light', 'lg')}>
        Contact Us
      </Link>
    </PageHero>);

}