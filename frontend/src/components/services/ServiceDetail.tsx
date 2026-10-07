'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { ParallaxImage } from '../ParallaxImage';
import { Reveal } from '../Reveal';
import type { Service } from '../../types/content';
import { services } from '../../data/services';
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
      className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-20">
      
      <Reveal className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <ParallaxImage src={service.image} alt={service.imageAlt} className="aspect-[4/3] rounded-3xl" />
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.15 }}
          className={`absolute bottom-4 grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand-dark shadow-[0_12px_30px_rgba(34,34,34,0.14)] ${
          reverse ? 'right-4' : 'left-4'}`
          }>
          
          <Icon className="h-8 w-8" aria-hidden />
        </motion.span>
      </Reveal>

      <div>
        <Reveal>
          <h2
            id={`${service.slug}-title`}
            className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
            
            {service.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{service.description}</p>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <h3 className="text-sm font-semibold text-ink">Benefits</h3>
            <ul className="mt-3 space-y-2.5">
              {service.benefits.map((b) =>
              <li key={b} className="flex gap-2.5 text-[15px] leading-snug text-ink/75">
                  <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-dark">
                    <CheckIcon className="h-3 w-3" strokeWidth={3} aria-hidden />
                  </span>
                  {b}
                </li>
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-sm font-semibold text-ink">Suitable applications</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {service.applications.map((a) =>
              <li key={a} className="rounded-full bg-brand-tint px-3 py-1 text-sm font-medium text-brand-deep">
                  {a}
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10">
          <Link href={quoteHref({ service: service.slug })} className={`${buttonClasses('primary', 'lg')} group`}>
            Request a Quote
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </article>);

}

export function ServiceDetailBySlug({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Service data is missing for slug "${slug}".`);
  return <ServiceDetail service={service} />;
}