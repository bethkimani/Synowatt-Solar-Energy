import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';
import { ServiceDetailBySlug } from '@/components/services/ServiceDetail';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { serviceDetailJsonLd } from '@/utils/seo';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  const pageTitle = `${service.title} in Kenya | Synowatt Power & Solar Ltd`;
  const pageDescription = `${service.description} Turn-key engineering, EPRA compliance, Tier-1 hardware, and local warranties across Kenya.`;
  const pageUrl = `https://${company.website}/services/${service.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${service.title} Kenya`,
      `${service.title} Nairobi`,
      'solar energy services Kenya',
      'solar installers Nairobi',
      'EPRA solar contractor Kenya',
      service.slug.replace(/-/g, ' '),
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
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.imageAlt,
        },
      ],
      locale: 'en_KE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const schema = serviceDetailJsonLd(service);

  return (
    <section className="bg-white pb-20 pt-28 sm:pb-24 lg:pb-32">
      {/* Search Engine Schema / Structured Data without dangerouslySetInnerHTML */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-ink/60">
            <li>
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-brand-dark" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark transition-colors duration-150 hover:text-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeftIcon className="h-4 w-4" aria-hidden />
          Back to all solar services
        </Link>

        <ServiceDetailBySlug slug={service.slug} />
      </div>
    </section>
  );
}
