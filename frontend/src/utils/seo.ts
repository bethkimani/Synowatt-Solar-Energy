import { company } from '../data/company';
import type { BlogPost } from '../types/content';

export function articleJsonLd(post: BlogPost, url: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: { '@type': 'ImageObject', url: `https://${company.website}${company.logo}` }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };
}

export function blogIndexJsonLd(): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${baseUrl}/blog/#blog`,
        url: `${baseUrl}/blog`,
        name: 'Solar Energy Blog Kenya | Synowatt Power & Solar Ltd',
        description:
          'Expert solar energy insights, system sizing guides, battery storage tips, and renewable energy news for Kenyan homeowners and businesses.',
        publisher: {
          '@type': 'LocalBusiness',
          name: company.name,
          url: baseUrl,
          logo: `${baseUrl}${company.logo}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/blog/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Solar Blog', item: `${baseUrl}/blog` },
        ],
      },
    ],
  };
}

export function homePageJsonLd(): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Organization & Local Business Schema
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${baseUrl}/#organization`,
        name: company.name,
        alternateName: ['Synowatt Solar', 'Synowatt Solar Kenya', 'Synowatt Power & Solar'],
        url: baseUrl,
        logo: `${baseUrl}${company.logo}`,
        image: `${baseUrl}${company.logo}`,
        description:
          'Synowatt Power & Solar Ltd is a leading solar energy contractor in Kenya providing expert solar panel installation, hybrid solar systems, and lithium battery storage for homes, businesses, and institutions across Nairobi and nationwide.',
        slogan: company.tagline,
        telephone: '+254799188830',
        email: company.email,
        priceRange: 'KSh KSh',
        currenciesAccepted: 'KES',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, M-Pesa',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Mountain Mall, Thika Road',
          addressLocality: 'Nairobi',
          addressRegion: 'Nairobi County',
          addressCountry: 'KE'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -1.2288,
          longitude: 36.8833
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:30'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '08:30',
            closes: '14:00'
          }
        ],
        areaServed: [
          { '@type': 'Country', name: 'Kenya' },
          { '@type': 'City', name: 'Nairobi' },
          { '@type': 'AdministrativeArea', name: 'Kiambu' },
          { '@type': 'AdministrativeArea', name: 'Machakos' },
          { '@type': 'AdministrativeArea', name: 'Nakuru' },
          { '@type': 'AdministrativeArea', name: 'Mombasa' },
          { '@type': 'AdministrativeArea', name: 'Eldoret' },
          { '@type': 'AdministrativeArea', name: 'Kisumu' }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Solar Power Solutions & Services in Kenya',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hybrid Solar Systems Installation Kenya',
                description:
                  'Turn-key hybrid solar system combining Tier-1 solar panels, smart hybrid inverters, and lithium battery storage for seamless power during KPLC outages.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Rooftop Solar Panel Installation',
                description:
                  'Certified residential and commercial solar panel installation with professional structural mounting, safety switchgear, and commissioning.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Lithium Battery Storage Systems',
                description:
                  'High-cycle LiFePO4 solar lithium battery storage with built-in battery management systems (BMS) for reliable overnight and backup power.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial & Industrial Solar Solutions',
                description:
                  'High-capacity solar PV power plants for factories, commercial buildings, schools, and health institutions designed to reduce grid electricity bills.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Solar Water Pumping Systems',
                description:
                  'Direct solar-powered water pumping solutions for agricultural irrigation, community boreholes, and commercial farms in Kenya.'
              }
            }
          ]
        },
        sameAs: [
          'https://www.linkedin.com/company/synowatt',
          'https://www.facebook.com/synowatt',
          'https://www.instagram.com/synowattsolar'
        ]
      },

      // 2. WebSite Schema with SearchAction
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Synowatt Solar Energy Kenya',
        publisher: { '@id': `${baseUrl}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },

      // 3. FAQPage Schema for Rich Snippets in Google SERPs
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does a hybrid solar system work in Kenya during power outages?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A hybrid solar system connects solar panels, lithium battery storage, and Kenya Power (KPLC) grid electricity through a smart hybrid inverter. When a grid blackout occurs, the system automatically switches to battery and solar power in milliseconds, keeping your lights, refrigerators, Wi-Fi, and security equipment running seamlessly without interruption.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much does solar system installation cost in Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Solar installation costs in Kenya depend on your energy consumption, daily kilowatt-hour (kWh) requirements, and whether you require battery backup. A residential hybrid solar setup typically ranges from modest backup units to comprehensive whole-house systems. Synowatt provides free energy audits and tailored quotations based on your specific appliances and property.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why are lithium LiFePO4 solar batteries better than lead-acid or gel batteries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lithium iron phosphate (LiFePO4) solar batteries deliver over 4,000 to 6,000 charge cycles (lasting 10+ years), allow deep discharge up to 90%, charge twice as fast, and require zero routine maintenance compared to conventional lead-acid or gel batteries.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is Synowatt compliant with EPRA solar regulations in Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Synowatt Power & Solar Ltd adheres strictly to Energy and Petroleum Regulatory Authority (EPRA) standards, IEEE electrical regulations, and manufacturer warranties. Every installation is tested, commissioned, and documented by certified solar technicians.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which areas in Kenya does Synowatt provide solar installation services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Synowatt operates from Mountain Mall, Thika Road in Nairobi and carries out residential, commercial, and agricultural solar installations across all 47 counties in Kenya, including Nairobi, Kiambu, Machakos, Nakuru, Mombasa, Eldoret, Kisumu, and Naivasha.'
            }
          }
        ]
      }
    ]
  };
}

export function organizationJsonLd(): Record<string, unknown> {
  return homePageJsonLd();
}

export function aboutPageJsonLd(): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${baseUrl}/about/#webpage`,
        url: `${baseUrl}/about`,
        name: 'About Synowatt Power & Solar Ltd | Solar Energy Contractor Kenya',
        description:
          'Learn about Synowatt Power & Solar Ltd — an EPRA-compliant solar contractor based at Mountain Mall, Nairobi. Specializing in hybrid solar systems, rooftop solar installation, and lithium battery storage across Kenya.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          name: 'Synowatt Solar Energy Kenya',
          url: baseUrl,
        },
        about: {
          '@type': 'LocalBusiness',
          name: company.name,
          telephone: '+254799188830',
          email: company.email,
          url: baseUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Mountain Mall, Thika Road',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
          },
        },
        mainEntity: {
          '@type': 'LocalBusiness',
          name: company.name,
          url: baseUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/about/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Synowatt',
            item: `${baseUrl}/about`,
          },
        ],
      },
    ],
  };
}

