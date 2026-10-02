export interface QuoteDetail {
  /** Service slug from data/services.ts */
  service?: string;
  /** Package slug from data/solutions.ts */
  solution?: string;
  /** Residential | Commercial | Institutional */
  property?: string;
}

/** Builds a link to the contact page that preselects the given service, package or property type. */
export function quoteHref(detail: QuoteDetail = {}): string {
  const params = new URLSearchParams();
  (Object.keys(detail) as (keyof QuoteDetail)[]).forEach((key) => {
    const value = detail[key];
    if (value) params.set(key, value);
  });
  const query = params.toString();
  return `/contact${query ? `?${query}` : ''}#quote`;
}