import React from 'react';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import type { BlogPost } from '../../types/content';
import { formatDate, getReadingTime } from '../../utils/blog';

interface PostMetaProps {
  post: BlogPost;
  tone?: 'dark' | 'light';
}

export function PostMeta({ post, tone = 'dark' }: PostMetaProps) {
  const light = tone === 'light';
  return (
    <p className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${light ? 'text-white/75' : 'text-ink/55'}`}>
      <span className="inline-flex items-center gap-1.5">
        <CalendarIcon className={`h-4 w-4 ${light ? 'text-gold' : 'text-accent'}`} aria-hidden />
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <ClockIcon className={`h-4 w-4 ${light ? 'text-gold' : 'text-accent'}`} aria-hidden />
        {getReadingTime(post)} min read
      </span>
    </p>);

}