import React from 'react';

export type CategoryOption = {
  label: string;
  slug: string;
  count: number;
};

interface BlogCategoryFilterProps {
  options: CategoryOption[];
  active: string;
  onChange: (slug: string) => void;
}

export function BlogCategoryFilter({ options, active, onChange }: BlogCategoryFilterProps) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:justify-center sm:px-0">
      {options.map((option) => (
        <button
          key={option.slug}
          type="button"
          onClick={() => onChange(option.slug)}
          aria-pressed={active === option.slug}
          className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-150 ${
            active === option.slug
              ? 'bg-brand-dark text-white'
              : 'bg-brand-tint text-ink/70 hover:text-brand-dark'
          }`}
        >
          {option.label}
          {option.count > 0 && (
            <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium">
              {option.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
