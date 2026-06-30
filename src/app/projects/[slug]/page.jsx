import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { LoaderOne } from '../../../components/ui/loader';

const AcadAllyStudent   = dynamic(() => import('./AcadAllyStudent'),   { ssr: true });
const AcadAllyTeacher   = dynamic(() => import('./AcadAllyTeacher'),   { ssr: true });
const MindfulnessStudio = dynamic(() => import('./MindfulnessStudio'), { ssr: true });
const GexaEnergy        = dynamic(() => import('./GexaEnergy'),        { ssr: true });
const ThatsMyJam        = dynamic(() => import('./ThatsMyJam'),        { ssr: true });
const Adaelo            = dynamic(() => import('./Adaelo'),            { ssr: true });
const DirectCareSource  = dynamic(() => import('./DirectCareSource'),  { ssr: true });

const projectComponents = {
  'acadally-student':  AcadAllyStudent,
  'acadally-teacher':  AcadAllyTeacher,
  'mindfulness-studio': MindfulnessStudio,
  'gexa-energy':       GexaEnergy,
  'thats-my-jam':      ThatsMyJam,
  'adaelo':            Adaelo,
  'direct-care-source': DirectCareSource,
};

const projectMeta = {
  'acadally-student': {
    title: 'AcadAlly Student App — EdTech UI/UX Case Study',
    description:
      'UX case study: AcadAlly student app — diagnostic ed-tech mobile app with adaptive assessments, learning-gap analysis, and personalised video content. UX research, IA, and high-fidelity design.',
    image: '/PR1.png',
    keywords: 'EdTech UX design, mobile app case study, adaptive learning UX, ed-tech product design, student app design, personalized learning interface',
    industry: 'EdTech / Education',
    datePublished: '2024-06-01',
  },
  'acadally-teacher': {
    title: 'AcadAlly Teacher App — EdTech Dashboard UI/UX Case Study',
    description:
      'UX case study: AcadAlly teacher platform — a B2B ed-tech dashboard that streamlines learning-gap identification and personalised remediation plans. UX research, design systems, and interaction design.',
    image: '/PR2.png',
    keywords: 'EdTech B2B product design, teacher dashboard UX, learning management system design, ed-tech case study, B2B SaaS UX',
    industry: 'EdTech / B2B SaaS',
    datePublished: '2024-07-01',
  },
  'mindfulness-studio': {
    title: 'Mindfulness Studio — Wellness App UI/UX Case Study',
    description:
      'UX case study: Mindfulness Studio — a B2C meditation and wellness app with personalised routines, progress tracking, and smart reminders. UX research, onboarding design, and mobile UI.',
    image: '/PR3.png',
    keywords: 'wellness app design, meditation app UX, B2C mobile app design, health app UI, onboarding UX, mobile UX case study',
    industry: 'Health & Wellness',
    datePublished: '2024-04-01',
  },
  'gexa-energy': {
    title: 'Gexa Energy — Smart Dashboard UI/UX Case Study',
    description:
      'UX case study: Gexa Energy — a smart energy management dashboard with bill tracking, usage analytics, and thermostat controls for residential customers. Data visualisation and dashboard UX.',
    image: '/PR4.png',
    keywords: 'energy dashboard UX, data visualization design, smart home app UI, utility app UX case study, dashboard design, analytics UX',
    industry: 'Energy / Utilities',
    datePublished: '2024-08-01',
  },
  'thats-my-jam': {
    title: "That's My Jam — Music Discovery App UI/UX Case Study",
    description:
      "UX case study: That's My Jam — a B2C music discovery app connecting fans with local artists, live events, and personalised playlists. Social music-sharing UX and community design.",
    image: '/PR5.png',
    keywords: 'music app UX design, B2C mobile app case study, social platform design, music discovery UI, community app UX, playlist design',
    industry: 'Music / Entertainment',
    datePublished: '2024-05-01',
  },
  'adaelo': {
    title: 'Adaelo — Music Licensing Platform UI/UX Case Study',
    description:
      'UX case study: Adaelo — a B2B music licensing platform simplifying collaboration between artists, licensees, and label owners. Marketplace UX, search design, and licensing workflow.',
    image: '/PR6.png',
    keywords: 'music licensing platform UX, marketplace design, B2B platform case study, creative marketplace UI, music industry product design',
    industry: 'Music Tech / B2B Marketplace',
    datePublished: '2024-03-01',
  },
  'direct-care-source': {
    title: 'Direct Care Source — Healthcare UI/UX Case Study',
    description:
      'UX case study: Direct Care Source — a healthcare product design engagement covering concept validation, product strategy, and user-centred digital experience design for care services.',
    image: '/PR7.png',
    keywords: 'healthcare UX design, medical product design, health tech case study, care platform UI, healthcare product strategy, patient experience design',
    industry: 'Healthcare / Health Tech',
    datePublished: '2024-09-01',
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = projectMeta[slug];

  if (!meta) {
    return { title: 'Project Not Found' };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://suhail.design/projects/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://suhail.design/projects/${slug}`,
      type: 'article',
      publishedTime: meta.datePublished,
      authors: ['https://suhail.design/about'],
      tags: meta.keywords?.split(', '),
      images: [
        {
          url: `https://suhail.design${meta.image}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`https://suhail.design${meta.image}`],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    notFound();
  }

  const meta = projectMeta[slug];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://suhail.design' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://suhail.design/projects' },
      { '@type': 'ListItem', position: 3, name: meta?.title?.split(' —')[0] ?? slug, item: `https://suhail.design/projects/${slug}` },
    ],
  };

  const creativeWorkSchema = meta
    ? {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: meta.title.split(' —')[0],
        description: meta.description,
        url: `https://suhail.design/projects/${slug}`,
        image: `https://suhail.design${meta.image}`,
        datePublished: meta.datePublished,
        dateModified: meta.datePublished,
        keywords: meta.keywords,
        inLanguage: 'en-US',
        isAccessibleForFree: true,
        creator: {
          '@type': 'Person',
          name: 'Mohd Suhail',
          url: 'https://suhail.design',
          jobTitle: 'Senior UI/UX & Product Designer',
        },
        about: { '@type': 'Thing', name: meta.industry ?? 'UI/UX Design' },
        genre: 'Product Design Case Study',
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {creativeWorkSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
        />
      )}
      <Suspense fallback={<LoaderOne />}>
        <ProjectComponent />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectComponents).map((slug) => ({ slug }));
}
