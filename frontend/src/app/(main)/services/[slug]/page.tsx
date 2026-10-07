import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';
import { ServiceDetailBySlug } from '@/components/services/ServiceDetail';
import { services } from '@/data/services';

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

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <section className="bg-white pb-20 pt-32 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Link
          href="/services"
          className="mb-10 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-dark transition-colors duration-150 hover:text-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <ArrowLeftIcon className="h-4 w-4" aria-hidden />
          Back to all services
        </Link>
        <ServiceDetailBySlug slug={service.slug} />
      </div>
    </section>
  );
}
