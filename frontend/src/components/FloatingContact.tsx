'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { company } from '../data/company';
import { EASE_OUT } from '../utils/motion';

export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible &&
      <>
          {/* Mobile sticky bar */}
          <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-ink/10 bg-white p-3 shadow-[0_-8px_24px_rgba(34,34,34,0.08)] md:hidden">
          
            <a
            href={company.phoneHref}
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 text-sm font-semibold text-ink transition-transform duration-150 active:scale-[0.97]">
            
              <PhoneIcon className="h-4 w-4" aria-hidden />
              Call
            </a>
            <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand-dark text-sm font-semibold text-white transition-transform duration-150 active:scale-[0.97]">
            
              <MessageCircleIcon className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <Link
            href="/contact#quote"
            className="flex h-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-ink transition-transform duration-150 active:scale-[0.97]">
            
              Free Quote
            </Link>
          </motion.div>

          {/* Desktop floating WhatsApp */}
          <motion.a
          href={company.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Synowatt on WhatsApp"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="group fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-2 rounded-full bg-brand-dark pl-4 pr-5 font-semibold text-white shadow-[0_12px_30px_rgba(0,120,42,0.35)] transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:flex">
          
            <MessageCircleIcon className="h-6 w-6" aria-hidden />
            WhatsApp Us
          </motion.a>
        </>
      }
    </AnimatePresence>);

}