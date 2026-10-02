import { company } from '../data/company';
import type { BlogPost } from '../types/content';

export function articleJsonLd(post: BlogPost, url: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: { '@type': 'ImageObject', url: company.logo }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };
}

export function organizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    slogan: company.tagline,
    image: company.logo,
    telephone: '+254799188830',
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mountain Mall, Thika Road',
      addressLocality: 'Nairobi',
      addressCountry: 'KE'
    }
  };
}