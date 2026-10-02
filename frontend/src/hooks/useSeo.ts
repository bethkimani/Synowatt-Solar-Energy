'use client';

import { useEffect } from 'react';

interface UseSeoOptions {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | null;
}

export function useSeo({
  title,
  description,
  image,
  type = 'website',
  jsonLd
}: UseSeoOptions) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const prevTitle = document.title;
    const prevDescription = document.head.querySelector('meta[name="description"]')?.getAttribute('content');
    const prevOgTitle = document.head.querySelector('meta[property="og:title"]')?.getAttribute('content');
    const prevOgDescription = document.head.querySelector('meta[property="og:description"]')?.getAttribute('content');
    const prevOgImage = document.head.querySelector('meta[property="og:image"]')?.getAttribute('content');
    const prevOgType = document.head.querySelector('meta[property="og:type"]')?.getAttribute('content');

    if (title) document.title = title;
    if (description) {
      let meta = document.head.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    const ogTitle = document.head.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.setAttribute('content', title ?? prevOgTitle ?? prevTitle);
    const ogDescription = document.head.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (ogDescription) ogDescription.setAttribute('content', description ?? prevOgDescription ?? '');
    const ogImage = document.head.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    if (ogImage && image) ogImage.setAttribute('content', image);
    const ogType = document.head.querySelector('meta[property="og:type"]') as HTMLMetaElement | null;
    if (ogType) ogType.setAttribute('content', type);

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonld = 'true';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (title) document.title = prevTitle;
      if (prevDescription) {
        const meta = document.head.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (meta) meta.content = prevDescription;
      }
      if (prevOgTitle) {
        const meta = document.head.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
        if (meta) meta.content = prevOgTitle;
      }
      if (prevOgDescription) {
        const meta = document.head.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
        if (meta) meta.content = prevOgDescription;
      }
      if (prevOgImage) {
        const meta = document.head.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
        if (meta) meta.content = prevOgImage;
      }
      if (prevOgType) {
        const meta = document.head.querySelector('meta[property="og:type"]') as HTMLMetaElement | null;
        if (meta) meta.content = prevOgType;
      }
      if (script) {
        script.remove();
      }
    };
  }, [title, description, image, type, jsonLd]);
}
