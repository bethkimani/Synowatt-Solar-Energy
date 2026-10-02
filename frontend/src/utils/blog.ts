import { format, parseISO } from 'date-fns';
import type { BlogCategory, BlogPost } from '../types/content';

const WORDS_PER_MINUTE = 200;

export function getReadingTime(post: BlogPost): number {
  if (post.readingTimeMinutes) return post.readingTimeMinutes;
  const text: string[] = [post.intro];
  post.sections.forEach((s) => {
    text.push(s.heading);
    s.blocks.forEach((b) => {
      if (b.type === 'list') text.push(...b.items);else
      if (b.type === 'image') text.push(b.caption ?? '');else
      text.push(b.text);
    });
  });
  const words = text.join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatDate(iso: string): string {
  return format(parseISO(iso), 'd MMM yyyy');
}

export function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function categorySlug(category: BlogCategory | string): string {
  return category.
  toLowerCase().
  replace(/[^a-z0-9]+/g, '-').
  replace(/(^-|-$)/g, '');
}

export function matchesQuery(post: BlogPost, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [post.title, post.category, post.excerpt, post.intro, ...post.tags].join(' ').toLowerCase();
  return q.split(/\s+/).every((term) => haystack.includes(term));
}

export function getRelatedPosts(post: BlogPost, all: BlogPost[], count = 3): BlogPost[] {
  const others = sortByDate(all.filter((p) => p.slug !== post.slug));
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, count);
}