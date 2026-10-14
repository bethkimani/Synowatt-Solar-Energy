import { MetadataRoute } from 'next';
import { company } from '@/data/company';
import { services } from '@/data/services';
import { solutions } from '@/data/solutions';
import { projects } from '@/data/projects';
import { getAllBlogPosts } from '@/sanity/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = `https://${company.website}`;
  const now = new Date();

  // Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/why-synowatt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/solar-calculator`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Dynamic Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Dynamic Solution Pages
  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Dynamic Project Case Study Pages
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Blog Posts
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllBlogPosts();
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error generating blog sitemap entries:', error);
  }

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
