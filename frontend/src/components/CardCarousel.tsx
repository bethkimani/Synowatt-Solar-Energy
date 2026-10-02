'use client';

import React, { ReactNode, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface CardCarouselProps {
  id: string;
  title: string;
  description?: string;
  /** Carousel items. Each direct child should set its own width + `shrink-0 snap-start`. */
  children: ReactNode;
  footer?: ReactNode;
}

const arrowClass =
'grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-white text-ink transition-[background-color,color,border-color,transform,opacity] duration-150 hover:border-brand-dark hover:bg-brand-dark hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-40';

export function CardCarousel({ id, title, description, children, footer }: CardCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: trackRef });
  const [edges, setEdges] = useState({ start: true, end: false });

  useMotionValueEvent(scrollXProgress, 'change', (v) => {
    setEdges({ start: v <= 0.01, end: v >= 0.99 });
  });

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.clientWidth + 24 : 360;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading id={id} title={title} description={description} />
        <div className="flex gap-3">
          <button type="button" onClick={() => scroll(-1)} disabled={edges.start} aria-label="Previous" className={arrowClass}>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => scroll(1)} disabled={edges.end} aria-label="Next" className={arrowClass}>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-labelledby={id}
        className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 pb-4 lg:-mx-8 lg:scroll-px-8 lg:px-8">
        
        {children}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
        <div className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-ink/10" aria-hidden>
          <motion.div style={{ scaleX: scrollXProgress }} className="h-full origin-left rounded-full bg-accent" />
        </div>
        {footer}
      </div>
    </>);

}