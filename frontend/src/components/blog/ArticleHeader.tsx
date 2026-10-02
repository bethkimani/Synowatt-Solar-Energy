import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { SunRays } from '../SunRays';
import { PostMeta } from './PostMeta';
import { company } from '../../data/company';
import type { BlogPost } from '../../types/content';
import { categorySlug } from '../../utils/blog';
import { EASE_OUT } from '../../utils/motion';

interface ArticleHeaderProps {
  post: BlogPost;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT } } };

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const reduce = useReducedMotion();

  return (
    <>
      <header className="relative isolate overflow-hidden bg-ink pb-36 pt-36 lg:pb-48 lg:pt-44">
        <SunRays className="absolute -right-56 -top-56 -z-10 h-[620px] w-[620px]" />
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-4xl px-5 lg:px-8">
          <motion.nav variants={item} aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-white/75">
              <li>
                <Link href="/" className="transition-colors duration-150 hover:text-white">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon className="h-3.5 w-3.5 text-white/40" aria-hidden />
                <Link href="/blog" className="transition-colors duration-150 hover:text-white">Blog</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon className="h-3.5 w-3.5 text-white/40" aria-hidden />
                <Link href={`/blog?category=${categorySlug(post.category)}`} className="text-gold transition-colors duration-150 hover:text-white">
                  {post.category}
                </Link>
              </li>
            </ol>
          </motion.nav>
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            
            {post.title}
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {post.excerpt}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="flex items-center gap-3">
              <img src={company.logo} alt="" className="h-10 w-10 rounded-full bg-white object-contain" />
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-white">{post.author}</span>
                <span className="block text-xs text-white/60">{company.name}</span>
              </span>
            </span>
            <span aria-hidden className="hidden h-8 w-px bg-white/15 sm:block" />
            <PostMeta post={post} tone="light" />
          </motion.div>
        </motion.div>
      </header>

      <div className="relative z-10 mx-auto -mt-24 max-w-5xl px-5 lg:-mt-32 lg:px-8">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 }}
          className="overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(34,34,34,0.18)]">
          
          <motion.img
            src={post.coverImage}
            alt={post.coverAlt}
            initial={{ scale: reduce ? 1 : 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: 'linear' }}
            className="aspect-[16/9] w-full object-cover" />
          
        </motion.figure>
      </div>
    </>);

}