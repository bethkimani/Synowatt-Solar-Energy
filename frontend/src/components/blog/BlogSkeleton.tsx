export function BlogCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/[0.06] shadow-sm animate-pulse">
      {/* Image skeleton */}
      <div className="relative aspect-[16/10] bg-ink/[0.08]" />
      
      {/* Content skeleton */}
      <div className="flex flex-1 flex-col p-6 space-y-4">
        {/* Meta row */}
        <div className="flex items-center gap-3">
          <div className="h-3.5 w-24 rounded-full bg-ink/[0.08]" />
          <div className="h-3.5 w-16 rounded-full bg-ink/[0.06]" />
        </div>

        {/* Title */}
        <div className="space-y-2 pt-1">
          <div className="h-5 w-4/5 rounded bg-ink/[0.12]" />
          <div className="h-5 w-3/5 rounded bg-ink/[0.10]" />
        </div>

        {/* Excerpt */}
        <div className="space-y-1.5 pt-1">
          <div className="h-3.5 w-full rounded bg-ink/[0.06]" />
          <div className="h-3.5 w-11/12 rounded bg-ink/[0.06]" />
          <div className="h-3.5 w-4/6 rounded bg-ink/[0.06]" />
        </div>

        {/* Read More button placeholder */}
        <div className="mt-auto pt-4">
          <div className="h-4 w-24 rounded bg-ink/[0.08]" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedPostSkeleton() {
  return (
    <div className="grid overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(34,34,34,0.08)] ring-1 ring-ink/[0.06] lg:grid-cols-[1.2fr_1fr] animate-pulse">
      {/* Left cover image placeholder */}
      <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[460px] bg-ink/[0.08]" />

      {/* Right details */}
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 space-y-5">
        <div className="h-5 w-28 rounded-full bg-ink/[0.10]" />

        <div className="space-y-2.5">
          <div className="h-8 w-11/12 rounded-lg bg-ink/[0.14]" />
          <div className="h-8 w-3/4 rounded-lg bg-ink/[0.12]" />
        </div>

        <div className="space-y-2 pt-1">
          <div className="h-4 w-full rounded bg-ink/[0.08]" />
          <div className="h-4 w-5/6 rounded bg-ink/[0.08]" />
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="h-4 w-32 rounded bg-ink/[0.08]" />
          <div className="h-4 w-20 rounded bg-ink/[0.06]" />
        </div>

        <div className="pt-4">
          <div className="h-11 w-36 rounded-full bg-ink/[0.12]" />
        </div>
      </div>
    </div>
  );
}

export function BlogPostDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <header className="relative overflow-hidden bg-brand-tint pb-16 pt-28 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8 space-y-5">
          <div className="mx-auto h-5 w-28 rounded-full bg-ink/[0.10]" />
          <div className="mx-auto h-10 w-4/5 rounded-lg bg-ink/[0.14] sm:h-12" />
          <div className="mx-auto h-4 w-1/2 rounded bg-ink/[0.08]" />
          <div className="mx-auto mt-8 aspect-[16/9] max-w-3xl rounded-3xl bg-ink/[0.12]" />
        </div>
      </header>

      {/* Body Skeleton */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5 space-y-8">
          <div className="space-y-3">
            <div className="h-6 w-full rounded bg-ink/[0.12]" />
            <div className="h-6 w-5/6 rounded bg-ink/[0.10]" />
          </div>
          <div className="space-y-2 pt-4">
            <div className="h-4 w-full rounded bg-ink/[0.07]" />
            <div className="h-4 w-11/12 rounded bg-ink/[0.07]" />
            <div className="h-4 w-full rounded bg-ink/[0.07]" />
            <div className="h-4 w-4/5 rounded bg-ink/[0.07]" />
          </div>
          <div className="h-7 w-2/5 rounded bg-ink/[0.12] pt-6" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-ink/[0.07]" />
            <div className="h-4 w-10/12 rounded bg-ink/[0.07]" />
            <div className="h-4 w-3/4 rounded bg-ink/[0.07]" />
          </div>
        </div>
      </section>
    </div>
  );
}
