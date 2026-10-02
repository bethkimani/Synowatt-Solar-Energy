'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import type { ArticleSection } from '../../types/content';

interface TableOfContentsProps {
  sections: ArticleSection[];
  variant?: 'sidebar' | 'collapsible';
}

function scrollToSection(e: React.MouseEvent, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function TableOfContents({ sections, variant = 'sidebar' }: TableOfContentsProps) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-110px 0px -65% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const list =
  <ol className="space-y-1 border-l border-ink/10">
      {sections.map((s) => {
      const isActive = active === s.id;
      return (
        <li key={s.id}>
            <a
            href={`#${s.id}`}
            onClick={(e) => scrollToSection(e, s.id)}
            aria-current={isActive ? 'location' : undefined}
            className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors duration-150 ${
            isActive ? 'border-brand-dark font-semibold text-brand-dark' : 'border-transparent text-ink/60 hover:text-ink'}`
            }>
            
              {s.heading}
            </a>
          </li>);

    })}
    </ol>;


  if (variant === 'collapsible') {
    return (
      <details className="group rounded-2xl bg-brand-tint p-5">
        <summary className="flex cursor-pointer list-none items-center justify-between font-display font-bold text-ink [&::-webkit-details-marker]:hidden">
          In this article
          <ChevronDownIcon className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" aria-hidden />
        </summary>
        <nav aria-label="Table of contents" className="mt-4">
          {list}
        </nav>
      </details>);

  }

  return (
    <nav aria-label="Table of contents">
      <p className="mb-4 font-display text-sm font-bold text-ink">In this article</p>
      {list}
    </nav>);

}