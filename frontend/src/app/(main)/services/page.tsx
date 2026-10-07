'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { services } from '@/data/services';
import { images } from '@/data/images';
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
          
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.07] bg-white transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_rgba(0,120,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
                      <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-dark shadow-sm transition-[background-color,color,transform] duration-200 group-hover:-rotate-6 group-hover:bg-brand-dark group-hover:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display font-bold leading-snug text-ink">{s.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/70">{s.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-dark">
                        Learn more
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </motion.li>);

            })}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service You Need?"
        description="Tell us about your property and power needs — we’ll point you to the right solution."
        primaryLabel="Request a Quote" />
      
    </>);

}