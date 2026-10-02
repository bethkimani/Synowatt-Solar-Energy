import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, QuoteIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { testimonials } from '../data/trust';

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-brand-tint py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-dark">Testimonials</p>
            <h2 id="testimonials-title" className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Homeowners and businesses trust Synowatt
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.name}-${item.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/[0.06] shadow-sm"
            >
              <QuoteIcon className="h-8 w-8 text-accent" aria-hidden />
              <p className="mt-5 flex-1 text-lg leading-relaxed text-ink/75">“{item.quote}”</p>
              <div className="mt-6 border-t border-ink/10 pt-5">
                <p className="font-display text-xl font-bold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-ink/60">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="/contact#quote" className="inline-flex items-center gap-2 font-semibold text-brand-dark transition-colors hover:text-brand-deep">
            Let’s plan your energy upgrade
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
