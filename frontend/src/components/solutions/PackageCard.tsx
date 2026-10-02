import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, BatteryChargingIcon, CheckIcon, CpuIcon, SunIcon } from 'lucide-react';
import type { SolarPackage } from '../../types/content';
import { buttonClasses } from '../../utils/button';
import { quoteHref } from '../../utils/quote';

interface PackageCardProps {
  pkg: SolarPackage;
  variant?: 'full' | 'compact';
}

export function PackageCard({ pkg, variant = 'full' }: PackageCardProps) {
  const full = variant === 'full';
  const specs = [
  { icon: CpuIcon, label: 'Inverter', value: pkg.inverter },
  { icon: BatteryChargingIcon, label: 'Battery', value: pkg.battery },
  { icon: SunIcon, label: 'Panels', value: pkg.panels }];


  return (
    <article
      id={full ? pkg.slug : undefined}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(34,34,34,0.10)]">
      
      {full &&
      <div className="relative aspect-[16/9] overflow-hidden">
          <img
          src={pkg.image}
          alt={pkg.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
        
          <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-deep shadow-sm">
            Example system
          </span>
        </div>
      }

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <header>
          <p className="text-sm font-semibold text-brand-dark">{pkg.type}</p>
          <h3 className="mt-1 font-display text-5xl font-extrabold tracking-tight text-ink">{pkg.capacity}</h3>
        </header>

        <dl className="mt-7 divide-y divide-ink/10 border-y border-ink/10">
          {specs.map((row) =>
          <div key={row.label} className="flex items-center gap-4 py-3.5">
              <row.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <dt className="w-20 shrink-0 text-sm text-ink/60">{row.label}</dt>
              <dd className="text-[15px] font-semibold text-ink">{row.value}</dd>
            </div>
          )}
        </dl>

        {full &&
        <div className="mt-7 grid gap-7 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-ink">Key features</h4>
              <ul className="mt-3 space-y-2">
                {pkg.features.map((f) =>
              <li key={f} className="flex gap-2.5 text-[15px] leading-snug text-ink/75">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} aria-hidden />
                    {f}
                  </li>
              )}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink">What’s included</h4>
              <ul className="mt-3 space-y-2">
                {pkg.components.map((c) =>
              <li key={c} className="flex gap-2.5 text-[15px] leading-snug text-ink/75">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} aria-hidden />
                    {c}
                  </li>
              )}
              </ul>
            </div>
          </div>
        }

        <div className="mt-7">
          <h4 className="text-sm font-semibold text-ink">Suitable applications</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {pkg.suitableFor.map((s) =>
            <li key={s} className="rounded-full bg-brand-tint px-3 py-1 text-sm font-medium text-brand-deep">
                {s}
              </li>
            )}
          </ul>
        </div>

        <div className="mt-auto pt-8">
          <p className="mb-4 text-sm text-ink/60">
            {pkg.price ?
            <>
                From <span className="font-display text-xl font-bold text-ink">{pkg.price}</span>
              </> :

            <>
                <span className="font-semibold text-ink">Pricing on Request</span> — tailored to your site
              </>
            }
          </p>
          <div className={`flex flex-col gap-3 ${full ? '' : 'sm:flex-row lg:flex-col xl:flex-row'}`}>
            <Link
              href={quoteHref({ service: 'hybrid-solar-systems', solution: pkg.slug })}
              className={`${buttonClasses('primary', 'lg')} flex-1`}>
              
              Request a Quote
            </Link>
            {!full &&
            <Link href={`/solutions#${pkg.slug}`} className={`${buttonClasses('outline', 'lg')} group flex-1`}>
                Details
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            }
          </div>
        </div>
      </div>
    </article>);

}