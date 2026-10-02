import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { PostMeta } from './PostMeta';
import type { BlogPost } from '../../types/content';
import { buttonClasses } from '../../utils/button';

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Reveal>
      <article className="group grid overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(34,34,34,0.08)] ring-1 ring-ink/[0.06] lg:grid-cols-[1.2fr_1fr]">
        <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[460px]" tabIndex={-1} aria-hidden>
          <img
            src={post.coverImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
          
          <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink shadow-sm">
            Featured
          </span>
        </Link>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <span className="self-start rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand-deep">
            {post.category}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
            <Link href={`/blog/${post.slug}`} className="transition-colors duration-150 hover:text-brand-dark">
              {post.title}
            </Link>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{post.excerpt}</p>
          <div className="mt-6">
            <PostMeta post={post} />
          </div>
          <Link href={`/blog/${post.slug}`} className={`${buttonClasses('green', 'lg')} group/btn mt-8 self-start`}>
            Read Article
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </Reveal>);

}