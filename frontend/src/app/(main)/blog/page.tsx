'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchXIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { FeaturedPost } from '@/components/blog/FeaturedPost';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { BlogCategoryFilter, type CategoryOption } from '@/components/blog/BlogCategoryFilter';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { NewsletterForm } from '@/components/blog/NewsletterForm';
import { blogPosts } from '@/data/blogPosts';
import { blogCategories } from '@/data/blogCategories';
import { images } from '@/data/images';
import { useSeo } from '@/hooks/useSeo';
import { categorySlug, matchesQuery, sortByDate } from '@/utils/blog';
import { buttonClasses } from '@/utils/button';
import { EASE_OUT } from '@/utils/motion';

const PAGE_SIZE = 6;

const categoryOptions: CategoryOption[] = [
{ label: 'All Articles', slug: 'all', count: blogPosts.length },
...blogCategories.map((c) => ({
  label: c,
  slug: categorySlug(c),
  count: blogPosts.filter((p) => p.category === c).length
}))];


function BlogPageContent() {
  useSeo({
    title: 'Solar Insights & Energy Resources',
    description:
    'Practical solar energy tips, renewable energy insights and expert guidance from Synowatt Power & Solar Ltd to help Kenyan homes and businesses make informed energy decisions.'
  });

  const router = useRouter();
  const params = useSearchParams();
  const activeCategory = params.get('category') ?? 'all';
  const query = params.get('q') ?? '';
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const posts = sortByDate(blogPosts);
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const filtering = activeCategory !== 'all' || query.trim().length > 0;
  const results = posts.filter(
    (p) =>
    (filtering || p.slug !== featured.slug) && (
    activeCategory === 'all' || categorySlug(p.category) === activeCategory) &&
    matchesQuery(p, query)
  );
  const shown = results.slice(0, visibleCount);
  const activeLabel = categoryOptions.find((c) => c.slug === activeCategory)?.label ?? 'All Articles';

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, query]);

  const updateParam = (key: 'category' | 'q', value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value && !(key === 'category' && value === 'all')) {
      next.set(key, value);
    } else {
      next.delete(key);
    }

    const query = next.toString();
    router.replace(query ? `/blog?${query}` : '/blog', { scroll: false });
  };

  return (
    <>
      <PageHero
        trail={[{ label: 'Blog' }]}
        title="Solar Insights & Energy Resources"
        subtitle="Explore practical solar energy tips, renewable energy insights, and expert guidance to help you make informed energy decisions."
        image={images.kenyaSun}
        imageAlt="Solar panels under bright Kenyan sunshine" />
      

      <AnimatePresence initial={false}>
        {!filtering &&
        <motion.section
          key="featured"
          aria-label="Featured article"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className="overflow-hidden bg-white">
          
            <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-24">
              <FeaturedPost post={featured} />
            </div>
          </motion.section>
        }

      </AnimatePresence>

      <section id="articles" aria-labelledby="articles-title" className="scroll-mt-20 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 id="articles-title" className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
                {filtering ? activeLabel : 'Latest Articles'}
              </h2>
              <p className="mt-3 text-ink/65" aria-live="polite">
                {filtering ?
                `${results.length} ${results.length === 1 ? 'article' : 'articles'}${query.trim() ? ` matching “${query.trim()}”` : ''}` :
                'Practical guides for Kenyan homes, businesses and institutions.'}
              </p>
            </div>
            <BlogSearch value={query} onChange={(v) => updateParam('q', v)} />
          </div>

          <div className="mt-8">
            <BlogCategoryFilter options={categoryOptions} active={activeCategory} onChange={(slug) => updateParam('category', slug)} />
          </div>

          <div className="mt-10">
            {shown.length ?
            <BlogGrid posts={shown} /> :

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="flex flex-col items-center rounded-3xl bg-brand-tint px-6 py-16 text-center">
              
                <SearchXIcon className="h-10 w-10 text-brand-dark" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">No articles found</h3>
                <p className="mt-2 max-w-sm text-ink/65">Try a different keyword or browse all categories.</p>
                <button type="button" onClick={() => router.replace('/blog', { scroll: false })} className={`${buttonClasses('outline', 'md')} mt-6`}>
                  Clear filters
                </button>
              </motion.div>
            }
          </div>

          {results.length > visibleCount &&
          <div className="mt-12 flex flex-col items-center gap-3">
              <button type="button" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)} className={buttonClasses('green', 'lg')}>
                Load More Articles
              </button>
              <p className="text-sm text-ink/55">
                Showing {shown.length} of {results.length}
              </p>
            </div>
          }
        </div>
      </section>

      <section aria-labelledby="newsletter-title" className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <NewsletterForm />
        </div>
      </section>
    </>);
}

export default function BlogPage() {
  return (
    <Suspense fallback={null}>
      <BlogPageContent />
    </Suspense>
  );
}