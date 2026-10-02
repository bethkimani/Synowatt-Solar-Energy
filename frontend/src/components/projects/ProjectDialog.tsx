'use client';

import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, InfoIcon, MapPinIcon, XIcon } from 'lucide-react';
import type { Project } from '../../types/content';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';
import { quoteHref } from '../../utils/quote';

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
  onNavigate: (dir: number) => void;
}

const navClass =
'grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-[background-color,color,border-color,transform] duration-150 hover:border-brand-dark hover:bg-brand-dark hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

export function ProjectDialog({ project, onClose, onNavigate }: ProjectDialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNavigate]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/70 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}>
      
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: EASE_OUT }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-t-3xl bg-white sm:rounded-3xl">
        
        <div className="grid lg:grid-cols-[1.2fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink lg:aspect-auto lg:min-h-[520px]">
            <AnimatePresence initial={false}>
              <motion.img
                key={project.slug}
                src={project.image}
                alt={project.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="absolute inset-0 h-full w-full object-cover" />
              
            </AnimatePresence>
            <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white">
              Representative image
            </span>
          </div>

          <div className="relative flex flex-col p-7 sm:p-9">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink/5 text-ink transition-[background-color,transform] duration-150 hover:scale-105 hover:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              
              <XIcon className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}>
                
                <span className="inline-block rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand-deep">
                  {project.category}
                </span>
                <h2 id="project-dialog-title" className="mt-4 pr-10 font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-4 leading-relaxed text-ink/75">{project.description}</p>
                <p className="mt-5 flex items-center gap-2 text-sm text-ink/65">
                  <MapPinIcon className="h-4 w-4 text-accent" aria-hidden />
                  {project.location ?? 'Location to be added'}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex gap-3 rounded-2xl border border-dashed border-accent/60 bg-accent/5 p-4">
              <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <p className="text-sm leading-relaxed text-ink/75">
                <span className="font-semibold text-ink">Placeholder:</span> full project details — system size,
                components, scope and photos — will be added by Synowatt.
              </p>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
              <Link href={quoteHref({ property: project.category })} className={buttonClasses('primary', 'lg')}>
                Request a Similar System
              </Link>
              <div className="flex gap-2">
                <button type="button" onClick={() => onNavigate(-1)} aria-label="Previous project" className={navClass}>
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => onNavigate(1)} aria-label="Next project" className={navClass}>
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>);

}