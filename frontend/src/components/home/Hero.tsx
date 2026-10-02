'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, SunIcon } from 'lucide-react';
import { heroSlides } from '../../data/hero';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

const SLIDE_MS = 6000;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT } }
};

const arrowClass =
'grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition-[background-color,color,transform] duration-150 hover:bg-white hover:text-ink active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const n = heroSlides.length;
  const isPaused = paused || tabHidden;

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % n), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [index, isPaused, n]);

  const go = (d: number) => setIndex((i) => (i + d + n) % n);
  const slide = heroSlides[index];

  return (
    <motion.section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Synowatt solar installations"
      style={{ touchAction: 'pan-y' }}
      onPanEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 60 && Math.abs(info.offset.x) > Math.abs(info.offset.y)) {
          go(info.offset.x < 0 ? 1 : -1);
        }
      }}
      className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-ink lg:h-[100svh] lg:max-h-[960px]">
      
      <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[5%] -z-10 h-[115%]">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            
            <motion.img
              src={slide.image}
              alt={slide.alt}
              initial={{ scale: reduce ? 1 : 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: 'linear' }}
              draggable={false}
              className="h-full w-full select-none object-cover" />
            
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-y-0 left-0 w-full bg-ink/25 lg:w-3/5" />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-44 pt-32 lg:px-8 lg:pb-40">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p
            variants={item}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-white/90">
            
            <SunIcon className="h-4 w-4 text-gold" aria-hidden />
            <span>Solar Solutions</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
            <span>Professional Installation</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
            <span>Reliable Support</span>
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-6 font-display text-[42px] font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            
            Powering a Brighter, <span className="text-brand">Greener Kenya.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Reliable solar energy solutions for homes, businesses, offices and institutions.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#quote" className={`${buttonClasses('primary', 'lg')} group`}>
              Get a Free Solar Quote
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/services" className={buttonClasses('light', 'lg')}>
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 bottom-24 lg:bottom-28"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}>
        
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <div className="min-w-0" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className="truncate text-sm font-medium text-white/85">
                
                <span className="tabular-nums text-gold">
                  {String(index + 1).padStart(2, '0')}/{String(n).padStart(2, '0')}
                </span>
                <span className="mx-2 text-white/40">—</span>
                {slide.caption}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden items-center gap-1.5 sm:flex">
              {heroSlides.map((s, i) =>
              <button
                key={s.caption}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}: ${s.caption}`}
                aria-current={i === index}
                className="group py-3">
                
                  <span className="relative block h-1 w-10 overflow-hidden rounded-full bg-white/30 transition-colors duration-150 group-hover:bg-white/50">
                    {i === index &&
                  <motion.span
                    key={`${index}-${isPaused}`}
                    className="absolute inset-0 origin-left rounded-full bg-accent"
                    initial={{ scaleX: isPaused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: isPaused ? 0 : SLIDE_MS / 1000, ease: 'linear' }} />

                  }
                  </span>
                </button>
              )}
            </div>
            <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className={arrowClass}>
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next slide" className={arrowClass}>
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>);

}