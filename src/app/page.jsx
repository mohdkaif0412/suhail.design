import HomeClient from './HomeClient';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What UI/UX design services does Mohd Suhail offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mohd Suhail offers end-to-end product design services including UX research, user interviews, usability testing, design systems, prototyping, interaction design, and product strategy for B2B and B2C clients globally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Mohd Suhail available for freelance UI/UX projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mohd Suhail is available for freelance and contract UI/UX design projects, including short-term sprints, MVP design, and long-term product partnerships. He works remotely with startups and companies in India, the US, Canada, the UK, and Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I hire Mohd Suhail as a UI/UX designer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach Mohd Suhail via the contact page at suhail.design/contact, or email sirsuhail01@gmail.com. He responds to all project inquiries within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries has Mohd Suhail designed products for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mohd Suhail has delivered product design for ed-tech, energy management, healthcare, music tech, and SaaS platforms. His case studies cover both B2B enterprise products and B2C consumer apps.',
      },
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mohd Suhail — UI/UX & Product Designer Portfolio',
  url: 'https://suhail.design',
  description:
    'Portfolio of Mohd Suhail, Senior UI/UX & Product Designer based in Delhi, India. Case studies in user research, design systems, and human-centered product design.',
  author: { '@type': 'Person', name: 'Mohd Suhail' },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://suhail.design/projects?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const metadata = {
  title: 'Mohd Suhail — UI/UX & Product Designer | Delhi, India',
  description:
    'Senior UI/UX & Product Designer with 5+ years experience. Specialising in design systems, UX research, and B2B/B2C product design. Based in Delhi — available worldwide.',
  alternates: {
    canonical: 'https://suhail.design',
  },
  openGraph: {
    title: 'Mohd Suhail — UI/UX & Product Designer | Delhi, India',
    description:
      'Senior Product Designer with 5+ years experience in B2B and B2C design. Explore case studies in UX research, design systems, and interaction design.',
    url: 'https://suhail.design',
    images: [
      {
        url: '/og?title=Mohd+Suhail+%E2%80%94+UI%2FUX+%26+Product+Designer&subtitle=suhail.design',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — UI/UX and Product Designer Portfolio',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeClient />
    </>
  );
}
