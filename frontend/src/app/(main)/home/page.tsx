import React from 'react';
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { HomeIntro } from '../components/home/HomeIntro';
import { ServiceHighlights } from '../components/home/ServiceHighlights';
import { SolutionsPreview } from '../components/home/SolutionsPreview';
import { WhyPreview } from '../components/home/WhyPreview';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { LatestPosts } from '../components/home/LatestPosts';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { CtaBanner } from '../components/CtaBanner';
import { useSeo } from '../hooks/useSeo';
import { organizationJsonLd } from '../utils/seo';

export function Home() {
  useSeo({
    description:
    'Reliable solar energy solutions for homes, businesses and institutions in Kenya — hybrid solar systems, lithium battery storage, professional installation and support.',
    jsonLd: organizationJsonLd()
  });

  return (
    <>
      <Hero />
      <Stats />
      <HomeIntro />
      <ServiceHighlights />
      <SolutionsPreview />
      <WhyPreview />
      <Process />
      <FeaturedProjects />
      <LatestPosts />
      <Testimonials />
      <CtaBanner />
    </>);

}