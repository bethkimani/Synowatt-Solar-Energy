'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircleIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { PackageCard } from '@/components/solutions/PackageCard';
import { Appliances } from '@/components/solutions/Appliances';
import { CtaBanner } from '@/components/CtaBanner';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { sizingFactors, solarPackages } from '@/data/solutions';
import { useHashScroll } from '@/hooks/useHashScroll';
import { useSeo } from '@/hooks/useSeo';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';
import { quoteHref } from '@/utils/quote';

const assessmentHref = quoteHref({ service: 'design-consultation' });

export default function SolutionsPage() {
  useSeo({
    title: 'Hybrid Solar Solutions',
    description:
    '3.2KVA and 5KVA hybrid solar solutions with 5.12kWh lithium batteries for homes, offices and small businesses. Pricing on request after a free energy assessment.',
    image: images.inverterBattery
  });
  useHashScroll();

  return (
    <>
      <PageHero
        trail={[{ label: 'Solutions' }]}
        title="Solar Solutions Designed Around Your Energy Needs"
        subtitle="Example hybrid systems to help you get started. Every installation is confirmed after an energy assessment of your property."
        image={images.inverterBattery}
        imageAlt="Wall-mounted hybrid inverter and lithium battery storage unit">
        
        <Link href={assessmentHref} className={buttonClasses('primary', 'lg')}>
          Get a Free Solar Assessment
        </Link>
      </PageHero>

      <section aria-labelledby="packages-title" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            id="packages-title"
            title="Hybrid Solar Solutions"
            description="Two proven starting points for homes, offices and small businesses. These are service packages — we confirm the final design after assessing your site." />
          

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {solarPackages.map((pkg, i) =>
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.08 }}>
              
                <PackageCard pkg={pkg} />
              </motion.div>
            )}
          </div>

          <Reveal className="mt-8">
            <aside className="grid overflow-hidden rounded-3xl bg-brand-deep text-white lg:grid-cols-[0.9fr_1.1fr]">
              <img
                src={images.commercialRoof}
                alt="Large commercial rooftop solar installation"
                loading="lazy"
                className="aspect-[16/9] h-full w-full object-cover lg:aspect-auto" />
              
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">Need a different size?</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-white/85">
                  Larger homes, offices, schools and businesses often need custom capacity. We’ll assess your load and
                  design a system that fits — including expandable battery storage.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={assessmentHref} className={buttonClasses('primary', 'lg')}>
                    Get a Custom Quote
                  </Link>
                  <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('light', 'lg')}>
                    <MessageCircleIcon className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="sizing" aria-labelledby="sizing-title" className="scroll-mt-20 bg-brand-tint py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="sizing-title"
              title="Which Solar Solution Is Right For You?"
              description="There’s no one-size-fits-all system. The right solution depends on how your property uses energy — which is why we always start with an assessment." />
            
            <Reveal delay={0.1} className="mt-8">
              <Link href={assessmentHref} className={buttonClasses('green', 'lg')}>
                Get a Free Solar Assessment
              </Link>
            </Reveal>
          </div>

          <ul className="grid gap-x-10 sm:grid-cols-2">
            {sizingFactors.map((f, i) =>
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: i % 2 * 0.06 }}
              className="flex gap-4 border-t border-ink/10 py-7">
              
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-brand-dark shadow-sm">
                  <f.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink/70">{f.description}</p>
                </div>
              </motion.li>
            )}
          </ul>
        </div>
      </section>

      <Appliances />

      <CtaBanner
        title="Get a Free Solar Assessment"
        description="We’ll review your appliances, usage and property, then recommend a system sized to your needs."
        primaryLabel="Get a Free Solar Assessment"
        primaryTo={assessmentHref} />
      
    </>);

}