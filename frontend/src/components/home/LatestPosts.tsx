'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { CardCarousel } from '../CardCarousel';
import { BlogCard } from '../blog/BlogCard';
import { BlogCardSkeleton } from '../blog/BlogSkeleton';
import { buttonClasses } from '../../utils/button';
import { sortByDate } from '../../utils/blog';
import { EASE_OUT } from '../../utils/motion';
import { getAllBlogPosts } from '@/sanity/api';
import type { BlogPost } from '@/types/content';

export function LatestPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getAllBlogPosts()
      .then((fetched) => {
        if (isMounted) {
          setPosts(sortByDate(fetched || []));
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching latest posts:', err);
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const latest = posts.slice(0, 6);

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
          }
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-[85%] shrink-0 snap-start sm:w-[360px]">
                  <BlogCardSkeleton />
                </div>
              ))
            : latest.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: EASE_OUT, delay: Math.min(i, 3) * 0.06 }}
                  className="w-[85%] shrink-0 snap-start sm:w-[360px]"
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
        </CardCarousel>
      </div>
    </section>
  );
}