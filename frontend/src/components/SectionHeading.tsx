import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  id?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
}

export function SectionHeading({ id, title, description, align = 'left', tone = 'dark' }: SectionHeadingProps) {
  const light = tone === 'light';
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2
        id={id}
        className={`font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[44px] ${
        light ? 'text-white' : 'text-ink'}`
        }>
        
        {title}
      </h2>
      {description &&
      <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/85' : 'text-ink/70'}`}>{description}</p>
      }
    </Reveal>);

}