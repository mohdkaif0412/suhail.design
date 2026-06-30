import ServicesClient from './ServicesClient';

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mohd Suhail — UI/UX Design & Product Strategy Services',
  description:
    'Expert UI/UX design and product strategy services by Mohd Suhail. Specialising in UX research, design systems, interaction design, and human-centered product design for startups and enterprises.',
  url: 'https://suhail.design/services',
  provider: {
    '@type': 'Person',
    name: 'Mohd Suhail',
    url: 'https://suhail.design',
    email: 'sirsuhail01@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressCountry: 'IN',
    },
  },
  areaServed: ['India', 'United States', 'Canada', 'United Kingdom', 'Germany', 'Europe'],
  availableLanguage: ['English', 'Hindi'],
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'UI/UX Design Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UX Research & User Testing',
          description:
            'Qualitative and quantitative user research, usability testing, interviews, and synthesis to inform design decisions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Product Strategy & Discovery',
          description:
            'Product discovery workshops, stakeholder alignment, roadmap definition, and opportunity mapping for digital products.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Design Systems & Component Libraries',
          description:
            'End-to-end design system creation, component libraries in Figma, design tokens, documentation, and governance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interaction Design & Prototyping',
          description:
            'High-fidelity UI design, interactive prototypes, micro-interactions, and design handoff for web and mobile products.',
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://suhail.design' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://suhail.design/services' },
  ],
};

export const metadata = {
  title: 'UI/UX Design Services — Mohd Suhail | Product Designer',
  description:
    'UI/UX design services by Mohd Suhail: UX research, product strategy, design systems, and interaction design for startups and B2B/B2C companies. Available worldwide.',
  alternates: {
    canonical: 'https://suhail.design/services',
  },
  openGraph: {
    title: 'UI/UX Design Services — Mohd Suhail | Product Designer',
    description:
      'UX research, product strategy, design systems, and interaction design services. Helping startups and enterprises build user-centred digital products.',
    url: 'https://suhail.design/services',
    images: [
      {
        url: '/og?title=UI%2FUX+Design+Services+%E2%80%94+Mohd+Suhail&subtitle=suhail.design',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — UI/UX Design Services',
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}
