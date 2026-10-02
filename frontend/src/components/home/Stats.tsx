import React from 'react';
import { Counter } from '../Counter';
import { Reveal } from '../Reveal';
import { stats } from '../../data/hero';

export function Stats() {
  return (
    <section aria-label="Synowatt at a glance" className="relative z-10 -mt-14 px-5 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(34,34,34,0.12)] lg:grid-cols-4">
          {stats.map((stat, i) =>
          <div
            key={stat.label}
            className={`flex flex-col-reverse gap-1 p-5 sm:p-7 ${i % 2 === 1 ? 'border-l border-ink/10' : ''} ${
            i > 1 ? 'border-t border-ink/10 lg:border-t-0' : ''} ${
            i === 2 ? 'lg:border-l' : ''}`}>
            
              <dt className="text-sm text-ink/65">{stat.label}</dt>
              <dd className="font-display text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-[28px]">
                {stat.value !== undefined ?
              <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} /> :

              stat.text
              }
              </dd>
            </div>
          )}
        </dl>
      </Reveal>
    </section>);

}