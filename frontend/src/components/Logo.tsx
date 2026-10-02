import React from 'react';
import Link from 'next/link';
import { company } from '../data/company';

interface LogoProps {
  light?: boolean;
  compact?: boolean;
}

export function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`${company.name} — home`}>
      
      <img
        src={company.logo}
        alt=""
        className={`rounded-full bg-white object-contain ring-1 ring-black/5 transition-[width,height] duration-200 ease-out ${
        compact ? 'h-10 w-10' : 'h-12 w-12'}`
        } />
      
      <span className="leading-tight">
        <span className="block font-display text-lg font-extrabold tracking-tight">
          <span className={light ? 'text-white' : 'text-brand-dark'}>Syno</span>
          <span className="text-accent">watt</span>
        </span>
        <span className={`block text-[11px] font-semibold ${light ? 'text-white/80' : 'text-ink/60'}`}>
          Power &amp; Solar Ltd
        </span>
      </span>
    </Link>);

}