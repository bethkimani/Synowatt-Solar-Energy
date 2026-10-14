'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, HelpCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { buttonClasses } from '../../utils/button';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqList: FaqItem[] = [
  {
    question: 'How does a hybrid solar system work in Kenya during power outages?',
    answer: (
      <p className="leading-relaxed text-ink/75">
        A{' '}
        <Link href="/services/hybrid-solar-systems" className="font-semibold text-brand-dark underline hover:text-brand-deep">
          hybrid solar system
        </Link>{' '}
        combines solar panels, a smart hybrid inverter, and{' '}
        <Link href="/services/lithium-battery-storage" className="font-semibold text-brand-dark underline hover:text-brand-deep">
          lithium battery storage
        </Link>{' '}
        with grid power. When Kenya Power (KPLC) blackouts occur, the inverter switches to battery and solar backup in milliseconds, keeping your lights, refrigerators, Wi-Fi router, TV, and security systems running without interruption.
      </p>
    ),
  },
  {
    question: 'How much does solar system installation cost in Kenya?',
    answer: (
      <p className="leading-relaxed text-ink/75">
        Solar installation costs in Kenya vary depending on your daily kilowatt-hour (kWh) requirements and whether you need battery backup. We offer pre-configured{' '}
        <Link href="/solutions" className="font-semibold text-brand-dark underline hover:text-brand-deep">
          residential and commercial solar packages
        </Link>{' '}
        tailored to different energy profiles. For an accurate, transparent cost estimate with no hidden fees, you can{' '}
        <Link href="/contact#quote" className="font-semibold text-brand-dark underline hover:text-brand-deep">
          request a free custom solar quote
        </Link>
        .
      </p>
    ),
  },
  {
    question: 'Why are lithium LiFePO4 batteries better than conventional lead-acid or gel batteries?',
    answer: (
      <p className="leading-relaxed text-ink/75">
        Lithium iron phosphate (LiFePO4) batteries offer up to 6,000 cycles (lasting 10+ years), permit a 90% depth of discharge without degrading, charge twice as fast, and require zero routine water maintenance. Learn more about our{' '}
        <Link href="/services/lithium-battery-storage" className="font-semibold text-brand-dark underline hover:text-brand-deep">
          lithium battery storage solutions
        </Link>
        .
      </p>
    ),
  },
  {
    question: 'What size solar system do I need for my Kenyan home or business?',
    answer: (
      <p className="leading-relaxed text-ink/75">
        System capacity is calculated from your continuous loads (lighting, refrigeration, computers) and surge loads (pumps, borehole motors). Read our comprehensive{' '}
        <Link href="/solutions#sizing" className="font-semibold text-brand-dark underline hover:text-brand-deep">
          solar system sizing guide
        </Link>{' '}
        or consult with our engineers for an on-site energy assessment.
      </p>
    ),
  },
  {
    question: 'Are Synowatt solar installations EPRA-certified in Kenya?',
    answer: (
      <p className="leading-relaxed text-ink/75">
        Yes. Synowatt Power & Solar Ltd designs and implements systems in strict compliance with Energy and Petroleum Regulatory Authority (EPRA) standards, IEEE electrical regulations, and manufacturer warranties. Learn why homeowners and businesses trust us on our{' '}
        <Link href="/why-synowatt" className="font-semibold text-brand-dark underline hover:text-brand-deep">
          Why Synowatt
        </Link>{' '}
        page.
      </p>
    ),
  },
];

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section aria-labelledby="home-faq-title" className="bg-brand-tint/60 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <SectionHeading
            id="home-faq-title"
            title="Frequently Asked Questions About Solar in Kenya"
            description="Clear answers about solar installation costs, hybrid systems, battery storage, and blackout protection."
            align="center"
          />
        </div>

        <div className="mt-14 space-y-4">
          {faqList.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-2xl border border-ink/[0.08] bg-white shadow-sm transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
                  >
                    <span className="flex items-center gap-3 font-display text-lg font-bold text-ink">
                      <HelpCircleIcon className="h-5 w-5 shrink-0 text-brand-dark" aria-hidden />
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-ink/50 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-dark' : ''
                      }`}
                      aria-hidden
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-ink/[0.06] px-6 pb-6 pt-4 text-[16px]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="text-ink/70">
            Have a question about your specific property or power needs?
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <Link href="/contact#quote" className={buttonClasses('green', 'md')}>
              Request a Free Consultation
            </Link>
            <Link href="/blog" className={buttonClasses('outline', 'md')}>
              Browse Our Solar Blog & Guides
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
