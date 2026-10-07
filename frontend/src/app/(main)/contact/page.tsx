'use client';

import React from 'react';
import { ClockIcon, MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/contact/ContactForm';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { useHashScroll } from '@/hooks/useHashScroll';
import { useSeo } from '@/hooks/useSeo';
import { buttonClasses } from '@/utils/button';

const details = [
{ icon: PhoneIcon, label: 'Phone', value: company.phoneDisplay, href: company.phoneHref },
{ icon: MessageCircleIcon, label: 'WhatsApp', value: company.phoneDisplay, href: company.whatsappHref, external: true },
{ icon: MailIcon, label: 'Email', value: company.email, href: `mailto:${company.email}` },
{ icon: MapPinIcon, label: 'Location', value: company.location }];


export default function ContactPage() {
  useSeo({
    title: 'Contact Us & Request a Free Quote',
    description:
    'Request a free solar quote from Synowatt Power & Solar Ltd. Call or WhatsApp 0799 188 830, email info@synowatt.com, or visit us at Mountain Mall, Thika Road, Nairobi.',
    image: images.aerial
  });
  useHashScroll();

  return (
    <>
      <PageHero
        trail={[{ label: 'Contact' }]}
        title="Let’s Power Your Future"
        subtitle="Tell us about your energy needs and our team will help you find a suitable solar solution."
        image={images.aerial}
        imageAlt="Aerial view of Nairobi homes with rooftop solar panels at golden hour">
        
        <a href={company.phoneHref} className={buttonClasses('primary', 'lg')}>
          <PhoneIcon className="h-5 w-5" />
          Call {company.phoneDisplay}
        </a>
        <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('light', 'lg')}>
          <MessageCircleIcon className="h-5 w-5" />
          WhatsApp Us
        </a>
      </PageHero>

      <section aria-label="Request a quote and contact details" className="bg-brand-tint py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_1.3fr] lg:gap-14 lg:px-8">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
                Talk to us directly
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">
                Prefer a conversation? Call, WhatsApp or email {company.name} — we’re happy to answer your questions.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <dl className="mt-8 divide-y divide-ink/10 rounded-3xl bg-white px-6 ring-1 ring-ink/[0.06]">
                {details.map((d) =>
                <div key={d.label} className="flex items-center gap-4 py-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-dark">
                      <d.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-sm text-ink/60">{d.label}</dt>
                      <dd className="truncate font-semibold text-ink">
                        {d.href ?
                      <a
                        href={d.href}
                        {...d.external ? { target: '_blank', rel: 'noreferrer' } : {}}
                        className="transition-colors duration-150 hover:text-brand-dark">
                        
                            {d.value}
                          </a> :

                      d.value
                      }
                      </dd>
                    </div>
                  </div>
                )}
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 grid gap-2 sm:grid-cols-3">
              <a href={company.phoneHref} className={`${buttonClasses('outline', 'md')} px-3`}>
                <PhoneIcon className="h-4 w-4 text-brand-dark" />
                Call
              </a>
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={`${buttonClasses('green', 'md')} px-3`}>
                <MessageCircleIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a href={`mailto:${company.email}`} className={`${buttonClasses('outline', 'md')} px-3`}>
                <MailIcon className="h-4 w-4 text-brand-dark" />
                Email
              </a>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 overflow-hidden rounded-3xl bg-white ring-1 ring-ink/10">
              <iframe
                title={`Map showing ${company.location}`}
                src={company.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0" />
              
              <div className="flex items-center gap-3 px-5 py-4 text-sm text-ink/70">
                <ClockIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                Site visits by appointment — contact us to arrange a time.
              </div>
            </Reveal>
          </div>

          <div id="quote" className="order-1 scroll-mt-24 lg:order-2">
            <Reveal delay={0.05}>
              <React.Suspense fallback={null}>
                <ContactForm />
              </React.Suspense>
            </Reveal>
          </div>
        </div>
      </section>
    </>);

}