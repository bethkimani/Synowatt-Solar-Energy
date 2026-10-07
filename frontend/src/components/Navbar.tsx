
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircleIcon, PhoneIcon } from 'lucide-react';

import { Logo } from './Logo';
import { navItems } from '../data/navigation';
import { company } from '../data/company';
import { buttonClasses } from '../utils/button';
import { EASE_OUT } from '../utils/motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname();

  /*
   * Detect whether the user has scrolled down.
   */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    // Set the initial state.
    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setOpen(false);
    };
    const closeOnHistoryNavigation = () => setOpen(false);

    desktopQuery.addEventListener('change', closeOnDesktop);
    window.addEventListener('popstate', closeOnHistoryNavigation);
    return () => {
      desktopQuery.removeEventListener('change', closeOnDesktop);
      window.removeEventListener('popstate', closeOnHistoryNavigation);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  /*
   * Prevent the page behind the mobile menu
   * from scrolling while the menu is open.
   */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  const lineTransition = {
    duration: 0.2,
    ease: EASE_OUT,
  };

  /*
   * Determine whether a navigation item is active.
   *
   * The homepage must match only "/".
   * Other pages can match their exact pathname.
   */
  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-200 ease-out ${
        solid
          ? 'bg-white py-2 shadow-[0_6px_24px_rgba(34,34,34,0.08)]'
          : 'bg-transparent py-4'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8"
      >
        {/* Logo */}
        <Logo light={!solid} compact={scrolled} />

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => {
            const active = isActive(item.to);

            return (
              <li key={item.to}>
                <Link
                  href={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={`relative whitespace-nowrap text-sm font-medium transition-colors duration-150 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-200 ${
                    active
                      ? 'after:scale-x-100'
                      : 'after:scale-x-0 hover:after:scale-x-100'
                  } ${
                    solid
                      ? active
                        ? 'text-brand-dark'
                        : 'text-ink/80 hover:text-brand-dark'
                      : active
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Desktop Quote Button */}
          <div className="hidden sm:block">
            <Link href="/contact#quote" className={buttonClasses('primary', 'md')}>
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden ${
              solid
                ? 'text-ink hover:bg-ink/5'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <span
              className="relative block h-4 w-5"
              aria-hidden="true"
            >
              {/* Top line */}
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current"
                animate={
                  open
                    ? {
                        y: 7,
                        rotate: 45,
                      }
                    : {
                        y: 0,
                        rotate: 0,
                      }
                }
                transition={lineTransition}
              />

              {/* Middle line */}
              <motion.span
                className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current"
                animate={{
                  opacity: open ? 0 : 1,
                  scaleX: open ? 0.6 : 1,
                }}
                transition={{
                  duration: 0.15,
                  ease: EASE_OUT,
                }}
              />

              {/* Bottom line */}
              <motion.span
                className="absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current"
                animate={
                  open
                    ? {
                        y: -7,
                        rotate: -45,
                      }
                    : {
                        y: 0,
                        rotate: 0,
                      }
                }
                transition={lineTransition}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.2,
              ease: EASE_OUT,
            }}
            className="h-[calc(100svh-64px)] overflow-y-auto border-t border-ink/5 bg-white xl:hidden"
          >
            {/* Mobile Navigation Links */}
            <ul className="mx-auto max-w-7xl px-5 py-4">
              {navItems.map((item, index) => {
                const active = isActive(item.to);

                return (
                  <motion.li
                    key={item.to}
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: EASE_OUT,
                      delay: index * 0.03,
                    }}
                  >
                    <Link
                      href={item.to}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between border-b border-ink/5 py-4 font-display text-xl font-bold transition-colors duration-150 hover:text-brand-dark ${
                        active ? 'text-brand-dark' : 'text-ink'
                      }`}
                    >
                      <span>{item.label}</span>

                      {active && (
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full bg-accent"
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Mobile Actions */}
            <div className="mx-auto grid max-w-7xl gap-3 px-5 pb-8 sm:grid-cols-3">
              {/* Quote */}
              <Link
                href="/contact#quote"
                className={buttonClasses('primary', 'lg')}
              >
                Get a Free Quote
              </Link>

              {/* WhatsApp */}
              <a
                href={company.whatsappHref}
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses('green', 'lg')}
              >
                <MessageCircleIcon className="h-5 w-5" />
                WhatsApp Us
              </a>

              {/* Phone */}
              <a
                href={company.phoneHref}
                onClick={() => setOpen(false)}
                className={buttonClasses('outline', 'lg')}
              >
                <PhoneIcon className="h-5 w-5 text-brand-dark" />
                {company.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
