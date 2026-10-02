import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BlogCard } from './BlogCard';
import type { BlogPost } from '../../types/content';
import { EASE_OUT } from '../../utils/motion';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout" initial={false}>
        {posts.map((post, i) =>
        <motion.li
          key={post.slug}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: EASE_OUT, delay: Math.min(i % 6, 5) * 0.04 }}>
          
            <BlogCard post={post} />
          </motion.li>
        )}
      </AnimatePresence>
    </motion.ul>);

}