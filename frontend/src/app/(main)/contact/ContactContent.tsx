'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/contact/ContactForm';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { useHashScroll } from '@/hooks/useHashScroll';
import { buttonClasses } from '@/utils/button';

const details = [
  { icon: PhoneIcon, label: 'Phone', value: company.phoneDisplay, href: company.phoneHref },
  { icon: MessageCircleIcon, label: 'WhatsApp', value: company.phoneDisplay, href: company.whatsappHref, external: true },
  { icon: MailIcon, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: MapPinIcon, label: 'Location', value: company.location }
];

export function ContactContent() {
  useHashScroll();

  return (
    <>
      <PageHero
        trail={[{ label: 'Contact' }]}
        title="Get a Free Solar Assessment & Quotation in Kenya"
        subtitle="Speak directly with EPRA-certified solar engineers from Synowatt Power & Solar Ltd. We design, supply, install, and support hybrid solar and lithium storage systems across all 47 counties."
        image={images.aerial}
        imageAlt="Aerial view of Nairobi homes with rooftop solar panels at golden hour"
      >
        <a href={company.phoneHref} className={buttonClasses('primary', 'lg')}>
          <PhoneIcon className="h-5 w-5" />
          Call {company.phoneDisplay}
        </a>
        <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('light', 'lg')}>
          <MessageCircleIcon className="h-5 w-5 text-[#25D366]" />
          WhatsApp Our Engineers
        </a>
      </PageHero>

      {/* Trust & Engineering Highlights */}
      <section className="border-b border-ink/10 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-5 text-sm font-medium text-ink/80 lg:px-8">
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="h-5 w-5 text-brand" />
            <span>EPRA-Licensed Solar Contractor</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPinIcon className="h-5 w-5 text-brand" />
            <span>HQ: Mountain Mall, Thika Road</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ZapIcon className="h-5 w-5 text-brand" />
            <span>Free On-Site Energy Audits</span>
          </div>
          <div className="flex items-center gap-2.5">
            <SparklesIcon className="h-5 w-5 text-brand" />
            <span>Fast Turnaround Proposals</span>
          </div>
        </div>
      </section>

      <section aria-label="Request a quote and contact details" className="bg-brand-tint/50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_1.3fr] lg:gap-14 lg:px-8">
          {/* Contact Details Column */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">Direct Support</span>
              <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
                Speak with Our Solar Engineers
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/75">
                Whether you have an electrical single-line diagram, a monthly KPLC power bill, or just general questions about sizing solar panels and lithium batteries, we are ready to help.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <dl className="mt-8 divide-y divide-ink/10 rounded-3xl bg-white px-6 ring-1 ring-ink/[0.06] shadow-sm">
                {details.map((d) => (
                  <div key={d.label} className="flex items-center gap-4 py-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-dark">
                      <d.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-xs font-semibold text-ink/60 uppercase tracking-wider">{d.label}</dt>
                      <dd className="truncate font-semibold text-ink text-base">
                        {d.href ? (
                          <a
                            href={d.href}
                            {...(d.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                            className="transition-colors duration-150 hover:text-brand-dark"
                          >
                            {d.value}
                          </a>
                        ) : (
                          d.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 grid gap-2 sm:grid-cols-3">
              <a href={company.phoneHref} className={`${buttonClasses('outline', 'md')} px-3 justify-center`}>
                <PhoneIcon className="h-4 w-4 text-brand-dark" />
                Call Directly
              </a>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`${buttonClasses('green', 'md')} px-3 justify-center`}
              >
                <MessageCircleIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a href={`mailto:${company.email}`} className={`${buttonClasses('outline', 'md')} px-3 justify-center`}>
                <MailIcon className="h-4 w-4 text-brand-dark" />
                Send Email
              </a>
            </Reveal>

            {/* Map & Operating Hours */}
            <Reveal delay={0.15} className="mt-8 overflow-hidden rounded-3xl bg-white ring-1 ring-ink/10 shadow-sm">
              <iframe
                title={`Map showing ${company.location}`}
                src={company.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />

              <div className="flex flex-col gap-2 p-5 text-sm text-ink/75 border-t border-ink/[0.06]">
                <div className="flex items-center gap-2.5 font-medium text-ink">
                  <ClockIcon className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span>Mon – Fri: 8:00 AM – 5:30 PM | Sat: 8:30 AM – 2:00 PM</span>
                </div>
                <p className="text-xs text-ink/60 pl-6.5">
                  Office visits and engineering technical consultations at Mountain Mall, Thika Road. Walk-ins and appointments welcome.
                </p>
              </div>
            </Reveal>

            {/* Internal Linking Cross-Hub */}
            <div className="mt-8 rounded-2xl bg-white p-6 border border-ink/[0.08] shadow-sm">
              <h3 className="font-display font-bold text-base text-ink">
                Helpful Solar Resources Before Requesting a Quote:
              </h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold">
                <li>
                  <Link href="/solar-calculator" className="text-brand-dark underline hover:text-brand-deep">
                    Interactive Solar Sizing & Savings Calculator →
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-brand-dark underline hover:text-brand-deep">
                    Compare Pre-Configured Hybrid Packages (3.2kVA, 5kVA, 10kVA) →
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#sizing" className="text-brand-dark underline hover:text-brand-deep">
                    How We Calculate Solar Battery & Panel Sizing →
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-brand-dark underline hover:text-brand-deep">
                    View Completed Installations Across Kenya →
                  </Link>
                </li>
                <li>
                  <Link href="/why-synowatt" className="text-brand-dark underline hover:text-brand-deep">
                    EPRA Regulations & Tier-1 Equipment Warranties →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div id="quote" className="order-1 scroll-mt-24 lg:order-2">
            <Reveal delay={0.05}>
              <Suspense fallback={<div className="h-96 rounded-3xl bg-white/60 animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
