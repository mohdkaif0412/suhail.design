import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

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
    title: 'AcadAlly Student App — UI/UX Case Study',
    description:
      'UX case study for AcadAlly — a diagnostic mobile app that identifies student learning gaps and delivers personalized adaptive assessments and video content.',
    image: '/PR1.png',
  },
  'acadally-teacher': {
    title: 'AcadAlly Teacher App — UI/UX Case Study',
    description:
      'UX case study for the AcadAlly Teacher Application — a platform that streamlines teaching by identifying learning gaps and enabling personalized remediation plans.',
    image: '/PR2.png',
  },
  'mindfulness-studio': {
    title: 'Mindfulness Studio — Meditation App UI/UX Case Study',
    description:
      'UX case study for Mindfulness Studio — a meditation app with personalized routines, progress tracking, and reminder notifications for stress management and wellbeing.',
    image: '/PR3.png',
  },
  'gexa-energy': {
    title: 'Gexa Energy — Dashboard & App UI/UX Case Study',
    description:
      'UX case study for Gexa Energy — a smart energy management dashboard with bill tracking, usage analytics, and smart thermostat controls for residential customers.',
    image: '/PR4.png',
  },
  'thats-my-jam': {
    title: "That's My Jam — Music Discovery App UI/UX Case Study",
    description:
      "UX case study for That's My Jam — a music discovery app connecting users with local artists, events, personalized playlists, and a social music-sharing platform.",
    image: '/PR5.png',
  },
  'adaelo': {
    title: 'Adaelo Music — Licensing Platform UI/UX Case Study',
    description:
      'UX case study for Adaelo — a music licensing platform designed to simplify collaboration between artists, licensees, and label owners with accessible music discovery.',
    image: '/PR6.png',
  },
  'direct-care-source': {
    title: 'Direct Care Source — Healthcare UI/UX Case Study',
    description:
      'UX case study for Direct Care Source — a healthcare product design project focused on validating concepts, establishing product strategy, and designing user-centered digital experiences.',
    image: '/PR7.png',
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
    alternates: {
      canonical: `https://suhail.design/projects/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://suhail.design/projects/${slug}`,
      type: 'article',
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
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
        creator: {
          '@type': 'Person',
          name: 'Mohd Suhail',
          url: 'https://suhail.design',
        },
        about: { '@type': 'Thing', name: 'UI/UX Design' },
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
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
        <ProjectComponent />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectComponents).map((slug) => ({ slug }));
}
