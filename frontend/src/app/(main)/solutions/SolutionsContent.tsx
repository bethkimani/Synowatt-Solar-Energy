'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRightIcon,
  BatteryChargingIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CpuIcon,
  HelpCircleIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SunIcon,
  ZapIcon
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Appliances } from '@/components/solutions/Appliances';
import { CtaBanner } from '@/components/CtaBanner';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { sizingFactors, solarPackages } from '@/data/solutions';
import { useHashScroll } from '@/hooks/useHashScroll';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';
import { quoteHref } from '@/utils/quote';

const assessmentHref = quoteHref({ service: 'design-consultation' });

export function SolutionsContent() {
  useHashScroll();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const solutionsFaqs = [
    {
      question: 'What is the main difference between 3.2KVA, 5KVA, and 10KVA hybrid solar systems?',
      answer:
        'A 3.2KVA system is sized for essential residential loads (fridge, lights, TV, Wi-Fi, laptops, CCTV). A 5KVA system supports heavier domestic appliances simultaneously, including washing machines, microwaves, and booster pumps. A 10KVA system is an industrial/estate grade solution engineered for luxury multi-story residences, clinics, schools, and commercial facilities running air conditioners, borehole pumps, and commercial refrigeration.'
    },
    {
      question: 'How long will the lithium battery keep our home powered during a power blackout?',
      answer:
        'A standard 5.12kWh LiFePO4 battery provides 10 to 14 hours of continuous power for an average 350W essential evening load (fridge, TVs, Wi-Fi, LED lights, and perimeter security). On a 5KVA or 10KVA system with expanded 10.24kWh to 15.36kWh storage, backup runtime can easily extend to 24+ hours.'
    },
    {
      question: 'Can I expand my solar system after installation if my energy consumption grows?',
      answer:
        'Yes. All Synowatt hybrid solutions are modular. You can add more lithium battery modules in parallel or connect additional solar PV strings to your hybrid inverter without replacing the core equipment.'
    },
    {
      question: 'Does the solar system automatically switch on when Kenya Power (KPLC) goes out?',
      answer:
        'Yes. Our smart hybrid inverters feature an uninterruptible power supply (UPS) transfer time of under 10 milliseconds. Your computers, TVs, and appliances will not shut down, flicker, or lose data when the grid fails.'
    },
    {
      question: 'How do Synowatt engineers determine the right solar package for my property?',
      answer:
        'We perform a comprehensive solar assessment: analyzing your monthly KPLC electricity bills, auditing high-wattage appliance duty cycles, measuring roof dimensions and orientation, and evaluating daytime vs nighttime consumption to guarantee accurate sizing and maximum return on investment.'
    }
  ];

  return (
    <>
      <PageHero
        trail={[{ label: 'Solutions' }]}
        title="Engineered Hybrid Solar Packages for Kenyan Homes & Businesses"
        subtitle="Turnkey 3.2kVA, 5kVA, and 10kVA solar systems combining Tier-1 bifacial panels, pure sine wave inverters, and high-cycle LiFePO4 lithium battery storage with nationwide EPRA-certified installation."
        image={images.inverterBattery}
        imageAlt="Wall-mounted hybrid inverter and lithium battery storage unit in Kenya"
      >
        <Link href={assessmentHref} className={buttonClasses('primary', 'lg')}>
          Get a Free Solar Assessment
        </Link>
        <Link href="#sizing" className={buttonClasses('light', 'lg')}>
          System Sizing Guide
        </Link>
      </PageHero>

      {/* Trust & Engineering Highlights */}
      <section className="border-b border-ink/10 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-5 text-sm font-medium text-ink/80 lg:px-8">
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="h-5 w-5 text-brand" />
            <span>EPRA-Compliant Solar Engineering</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ZapIcon className="h-5 w-5 text-brand" />
            <span>&lt;10ms Instant Blackout UPS</span>
          </div>
          <div className="flex items-center gap-2.5">
            <BatteryChargingIcon className="h-5 w-5 text-brand" />
            <span>6,000+ Cycle LiFePO4 Lithium Storage</span>
          </div>
          <div className="flex items-center gap-2.5">
            <SparklesIcon className="h-5 w-5 text-brand" />
            <span>10 to 25-Year Performance Warranties</span>
          </div>
        </div>
      </section>

      {/* Solar Packages Catalog */}
      <section id="packages" aria-labelledby="packages-title" className="bg-brand-tint/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            id="packages-title"
            title="Pre-Engineered Turnkey Solar Packages"
            description="Proven, field-tested hybrid systems designed specifically for Kenyan electrical infrastructure. Explore complete technical specifications, appliance runtimes, and components below."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {solarPackages.map((pkg, i) => (
              <motion.article
                key={pkg.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl"
              >
                {/* Visual Preview */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-dark shadow-md backdrop-blur-sm">
                    {pkg.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <header>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Turnkey Hybrid Solution
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-ink group-hover:text-brand-dark transition-colors">
                      {pkg.name}
                    </h3>
                  </header>

                  <p className="mt-3 text-sm leading-relaxed text-ink/75 line-clamp-3">
                    {pkg.description}
                  </p>

                  {/* Core Hardware Metrics */}
                  <dl className="mt-6 divide-y divide-ink/[0.08] border-y border-ink/[0.08] text-xs">
                    <div className="flex items-center justify-between py-2.5">
                      <dt className="flex items-center gap-1.5 text-ink/65 font-medium">
                        <CpuIcon className="h-4 w-4 text-brand" />
                        Inverter
                      </dt>
                      <dd className="font-semibold text-ink text-right">{pkg.inverter.split(' ')[0]} {pkg.capacity}</dd>
                    </div>
                    <div className="flex items-center justify-between py-2.5">
                      <dt className="flex items-center gap-1.5 text-ink/65 font-medium">
                        <BatteryChargingIcon className="h-4 w-4 text-brand" />
                        Lithium Storage
                      </dt>
                      <dd className="font-semibold text-ink text-right">{pkg.battery.split(' ')[0]} LiFePO4</dd>
                    </div>
                    <div className="flex items-center justify-between py-2.5">
                      <dt className="flex items-center gap-1.5 text-ink/65 font-medium">
                        <SunIcon className="h-4 w-4 text-brand" />
                        Solar Panels
                      </dt>
                      <dd className="font-semibold text-ink text-right">{pkg.panels.split('Tier-1')[0].trim() || 'Tier-1 Mono'}</dd>
                    </div>
                  </dl>

                  {/* Suitable Applications Pills */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-ink/60 mb-2">Ideal for:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.suitableFor.map((app) => (
                        <span key={app} className="rounded-full bg-brand-tint px-2.5 py-0.5 text-xs font-medium text-brand-deep">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="mt-auto pt-6 flex flex-col gap-2.5">
                    <Link
                      href={`/solutions/${pkg.slug}`}
                      className={`${buttonClasses('primary', 'md')} group w-full justify-center`}
                    >
                      Explore Full Specs & Runtimes
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href={quoteHref({ service: 'hybrid-solar-systems', solution: pkg.slug })}
                      className={`${buttonClasses('outline', 'md')} w-full justify-center text-xs`}
                    >
                      Request a Custom Quote
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Custom Capacity Card for Commercial / Agricultural Requirements */}
          <Reveal className="mt-12">
            <aside className="grid overflow-hidden rounded-3xl bg-brand-deep text-white lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-[16/9] h-full w-full lg:aspect-auto">
                <Image
                  src={images.commercialRoof}
                  alt="Large commercial rooftop solar installation in Kenya"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Commercial & Custom Capacities</span>
                <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  Need a Higher Solar Capacity or 3-Phase Setup?
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-white/85 text-sm">
                  Large estates, schools, hospitals, commercial complexes, and manufacturing facilities often need 15kVA, 20kVA, or 50kVA+ custom solar arrays. We perform detailed load profiling and deliver turnkey engineering.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={assessmentHref} className={buttonClasses('primary', 'lg')}>
                    Book Site Energy Assessment
                  </Link>
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonClasses('light', 'lg')}
                  >
                    <MessageCircleIcon className="h-5 w-5 text-[#25D366]" />
                    WhatsApp Our Engineers
                  </a>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Sizing Guide Section */}
      <section id="sizing" aria-labelledby="sizing-title" className="scroll-mt-20 bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="sizing-title"
              title="How to Choose the Right Solar System in Kenya"
              description="Solar systems must be sized around your real appliance load and runtime expectations. Here are the core factors our EPRA engineers evaluate before recommending a configuration."
            />

            <div className="mt-6 rounded-2xl bg-brand-tint/60 p-6 border border-ink/[0.08]">
              <h4 className="font-display font-bold text-sm text-ink">Interactive Solar Sizing Tool</h4>
              <p className="mt-1 text-xs text-ink/75 leading-relaxed">
                Use our instant calculator to estimate required panels, hybrid inverters, and lithium battery storage based on your monthly KPLC token bill.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col">
                <Link href="/solar-calculator" className={`${buttonClasses('primary', 'md')} inline-flex justify-center`}>
                  Open Solar Calculator &rarr;
                </Link>
                <Link href={assessmentHref} className={`${buttonClasses('outline', 'md')} inline-flex justify-center text-xs`}>
                  Request Engineer Assessment
                </Link>
              </div>
            </div>
          </div>

          <ul className="grid gap-x-10 sm:grid-cols-2">
            {sizingFactors.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: (i % 2) * 0.06 }}
                className="flex gap-4 border-t border-ink/10 py-7"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-dark shadow-sm">
                  <f.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-sm text-ink/70">{f.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Appliance Load Capacity Demonstration */}
      <Appliances />

      {/* Sizing & Solutions FAQ */}
      <section aria-labelledby="faq-title" className="bg-white py-24 lg:py-32 border-t border-ink/10">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">Solar Guidance</span>
            <h2 id="faq-title" className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Frequently Asked Questions on Solar Packages
            </h2>
            <p className="mt-3 text-ink/70">
              Clear answers to help you select, finance, and operate your solar energy setup in Kenya.
            </p>
          </div>

          <div className="mt-12 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {solutionsFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.question} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-brand-tint/30"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-ink pr-4">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-ink/50 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-ink/[0.06] p-5 pt-3 text-[15px] leading-relaxed text-ink/75 bg-brand-tint/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick-Jump Internal Linking Hub */}
          <div className="mt-16 rounded-2xl bg-brand-tint/40 p-6 sm:p-8 border border-ink/[0.08]">
            <h3 className="font-display font-bold text-lg text-ink">
              Explore Related Solar Engineering Services
            </h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">
              In addition to pre-configured hybrid packages, we design bespoke energy systems for residential, agricultural, and commercial clients throughout Kenya:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm font-semibold">
              <Link href="/services/hybrid-solar-systems" className="text-brand-dark underline hover:text-brand-deep">
                Hybrid Solar Inverter Installation →
              </Link>
              <Link href="/services/lithium-battery-storage" className="text-brand-dark underline hover:text-brand-deep">
                Lithium LiFePO4 Battery Storage Systems →
              </Link>
              <Link href="/services/solar-water-pumping" className="text-brand-dark underline hover:text-brand-deep">
                Agricultural & Borehole Solar Pumping →
              </Link>
              <Link href="/services/commercial-industrial" className="text-brand-dark underline hover:text-brand-deep">
                Commercial & Industrial Solar Power Plants →
              </Link>
              <Link href="/why-synowatt" className="text-brand-dark underline hover:text-brand-deep">
                Why Synowatt: EPRA Standards & Warranties →
              </Link>
              <Link href="/projects" className="text-brand-dark underline hover:text-brand-deep">
                View Completed Installations Across Kenya →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Get a Free Solar Assessment & Customized Quote"
        description="We’ll review your appliances, usage patterns, and rooftop orientation to recommend a system sized perfectly to your needs."
        primaryLabel="Get a Free Solar Assessment"
        primaryTo={assessmentHref}
        secondaryLabel="View Completed Projects"
        secondaryTo="/projects"
      />
    </>
  );
}
