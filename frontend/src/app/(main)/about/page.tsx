'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckIcon, EyeIcon, MessageCircleIcon, TargetIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ParallaxImage } from '@/components/ParallaxImage';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Process } from '@/components/Process';
import { CtaBanner } from '@/components/CtaBanner';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { commitments, expertise, mission, values, vision, whoWeAre } from '@/data/about';
import { useSeo } from '@/hooks/useSeo';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';

export default function AboutPage() {
  useSeo({
    title: 'About Synowatt Power & Solar Ltd',
    description:
    'Synowatt Power & Solar Ltd designs, supplies, installs and maintains solar energy systems for homes, businesses and institutions in Kenya. Learn about our mission, values and approach.',
    image: images.team
  });

  return (
    <>
      <PageHero
        trail={[{ label: 'About' }]}
        title="Clean Energy. Reliable Power. A Brighter Tomorrow."
        subtitle="About Synowatt Power & Solar Ltd — solar energy solutions for homes, businesses and institutions in Kenya."
        image={images.team}
        imageAlt="Synowatt technicians installing rooftop solar panels at golden hour">
        
        <Link href="/contact#quote" className={buttonClasses('primary', 'lg')}>
          Talk to a Solar Expert
        </Link>
        <Link href="/services" className={buttonClasses('light', 'lg')}>
          Our Services
        </Link>
      </PageHero>

      {/* Who we are */}
      <section aria-labelledby="who-title" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <Reveal>
              <h2
                id="who-title"
                className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                
                Who We Are
              </h2>
              {whoWeAre.map((p, i) =>
              <p key={p} className={`leading-relaxed ${i === 0 ? 'mt-6 text-lg text-ink/75' : 'mt-4 text-ink/70'}`}>
                  {p}
                </p>
              )}
            </Reveal>
            <Reveal delay={0.1} className="mt-8 rounded-2xl bg-brand-tint p-6">
              <p className="font-display text-lg font-bold text-brand-deep">{company.tagline}</p>
              <p className="mt-1 text-sm text-ink/65">{company.location}</p>
            </Reveal>
          </div>
          <Reveal className="relative" delay={0.05}>
            <ParallaxImage
              src={images.installing}
              alt="Technicians installing solar panels on a roof"
              className="aspect-[4/5] rounded-3xl sm:aspect-square lg:aspect-[4/5]" />
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 }}
              className="absolute -bottom-6 left-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-left-8">
              
              <img
                src={images.inverterBattery}
                alt="Hybrid inverter and lithium battery installation"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover" />
              
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section aria-label="Mission and vision" className="bg-brand-tint py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="h-full">
            <div className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-brand-dark p-8 text-white sm:p-12">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-gold">
                <TargetIcon className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mt-8 font-display text-3xl font-extrabold">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">{mission}</p>
            </div>
          </Reveal>
          <Reveal className="h-full" delay={0.08}>
            <div className="flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-ink/[0.07] sm:p-12">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-tint text-brand-dark">
                <EyeIcon className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mt-8 font-display text-3xl font-extrabold text-ink">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">{vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            id="values-title"
            title="Our Core Values"
            description="The principles behind every consultation, installation and support call." />
          
          <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) =>
            <motion.li
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.06 }}
              className="border-t border-ink/10 pt-6">
              
                <v.icon className="h-7 w-7 text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{v.description}</p>
              </motion.li>
            )}
          </ul>
        </div>
      </section>

      <Process
        title="Our Approach to Solar Energy"
        description="Every project follows the same clear path — so you always know what happens next." />
      

      {/* Commitment */}
      <section aria-labelledby="commitment-title" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="commitment-title"
              title="Our Commitment to Customers"
              description="What you can expect from us — from the first conversation to long after installation." />
            
            <Reveal delay={0.1}>
              <ParallaxImage
                src={images.aerial}
                alt="Aerial view of Nairobi homes with rooftop solar panels"
                className="mt-8 aspect-[16/10] rounded-3xl" />
              
            </Reveal>
          </div>
          <ul className="grid content-start gap-x-10 sm:grid-cols-2">
            {commitments.map((c, i) =>
            <motion.li
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: i % 2 * 0.06 }}
              className="border-t border-ink/10 py-8">
              
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand-dark">
                  <c.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{c.description}</p>
              </motion.li>
            )}
          </ul>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="expertise-title" className="bg-ink py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <ParallaxImage
              src={images.consultation}
              alt="Solar engineer reviewing a system design with a client"
              className="aspect-[4/3] rounded-3xl" />
            
          </Reveal>
          <div>
            <SectionHeading
              id="expertise-title"
              tone="light"
              title="Professional Solar Expertise"
              description="From system design to installation and maintenance, our team covers every stage of your move to solar." />
            
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {expertise.map((h, i) =>
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.04 }}
                className="flex items-center gap-3 text-[15px] font-medium text-white">
                
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {h}
                </motion.li>
              )}
            </ul>
            <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row" delay={0.1}>
              <Link href="/contact#quote" className={buttonClasses('primary', 'lg')}>
                Talk to a Solar Expert
              </Link>
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('light', 'lg')}>
                <MessageCircleIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Talk to a Solar Expert"
        description="Tell us about your property and energy needs — we’ll recommend a solar solution that fits."
        primaryLabel="Talk to a Solar Expert"
        secondaryLabel="Explore Our Services"
        secondaryTo="/services" />
      
    </>);

}