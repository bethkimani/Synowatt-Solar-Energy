'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRightIcon,
  BatteryChargingIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CpuIcon,
  HelpCircleIcon,
  InfoIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SunIcon,
  ZapIcon
} from 'lucide-react';
import { Reveal } from '../Reveal';
import type { SolarPackage } from '../../types/content';
import { solarPackages } from '../../data/solutions';
import { buttonClasses } from '../../utils/button';
import { quoteHref } from '../../utils/quote';

interface SolutionDetailProps {
  pkg: SolarPackage;
}

export function SolutionDetail({ pkg }: SolutionDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const related = (pkg.relatedSolutions || [])
    .map((slug) => solarPackages.find((p) => p.slug === slug))
    .filter(Boolean) as SolarPackage[];

  const quoteLink = quoteHref({
    service: pkg.serviceLink ? pkg.serviceLink.replace('/services/', '') : 'hybrid-solar-systems',
    solution: pkg.slug
  });

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* 1. Hero Showcase Section */}
      <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            {pkg.tagline && (
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
                <SparklesIcon className="h-3.5 w-3.5" />
                {pkg.tagline}
              </span>
            )}
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {pkg.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              {pkg.description}
            </p>
          </Reveal>

          {/* Quick Metrics Bar */}
          <Reveal delay={0.08} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-ink/[0.08] bg-white p-4 shadow-sm">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-ink/60">
                <CpuIcon className="h-4 w-4 text-brand" />
                Inverter Output
              </span>
              <p className="mt-1 font-display text-xl font-bold text-ink">{pkg.capacity}</p>
              <p className="text-xs text-ink/60">Pure sine wave</p>
            </div>
            <div className="rounded-2xl border border-ink/[0.08] bg-white p-4 shadow-sm">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-ink/60">
                <BatteryChargingIcon className="h-4 w-4 text-brand" />
                Battery Storage
              </span>
              <p className="mt-1 font-display text-xl font-bold text-ink">{pkg.battery.split(' ')[0]}</p>
              <p className="text-xs text-ink/60">LiFePO4 high-cycle</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-ink/[0.08] bg-white p-4 shadow-sm sm:col-span-1">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-ink/60">
                <SunIcon className="h-4 w-4 text-brand" />
                Solar Array
              </span>
              <p className="mt-1 font-display text-xl font-bold text-ink">{pkg.panels.split('Tier-1')[0].trim() || 'Tier-1 PV'}</p>
              <p className="text-xs text-ink/60">{pkg.dailyGeneration || 'High daily yield'}</p>
            </div>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={0.12} className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href={quoteLink} className={`${buttonClasses('primary', 'lg')} w-full sm:w-auto justify-center group`}>
              Request a Free Quote
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`https://wa.me/254799188830?text=Hi%20Synowatt,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}`}
              target="_blank"
              rel="noreferrer"
              className={`${buttonClasses('outline', 'lg')} w-full sm:w-auto justify-center`}
            >
              <MessageCircleIcon className="h-5 w-5 text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Hero Visual Card */}
        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={pkg.image}
              alt={pkg.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/95 p-5 shadow-lg backdrop-blur-sm sm:left-8 sm:right-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-ink/60">Typical Daily Production</p>
                <p className="font-display text-lg font-bold text-brand-dark">{pkg.dailyGeneration}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-ink/60">Blackout Backup</p>
                <p className="font-display text-lg font-bold text-brand-dark">{pkg.backupDuration}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. Engineering Trust Banner */}
      <section className="rounded-3xl border border-ink/10 bg-brand-tint/60 p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <ShieldCheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <div>
              <h3 className="text-sm font-bold text-ink">EPRA Licensed</h3>
              <p className="text-xs text-ink/70 mt-0.5">Compliant with Kenya energy regulatory authority standards.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ZapIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <div>
              <h3 className="text-sm font-bold text-ink">&lt;10ms UPS Transfer</h3>
              <p className="text-xs text-ink/70 mt-0.5">Zero flicker or equipment shut-off during grid outages.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BatteryChargingIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <div>
              <h3 className="text-sm font-bold text-ink">6,000+ Cycle Storage</h3>
              <p className="text-xs text-ink/70 mt-0.5">Grade-A LiFePO4 cells lasting 10-15 years of daily use.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <SparklesIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <div>
              <h3 className="text-sm font-bold text-ink">Tier-1 Bifacial Solar</h3>
              <p className="text-xs text-ink/70 mt-0.5">25-year performance warranty with dual-sided light harvesting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Daily Operational Flow (How It Operates in Kenya) */}
      <section aria-labelledby="architecture-heading">
        <h2 id="architecture-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
          How the {pkg.capacity} Hybrid Solar System Operates
        </h2>
        <p className="mt-2 text-ink/70">
          Smart energy management optimized for Kenya Power (KPLC) grid interaction and solar irradiance.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 font-bold text-sm">
              01
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">Daytime Solar Direct</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              During sunshine hours, the high-efficiency solar panels power your running appliances directly. Excess power is automatically routed to recharge the lithium battery bank to 100%.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-bold text-sm">
              02
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">Evening Battery Power</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              At sunset, the system automatically discharges clean power stored in the lithium LiFePO4 battery, avoiding expensive peak grid tariff rates while keeping your home comfortable.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold text-sm">
              03
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">Uninterrupted Blackout UPS</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              When a KPLC power outage strikes, the inverter changes over in less than 10 milliseconds. Your TVs, lights, Wi-Fi, and refrigerators continue running with zero reboot or disturbance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Supported Appliances & Estimated Runtimes */}
      {pkg.idealAppliances && pkg.idealAppliances.length > 0 && (
        <section aria-labelledby="appliances-heading" className="rounded-3xl bg-brand-dark p-8 text-white sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">Appliance Capacity</span>
            <h2 id="appliances-heading" className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
              What This {pkg.capacity} Package Powers
            </h2>
            <p className="mt-2 text-white/80 text-sm leading-relaxed">
              Tested runtime estimations based on typical Kenyan household and commercial usage profiles.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.idealAppliances.map((app) => (
              <div key={app.name} className="rounded-2xl bg-white/[0.08] p-5 ring-1 ring-white/10">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">{app.name}</h3>
                  <span className="shrink-0 rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-bold text-gold">
                    Supported
                  </span>
                </div>
                <p className="mt-2 text-xs font-medium text-white/90">
                  Runtime: <span className="text-emerald-300">{app.runtime}</span>
                </p>
                {app.notes && (
                  <p className="mt-1 text-xs text-white/60">{app.notes}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2.5 text-xs text-white/70">
            <InfoIcon className="h-4 w-4 shrink-0 text-gold" />
            <span>
              Actual runtime depends on the simultaneous load and depth of battery discharge. Our engineers size every system during our site assessment.
            </span>
          </div>
        </section>
      )}

      {/* 5. What’s Included in the Turnkey Package */}
      {pkg.whatsIncludedDetailed && pkg.whatsIncludedDetailed.length > 0 && (
        <section aria-labelledby="included-heading">
          <h2 id="included-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Complete Turnkey Inclusions
          </h2>
          <p className="mt-2 text-ink/70">
            Everything required for a compliant, safe, and long-lasting solar installation in Kenya.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.whatsIncludedDetailed.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 text-brand-dark">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-tint">
                    <CheckCircle2Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Technical Specifications Table */}
      {pkg.technicalSpecs && pkg.technicalSpecs.length > 0 && (
        <section aria-labelledby="specs-heading">
          <h2 id="specs-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            {pkg.capacity} Technical Specifications
          </h2>
          <p className="mt-2 text-ink/70">
            Hardware parameters and engineering ratings for the {pkg.name}.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <dl className="divide-y divide-ink/10">
              {pkg.technicalSpecs.map((spec, idx) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 sm:px-6 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-ink/[0.02]'
                  }`}
                >
                  <dt className="text-sm font-semibold text-ink/75">{spec.label}</dt>
                  <dd className="text-sm font-medium text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* 7. Why Choose Synowatt */}
      {pkg.whyChoose && pkg.whyChoose.length > 0 && (
        <section aria-labelledby="why-heading" className="rounded-3xl border border-brand/20 bg-brand-tint/40 p-8 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">Synowatt Assurance</span>
            <h2 id="why-heading" className="mt-2 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Why Invest in This Synowatt Hybrid Package
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {pkg.whyChoose.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-ink/[0.06]">
                <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <p className="text-sm leading-relaxed text-ink/80">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-brand/10 flex flex-wrap gap-4 text-xs font-semibold text-brand-dark">
            <Link href="/why-synowatt" className="underline hover:text-brand-deep">
              Learn more about our EPRA certifications & warranty coverage →
            </Link>
            <Link href="/projects" className="underline hover:text-brand-deep">
              View customer solar projects in Kenya →
            </Link>
          </div>
        </section>
      )}

      {/* 8. Frequently Asked Questions (FAQ) with Accordion */}
      {pkg.faqs && pkg.faqs.length > 0 && (
        <section aria-labelledby="faq-heading">
          <div className="flex items-center gap-3">
            <HelpCircleIcon className="h-6 w-6 text-brand" />
            <h2 id="faq-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Frequently Asked Questions About the {pkg.capacity}
            </h2>
          </div>
          <p className="mt-2 text-ink/70">
            Practical answers regarding runtime, installation, expansion, and appliance compatibility.
          </p>

          <div className="mt-8 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {pkg.faqs.map((faq, idx) => {
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
        </section>
      )}

      {/* 9. Contextual Internal Linking (Related Solar Packages & Services) */}
      <section aria-labelledby="related-heading" className="border-t border-ink/10 pt-16">
        <h2 id="related-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Compare Other Solar Solutions & Engineering Services
        </h2>
        <p className="mt-2 text-ink/70">
          Find the ideal capacity for your property’s unique load profile.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              href={`/solutions/${rel.slug}`}
              className="group flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">{rel.type}</span>
              <h3 className="mt-2 font-display text-xl font-bold text-ink group-hover:text-brand-dark transition-colors">
                {rel.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 line-clamp-2">{rel.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-ink/60 border-t border-ink/[0.06] pt-3">
                <span>Inverter: {rel.capacity}</span>
                <span>Battery: {rel.battery.split(' ')[0]}</span>
              </div>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-dark">
                View full specifications →
              </span>
            </Link>
          ))}

          {/* Quick link to custom capacity */}
          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-ink/20 bg-brand-tint/30 p-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-deep">Custom Sizing</span>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">Commercial & Custom Solar</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Need a 15kVA, 20kVA, or large rooftop grid-tied system for a hospital, farm, or factory?
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/services/commercial-industrial" className="text-sm font-semibold text-brand-dark underline">
                Commercial Solar Solutions →
              </Link>
              <Link href="/services/solar-water-pumping" className="text-sm font-semibold text-brand-dark underline">
                Solar Borehole Pumping →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Bottom Conversion Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-brand-dark p-8 sm:p-12 text-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Get an Accurate Quotation for the {pkg.name}
          </h2>
          <p className="mt-3 text-white/85 leading-relaxed">
            Every property has specific daytime loads and nighttime autonomy needs. Speak with an EPRA-certified solar engineer from Synowatt for a tailored proposal and itemized cost breakdown.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href={quoteLink} className={`${buttonClasses('primary', 'lg')} w-full sm:w-auto justify-center`}>
              Request Free Solar Quote
            </Link>
            <Link href="/solutions" className={`${buttonClasses('white', 'lg')} w-full sm:w-auto justify-center`}>
              Compare All Solar Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
