import React from 'react';
import { InfoIcon } from 'lucide-react';
import type { ArticleBlock, BlogPost } from '../../types/content';

interface ArticleContentProps {
  post: BlogPost;
}

export function ArticleContent({ post }: ArticleContentProps) {
  return (
    <div>
      <p className="font-display text-xl font-semibold leading-relaxed text-ink sm:text-[22px]">{post.intro}</p>
      {post.sections.map((section) =>
      <section key={section.id} aria-labelledby={section.id} className="mt-12">
          <h2 id={section.id} className="scroll-mt-28 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
            {section.heading}
          </h2>
          {section.blocks.map((block, i) =>
        <Block key={`${section.id}-${i}`} block={block} />
        )}
        </section>
      )}
    </div>);

}

function Block({ block }: {block: ArticleBlock;}) {
  switch (block.type) {
    case 'paragraph':
      return <p className="mt-5 text-[17px] leading-[1.8] text-ink/80">{block.text}</p>;
    case 'subheading':
      return <h3 className="mt-8 font-display text-lg font-bold text-ink">{block.text}</h3>;
    case 'list':{
        const ListTag = block.ordered ? 'ol' : 'ul';
        return (
          <ListTag className="mt-5 space-y-3">
          {block.items.map((item, i) =>
            <li key={item} className="flex gap-3.5 text-[17px] leading-[1.7] text-ink/80">
              {block.ordered ?
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-dark text-xs font-bold text-white">
                  {i + 1}
                </span> :

              <span aria-hidden className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-brand" />
              }
              <span>{item}</span>
            </li>
            )}
        </ListTag>);

      }
    case 'callout':
      return (
        <aside className="mt-7 flex gap-4 rounded-2xl bg-brand-tint p-5 sm:p-6">
          <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" aria-hidden />
          <div>
            {block.title && <p className="font-semibold text-ink">{block.title}</p>}
            <p className={`leading-relaxed text-ink/75 ${block.title ? 'mt-1' : ''}`}>{block.text}</p>
          </div>
        </aside>);

    case 'image':
      return (
        <figure className="mt-8">
          <img src={block.src} alt={block.alt} loading="lazy" className="aspect-[16/9] w-full rounded-2xl object-cover" />
          {block.caption && <figcaption className="mt-3 text-sm text-ink/55">{block.caption}</figcaption>}
        </figure>);

  }
}