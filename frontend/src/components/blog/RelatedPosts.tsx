import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { BlogCard } from './BlogCard';
import type { BlogPost } from '../../types/content';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;
  return (
    <section aria-labelledby="related-title" className="bg-brand-tint py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="related-title" title="Related Articles" />
          <Link href="/blog" className={`${buttonClasses('outline', 'md')} group self-start sm:self-auto`}>
            View All Articles
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) =>
          <motion.li
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.06 }}>
            
              <BlogCard post={p} />
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}