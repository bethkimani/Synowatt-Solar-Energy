'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import {
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { CtaBanner } from '@/components/CtaBanner';
import { images } from '@/data/images';
import { projects } from '@/data/projects';
import type { ProjectCategory } from '@/types';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';

type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'Residential', 'Commercial', 'Institutional'];

export function ProjectsContent() {
  const [active, setActive] = useState<Filter>('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        trail={[{ label: 'Projects' }]}
        title="Completed Solar Installations Across Kenya"
        subtitle="Explore verified residential, commercial, and institutional solar panel and hybrid inverter projects completed by Synowatt Power & Solar Ltd across Nairobi, Kiambu, Nakuru, Machakos, and nationwide."
        image={images.commercialRoof}
        imageAlt="Commercial rooftop solar installation completed by Synowatt in Kenya"
      >
        <Link href="/contact#quote" className={buttonClasses('primary', 'lg')}>
          Request a Free Solar Quote
        </Link>
        <Link href="/solutions" className={buttonClasses('light', 'lg')}>
          Explore Sized Solar Packages
        </Link>
      </PageHero>

      {/* Trust & Engineering Highlights */}
      <section className="border-b border-ink/10 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-5 text-sm font-medium text-ink/80 lg:px-8">
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="h-5 w-5 text-brand" />
            <span>EPRA-Compliant Installations</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPinIcon className="h-5 w-5 text-brand" />
            <span>Serving All 47 Counties in Kenya</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ZapIcon className="h-5 w-5 text-brand" />
            <span>Tier-1 Monocrystalline Hardware</span>
          </div>
          <div className="flex items-center gap-2.5">
            <SparklesIcon className="h-5 w-5 text-brand" />
            <span>10 to 25-Year Warranties</span>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section aria-labelledby="portfolio-title" className="bg-brand-tint/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              id="portfolio-title"
              title="Verified Solar Project Portfolio"
              description="Browse completed installations by property category. Click any project to inspect full hardware specifications, system capacity, and operational results."
            />

            <Reveal delay={0.1}>
              <div
                role="group"
                aria-label="Filter projects by category"
                className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:inline-flex sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-sm sm:border sm:border-ink/[0.08]"
              >
                {filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActive(f)}
                    aria-pressed={active === f}
                    className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      active === f ? 'text-white' : 'bg-white text-ink/70 hover:text-brand-dark sm:bg-transparent'
                    }`}
                  >
                    {active === f && (
                      <motion.span
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-full bg-brand-dark"
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                      />
                    )}
                    <span className="relative">
                      {f} {f === 'All' ? `(${projects.length})` : `(${projects.filter((p) => p.category === f).length})`}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.ul layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p, i) => (
                <motion.li
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.04 }}
                >
                  <ProjectCard project={p} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          {/* Internal Linking Cross-Navigation Hub */}
          <div className="mt-16 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-ink/[0.08]">
            <h3 className="font-display font-bold text-lg text-ink">
              Ready to Power Your Home or Facility with Solar?
            </h3>
            <p className="mt-2 text-ink/70 text-sm max-w-3xl leading-relaxed">
              Every installation pictured above started with an on-site energy audit. Discover how our EPRA-certified engineers can customize an optimal hybrid solar kit or commercial array for your exact daily kilowatt-hour demand.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm font-semibold">
              <Link href="/solutions" className="text-brand-dark underline hover:text-brand-deep">
                Pre-Configured Solar Packages →
              </Link>
              <Link href="/solutions#sizing" className="text-brand-dark underline hover:text-brand-deep">
                Solar System Sizing Guide →
              </Link>
              <Link href="/services/hybrid-solar-systems" className="text-brand-dark underline hover:text-brand-deep">
                Hybrid Solar Inverter Systems →
              </Link>
              <Link href="/services/commercial-industrial" className="text-brand-dark underline hover:text-brand-deep">
                Commercial Solar Power Plants →
              </Link>
              <Link href="/services/solar-water-pumping" className="text-brand-dark underline hover:text-brand-deep">
                Solar Borehole Pumping Solutions →
              </Link>
              <Link href="/why-synowatt" className="text-brand-dark underline hover:text-brand-deep">
                Why Synowatt: Standards & Warranties →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Planning a Solar Installation in Kenya?"
        description="Whether it’s a residential home in Nairobi, a flower farm in Naivasha, or a commercial plant along Thika Road, we’ll engineer a system sized around your energy needs."
        primaryLabel="Request a Free Solar Quote"
        primaryTo="/contact#quote"
        secondaryLabel="View Sized Solar Packages"
        secondaryTo="/solutions"
      />
    </>
  );
}
