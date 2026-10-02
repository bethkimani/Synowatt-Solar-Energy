import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  to: string;
}

export interface HeroSlide {
  image: string;
  alt: string;
  caption: string;
}

export interface Stat {
  value?: number;
  decimals?: number;
  suffix?: string;
  text?: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  benefits: string[];
  applications: string[];
}

export interface SolarPackage {
  slug: string;
  name: string;
  type: string;
  capacity: string;
  inverter: string;
  battery: string;
  panels: string;
  components: string[];
  features: string[];
  suitableFor: string[];
  image: string;
  imageAlt: string;
  /**
   * Set to a string like "KSh 000,000" to display a price.
   * Leave null to show "Pricing on request".
   */
  price: string | null;
}

export interface Appliance {
  label: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
}

export interface IconFeature extends Feature {
  icon: LucideIcon;
}

export interface WhyPillar {
  theme: string;
  summary: string;
  image: string;
  imageAlt: string;
  reasons: IconFeature[];
}

export interface FlowStage {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Institutional';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  location?: string;
}

export type BlogCategory =
  | 'Solar Energy'
  | 'Solar Installation'
  | 'Solar Batteries'
  | 'Energy Saving Tips'
  | 'Renewable Energy in Kenya'
  | 'Solar Maintenance'
  | 'Solar Technology';

export type ArticleBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'subheading';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
      ordered?: boolean;
    }
  | {
      type: 'callout';
      title?: string;
      text: string;
    }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
    };

export interface ArticleSection {
  /**
   * Used for the table of contents anchor.
   */
  id: string;
  heading: string;
  blocks: ArticleBlock[];
}

/**
 * CMS-friendly blog post structure.
 */
export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  author: string;
  /**
   * ISO date, e.g. "2026-09-22"
   */
  publishedAt: string;
  /**
   * Optional override; otherwise calculated from the content.
   */
  readingTimeMinutes?: number;
  seoTitle: string;
  metaDescription: string;
  featured?: boolean;
  tags: string[];
  intro: string;
  sections: ArticleSection[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  isPlaceholder: boolean;
}