'use client';

import React, { Suspense, useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { InfoIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectDialog } from '@/components/projects/ProjectDialog';
import { CtaBanner } from '@/components/CtaBanner';
import { images } from '@/data/images';
import { projects } from '@/data/projects';
import { useSeo } from '@/hooks/useSeo';
import type { ProjectCategory } from '@/types';
import { EASE_OUT } from '@/utils/motion';

type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'Residential', 'Commercial', 'Institutional'];

function ProjectsPageContent() {
  useSeo({
    title: 'Our Solar Installations',
    description:
    'Browse residential, commercial and institutional solar installations by Synowatt Power & Solar Ltd.',
    image: images.commercialRoof
  });
  const [active, setActive] = useState<Filter>('All');
  const router = useRouter();
  const params = useSearchParams();
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);
  const selected = projects.find((p) => p.slug === params.get('project')) ?? null;

  const close = useCallback(() => router.replace('/projects', { scroll: false }), [router]);

  const navigateProject = useCallback(
    (dir: number) => {
      if (!selected) return;
      const list = visible.includes(selected) ? visible : projects;
      const idx = list.indexOf(selected);
      const next = list[(idx + dir + list.length) % list.length];
      router.replace(`/projects?project=${next.slug}`, { scroll: false });
    },
    [selected, visible, router]
  );

  return (
    <>
      <PageHero
        trail={[{ label: 'Projects' }]}
        title="Our Solar Installations"
        subtitle="Solar solutions for homes, businesses and institutions."
        image={images.commercialRoof}
        imageAlt="Commercial rooftop solar installation" />
      

      <section aria-labelledby="portfolio-title" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              id="portfolio-title"
              title="Project Portfolio"
              description="Browse installations by property type. Select a project to see more." />
            
            <Reveal delay={0.1}>
              <div
                role="group"
                aria-label="Filter projects by category"
                className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:inline-flex sm:rounded-full sm:bg-brand-tint sm:p-1 sm:px-1">
                
                {filters.map((f) =>
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={active === f}
                  className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active === f ? 'text-white' : 'bg-brand-tint text-ink/70 hover:text-brand-dark sm:bg-transparent'}`
                  }>
                  
                    {active === f &&
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-brand-dark"
                    transition={{ duration: 0.25, ease: EASE_OUT }} />

                  }

                    <span className="relative">{f}</span>
                  </button>
                )}
              </div>
            </Reveal>
          </div>

          <motion.ul layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p, i) =>
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.04 }}>
                
                  <ProjectCard project={p} />
                </motion.li>
              )}
            </AnimatePresence>
          </motion.ul>

          <div className="mt-10 flex gap-3 rounded-2xl border border-dashed border-ink/20 p-5">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
            <p className="text-sm leading-relaxed text-ink/65">
              Images shown are representative placeholders. Synowatt project photos, locations and details will be
              added here.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Planning a Solar Installation?"
        description="Whether it’s a home, business or institution, we’ll design a system around your energy needs." />
      

      <AnimatePresence>
        {selected && <ProjectDialog project={selected} onClose={close} onNavigate={navigateProject} />}
      </AnimatePresence>
    </>);

}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsPageContent />
    </Suspense>
  );
}