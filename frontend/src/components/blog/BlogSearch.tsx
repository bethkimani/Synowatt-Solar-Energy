import React from 'react';
import { SearchIcon, XIcon } from 'lucide-react';

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()} className="relative w-full lg:max-w-sm">
      <label htmlFor="blog-search" className="sr-only">
        Search articles
      </label>
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" aria-hidden />
      <input
        id="blog-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by title, topic or keyword"
        className="h-12 w-full rounded-full border border-ink/15 bg-white pl-12 pr-12 text-[15px] text-ink placeholder:text-ink/40 transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 [&::-webkit-search-cancel-button]:hidden" />
      
      {value &&
      <button
        type="button"
        onClick={() => onChange('')}
        aria-label="Clear search"
        className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-ink/50 transition-colors duration-150 hover:bg-ink/5 hover:text-ink">
        
          <XIcon className="h-4 w-4" />
        </button>
      }
    </form>);

}