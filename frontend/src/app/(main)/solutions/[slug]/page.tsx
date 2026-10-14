import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';
import { SolutionDetail } from '@/components/solutions/SolutionDetail';
import { solarPackages } from '@/data/solutions';
import { company } from '@/data/company';
import { solutionDetailJsonLd } from '@/utils/seo';

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return solarPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = solarPackages.find((item) => item.slug === slug);

  if (!pkg) return {};

  const pageTitle = `${pkg.name} Kenya | Inverter & Lithium Battery System | Synowatt`;
  const pageDescription = `${pkg.description} Turnkey EPRA-certified installation, Tier-1 bifacial panels, and high-cycle LiFePO4 battery storage across Kenya.`;
  const pageUrl = `https://${company.website}/solutions/${pkg.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${pkg.capacity} solar system Kenya`,
      `${pkg.capacity} solar system price Kenya`,
      `${pkg.capacity} hybrid solar Kenya`,
      `${pkg.capacity} inverter and battery Kenya`,
      'hybrid solar packages Kenya',
      'lithium battery solar system Kenya',
      'solar panel installation Nairobi',
      'EPRA solar contractor Kenya',
      pkg.slug.replace(/-/g, ' '),
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'Synowatt Power & Solar Ltd',
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 630,
          alt: pkg.imageAlt,
        },
      ],
      locale: 'en_KE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pkg.image],
    },
  };
}

export default async function SolutionSlugPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const pkg = solarPackages.find((item) => item.slug === slug);

  if (!pkg) {
    notFound();
  }

  const schema = solutionDetailJsonLd(pkg);

  return (
    <>
      {/* Schema.org Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <div className="bg-brand-tint/30 pt-24 pb-6 sm:pt-28 border-b border-ink/[0.08]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ink/65">
            <Link href="/" className="hover:text-brand-dark transition-colors">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/solutions" className="hover:text-brand-dark transition-colors">
              Solar Solutions
            </Link>
            <span aria-hidden>/</span>
            <span className="font-semibold text-ink" aria-current="page">
              {pkg.capacity} Hybrid
            </span>
          </nav>
        </div>
      </div>

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-deep transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to All Solar Packages & Sizing Guide
            </Link>
          </div>

          <SolutionDetail pkg={pkg} />
        </div>
      </main>
    </>
  );
}
