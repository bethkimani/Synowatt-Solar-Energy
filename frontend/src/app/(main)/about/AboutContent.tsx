'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckIcon, EyeIcon, MessageCircleIcon, TargetIcon, ArrowRightIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ParallaxImage } from '@/components/ParallaxImage';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Process } from '@/components/Process';
import { CtaBanner } from '@/components/CtaBanner';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { commitments, mission, values, vision } from '@/data/about';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';

const expertiseWithLinks = [
  { label: 'Turn-key Solar System Design', href: '/services/solar-installation' },
  { label: 'Certified Solar Panel Installation', href: '/services/solar-installation' },
  { label: 'Hybrid Solar & Grid-Tie Systems', href: '/services/hybrid-solar-systems' },
  { label: 'Lithium LiFePO4 Battery Storage', href: '/services/lithium-battery-storage' },
  { label: 'Commercial & Industrial Solar Plants', href: '/services/commercial-solar' },
  { label: 'Solar Water Pumping for Agriculture', href: '/services/solar-water-pumping' },
  { label: 'Comprehensive System Sizing', href: '/solutions#sizing' },
  { label: 'Preventative Solar Maintenance & Audits', href: '/services/solar-maintenance' },
];

export function AboutContent() {
  return (
    <>
      <PageHero
        trail={[{ label: 'About' }]}
        title="Engineering Clean, Reliable Solar Energy for Kenya"
        subtitle="Synowatt Power & Solar Ltd is an EPRA-compliant solar contractor headquartered in Nairobi. We engineer, install, and support high-performance hybrid solar systems and lithium battery storage nationwide."
        image={images.team}
        imageAlt="Synowatt certified technicians installing rooftop solar panels in Kenya"
      >
        <Link href="/contact#quote" className={buttonClasses('primary', 'lg')}>
          Talk to a Solar Specialist
        </Link>
        <Link href="/services" className={buttonClasses('light', 'lg')}>
          Our Solar Services
        </Link>
      </PageHero>

      {/* Who we are */}
      <section aria-labelledby="who-title" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-dark">
                About Synowatt Power & Solar Ltd
              </span>
              <h2
                id="who-title"
                className="mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]"
              >
                Kenya’s Trusted Solar Energy & Storage Specialists
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Headquartered at Mountain Mall along Thika Road in Nairobi, Synowatt Power & Solar Ltd delivers robust, high-efficiency renewable energy infrastructure for homes, commercial enterprises, and institutions across Kenya.
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                We design, supply, install, and maintain turn-key{' '}
                <Link href="/services/hybrid-solar-systems" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                  hybrid solar systems
                </Link>
                , precision{' '}
                <Link href="/services/solar-installation" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                  rooftop solar panels
                </Link>
                , and long-life{' '}
                <Link href="/services/lithium-battery-storage" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                  lithium LiFePO4 battery storage
                </Link>
                . Every system is planned around real energy usage to deliver zero-outage reliability during KPLC blackouts and maximize return on investment.
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                Operating strictly in accordance with{' '}
                <Link href="/why-synowatt" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                  EPRA (Energy and Petroleum Regulatory Authority) standards
                </Link>
                , our certified electrical and solar technicians ensure optimal installation safety, Tier-1 hardware warranties, and proactive post-commissioning support. Check out our{' '}
                <Link href="/projects" className="font-semibold text-brand-dark underline hover:text-brand-deep">
                  featured solar installations across Kenya
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex flex-col gap-4 rounded-2xl bg-brand-tint p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg font-bold text-brand-deep">{company.tagline}</p>
                <p className="mt-1 text-sm text-ink/65">{company.location}</p>
              </div>
              <Link href="/solutions" className={`${buttonClasses('outline', 'md')} self-start sm:self-auto`}>
                Browse Solar Packages
              </Link>
            </Reveal>
          </div>

          <Reveal className="relative" delay={0.05}>
            <ParallaxImage
              src={images.installing}
              alt="Synowatt solar engineering team installing solar panels on a residential roof in Kenya"
              className="aspect-[4/5] rounded-3xl sm:aspect-square lg:aspect-[4/5]"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 }}
              className="absolute -bottom-6 left-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-left-8"
            >
              <img
                src={images.inverterBattery}
                alt="Hybrid inverter and lithium battery storage installation"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section aria-label="Mission and vision" className="bg-brand-tint py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="h-full">
            <div className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-brand-dark p-8 text-white sm:p-12">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-gold">
                <TargetIcon className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mt-8 font-display text-3xl font-extrabold">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">{mission}</p>
            </div>
          </Reveal>
          <Reveal className="h-full" delay={0.08}>
            <div className="flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-ink/[0.07] sm:p-12">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-tint text-brand-dark">
                <EyeIcon className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mt-8 font-display text-3xl font-extrabold text-ink">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">{vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            id="values-title"
            title="Our Core Engineering Values"
            description="The engineering principles behind every consultation, system installation, and ongoing technical support call."
          />

          <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <motion.li
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.06 }}
                className="border-t border-ink/10 pt-6"
              >
                <v.icon className="h-7 w-7 text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{v.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <Process
        title="Our Rigorous Solar Installation Approach"
        description="Every project follows the same transparent path — from initial energy audit to professional commissioning and handover."
      />

      {/* Commitment */}
      <section aria-labelledby="commitment-title" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="commitment-title"
              title="Our Commitment to Solar Customers in Kenya"
              description="What you can expect from Synowatt — transparent sizing, certified hardware, and reliable support long after handover."
            />

            <Reveal delay={0.1}>
              <ParallaxImage
                src={images.aerial}
                alt="Aerial view of Nairobi homes equipped with rooftop solar installations"
                className="mt-8 aspect-[16/10] rounded-3xl"
              />
            </Reveal>
          </div>
          <ul className="grid content-start gap-x-10 sm:grid-cols-2">
            {commitments.map((c, i) => (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: (i % 2) * 0.06 }}
                className="border-t border-ink/10 py-8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand-dark">
                  <c.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{c.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="expertise-title" className="bg-ink py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <ParallaxImage
              src={images.consultation}
              alt="Synowatt solar engineer reviewing a custom system blueprint with a client"
              className="aspect-[4/3] rounded-3xl"
            />
          </Reveal>
          <div>
            <SectionHeading
              id="expertise-title"
              tone="light"
              title="Professional Solar Engineering Capabilities"
              description="From residential backup to commercial megawatts, our licensed engineering team covers every phase of your clean energy transition."
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {expertiseWithLinks.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl bg-white/5 p-3 text-[15px] font-medium text-white transition-all duration-150 hover:bg-white/10 hover:text-brand"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    <ArrowRightIcon className="h-4 w-4 text-white/50" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row" delay={0.1}>
              <Link href="/contact#quote" className={buttonClasses('primary', 'lg')}>
                Request Free System Assessment
              </Link>
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('light', 'lg')}>
                <MessageCircleIcon className="h-5 w-5" />
                WhatsApp Our Engineers
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Transition to Solar in Kenya?"
        description="Speak with our solar engineers about your property and energy consumption — we will deliver a tailored solution with transparent pricing."
        primaryLabel="Get a Free Solar Quote"
        primaryTo="/contact#quote"
        secondaryLabel="Explore Solar Packages"
        secondaryTo="/solutions"
      />
    </>
  );
}
