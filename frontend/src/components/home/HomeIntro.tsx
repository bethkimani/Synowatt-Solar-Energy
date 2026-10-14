'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { ParallaxImage } from '../ParallaxImage';
import { Reveal } from '../Reveal';
import { company } from '../../data/company';
import { images } from '../../data/images';
import { whoWeAre } from '../../data/about';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

export function HomeIntro() {
  return (
    <section aria-labelledby="intro-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <ParallaxImage
            src={images.installing}
            alt="Synowatt certified technicians installing rooftop solar panels in Kenya"
            className="aspect-[4/5] rounded-3xl sm:aspect-square lg:aspect-[4/5]"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 }}
            className="absolute -bottom-6 right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-right-8"
          >
            <Image
              src={images.panelCleaning}
              alt="Technician inspecting and cleaning commercial solar panels in Nairobi"
              width={224}
              height={168}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
          <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-deep shadow-md">
            {company.tagline}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-dark">
              Kenya’s Trusted Solar Energy Partner
            </span>
            <h2
              id="intro-title"
              className="mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]"
            >
              Reliable Solar Systems Engineered for Kenyan Homes & Businesses
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              {whoWeAre[0]} We specialize in turnkey{' '}
              <Link href="/services/hybrid-solar-systems" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                hybrid solar systems
              </Link>
              , precision{' '}
              <Link href="/services/solar-installation" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                solar panel installation
              </Link>
              , and long-life{' '}
              <Link href="/services/lithium-battery-storage" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                lithium battery storage
              </Link>
              .
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              From our headquarters at Mountain Mall, Thika Road in Nairobi, our team serves clients nationwide. Every system is built to strict{' '}
              <Link href="/why-synowatt" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                EPRA compliance and engineering standards
              </Link>
              , giving you uninterrupted power during grid blackouts and drastically reducing monthly electricity expenses.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row" delay={0.1}>
            <Link href="/about" className={`${buttonClasses('green', 'lg')} group`}>
              More About Synowatt
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/solutions" className={buttonClasses('outline', 'lg')}>
              View Solar Packages
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}