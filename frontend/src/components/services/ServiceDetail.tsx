'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon
} from 'lucide-react';
import { ParallaxImage } from '../ParallaxImage';
import { Reveal } from '../Reveal';
import type { Service } from '../../types/content';
import { services } from '../../data/services';
import { company } from '../../data/company';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';
import { quoteHref } from '../../utils/quote';

interface ServiceDetailProps {
  service: Service;
  reverse?: boolean;
}

export function ServiceDetail({ service, reverse = false }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <article
      aria-labelledby={`${service.slug}-title`}
      className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-20"
    >
      <Reveal className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <ParallaxImage src={service.image} alt={service.imageAlt} className="aspect-[4/3] rounded-3xl" />
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.15 }}
          className={`absolute bottom-4 grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand-dark shadow-[0_12px_30px_rgba(34,34,34,0.14)] ${
            reverse ? 'right-4' : 'left-4'
          }`}
        >
          <Icon className="h-8 w-8" aria-hidden />
        </motion.span>
      </Reveal>

      <div>
        <Reveal>
          {service.tagline && (
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
              {service.tagline}
            </span>
          )}
          <h2
            id={`${service.slug}-title`}
            className="mt-2 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl"
          >
            {service.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{service.description}</p>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <h3 className="text-sm font-semibold text-ink">Key Benefits</h3>
            <ul className="mt-3 space-y-2.5">
              {service.benefits.slice(0, 4).map((b) => (
                <li key={b} className="flex gap-2.5 text-[15px] leading-snug text-ink/75">
                  <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-dark">
                    <CheckIcon className="h-3 w-3" strokeWidth={3} aria-hidden />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-sm font-semibold text-ink">Suitable Applications</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {service.applications.map((a) => (
                <li key={a} className="rounded-full bg-brand-tint px-3 py-1 text-sm font-medium text-brand-deep">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-4">
          <Link href={quoteHref({ service: service.slug })} className={`${buttonClasses('primary', 'lg')} group`}>
            Request a Quote
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
          <Link href={`/services/${service.slug}`} className={`${buttonClasses('outline', 'lg')}`}>
            Detailed Specifications →
          </Link>
        </Reveal>
      </div>
    </article>
  );
}

export function ServiceFullDetail({ service }: { service: Service }) {
  const Icon = service.icon;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const related = (service.relatedServices || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];

  return (
    <article className="space-y-20 lg:space-y-28">
      {/* 1. Hero Showcase Section */}
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
            <SparklesIcon className="h-4 w-4" aria-hidden />
            <span>{service.tagline || 'Synowatt Solar Engineering Service'}</span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {service.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink/75 sm:text-xl">
            {service.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href={quoteHref({ service: service.slug })} className={`${buttonClasses('primary', 'lg')} w-full sm:w-auto justify-center`}>
              Get a Free Quote for this Service
            </Link>
            <a
              href={`https://wa.me/${company.whatsappNumber}?text=Hello%20Synowatt%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                service.title
              )}%20service.`}
              target="_blank"
              rel="noreferrer"
              className={`${buttonClasses('outline', 'lg')} w-full sm:w-auto justify-center`}
            >
              <MessageCircleIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick summary badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-ink/10 pt-6 text-sm text-ink/70">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-5 w-5 text-brand" />
              <span>EPRA-Compliant Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <ZapIcon className="h-5 w-5 text-brand" />
              <span>Tier-1 Hardware Warranties</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <ParallaxImage src={service.image} alt={service.imageAlt} className="aspect-[4/3] rounded-3xl shadow-xl" />
          <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 grid h-14 w-14 sm:h-20 sm:w-20 place-items-center rounded-2xl bg-brand-dark text-white shadow-xl">
            <Icon className="h-7 w-7 sm:h-10 sm:w-10" aria-hidden />
          </div>
        </div>
      </div>

      {/* 2. Deep-Dive Engineering & Technical Overview */}
      {service.longDescription && service.longDescription.length > 0 && (
        <section aria-labelledby="overview-heading" className="rounded-3xl bg-brand-tint/60 p-8 sm:p-12 lg:p-16">
          <div className="max-w-4xl space-y-6">
            <h2 id="overview-heading" className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Engineering Excellence & How We Deliver This Service in Kenya
            </h2>
            {service.longDescription.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/80">
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* 3. Key Technical Features & Capabilities */}
      {service.features && service.features.length > 0 && (
        <section aria-labelledby="features-heading">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 id="features-heading" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Key Features & Technical Capabilities
            </h2>
            <p className="mt-3 text-lg text-ink/70">
              Why Kenyan homeowners and enterprises rely on Synowatt for {service.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feat) => (
              <div key={feat.title} className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand-dark font-bold text-sm">
                  ✓
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{feat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{feat.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Benefits & Suitable Applications */}
      <section aria-labelledby="benefits-heading" className="border-t border-ink/10 pt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="benefits-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Customer Benefits
            </h2>
            <ul className="mt-6 space-y-3.5">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-[16px] leading-relaxed text-ink/80">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-dark text-white">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Typical Kenyan Applications
            </h2>
            <p className="mt-2 text-ink/70">
              Ideal for a wide spectrum of properties across all counties in Kenya:
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {service.applications.map((app) => (
                <span
                  key={app}
                  className="rounded-xl border border-brand/20 bg-brand-tint px-4 py-2 text-sm font-semibold text-brand-deep"
                >
                  {app}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-brand-dark p-6 text-white">
              <h3 className="font-display font-bold text-lg">Need customized sizing?</h3>
              <p className="mt-1 text-sm text-white/80">
                Explore our pre-configured solar packages or consult with our engineers.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link href="/solutions" className={`${buttonClasses('primary', 'md')} justify-center`}>
                  View Solar Packages
                </Link>
                <Link href="/solar-calculator" className={`${buttonClasses('white', 'md')} justify-center`}>
                  Try Solar Calculator &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section aria-labelledby="faq-heading" className="rounded-3xl bg-white border border-ink/[0.08] p-8 sm:p-12">
          <div className="max-w-3xl">
            <h2 id="faq-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Frequently Asked Questions About {service.title}
            </h2>
            <p className="mt-2 text-ink/70">
              Direct answers to questions asked by homeowners and business operators in Kenya.
            </p>

            <div className="mt-8 space-y-4">
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="rounded-xl border border-ink/[0.07] bg-brand-tint/30">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-bold text-ink"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircleIcon className="h-5 w-5 text-brand-dark shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDownIcon
                        className={`h-5 w-5 text-ink/50 transition-transform ${isOpen ? 'rotate-180 text-brand-dark' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-ink/[0.06] p-5 pt-3 text-[15px] leading-relaxed text-ink/75">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. Contextual Internal Linking (Related Solar Services) */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-ink/10 pt-16">
          <h2 id="related-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Related Solar Energy Services
          </h2>
          <p className="mt-2 text-ink/70">
            Combine services for a comprehensive, reliable energy ecosystem.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => {
              const RelIcon = rel.icon;
              return (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
                    <RelIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{rel.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 line-clamp-2">{rel.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-dark">
                    Explore service →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* 7. Bottom Conversion Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-brand-dark p-8 sm:p-12 text-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Get an Accurate Quotation for {service.title}
          </h2>
          <p className="mt-3 text-white/85 leading-relaxed">
            Speak with an EPRA-certified solar engineer from Synowatt Power & Solar Ltd. We will audit your power needs and recommend an optimized system with transparent pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={quoteHref({ service: service.slug })} className={buttonClasses('primary', 'lg')}>
              Request Free Solar Quote
            </Link>
            <Link href="/projects" className={buttonClasses('white', 'lg')}>
              View Our Completed Projects
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export function ServiceDetailBySlug({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Service data is missing for slug "${slug}".`);
  return <ServiceFullDetail service={service} />;
}