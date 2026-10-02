import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { SunRays } from './SunRays';
import { company } from '../data/company';
import { buttonClasses } from '../utils/button';

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  /** When set, replaces the WhatsApp button with an internal link. */
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CtaBanner({
  title = 'Ready to Switch to Reliable Solar Power?',
  description = 'Talk to Synowatt Power & Solar Ltd about a solar solution designed around your energy needs.',
  primaryLabel = 'Get a Free Quote',
  primaryTo = '/contact#quote',
  secondaryLabel,
  secondaryTo
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-brand-dark py-24 lg:py-28">
      <SunRays className="absolute -right-40 top-1/2 -z-10 h-[720px] w-[720px] -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 id="cta-title" className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">{description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryTo} className={`${buttonClasses('primary', 'lg')} group`}>
              {primaryLabel}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
            {secondaryLabel && secondaryTo ?
            <Link href={secondaryTo} className={buttonClasses('white', 'lg')}>
                {secondaryLabel}
              </Link> :

            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('white', 'lg')}>
                <MessageCircleIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
            }
          </div>
        </Reveal>
      </div>
    </section>);

}