export function servicesIndexJsonLd(allServices: { title: string; slug: string }[]): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/services/#webpage`,
        url: `${baseUrl}/services`,
        name: 'Solar Energy Services Kenya | Installation, Hybrid Systems & Storage | Synowatt',
        description:
          'Comprehensive solar engineering and installation services in Kenya. Rooftop solar PV, hybrid solar inverters, lithium battery storage, commercial solar plants, and solar water pumping across Nairobi and nationwide.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Solar Services', item: `${baseUrl}/services` },
          ],
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: allServices.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.title,
            url: `${baseUrl}/services/${s.slug}`,
          })),
        },
      },
    ],
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function serviceDetailJsonLd(service: any): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graph: any[] = [
    {
      '@type': 'Service',
      '@id': `${baseUrl}/services/${service.slug}/#service`,
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'LocalBusiness',
        name: company.name,
        url: baseUrl,
        telephone: '+254799188830',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Mountain Mall, Thika Road',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
      },
      areaServed: {
        '@type': 'Country',
        name: 'Kenya',
      },
      serviceType: 'Solar Energy Engineering & Installation',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/services/${service.slug}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Solar Services', item: `${baseUrl}/services` },
        { '@type': 'ListItem', position: 3, name: service.title, item: `${baseUrl}/services/${service.slug}` },
      ],
    },
  ];

  if (service.faqs && service.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${baseUrl}/services/${service.slug}/#faq`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mainEntity: service.faqs.map((f: any) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function solutionsIndexJsonLd(allPackages: { name: string; slug: string; description?: string }[]): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/solutions/#webpage`,
        url: `${baseUrl}/solutions`,
        name: 'Hybrid Solar Solutions & Sizing Kenya | 3.2KVA, 5KVA & 10KVA Packages | Synowatt',
        description:
          'Turnkey hybrid solar system packages in Kenya with Tier-1 bifacial panels, smart pure sine wave inverters, and LiFePO4 lithium batteries for homes, offices, and commercial estates.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          name: 'Synowatt Solar Energy Kenya',
          url: baseUrl,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Solar Solutions', item: `${baseUrl}/solutions` },
          ],
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: allPackages.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.name,
            description: p.description,
            url: `${baseUrl}/solutions/${p.slug}`,
          })),
        },
      },
    ],
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function solutionDetailJsonLd(pkg: any): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graph: any[] = [
    {
      '@type': 'Product',
      '@id': `${baseUrl}/solutions/${pkg.slug}/#product`,
      name: pkg.name,
      description: pkg.description,
      image: [`${baseUrl}${pkg.image}`],
      brand: {
        '@type': 'Brand',
        name: 'Synowatt',
      },
      category: 'Solar Energy Systems',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'KES',
        price: '0',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'KES',
          valueAddedTaxIncluded: true,
        },
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/solutions/${pkg.slug}`,
        seller: {
          '@type': 'LocalBusiness',
          name: company.name,
          telephone: '+254799188830',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Mountain Mall, Thika Road',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
          },
        },
      },
      additionalProperty: (pkg.technicalSpecs || []).map((spec: { label: string; value: string }) => ({
        '@type': 'PropertyValue',
        name: spec.label,
        value: spec.value,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl}/solutions/${pkg.slug}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Solar Solutions', item: `${baseUrl}/solutions` },
        { '@type': 'ListItem', position: 3, name: pkg.name, item: `${baseUrl}/solutions/${pkg.slug}` },
      ],
    },
  ];

  if (pkg.faqs && pkg.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${baseUrl}/solutions/${pkg.slug}/#faq`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mainEntity: pkg.faqs.map((f: any) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function projectsPageJsonLd(allProjects: any[]): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/projects/#webpage`,
        url: `${baseUrl}/projects`,
        name: 'Completed Solar Installations in Kenya | Residential, Commercial & Institutional | Synowatt',
        description:
          'Explore verified residential, commercial, and institutional solar panel and hybrid inverter projects completed by Synowatt Power & Solar Ltd across Nairobi, Kiambu, Nakuru, Machakos, and nationwide.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          name: 'Synowatt Solar Energy Kenya',
          url: baseUrl,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Solar Projects', item: `${baseUrl}/projects` },
          ],
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: allProjects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'CreativeWork',
              name: p.title,
              description: p.description,
              image: `${baseUrl}${p.image}`,
              locationCreated: {
                '@type': 'PostalAddress',
                addressLocality: p.location || 'Nairobi, Kenya',
                addressCountry: 'KE',
              },
              creator: {
                '@type': 'LocalBusiness',
                name: company.name,
                url: baseUrl,
              },
            },
          })),
        },
      },
    ],
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function projectDetailJsonLd(project: any): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${baseUrl}/projects/${project.slug}/#project`,
        name: project.title,
        headline: project.title,
        description: project.description,
        image: [`${baseUrl}${project.image}`],
        genre: `${project.category} Solar Energy Installation`,
        locationCreated: {
          '@type': 'PostalAddress',
          addressLocality: project.location || 'Nairobi, Kenya',
          addressCountry: 'KE',
        },
        creator: {
          '@type': 'LocalBusiness',
          name: company.name,
          telephone: '+254799188830',
          url: baseUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Mountain Mall, Thika Road',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
          },
        },
        dateCreated: project.completionDate || '2025',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/projects/${project.slug}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Solar Projects', item: `${baseUrl}/projects` },
          { '@type': 'ListItem', position: 3, name: project.title, item: `${baseUrl}/projects/${project.slug}` },
        ],
      },
    ],
  };
}

