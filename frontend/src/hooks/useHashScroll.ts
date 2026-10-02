'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const { hash } = window.location;
    if (!hash) return;

    const id = hash.slice(1);
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    requestAnimationFrame(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }, [pathname]);
}
