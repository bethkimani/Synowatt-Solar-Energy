'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircle2Icon, ShieldCheckIcon, SparklesIcon, ZapIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { services } from '@/data/services';
import { images } from '@/data/images';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';

type CategoryFilter = 'all' | 'power' | 'water' | 'engineering';

export function ServicesContent() {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredServices = services.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'power') {
      return [
        'solar-installation',
        'hybrid-solar-systems',
        'lithium-battery-storage',
        'commercial-industrial',
        'residential-solar',
        'off-grid-solar-systems'
      ].includes(s.slug);
    }
    if (filter === 'water') {
      return ['solar-water-pumping', 'solar-water-heating'].includes(s.slug);
    }
    if (filter === 'engineering') {
      return ['design-consultation', 'maintenance-support', 'equipment-components'].includes(s.slug);
    }
    return true;
  });

  return (
    <>
      <PageHero
        trail={[{ label: 'Services' }]}
        title="Comprehensive Solar Energy Services in Kenya"
        subtitle="Turn-key solar engineering solutions for homes, businesses, and institutions — from hybrid inverters and lithium storage to agricultural water pumping and commercial solar plants."
        image={images.commercialRoof}
        imageAlt="Commercial rooftop covered with rows of solar panels in Kenya"
      >
        <Link href="/contact#quote" className={buttonClasses('primary', 'lg')}>
          Request a Free Solar Quote
        </Link>
        <Link href="/solutions" className={buttonClasses('light', 'lg')}>
          Explore Solar Packages
        </Link>
      </PageHero>

      {/* Trust & Engineering Highlights */}
      <section className="border-b border-ink/10 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-5 text-sm font-medium text-ink/80 lg:px-8">
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="h-5 w-5 text-brand" />
            <span>EPRA-Compliant Solar Contractor</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ZapIcon className="h-5 w-5 text-brand" />
            <span>Tier-1 Monocrystalline Hardware</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2Icon className="h-5 w-5 text-brand" />
            <span>Nationwide Installation & O&M</span>
          </div>
          <div className="flex items-center gap-2.5">
            <SparklesIcon className="h-5 w-5 text-brand" />
            <span>10 to 25-Year Performance Warranties</span>
          </div>
        </div>
      </section>

      <section id="services-grid" aria-labelledby="overview-title" className="bg-brand-tint/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="overview-title"
              title="Our Solar Engineering Services"
              description={`11 dedicated services engineered for Kenyan homes, commercial premises, and agriculture.`}
            />

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === 'all'
                    ? 'bg-brand-dark text-white'
                    : 'bg-white text-ink/70 hover:bg-white/80 hover:text-ink border border-ink/10'
                }`}
              >
                All Services ({services.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('power')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === 'power'
                    ? 'bg-brand-dark text-white'
                    : 'bg-white text-ink/70 hover:bg-white/80 hover:text-ink border border-ink/10'
                }`}
              >
                Power & Storage
              </button>
              <button
                type="button"
                onClick={() => setFilter('water')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === 'water'
                    ? 'bg-brand-dark text-white'
                    : 'bg-white text-ink/70 hover:bg-white/80 hover:text-ink border border-ink/10'
                }`}
              >
                Water Solutions
              </button>
              <button
                type="button"
                onClick={() => setFilter('engineering')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === 'engineering'
                    ? 'bg-brand-dark text-white'
                    : 'bg-white text-ink/70 hover:bg-white/80 hover:text-ink border border-ink/10'
                }`}
              >
                Engineering & Care
              </button>
            </div>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.04 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.08] bg-white transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_20px_45px_rgba(0,120,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                      />
                      <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-dark shadow-md transition-[background-color,color,transform] duration-200 group-hover:-rotate-6 group-hover:bg-brand-dark group-hover:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-bold leading-snug text-ink group-hover:text-brand-dark transition-colors">
                        {s.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/70">{s.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-dark">
                        Learn more & specs
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Quick-Jump Internal Linking Footer */}
          <div className="mt-14 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-ink/[0.07]">
            <h3 className="font-display font-bold text-lg text-ink">
              Looking for a Complete System Package or Sizing Advice?
            </h3>
            <p className="mt-2 text-ink/70 text-sm max-w-3xl leading-relaxed">
              In addition to our dedicated services, we offer turnkey hybrid solar kits with transparent pricing. Learn how our engineers calculate battery runtime and panel capacity on our website.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/solutions" className="text-brand-dark underline hover:text-brand-deep">
                Browse Pre-Configured Solar Packages →
              </Link>
              <Link href="/solutions#sizing" className="text-brand-dark underline hover:text-brand-deep">
                Solar System Sizing Guide →
              </Link>
              <Link href="/why-synowatt" className="text-brand-dark underline hover:text-brand-deep">
                Why Choose Synowatt (Engineering & Standards) →
              </Link>
              <Link href="/projects" className="text-brand-dark underline hover:text-brand-deep">
                View Our Installations Across Kenya →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need Guidance on the Best Solar Solution?"
        description="Every property has unique daytime loads and nighttime requirements. Talk to our engineers for an accurate assessment and transparent quotation."
        primaryLabel="Request a Free Solar Quote"
        primaryTo="/contact#quote"
        secondaryLabel="View Solar Packages"
        secondaryTo="/solutions"
      />
    </>
  );
}
