import React, { ReactNode, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { SunRays } from './SunRays';
import { EASE_OUT } from '../utils/motion';

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  trail: Crumb[];
  title: ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT } }
};

export function PageHero({ trail, title, subtitle, image, imageAlt, children }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '20%']);

  return (
    <section ref={ref} className="relative isolate flex min-h-[480px] items-end overflow-hidden bg-ink sm:min-h-[540px] lg:min-h-[600px]">
      <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[5%] -z-10 h-[115%]">
        <motion.img
          src={image}
          alt={imageAlt}
          initial={{ scale: reduce ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: 'linear' }}
          className="h-full w-full object-cover" />
        
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-y-0 left-0 w-full bg-ink/25 lg:w-3/5" />
      </motion.div>
      <SunRays className="absolute -right-56 -top-56 -z-10 h-[620px] w-[620px]" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-8 lg:pb-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.nav variants={item} aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-white/80">
              <li>
                <Link href="/" className="transition-colors duration-150 hover:text-white">
                  Home
                </Link>
              </li>
              {trail.map((c, i) =>
              <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRightIcon className="h-3.5 w-3.5 text-white/50" aria-hidden />
                  {c.to && i < trail.length - 1 ?
                <Link href={c.to} className="transition-colors duration-150 hover:text-white">
                      {c.label}
                    </Link> :

                <span aria-current="page" className="text-gold">
                      {c.label}
                    </span>
                }
                </li>
              )}
            </ol>
          </motion.nav>
          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            
            {title}
          </motion.h1>
          {subtitle &&
          <motion.p variants={item} className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              {subtitle}
            </motion.p>
          }
          {children &&
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              {children}
            </motion.div>
          }
        </motion.div>
      </div>
    </section>);

}