import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { projects } from '@/data/projects';
import { company } from '@/data/company';
import { projectDetailJsonLd } from '@/utils/seo';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  const pageTitle = `${project.title} | Solar Installation Project Kenya | Synowatt`;
  const pageDescription = `${project.description} Verified solar energy installation in ${project.location || 'Kenya'} by EPRA-certified engineers.`;
  const pageUrl = `https://${company.website}/projects/${project.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      project.title,
      `solar installation ${project.location || 'Nairobi Kenya'}`,
      `${project.category} solar installation Kenya`,
      `${project.capacity || 'solar system'} Kenya`,
      'EPRA solar contractor Kenya',
      'Synowatt solar projects',
      project.slug.replace(/-/g, ' '),
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
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: 'en_KE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectSlugPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const schema = projectDetailJsonLd(project);

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
            <Link href="/projects" className="hover:text-brand-dark transition-colors">
              Solar Projects
            </Link>
            <span aria-hidden>/</span>
            <span className="font-semibold text-ink" aria-current="page">
              {project.title}
            </span>
          </nav>
        </div>
      </div>

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-deep transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to All Completed Solar Projects
            </Link>
          </div>

          <ProjectDetail project={project} />
        </div>
      </main>
    </>
  );
}