export function whySynowattJsonLd(): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/why-synowatt/#webpage`,
        url: `${baseUrl}/why-synowatt`,
        name: 'Why Choose Synowatt | EPRA Standards, Tier-1 Solar Hardware & Warranties Kenya',
        description:
          'Learn why homeowners, commercial businesses, and institutions choose Synowatt Power & Solar Ltd. EPRA-certified engineers, Tier-1 bifacial panels, 6000+ cycle LiFePO4 batteries, and nationwide support across Kenya.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          name: 'Synowatt Solar Energy Kenya',
          url: baseUrl,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          '@id': `${baseUrl}/why-synowatt/#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Why Synowatt', item: `${baseUrl}/why-synowatt` },
          ],
        },
        about: {
          '@type': 'LocalBusiness',
          name: company.name,
          telephone: '+254799188830',
          url: baseUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Mountain Mall, Thika Road',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/why-synowatt/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are Synowatt solar technicians and installations licensed by EPRA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Synowatt Power & Solar Ltd is fully registered and licensed by the Energy and Petroleum Regulatory Authority (EPRA) in Kenya. All our photovoltaic designs, mounting structures, and electrical terminations adhere strictly to the EPRA Solar PV Regulations and Kenyan national electrical standards.',
            },
          },
          {
            '@type': 'Question',
            name: 'What warranties does Synowatt provide on solar panels, batteries, and inverters?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We provide up to a 25-year performance warranty on Tier-1 monocrystalline solar panels, a 5 to 10-year warranty on LiFePO4 lithium batteries, and a 5-year warranty on smart hybrid inverters, backed by local technical support and replacement parts in Nairobi.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Synowatt prevent system failures and battery damage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We install medical-grade Class I and Class II surge protection devices (SPDs), dedicated DC circuit breakers, double-insulated UV-resistant solar cables, and deep copper earthing grids to protect your electronics from lightning strikes and KPLC voltage fluctuations.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Synowatt offer after-sales maintenance and remote monitoring?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All our hybrid inverters come with Wi-Fi/cloud monitoring enabling you and our engineering team to monitor solar production, battery state-of-charge, and grid usage in real time. We also provide preventative maintenance and panel cleaning services.',
            },
          },
        ],
      },
    ],
  };
}

export function contactPageJsonLd(): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${baseUrl}/contact/#webpage`,
        url: `${baseUrl}/contact`,
        name: 'Contact Synowatt Power & Solar Ltd | Free Solar Quote Kenya',
        description:
          'Request a free solar energy assessment and quote from Synowatt Power & Solar Ltd. Call or WhatsApp +254 799 188 830, email synowatt@gmail.com, or visit us at Mountain Mall, Thika Road, Nairobi.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          name: 'Synowatt Solar Energy Kenya',
          url: baseUrl,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          '@id': `${baseUrl}/contact/#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${baseUrl}/contact` },
          ],
        },
        mainEntity: {
          '@type': ['LocalBusiness', 'ProfessionalService'],
          name: company.name,
          telephone: '+254799188830',
          email: company.email,
          url: baseUrl,
          logo: `${baseUrl}${company.logo}`,
          image: `${baseUrl}${company.logo}`,
          priceRange: 'KSh KSh',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Mountain Mall, Thika Road',
            addressLocality: 'Nairobi',
            addressRegion: 'Nairobi County',
            addressCountry: 'KE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -1.2288,
            longitude: 36.8833,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '17:30',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '08:30',
              closes: '14:00',
            },
          ],
          areaServed: {
            '@type': 'Country',
            name: 'Kenya',
          },
        },
      },
    ],
  };
}

