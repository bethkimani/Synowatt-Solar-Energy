import { client } from './client';
import { urlForImage } from './image';
import { isSanityConfigured } from './env';
import { blogPosts as fallbackPosts } from '@/data/blogPosts';
import type { BlogPost, ArticleSection, ArticleBlock, BlogCategory } from '@/types/content';

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  coverImage,
  author,
  publishedAt,
  tags,
  intro,
  sections[]{
    heading,
    blocks[]{
      _type,
      text,
      items,
      ordered,
      title,
      image,
      alt,
      caption
    }
  },
  seoTitle,
  metaDescription
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  coverImage,
  author,
  publishedAt,
  tags,
  intro,
  sections[]{
    heading,
    blocks[]{
      _type,
      text,
      items,
      ordered,
      title,
      image,
      alt,
      caption
    }
  },
  seoTitle,
  metaDescription
}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapSanityPostToBlogPost(doc: any): BlogPost {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sections: ArticleSection[] = (doc.sections || []).map((sec: any) => {
    const heading = sec.heading || '';
    const id = heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blocks: ArticleBlock[] = (sec.blocks || []).map((b: any) => {
      if (b._type === 'subheadingBlock') {
        return { type: 'subheading', text: b.text || '' };
      }
      if (b._type === 'listBlock') {
        return {
          type: 'list',
          items: b.items || [],
          ordered: Boolean(b.ordered),
        };
      }
      if (b._type === 'calloutBlock') {
        return {
          type: 'callout',
          title: b.title,
          text: b.text || '',
        };
      }
      if (b._type === 'imageBlock') {
        return {
          type: 'image',
          src: b.image ? urlForImage(b.image) : '',
          alt: b.alt || '',
          caption: b.caption,
        };
      }
      return { type: 'paragraph', text: b.text || '' };
    });

    return { id, heading, blocks };
  });

  return {
    slug: doc.slug,
    title: doc.title,
    category: (doc.category || 'Solar Energy') as BlogCategory,
    excerpt: doc.excerpt || '',
    coverImage: doc.coverImage ? urlForImage(doc.coverImage) : '',
    coverAlt: doc.coverImage?.alt || doc.title,
    author: doc.author || 'Synowatt Power & Solar Ltd',
    publishedAt: doc.publishedAt || new Date().toISOString().split('T')[0],
    seoTitle: doc.seoTitle || doc.title,
    metaDescription: doc.metaDescription || doc.excerpt || '',
    tags: doc.tags || [],
    intro: doc.intro || '',
    sections,
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured || !client) {
    return fallbackPosts;
  }

  try {
    const rawPosts = await client.fetch(POSTS_QUERY);
    if (!rawPosts || rawPosts.length === 0) {
      return fallbackPosts;
    }
    const sanityPosts = rawPosts.map(mapSanityPostToBlogPost);
    // Merge sanity posts with any unique fallback posts if needed, or return sanityPosts
    return sanityPosts;
  } catch (err) {
    console.warn('Failed to fetch posts from Sanity, falling back to local posts:', err);
    return fallbackPosts;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!isSanityConfigured || !client) {
    return fallbackPosts.find((p) => p.slug === slug);
  }

  try {
    const rawPost = await client.fetch(POST_BY_SLUG_QUERY, { slug });
    if (!rawPost) {
      return fallbackPosts.find((p) => p.slug === slug);
    }
    return mapSanityPostToBlogPost(rawPost);
  } catch (err) {
    console.warn(`Failed to fetch post "${slug}" from Sanity, falling back:`, err);
    return fallbackPosts.find((p) => p.slug === slug);
  }
}
