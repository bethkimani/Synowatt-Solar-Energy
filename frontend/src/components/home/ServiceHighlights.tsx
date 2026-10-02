import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { services } from '../../data/services';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

export function ServiceHighlights() {
  return (
    <section aria-labelledby="services-title" className="bg-brand-tint py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-title"
            title="Our Solar Energy Services"
            description="Everything you need to move to solar — from design and installation to batteries, equipment and long-term care." />
          
          <Reveal delay={0.1}>
            <Link href="/services" className={`${buttonClasses('outline', 'lg')} group`}>
              View All Services
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.li
                key={service.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.06 }}>
                
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full w-full flex-col rounded-2xl border border-ink/[0.07] bg-white p-6 text-left shadow-[0_1px_2px_rgba(34,34,34,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_rgba(0,120,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand-dark transition-[background-color,color,transform] duration-200 group-hover:-rotate-6 group-hover:bg-brand-dark group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink">{service.title}</h3>
                  <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-ink/70">{service.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-dark">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.li>);

          })}
        </ul>
      </div>
    </section>);

}