'use client';

import React, { useState } from 'react';
import { CheckIcon, LinkIcon, MessageCircleIcon } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

interface ShareLinksProps {
  title: string;
  layout?: 'row' | 'stack';
}

const btn =
'grid h-10 w-10 place-items-center rounded-full bg-brand-tint text-brand-dark transition-[background-color,color,transform] duration-150 hover:-translate-y-0.5 hover:bg-brand-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

export function ShareLinks({ title, layout = 'row' }: ShareLinksProps) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={layout === 'stack' ? '' : 'flex flex-wrap items-center gap-4'}>
      <p className={`font-display text-sm font-bold text-ink ${layout === 'stack' ? 'mb-3' : ''}`}>Share this article</p>
      <ul className="flex gap-2">
        <li>
          <a href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp" className={btn}>
            <MessageCircleIcon className="h-[18px] w-[18px]" />
          </a>
        </li>
        <li>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook" className={btn}>
            <SocialIcon name="Facebook" className="h-[18px] w-[18px]" />
          </a>
        </li>
        <li>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" className={btn}>
            <SocialIcon name="LinkedIn" className="h-[18px] w-[18px]" />
          </a>
        </li>
        <li>
          <button type="button" onClick={copy} aria-label={copied ? 'Link copied' : 'Copy link'} className={btn}>
            {copied ? <CheckIcon className="h-[18px] w-[18px]" /> : <LinkIcon className="h-[18px] w-[18px]" />}
          </button>
        </li>
      </ul>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Link copied to clipboard' : ''}
      </span>
    </div>);

}