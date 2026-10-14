import { MetadataRoute } from 'next';
import { company } from '@/data/company';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${company.website}`;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/studio', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
