'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDownIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CtaBanner } from '@/components/CtaBanner';
import { services } from '@/data/services';
import { images } from '@/data/images';
import { useHashScroll } from '@/hooks/useHashScroll';
import { useSeo } from '@/hooks/useSeo';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';

export default function ServicesPage() {
  useSeo({
    title: 'Solar Energy Services',
    description:
    'Solar installation, hybrid systems, lithium battery storage, system design, maintenance, commercial and residential solar, and solar equipment from Synowatt Power & Solar Ltd.',
    image: images.commercialRoof
  });
  useHashScroll();

  return (
    <>
      <PageHero
        trail={[{ label: 'Services' }]}
        title="Our Solar Energy Services"
        subtitle="Everything you need to move to solar — from design and installation to batteries, equipment and long-term maintenance."
        image={images.commercialRoof}
        imageAlt="Commercial rooftop covered with rows of solar panels">
        
        <Link href="/contact#quote" className={buttonClasses('primary', 'lg')}>
          Request a Quote
        </Link>
        <Link href="/solutions" className={buttonClasses('light', 'lg')}>
          View Solar Solutions
        </Link>
      </PageHero>

      <section aria-labelledby="overview-title" className="bg-brand-tint py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            id="overview-title"
            title="What We Offer"
            description="Eight services, one team — choose a service to see what’s included." />
          
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                  transition={{ duration: 0.3, ease: EASE_OUT, delay: i % 4 * 0.06 }}>
                  
                  <Link
                    href={`/services#${s.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white p-5 transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_rgba(0,120,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-dark transition-[background-color,color,transform] duration-200 group-hover:-rotate-6 group-hover:bg-brand-dark group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="flex-1 font-display font-bold leading-snug text-ink">{s.title}</span>
                    <ArrowDownIcon
                      className="h-4 w-4 shrink-0 text-brand-dark transition-transform duration-150 group-hover:translate-y-0.5"
                      aria-hidden />
                    
                  </Link>
                </motion.li>);

            })}
          </ul>
        </div>
      </section>

      <section aria-label="Service details" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-28 px-5 lg:space-y-36 lg:px-8">
          {services.map((s, i) =>
          <ServiceDetail key={s.slug} service={s} reverse={i % 2 === 1} />
          )}
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service You Need?"
        description="Tell us about your property and power needs — we’ll point you to the right solution."
        primaryLabel="Request a Quote" />
      
    </>);

}