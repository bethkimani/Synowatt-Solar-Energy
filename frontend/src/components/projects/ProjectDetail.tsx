'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircle2Icon,
  CpuIcon,
  MapPinIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon
} from 'lucide-react';
import { Reveal } from '../Reveal';
import type { Project } from '../../types/content';
import { projects } from '../../data/projects';
import { company } from '../../data/company';
import { buttonClasses } from '../../utils/button';
import { quoteHref } from '../../utils/quote';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const related = projects
    .filter((p) => p.slug !== project.slug && (p.category === project.category || p.location?.includes('Nairobi')))
    .slice(0, 3);

  const quoteUrl = quoteHref({
    property: project.category,
    service: project.serviceSlug || 'solar-installation',
    solution: project.solutionSlug,
    location: project.location
  });

  return (
    <article className="space-y-16 lg:space-y-24">
      {/* 1. Project Hero */}
      <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-tint px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
                {project.category} Solar Case Study
              </span>
              {project.completionDate && (
                <span className="flex items-center gap-1 rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70">
                  <CalendarIcon className="h-3 w-3 text-ink/50" />
                  Commissioned {project.completionDate}
                </span>
              )}
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 font-medium text-brand-deep text-base">
              <MapPinIcon className="h-5 w-5 text-accent" />
              <span>{project.location || 'Kenya'}</span>
            </p>

            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              {project.description}
            </p>
          </Reveal>

          {/* Quick Metrics Ribbon */}
          <Reveal delay={0.08} className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-ink/[0.08] bg-white p-4 shadow-sm">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-ink/60">
                <CpuIcon className="h-4 w-4 text-brand" />
                System Capacity
              </span>
              <p className="mt-1 font-display text-base sm:text-lg font-bold text-ink">
                {project.capacity || 'Custom Sized'}
              </p>
            </div>

            <div className="rounded-2xl border border-ink/[0.08] bg-white p-4 shadow-sm">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-ink/60">
                <ShieldCheckIcon className="h-4 w-4 text-brand" />
                Engineering Standard
              </span>
              <p className="mt-1 font-display text-base sm:text-lg font-bold text-ink">
                EPRA Certified
              </p>
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.12} className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href={quoteUrl} className={`${buttonClasses('primary', 'lg')} w-full sm:w-auto justify-center group`}>
              Request a Similar System
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`https://wa.me/254799188830?text=Hi%20Synowatt,%20I%20saw%20your%20project:%20${encodeURIComponent(project.title)}%20and%20would%20like%20a%20quote`}
              target="_blank"
              rel="noreferrer"
              className={`${buttonClasses('outline', 'lg')} w-full sm:w-auto justify-center`}
            >
              <MessageCircleIcon className="h-5 w-5 text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Hero Image Showcase */}
        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 left-6 right-6 rounded-2xl bg-brand-dark/95 p-4 text-white shadow-lg backdrop-blur-sm sm:left-8 sm:right-8">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-semibold text-gold">Location: {project.location || 'Kenya'}</span>
              <span className="text-white/80">Turnkey Commissioned</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. Hardware Deployed & Operational Result Grid */}
      <section className="grid gap-8 lg:grid-cols-2">
        {/* Hardware Specifications */}
        {project.hardware && project.hardware.length > 0 && (
          <div className="rounded-3xl border border-ink/[0.08] bg-white p-7 sm:p-9 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand-dark">
                <ZapIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-ink">Key Hardware & Infrastructure</h2>
                <p className="text-xs text-ink/60">Tier-1 solar components installed to EPRA standards</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3.5">
              {project.hardware.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/80 leading-relaxed">
                  <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Operational Impact & Contextual Links */}
        <div className="flex flex-col justify-between rounded-3xl border border-ink/[0.08] bg-brand-tint/30 p-7 sm:p-9">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-700">
                <SparklesIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-ink">Client Energy Impact</h2>
                <p className="text-xs text-ink/60">Verified performance and operational result</p>
              </div>
            </div>

            {project.impact && (
              <div className="mt-6 rounded-2xl bg-white p-5 border border-ink/[0.06] shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-dark">Measurable Outcome</p>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink/85 font-medium">
                  "{project.impact}"
                </p>
              </div>
            )}

            <div className="mt-6 space-y-2 text-xs text-ink/70">
              <p>• 100% compliant with EPRA Solar PV regulations in Kenya.</p>
              <p>• Backed by Synowatt's comprehensive workmanship and equipment warranties.</p>
            </div>
          </div>

          {/* Contextual Internal Links */}
          <div className="mt-8 border-t border-ink/[0.08] pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-3">
              Related Engineering Resources:
            </h3>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              {project.solutionSlug && (
                <Link href={`/solutions/${project.solutionSlug}`} className="text-brand-dark underline hover:text-brand-deep">
                  View Matching Pre-Configured Package →
                </Link>
              )}
              {project.serviceSlug && (
                <Link href={`/services/${project.serviceSlug}`} className="text-brand-dark underline hover:text-brand-deep">
                  Learn About This Solar Service →
                </Link>
              )}
              <Link href="/why-synowatt" className="text-brand-dark underline hover:text-brand-deep">
                Why Choose Synowatt (Quality Standards) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Projects */}
      {related.length > 0 && (
        <section aria-labelledby="related-projects-heading" className="border-t border-ink/10 pt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 id="related-projects-heading" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                More Completed Solar Installations
              </h2>
              <p className="mt-1 text-ink/70 text-sm">
                Discover other verified residential, commercial, and institutional projects across Kenya.
              </p>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-brand-dark underline hover:text-brand-deep">
              View All Projects →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/projects/${rel.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/[0.08] bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-xs font-bold text-brand-deep shadow-sm">
                    {rel.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold text-ink group-hover:text-brand-dark transition-colors">
                    {rel.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/70 line-clamp-2">{rel.description}</p>
                  <div className="mt-auto pt-3 flex items-center justify-between text-xs text-ink/55 border-t border-ink/[0.06]">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPinIcon className="h-3.5 w-3.5 text-accent" />
                      {rel.location}
                    </span>
                    <span className="text-brand-dark font-semibold">View specs →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 4. Bottom Conversion Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-brand-dark p-8 sm:p-12 text-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Want a Similar Solar Installation for Your Property?
          </h2>
          <p className="mt-3 text-white/85 leading-relaxed">
            Every property has unique daytime power loads and nighttime backup requirements. Speak with an EPRA-certified solar engineer from Synowatt for a free site audit and transparent proposal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href={quoteUrl} className={`${buttonClasses('primary', 'lg')} w-full sm:w-auto justify-center`}>
              Request Free Solar Quote
            </Link>
            <Link href="/solutions" className={`${buttonClasses('white', 'lg')} w-full sm:w-auto justify-center`}>
              Explore Solar Packages
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
