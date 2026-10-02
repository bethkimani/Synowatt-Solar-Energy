import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { ParallaxImage } from '../ParallaxImage';
import { Reveal } from '../Reveal';
import { company } from '../../data/company';
import { images } from '../../data/images';
import { whoWeAre } from '../../data/about';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

export function HomeIntro() {
  return (
    <section aria-labelledby="intro-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <ParallaxImage
            src={images.installing}
            alt="Synowatt technicians installing solar panels on a roof"
            className="aspect-[4/5] rounded-3xl sm:aspect-square lg:aspect-[4/5]" />
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 }}
            className="absolute -bottom-6 right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-right-8">
            
            <img
              src={images.panelCleaning}
              alt="Technician inspecting and cleaning rooftop solar panels"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover" />
            
          </motion.div>
          <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-deep shadow-md">
            {company.tagline}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2
              id="intro-title"
              className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
              
              Clean Energy. Reliable Power. A Brighter Tomorrow.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">{whoWeAre[0]}</p>
            <p className="mt-4 leading-relaxed text-ink/70">
              From the first consultation to installation and long-term support, we design every system around how you
              actually use energy.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row" delay={0.1}>
            <Link href="/about" className={`${buttonClasses('green', 'lg')} group`}>
              More About Synowatt
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/contact#quote" className={buttonClasses('outline', 'lg')}>
              Talk to a Solar Expert
            </Link>
          </Reveal>
        </div>
      </div>
    </section>);

}