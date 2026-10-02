import React from 'react';
import { motion } from 'framer-motion';
import { InfoIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { appliances } from '../../data/solutions';
import { EASE_OUT } from '../../utils/motion';

export function Appliances() {
  return (
    <section aria-labelledby="appliances-title" className="bg-brand-dark py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            id="appliances-title"
            tone="light"
            title="What Our Solar Systems Can Support"
            description="A well-sized hybrid system can keep the everyday essentials in your home or business running — day and night." />
          
          <Reveal delay={0.1} className="mt-8 flex gap-3 rounded-2xl bg-brand-deep/60 p-5">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
            <p className="text-sm leading-relaxed text-white/85">
              Actual appliance capacity and runtime depend on system configuration, energy consumption, weather
              conditions and battery capacity.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {appliances.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.li
                key={a.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.035 }}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/[0.07] px-3 py-6 text-center ring-1 ring-white/10">
                
                <motion.span
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-dark"
                  initial={{ y: 0 }}
                  whileInView={{ y: [0, -4, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 + i * 0.035 }}>
                  
                  <Icon className="h-6 w-6" aria-hidden />
                </motion.span>
                <span className="text-sm font-semibold text-white">{a.label}</span>
              </motion.li>);

          })}
        </ul>
      </div>
    </section>);

}