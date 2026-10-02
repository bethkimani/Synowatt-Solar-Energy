'use client';

import React, { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleCheckIcon, InfoIcon, LoaderCircleIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SunRays } from '../SunRays';
import { integrations } from '../../data/contact';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

type Status = 'idle' | 'submitting' | 'subscribed' | 'not-connected' | 'error';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    if (!integrations.newsletterEndpoint) {
      setStatus('not-connected');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch(integrations.newsletterEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('subscribed');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Reveal>
      <div className="relative isolate overflow-hidden rounded-3xl bg-brand-dark px-7 py-12 sm:px-12 lg:py-16">
        <SunRays className="absolute -right-40 top-1/2 -z-10 h-[560px] w-[560px] -translate-y-1/2" />
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 id="newsletter-title" className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl">
              Stay Updated with Solar Insights
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85">
              Receive useful solar energy tips, industry updates, and practical advice.
            </p>
          </div>

          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              {status === 'subscribed' || status === 'not-connected' ?
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className="flex gap-3 rounded-2xl bg-white p-5">
                
                  {status === 'subscribed' ?
                <CircleCheckIcon className="h-6 w-6 shrink-0 text-brand" aria-hidden /> :

                <InfoIcon className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                }
                  <div>
                    <p className="font-semibold text-ink">
                      {status === 'subscribed' ? 'You’re subscribed — thank you!' : 'Newsletter sign-ups are coming soon'}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {status === 'subscribed' ?
                    `We’ll send solar insights to ${email}.` :
                    'Our newsletter isn’t live yet, so your email has not been saved. Please check back soon — or follow new articles here on the blog.'}
                    </p>
                    <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setEmail('');
                    }}
                    className="mt-3 text-sm font-semibold text-brand-dark underline-offset-4 hover:underline">
                    
                      Done
                    </button>
                  </div>
                </motion.div> :

              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={onSubmit}
                noValidate
                aria-labelledby="newsletter-title">
                
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="you@example.com"
                    aria-invalid={!!error}
                    className="h-[52px] w-full flex-1 rounded-full border border-transparent bg-white px-6 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-gold/40" />
                  
                    <button type="submit" disabled={status === 'submitting'} className={buttonClasses('primary', 'lg')}>
                      {status === 'submitting' ? <LoaderCircleIcon className="h-5 w-5 animate-spin" aria-hidden /> : null}
                      Subscribe
                    </button>
                  </div>
                  {error &&
                <p className="mt-2 pl-6 text-sm font-medium text-gold" role="alert">
                      {error}
                    </p>
                }
                  {status === 'error' &&
                <p className="mt-2 pl-6 text-sm font-medium text-gold" role="alert">
                      Something went wrong. Please try again.
                    </p>
                }
                  <p className="mt-3 pl-6 text-xs text-white/65">No spam. Unsubscribe at any time.</p>
                </motion.form>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Reveal>);

}