import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { ParallaxImage } from '../ParallaxImage';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { whyPillars } from '../../data/trust';
import { images } from '../../data/images';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

export function WhyPreview() {
  return (
    <section aria-labelledby="why-title" className="bg-brand-dark py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="why-title"
            tone="light"
            title="Why Choose Synowatt?"
            description="Solar is a long-term investment. We focus on getting it right the first time — and staying with you after installation." />
          
          <Reveal delay={0.1}>
            <ParallaxImage
              src={images.groundMount}
              alt="Technician inspecting a ground-mounted solar array with a tablet"
              className="mt-8 aspect-[16/11] rounded-3xl" />
            
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/why-synowatt" className={`${buttonClasses('primary', 'lg')} group`}>
              Discover Why Synowatt
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <ul className="grid content-start gap-5 sm:grid-cols-2">
          {whyPillars.map((p, i) => {
            const Icon = p.reasons[0].icon;
            return (
              <motion.li
                key={p.theme}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: i % 2 * 0.06 }}
                className="flex flex-col rounded-2xl bg-white/[0.07] p-7 ring-1 ring-white/10">
                
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-dark">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold leading-snug text-white">{p.theme}</h3>
                <p className="mt-2 leading-relaxed text-white/80">{p.summary}</p>
                <ul className="mt-5 space-y-1.5 border-t border-white/10 pt-5">
                  {p.reasons.map((r) =>
                  <li key={r.title} className="flex items-center gap-2 text-sm font-medium text-white/90">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {r.title}
                    </li>
                  )}
                </ul>
              </motion.li>);

          })}
        </ul>
      </div>
    </section>);

}