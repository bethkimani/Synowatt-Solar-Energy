import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { PostMeta } from './PostMeta';
import type { BlogPost } from '../../types/content';

interface BlogCardProps {
  post: BlogPost;
  headingLevel?: 'h2' | 'h3';
}

export function BlogCard({ post, headingLevel = 'h3' }: BlogCardProps) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/[0.06] transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(34,34,34,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
      
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
        
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-deep shadow-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <PostMeta post={post} />
        <Heading className="mt-3 font-display text-xl font-bold leading-snug text-ink">{post.title}</Heading>
        <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-ink/70">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-dark">
          Read More
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>);

}