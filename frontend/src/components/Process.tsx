import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { processSteps } from '../data/trust';
import { EASE_OUT } from '../utils/motion';

const STEP_DELAY = 0.3;

interface ProcessProps {
  title?: string;
  description?: string;
  className?: string;
}

export function Process({
  title = 'How It Works',
  description = 'A clear, four-step path from your first call to reliable solar power.',
  className = 'bg-brand-tint'
}: ProcessProps) {
  return (
    <section aria-labelledby="process-title" className={`py-24 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading id="process-title" align="center" title={title} description={description} />

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
          <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-ink/10 lg:block">
            <motion.div
              className="h-full origin-left bg-brand"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: STEP_DELAY * 3, ease: 'linear', delay: 0.15 }} />
            
          </div>
          <div aria-hidden className="absolute bottom-6 left-7 top-6 w-0.5 bg-ink/10 lg:hidden">
            <motion.div
              className="h-full w-full origin-top bg-brand"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: STEP_DELAY * 3, ease: 'linear', delay: 0.15 }} />
            
          </div>

          {processSteps.map((step, i) =>
          <li key={step.title} className="relative flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              <motion.span
              initial={{ opacity: 0, scale: 0.96, backgroundColor: '#FFFFFF', color: '#00782A' }}
              whileInView={{ opacity: 1, scale: 1, backgroundColor: '#00782A', color: '#FFFFFF' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.15 + i * STEP_DELAY }}
              className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-brand-dark font-display text-lg font-extrabold">
              
                {String(i + 1).padStart(2, '0')}
              </motion.span>
              <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 + i * STEP_DELAY }}
              className="pt-2 lg:max-w-[260px] lg:pt-6">
              
                <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{step.description}</p>
              </motion.div>
            </li>
          )}
        </ol>
      </div>
    </section>);

}