"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, MessageCircleIcon, PhoneIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navItems } from '../data/navigation';
import { company } from '../data/company';
import { buttonClasses } from '../utils/button';
import { EASE_OUT } from '../utils/motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;
  const lineTransition = { duration: 0.2, ease: EASE_OUT };

  return (
    <header className={solid ? 'sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-md shadow-sm' : 'sticky top-0 z-50 bg-transparent'}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo compact={!solid} />

        <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.to || (item.to !== '/' && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active ? 'bg-brand-tint text-brand-dark' : 'text-ink/70 hover:text-brand-dark'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={company.phoneHref} className={buttonClasses('outline', 'md')}>
            <PhoneIcon className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
          <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('green', 'md')}>
            <MessageCircleIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-sm lg:hidden"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={lineTransition}
            className="overflow-hidden border-t border-ink/10 bg-white lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {navItems.map((item) => {
                const active = pathname === item.to || (item.to !== '/' && pathname.startsWith(item.to));
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    className={`rounded-2xl px-3 py-3 text-sm font-medium ${
                      active ? 'bg-brand-tint text-brand-dark' : 'text-ink/70 hover:bg-ink/[0.02]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <a href={company.phoneHref} className={buttonClasses('outline', 'md')}>
                  <PhoneIcon className="h-4 w-4" />
                  Call
                </a>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('green', 'md')}>
                  <MessageCircleIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
