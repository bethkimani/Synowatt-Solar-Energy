'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeftIcon, MessageCircleIcon } from 'lucide-react';
import { ArticleHeader } from '@/components/blog/ArticleHeader';
import { ArticleContent } from '@/components/blog/ArticleContent';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { ShareLinks } from '@/components/blog/ShareLinks';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { Reveal } from '@/components/Reveal';
import { SunRays } from '@/components/SunRays';
import NotFound from '@/app/NotFound';
import { blogPosts } from '@/data/blogPosts';
import { blogAuthor } from '@/data/blogCategories';
import { company } from '@/data/company';
import { useSeo } from '@/hooks/useSeo';
import { getRelatedPosts } from '@/utils/blog';
import { buttonClasses } from '@/utils/button';
import { articleJsonLd } from '@/utils/seo';

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  useSeo({
    title: post?.seoTitle ?? 'Article not found',
    description: post?.metaDescription ?? 'This article could not be found.',
    image: post?.coverImage,
    type: post ? 'article' : 'website',
    jsonLd: post
      ? articleJsonLd(
          post,
          `${typeof window === 'undefined' ? `https://${company.website}` : window.location.origin}/blog/${post.slug}`
        )
      : undefined
  });

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post, blogPosts);
  const showToc = post.sections.length >= 3;

  return (
    <>
      <ArticleHeader post={post} />

      <section className="bg-white pb-24 pt-14 lg:pb-32 lg:pt-20">
        <div className={`mx-auto grid max-w-6xl gap-12 px-5 lg:px-8 ${showToc ? 'lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16' : ''}`}>
          {showToc &&
          <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-10">
                <TableOfContents sections={post.sections} />
                <ShareLinks title={post.title} layout="stack" />
              </div>
            </aside>
          }

          <article className="min-w-0 max-w-[720px]">
            {showToc &&
            <div className="mb-10 lg:hidden">
                <TableOfContents sections={post.sections} variant="collapsible" />
              </div>
            }

            <ArticleContent post={post} />

            <div className="mt-14 border-t border-ink/10 pt-8">
              <ShareLinks title={post.title} />
            </div>

            <div className="mt-8 flex gap-4 rounded-2xl bg-brand-tint p-6">
              <Image
                src={company.logo}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-full bg-white object-contain"
              />
              <div>
                <p className="text-sm text-ink/55">Written by</p>
                <p className="font-display text-lg font-bold text-ink">{post.author}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{blogAuthor.bio}</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink/50">
              This article is general information. The right solar system for your property depends on a professional
              assessment of your energy needs and site.
            </p>

            <Reveal className="mt-10">
              <div className="relative isolate overflow-hidden rounded-3xl bg-brand-dark p-8 text-white sm:p-10">
                <SunRays className="absolute -right-32 -top-32 -z-10 h-[380px] w-[380px]" />
                <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  Have questions about your solar options?
                </h2>
                <p className="mt-3 max-w-lg leading-relaxed text-white/85">
                  Talk to {company.name} about your property and energy needs — we’ll help you find a suitable solar
                  solution.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact#quote" className={buttonClasses('primary', 'lg')}>
                    Get a Free Quote
                  </Link>
                  <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('white', 'lg')}>
                    <MessageCircleIcon className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </Reveal>

            <Link
              href="/blog"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark transition-colors duration-150 hover:text-brand-deep">
              
              <ArrowLeftIcon className="h-4 w-4" aria-hidden />
              Back to the blog
            </Link>
          </article>
        </div>
      </section>

      <RelatedPosts posts={related} />
    </>);

}