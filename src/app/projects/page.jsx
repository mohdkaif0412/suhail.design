import ProjectsClient from './ProjectsClient';

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'UI/UX Design Portfolio & Case Studies — Mohd Suhail',
  description:
    'A curated collection of UI/UX and product design case studies by Mohd Suhail, covering ed-tech, healthcare, energy management, music tech, and SaaS products.',
  url: 'https://suhail.design/projects',
  author: {
    '@type': 'Person',
    name: 'Mohd Suhail',
    url: 'https://suhail.design',
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'UI/UX Design Case Studies',
    numberOfItems: 7,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AcadAlly Student App', url: 'https://suhail.design/projects/acadally-student' },
      { '@type': 'ListItem', position: 2, name: 'AcadAlly Teacher App', url: 'https://suhail.design/projects/acadally-teacher' },
      { '@type': 'ListItem', position: 3, name: 'Mindfulness Studio', url: 'https://suhail.design/projects/mindfulness-studio' },
      { '@type': 'ListItem', position: 4, name: 'Gexa Energy', url: 'https://suhail.design/projects/gexa-energy' },
      { '@type': 'ListItem', position: 5, name: "That's My Jam", url: 'https://suhail.design/projects/thats-my-jam' },
      { '@type': 'ListItem', position: 6, name: 'Adaelo Music', url: 'https://suhail.design/projects/adaelo' },
      { '@type': 'ListItem', position: 7, name: 'Direct Care Source', url: 'https://suhail.design/projects/direct-care-source' },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://suhail.design' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://suhail.design/projects' },
  ],
};

export const metadata = {
  title: 'UI/UX Design Portfolio & Case Studies — Mohd Suhail',
  description:
    "Explore Mohd Suhail's UI/UX portfolio: 7 in-depth case studies across ed-tech, healthcare, energy, and music tech. UX research, design systems, and product strategy.",
  alternates: {
    canonical: 'https://suhail.design/projects',
  },
  openGraph: {
    title: 'UI/UX Design Portfolio & Case Studies — Mohd Suhail',
    description:
      'In-depth B2B and B2C product design case studies by Mohd Suhail. UX research, interaction design, and design systems across 7 real-world projects.',
    url: 'https://suhail.design/projects',
    images: [
      {
        url: '/og?title=UI%2FUX+Portfolio+%26+Case+Studies+%E2%80%94+Mohd+Suhail&subtitle=suhail.design',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — UI/UX Design Portfolio & Case Studies',
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectsClient />
    </>
  );
}