export function solarCalculatorJsonLd(): Record<string, unknown> {
  const baseUrl = `https://${company.website}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${baseUrl}/solar-calculator/#app`,
        url: `${baseUrl}/solar-calculator`,
        name: 'Synowatt Solar Sizing & Savings Calculator Kenya',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        description:
          'Calculate required solar panel wattage, hybrid inverter capacity, lithium battery storage (kWh), and estimated KPLC token savings in Kenya based on your electricity bill or household appliances.',
        provider: {
          '@type': 'Organization',
          name: company.name,
          url: baseUrl,
          logo: `${baseUrl}${company.logo}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/solar-calculator/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Solar Sizing Calculator', item: `${baseUrl}/solar-calculator` },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/solar-calculator/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I calculate what size solar system I need in Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Divide your average monthly KPLC electricity bill (in KSh) by the average EPRA residential tariff (~KSh 32/kWh) to find your monthly kWh consumption. Divide that by 30 days to get your daily kWh usage. Kenya receives an average of 5.0 to 5.5 Peak Sun Hours (PSH) per day. Divide your daily kWh by 4.5 (accounting for system efficiency losses) to determine the required solar panel kilowatt-peak (kWp) capacity.',
            },
          },
          {
            '@type': 'Question',
            name: 'What can a 5kVA hybrid solar system power in a Kenyan home?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A 5kVA hybrid solar system paired with a 5.12kWh LiFePO4 lithium battery comfortably powers refrigerators, freezers, LED lighting, large smart TVs, home entertainment, Wi-Fi routers, laptops, CCTV security systems, electric gates/fences, and booster/submersible water pumps up to 1HP.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much money can I save on KPLC tokens with solar in Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A properly engineered hybrid solar system with lithium battery storage typically cuts monthly KPLC power bills by 70% to 90%. For a home or office spending KSh 15,000 monthly, annual savings exceed KSh 135,000 to KSh 160,000, achieving full system payback within 3 to 4 years.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I size lithium battery storage for nighttime power?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Kenya, approximately 55% to 65% of residential electricity is consumed in the evening and overnight. Modern LiFePO4 (Lithium Iron Phosphate) batteries can be safely discharged to 85%-90% Depth of Discharge (DoD). Multiply your daily kWh by 0.60 and divide by 0.85 to calculate the recommended battery storage capacity in kilowatt-hours (kWh).',
            },
          },
        ],
      },
    ],
  };
}