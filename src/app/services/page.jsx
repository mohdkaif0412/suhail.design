import ServicesClient from './ServicesClient';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What kind of projects does Mohd Suhail take on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mohd Suhail works on end-to-end product design — from early-stage UX research and product discovery through to high-fidelity UI design, design systems, and developer handoff. He takes on both B2B and B2C projects across industries including EdTech, Healthcare, Energy, Music Technology, and enterprise SaaS, ranging from 0-to-1 product design to redesigns and scaled product iterations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Mohd Suhail available for freelance or remote work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mohd Suhail is based in Delhi, India and is available for remote freelance and contract engagements worldwide, including with clients in India, the United States, Canada, the United Kingdom, and Europe. You can reach him at sirsuhail01@gmail.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries has Mohd Suhail designed for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'His portfolio covers EdTech (AcadAlly student and teacher platforms), Health & Wellness (Mindfulness Studio), Energy & Utilities (Gexa Energy), Music Technology (That\'s My Jam and Adaelo), and Healthcare (Direct Care Source). He has designed both consumer-facing mobile apps and complex B2B dashboards and SaaS products.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools and methods does Mohd Suhail use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'His primary design tool is Figma, used for UI design, interactive prototyping, and design systems. He uses FigJam and Miro for workshops and IA mapping, and applies both qualitative and quantitative UX research methods — including user interviews, usability testing, journey mapping, and affinity diagramming.',
      },
    },
  ],
};

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

const faqs = [
  {
    q: 'What kind of projects does Mohd Suhail take on?',
    a: 'End-to-end product design — from early-stage UX research and product discovery through high-fidelity UI design, design systems, and developer handoff. Both B2B and B2C projects across EdTech, Healthcare, Energy, Music Technology, and enterprise SaaS.',
  },
  {
    q: 'Is Mohd Suhail available for freelance or remote work?',
    a: 'Yes. Based in Delhi, India, he works remotely with clients worldwide — including in the United States, Canada, the United Kingdom, and Europe. Reach him at sirsuhail01@gmail.com.',
  },
  {
    q: 'What industries has Mohd Suhail designed for?',
    a: "EdTech (AcadAlly), Health & Wellness (Mindfulness Studio), Energy & Utilities (Gexa Energy), Music Technology (That's My Jam, Adaelo), and Healthcare (Direct Care Source) — spanning consumer mobile apps and complex B2B dashboards.",
  },
  {
    q: 'What tools and methods does Mohd Suhail use?',
    a: 'Figma for UI design, prototyping, and design systems; FigJam and Miro for workshops and IA; qualitative and quantitative UX research including user interviews, usability testing, journey mapping, and affinity diagramming.',
  },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesClient />
      <section
        id="faq"
        aria-label="Frequently asked questions"
        className="bg-[#0e0e0e] border-t border-white/[0.06] px-4 md:px-12 py-16"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-100 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-500 font-body mb-10">
            Common questions about working with Mohd Suhail.
          </p>
          <dl className="space-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-white/[0.06] pb-8 last:border-b-0 last:pb-0">
                <dt className="text-base font-semibold text-neutral-100 font-heading mb-2">{q}</dt>
                <dd className="text-sm text-neutral-400 font-body leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
