import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { PackageCard } from '../solutions/PackageCard';
import { solarPackages } from '../../data/solutions';
import { images } from '../../data/images';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

export function SolutionsPreview() {
  return (
    <section aria-labelledby="solutions-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="solutions-title"
          title="Solar Solutions Designed Around Your Energy Needs"
          description="Example hybrid systems to help you get started. Every installation is confirmed after an energy assessment of your property." />
        

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solarPackages.map((pkg, i) =>
          <motion.div
            key={pkg.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.08 }}>
            
              <PackageCard pkg={pkg} variant="compact" />
            </motion.div>
          )}

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.16 }}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-brand-deep p-7 text-white sm:p-8">
            
            <img
              src={images.inverterBattery}
              alt="Wall-mounted hybrid inverter and lithium battery storage unit"
              loading="lazy"
              className="-mx-7 -mt-7 mb-7 aspect-[16/10] w-[calc(100%+3.5rem)] max-w-none object-cover sm:-mx-8 sm:-mt-8 sm:w-[calc(100%+4rem)]" />
            
            <h3 className="font-display text-2xl font-extrabold leading-tight">Not sure which size fits?</h3>
            <p className="mt-3 leading-relaxed text-white/85">
              System size depends on your appliances, usage and property. See what goes into choosing the right
              solution — or ask us to assess it for you.
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Link href="/solutions" className={`${buttonClasses('primary', 'lg')} group w-full`}>
                View Solar Solutions
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/solutions#sizing" className={`${buttonClasses('light', 'lg')} w-full`}>
                How We Size Systems
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>);

}