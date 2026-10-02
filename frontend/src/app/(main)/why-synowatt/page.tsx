'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDownIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ParallaxImage } from '@/components/ParallaxImage';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { images } from '@/data/images';
import { assessmentFlow, whyPillars } from '@/data/trust';
import { useSeo } from '@/hooks/useSeo';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';
import { quoteHref } from '@/utils/quote';

export default function WhySynowattPage() {
  useSeo({
    title: 'Why Choose Synowatt?',
    description:
    'Professional installation, quality components, tailored solar design and long-term support — why homes and businesses choose Synowatt Power & Solar Ltd.',
    image: images.groundMount
  });

  return (
    <>
      <PageHero
        trail={[{ label: 'Why Synowatt' }]}
        title="Why Choose Synowatt?"
        subtitle="Solar is a long-term investment. We focus on getting it right the first time — and staying with you after installation."
        image={images.groundMount}
        imageAlt="Technician inspecting a ground-mounted solar array" />
      

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
                    <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
                      {pillar.theme}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink/70">{pillar.summary}</p>
                  </Reveal>
                  <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                    {pillar.reasons.map((r, j) =>
                    <motion.li
                      key={r.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                      transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.05 + j * 0.08 }}
                      className="flex gap-5 py-6">
                      
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-dark">
                          <r.icon className="h-6 w-6" aria-hidden />
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-bold text-ink">{r.title}</h3>
                          <p className="mt-1.5 leading-relaxed text-ink/70">{r.description}</p>
                        </div>
                      </motion.li>
                    )}
                  </ul>
                </div>
              </article>);

          })}
        </div>
      </section>

      <section aria-labelledby="flow-title" className="bg-brand-tint py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            id="flow-title"
            align="center"
            title="From Your Needs to Your Solar Solution"
            description="Every Synowatt system follows the same path — so the solution you get fits the way you actually use power." />
          

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
                    featured ? 'bg-brand-dark text-white shadow-[0_24px_50px_rgba(0,120,42,0.25)]' : 'bg-white ring-1 ring-ink/[0.07]'}`
                    }>
                    
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-2xl ${
                      featured ? 'bg-white/10 text-gold' : 'bg-brand-tint text-brand-dark'}`
                      }>
                      
                      <stage.icon className="h-7 w-7" aria-hidden />
                    </span>
                    <h3 className={`mt-6 font-display text-2xl font-extrabold ${featured ? 'text-white' : 'text-ink'}`}>
                      {stage.title}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {stage.items.map((it) =>
                      <li key={it} className={`flex gap-2.5 ${featured ? 'text-white/90' : 'text-ink/75'}`}>
                          <CheckIcon
                          className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-gold' : 'text-brand'}`}
                          strokeWidth={3}
                          aria-hidden />
                        
                          {it}
                        </li>
                      )}
                    </ul>
                  </motion.li>
                  {i < assessmentFlow.length - 1 &&
                  <motion.li
                    aria-hidden
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.1 + i * 0.18 }}
                    className="grid place-items-center py-1">
                    
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-ink">
                        <ArrowRightIcon className="hidden h-5 w-5 lg:block" />
                        <ArrowDownIcon className="h-5 w-5 lg:hidden" />
                      </span>
                    </motion.li>
                  }
                </React.Fragment>);

            })}
          </ol>

          <Reveal className="mt-12 flex justify-center" delay={0.2}>
            <Link href={quoteHref({ service: 'design-consultation' })} className={buttonClasses('green', 'lg')}>
              Book Your Energy Assessment
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>);

}