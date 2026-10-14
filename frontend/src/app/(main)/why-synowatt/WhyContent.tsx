'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchIcon,
  ZapIcon
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ParallaxImage } from '@/components/ParallaxImage';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { images } from '@/data/images';
import { assessmentFlow, whyPillars } from '@/data/trust';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';
import { quoteHref } from '@/utils/quote';

const assessmentHref = quoteHref({ service: 'design-consultation' });

export function WhyContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trustFaqs = [
    {
      question: 'Are Synowatt solar technicians and installations licensed by EPRA?',
      answer:
        'Yes. Synowatt Power & Solar Ltd is fully registered and licensed by the Energy and Petroleum Regulatory Authority (EPRA) in Kenya. All our photovoltaic designs, mounting structures, and electrical terminations adhere strictly to the EPRA Solar PV Regulations and Kenyan national electrical standards.'
    },
    {
      question: 'What warranties does Synowatt provide on solar panels, batteries, and inverters?',
      answer:
        'We provide up to a 25-year performance warranty on Tier-1 monocrystalline solar panels, a 5 to 10-year warranty on LiFePO4 lithium batteries, and a 5-year warranty on smart hybrid inverters, backed by local technical support and replacement parts in Nairobi.'
    },
    {
      question: 'How does Synowatt prevent system failures and battery damage during power surges?',
      answer:
        'We install medical-grade Class I and Class II surge protection devices (SPDs), dedicated DC circuit breakers, double-insulated UV-resistant solar cables, and deep copper earthing grids to protect your electronics from lightning strikes and KPLC voltage fluctuations.'
    },
    {
      question: 'Does Synowatt offer after-sales maintenance and remote monitoring?',
      answer:
        'Yes. All our hybrid inverters come with Wi-Fi/cloud monitoring enabling you and our engineering team to monitor solar production, battery state-of-charge, and grid usage in real time. We also provide preventative maintenance and panel cleaning services.'
    }
  ];

  return (
    <>
      <PageHero
        trail={[{ label: 'Why Synowatt' }]}
        title="Why Kenya Trusts Synowatt Power & Solar Ltd"
        subtitle="EPRA-licensed engineering, Tier-1 hardware, transparent sizing, and dedicated local support across all 47 counties. We design solar energy systems built to outlast grid instability."
        image={images.groundMount}
        imageAlt="Technician inspecting a ground-mounted solar array in Kenya"
      >
        <Link href={assessmentHref} className={buttonClasses('primary', 'lg')}>
          Get a Free Energy Assessment
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
            <span>EPRA-Compliant Solar Engineering</span>
          </div>
          <div className="flex items-center gap-2.5">
            <SparklesIcon className="h-5 w-5 text-brand" />
            <span>10 to 25-Year Hardware Warranties</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ZapIcon className="h-5 w-5 text-brand" />
            <span>&lt;10ms Instant Outage Transfer</span>
          </div>
          <div className="flex items-center gap-2.5">
            <WrenchIcon className="h-5 w-5 text-brand" />
            <span>Nationwide Installation & O&M</span>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section aria-label="What sets Synowatt apart" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-24 px-5 lg:space-y-32 lg:px-8">
          {whyPillars.map((pillar, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={pillar.theme} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal className={reverse ? 'lg:order-2' : ''}>
                  <ParallaxImage src={pillar.image} alt={pillar.imageAlt} className="aspect-[5/4] rounded-3xl" />
                </Reveal>
                <div>
                  <Reveal>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Pillar 0{i + 1}
                    </span>
                    <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
                      {pillar.theme}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink/70">{pillar.summary}</p>
                  </Reveal>

                  <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                    {pillar.reasons.map((r, j) => (
                      <motion.li
                        key={r.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                        transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.05 + j * 0.08 }}
                        className="flex gap-5 py-6"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-dark">
                          <r.icon className="h-6 w-6" aria-hidden />
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-bold text-ink">{r.title}</h3>
                          <p className="mt-1.5 leading-relaxed text-ink/70 text-sm sm:text-base">{r.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Contextual Internal Link per Pillar */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-dark">
                    {i === 0 && (
                      <Link href="/services/hybrid-solar-systems" className="underline hover:text-brand-deep">
                        Explore our EPRA-compliant Hybrid Solar Systems →
                      </Link>
                    )}
                    {i === 1 && (
                      <Link href="/solutions" className="underline hover:text-brand-deep">
                        View our pre-configured 3.2kVA, 5kVA, and 10kVA packages →
                      </Link>
                    )}
                    {i === 2 && (
                      <Link href="/services/maintenance-support" className="underline hover:text-brand-deep">
                        Learn about our Maintenance & Monitoring Services →
                      </Link>
                    )}
                    {i === 3 && (
                      <Link href="/projects" className="underline hover:text-brand-deep">
                        View completed projects across Nairobi, Kiambu, and Nakuru →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Assessment Flow Section */}
      <section aria-labelledby="flow-title" className="bg-brand-tint/60 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            id="flow-title"
            align="center"
            title="From Your Energy Needs to Your Solar Solution"
            description="Every Synowatt installation follows an engineering workflow to ensure your equipment matches your real daily kilowatt-hour demand."
          />

          <ol className="mt-16 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {assessmentFlow.map((stage, i) => {
              const featured = i === 1;
              return (
                <React.Fragment key={stage.title}>
                  <motion.li
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.18 }}
                    className={`flex flex-col rounded-3xl p-8 ${
                      featured ? 'bg-brand-dark text-white shadow-xl' : 'bg-white ring-1 ring-ink/[0.07]'
                    }`}
                  >
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-2xl ${
                        featured ? 'bg-white/10 text-gold' : 'bg-brand-tint text-brand-dark'
                      }`}
                    >
                      <stage.icon className="h-7 w-7" aria-hidden />
                    </span>
                    <h3 className={`mt-6 font-display text-2xl font-extrabold ${featured ? 'text-white' : 'text-ink'}`}>
                      {stage.title}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {stage.items.map((it) => (
                        <li key={it} className={`flex gap-2.5 text-sm ${featured ? 'text-white/90' : 'text-ink/75'}`}>
                          <CheckCircle2Icon
                            className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-gold' : 'text-brand'}`}
                            aria-hidden
                          />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                  {i < assessmentFlow.length - 1 && (
                    <motion.li
                      aria-hidden
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.1 + i * 0.18 }}
                      className="grid place-items-center py-1"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-ink">
                        <ArrowRightIcon className="hidden h-5 w-5 lg:block" />
                        <ArrowDownIcon className="h-5 w-5 lg:hidden" />
                      </span>
                    </motion.li>
                  )}
                </React.Fragment>
              );
            })}
          </ol>

          <Reveal className="mt-12 flex justify-center" delay={0.2}>
            <Link href={assessmentHref} className={buttonClasses('green', 'lg')}>
              Book Your Free Energy Assessment
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Trust & FAQ Accordion Section */}
      <section aria-labelledby="why-faq-title" className="bg-white py-24 lg:py-32 border-t border-ink/10">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">Quality Assurance</span>
            <h2 id="why-faq-title" className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Frequently Asked Questions About Synowatt Standards
            </h2>
            <p className="mt-3 text-ink/70">
              Clear answers on EPRA licensing, hardware warranties, electrical protection, and after-sales service.
            </p>
          </div>

          <div className="mt-12 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {trustFaqs.map((faq, idx) => {
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

          {/* Quick-Jump Cross-Navigation Hub */}
          <div className="mt-16 rounded-2xl bg-brand-tint/40 p-6 sm:p-8 border border-ink/[0.08]">
            <h3 className="font-display font-bold text-lg text-ink">
              Explore Synowatt Solar Capabilities
            </h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">
              Learn more about our services, pre-configured packages, and track record across Kenya:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm font-semibold">
              <Link href="/services" className="text-brand-dark underline hover:text-brand-deep">
                Comprehensive Solar Services Directory →
              </Link>
              <Link href="/solutions" className="text-brand-dark underline hover:text-brand-deep">
                Pre-Engineered 3.2kVA, 5kVA & 10kVA Packages →
              </Link>
              <Link href="/projects" className="text-brand-dark underline hover:text-brand-deep">
                Verified Solar Project Portfolio →
              </Link>
              <Link href="/about" className="text-brand-dark underline hover:text-brand-deep">
                About Our Company & Headquarters →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Work with an EPRA-Licensed Solar Contractor?"
        description="Whether you’re outfitting a home in Nairobi, an institution in Nakuru, or a commercial plant along Thika Road, we’ll engineer a system sized around your energy needs."
        primaryLabel="Request a Free Solar Quote"
        primaryTo="/contact#quote"
        secondaryLabel="View Sized Solar Packages"
        secondaryTo="/solutions"
      />
    </>
  );
}
