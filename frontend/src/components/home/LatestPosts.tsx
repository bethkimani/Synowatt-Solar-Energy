import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { CardCarousel } from '../CardCarousel';
import { BlogCard } from '../blog/BlogCard';
import { blogPosts } from '../../data/blogPosts';
import { buttonClasses } from '../../utils/button';
import { sortByDate } from '../../utils/blog';
import { EASE_OUT } from '../../utils/motion';

export function LatestPosts() {
  const latest = sortByDate(blogPosts).slice(0, 6);

  return (
    <section aria-labelledby="latest-posts-title" className="overflow-hidden bg-brand-tint py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <CardCarousel
          id="latest-posts-title"
          title="Solar Insights & Resources"
          description="Practical guides to help you understand solar and make a confident decision."
          footer={
          <Link href="/blog" className={`${buttonClasses('green', 'md')} group`}>
              Read Our Latest Articles
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          }>
          
          {latest.map((post, i) =>
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: Math.min(i, 3) * 0.06 }}
            className="w-[85%] shrink-0 snap-start sm:w-[360px]">
            
              <BlogCard post={post} />
            </motion.div>
          )}
        </CardCarousel>
      </div>
    </section>);

}