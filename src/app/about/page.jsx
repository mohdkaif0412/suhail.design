import AboutClient from './AboutClient';

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'About Mohd Suhail — Senior UI/UX Designer, Delhi',
  description:
    'Professional background, skills, and career journey of Mohd Suhail, Senior UI/UX & Product Designer with 5+ years of experience in B2B and B2C product design.',
  url: 'https://suhail.design/about',
  mainEntity: {
    '@type': 'Person',
    name: 'Mohd Suhail',
    jobTitle: 'Senior UI/UX & Product Designer',
    description:
      'Senior Product Designer with 5+ years of professional experience in UX research, product strategy, design systems, and human-centered product design for B2B and B2C clients.',
    url: 'https://suhail.design',
    email: 'sirsuhail01@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'UI/UX Design',
      'Product Design',
      'UX Research',
      'Design Systems',
      'Interaction Design',
      'Prototyping',
      'Usability Testing',
      'Information Architecture',
      'Accessibility (WCAG)',
      'Design Strategy',
    ],
    sameAs: [
      'https://www.linkedin.com/in/suuhail01/',
      'https://www.behance.net/suuhail01',
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://suhail.design' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://suhail.design/about' },
  ],
};

export const metadata = {
  title: 'About Mohd Suhail — Senior UI/UX Designer | Delhi, India',
  description:
    'Meet Mohd Suhail — Senior UI/UX & Product Designer with 5+ years of experience. From ed-tech to enterprise SaaS: background, skills, and design philosophy.',
  alternates: {
    canonical: 'https://suhail.design/about',
  },
  openGraph: {
    title: 'About Mohd Suhail — Senior UI/UX Designer | Delhi, India',
    description:
      'Senior UI/UX & Product Designer with 5+ years of experience in B2B and B2C product design. Explore background, skills, and case studies.',
    url: 'https://suhail.design/about',
    images: [
      {
        url: '/og?title=About+Mohd+Suhail+%E2%80%94+Senior+UI%2FUX+Designer&subtitle=suhail.design',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — Senior UI/UX Designer, Delhi',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
