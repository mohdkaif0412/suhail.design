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
      'Mohd Suhail designed AcadAlly\'s student mobile app end-to-end — a diagnostic ed-tech product that identifies individual learning gaps through adaptive assessments and delivers personalised video content. Scope: UX research, information architecture, and high-fidelity Figma design.',
    image: '/PR1.png',
    keywords: 'EdTech UX design, mobile app case study, adaptive learning UX, ed-tech product design, student app design, personalized learning interface, UX designer for ed-tech startups, who designed the AcadAlly student app, gamification UX design for learning apps, adaptive assessment app UX case study, UI UX designer for education apps in India, student learning gap diagnostic app design',
    industry: 'EdTech / Education',
    datePublished: '2024-06-01',
    projectSummary:
      'Mohd Suhail led end-to-end UX design for AcadAlly\'s student-facing mobile app — a diagnostic ed-tech product that identifies individual learning gaps through adaptive assessments and delivers personalised video content. The scope covered UX research, information architecture, and high-fidelity Figma design across the full student learning journey.',
  },
  'acadally-teacher': {
    title: 'AcadAlly Teacher App — EdTech Dashboard UI/UX Case Study',
    description:
      'Mohd Suhail designed AcadAlly\'s teacher-facing B2B dashboard — solving the challenge of helping educators identify and remediate student learning gaps at scale. Scope: UX research, design system creation, and interaction design for a data-dense B2B interface.',
    image: '/PR2.png',
    keywords: 'EdTech B2B product design, teacher dashboard UX, learning management system design, ed-tech case study, B2B SaaS UX, UX research for B2B dashboard redesign, teacher analytics dashboard UX designer, who designed the AcadAlly teacher app, design system for data-dense education SaaS, B2B SaaS dashboard designer for ed-tech, classroom remediation tool UX case study',
    industry: 'EdTech / B2B SaaS',
    datePublished: '2024-07-01',
    projectSummary:
      'Mohd Suhail designed AcadAlly\'s teacher-facing B2B dashboard, solving the challenge of helping educators identify and act on student learning gaps at scale. The project covered UX research, a scalable design system, and interaction design for a data-dense remediation management interface.',
  },
  'mindfulness-studio': {
    title: 'Mindfulness Studio — Wellness App UI/UX Case Study',
    description:
      'Mohd Suhail designed Mindfulness Studio — a B2C meditation and wellness app — addressing impersonal, one-size-fits-all wellness experiences. The product features adaptive routines, progress tracking, and smart reminders, grounded in user research and onboarding UX.',
    image: '/PR3.png',
    keywords: 'wellness app design, meditation app UX, B2C mobile app design, health app UI, onboarding UX, mobile UX case study, UX designer for meditation and wellness apps, how to design a meditation app onboarding flow, mental health app UX case study, personalized meditation app interface design, B2C mobile app designer for health and wellness, mindfulness app design with progress tracking',
    industry: 'Health & Wellness',
    datePublished: '2024-04-01',
    projectSummary:
      'Mohd Suhail designed Mindfulness Studio — a B2C wellness and meditation mobile app — addressing the problem of impersonal, one-size-fits-all wellness experiences. The work produced an app with adaptive routines, progress tracking, and smart reminders, grounded in user research and best-practice onboarding UX.',
    processOutcome: {
      problem:
        'Most meditation and wellness apps deliver the same generic content to every user, regardless of their mood, energy, or time of day — making it hard to build a consistent daily practice.',
      approach:
        'Grounded in user research, the app was structured around time-of-day routines (morning, afternoon, and night) and custom courses that let users focus on managing stress, improving sleep, boosting energy, or increasing happiness. The design process covered defined design goals, a process flow, wireframes, a typography, colour and iconography system, and high-fidelity visual designs.',
      outcome:
        'The result is a personalised meditation experience with adaptive routines, progress tracking through a user profile, and reminder notifications that help users stay consistent with their practice.',
    },
  },
  'gexa-energy': {
    title: 'Gexa Energy — Smart Dashboard UI/UX Case Study',
    description:
      'Mohd Suhail designed an energy management dashboard for Gexa Energy residential customers, solving the problem of limited visibility into personal electricity usage and billing. Deliverables: real-time usage analytics, bill tracking, and thermostat controls via a data-rich interface.',
    image: '/PR4.png',
    keywords: 'energy dashboard UX, data visualization design, smart home app UI, utility app UX case study, dashboard design, analytics UX, UX designer for energy and utility apps, smart thermostat app interface design, electricity usage tracking app UX case study, data visualization designer for utility dashboards, mobile app redesign for energy provider, who designed the Gexa Energy app',
    industry: 'Energy / Utilities',
    datePublished: '2024-08-01',
    projectSummary:
      'Mohd Suhail designed an energy management dashboard for Gexa Energy\'s residential customers, solving the widespread problem of limited visibility into personal electricity consumption and billing. The final product gives users real-time usage analytics, bill tracking, and thermostat controls through an accessible, data-rich interface.',
  },
  'thats-my-jam': {
    title: "That's My Jam — Music Discovery App UI/UX Case Study",
    description:
      "Mohd Suhail designed That's My Jam — a B2C music discovery app — bridging the gap between fans and local artists that mainstream platforms overlook. Deliverables: social music UX, personalised playlists, live event discovery, and community-driven artist sharing.",
    image: '/PR5.png',
    keywords: 'music app UX design, B2C mobile app case study, social platform design, music discovery UI, community app UX, playlist design, UX designer for music and entertainment apps, live music event discovery app design, social music app UX case study, how to design a music bidding feature, community-driven music platform UI designer, B2C app designer for live events and concerts',
    industry: 'Music / Entertainment',
    datePublished: '2024-05-01',
    projectSummary:
      "Mohd Suhail designed That's My Jam — a B2C music discovery app — to bridge the gap between music fans and local artists that mainstream platforms overlook. The project delivered a social music experience with personalised playlists, live event discovery, and community-driven artist sharing.",
    processOutcome: {
      problem:
        'Mainstream music platforms overlook the connection between live, local artists and the fans who want to discover and attend their events.',
      approach:
        'Built across two modules — a fan-facing User app and an artist/manager MDB app — the project ran through a project timeline, quantitative and qualitative research, user personas, empathy mapping, user flows, information architecture, and a full style guide before high-fidelity visual design.',
      outcome:
        'The result is a social music-discovery experience where fans can find live concerts and festivals, follow personalised playlists, and bid live on songs — giving the highest bidder the chance to hear their favourite track performed by the artist.',
    },
  },
  'adaelo': {
    title: 'Adaelo — Music Licensing Platform UI/UX Case Study',
    description:
      'Mohd Suhail designed Adaelo — a B2B music licensing marketplace — to simplify the fragmented process of music licensing between artists, licensees, and label owners. Scope: marketplace architecture, search design, and end-to-end licensing workflow UX.',
    image: '/PR6.png',
    keywords: 'music licensing platform UX, marketplace design, B2B platform case study, creative marketplace UI, music industry product design, UX designer for B2B marketplace platforms, music licensing marketplace UX case study, two-sided marketplace product designer, who designed the Adaelo music licensing platform, search and filtering UX for marketplace apps, product designer for music industry SaaS',
    industry: 'Music Tech / B2B Marketplace',
    datePublished: '2024-03-01',
    projectSummary:
      'Mohd Suhail designed Adaelo, a B2B music licensing marketplace, to simplify the fragmented and opaque process of music licensing between artists, licensees, and label owners. The work covered marketplace architecture, search and filtering design, and the full end-to-end licensing workflow.',
    processOutcome: {
      problem:
        'Music licensing is a fragmented and opaque process, with artists, licensees, and label owners struggling to connect and transact through a single trusted platform.',
      approach:
        'Adaelo was designed as a B2B marketplace serving three distinct roles — artist, licensee, and label owner. The work began with project objectives, a problem-and-solution definition, and competitor analysis, then moved through marketplace architecture, wireframes, and end-to-end licensing workflow design for each user type.',
      outcome:
        'The final designs deliver a clearer, role-based licensing experience with dedicated flows for artists, licensees, and label owners, supported by search and filtering to simplify discovery across the catalogue.',
    },
  },
  'direct-care-source': {
    title: 'Direct Care Source — Healthcare UI/UX Case Study',
    description:
      'Mohd Suhail led product design for Direct Care Source — a healthcare platform connecting patients with care services — covering concept validation, product strategy, and UX design focused on patient trust, accessibility, and streamlined service discovery.',
    image: '/PR7.png',
    keywords: 'healthcare UX design, medical product design, health tech case study, care platform UI, healthcare product strategy, patient experience design, UI UX designer for healthcare apps, UX designer for patient care platforms, who designed Direct Care Source, health tech product strategy case study, accessible healthcare app design, UI UX designer Delhi for healthcare apps',
    industry: 'Healthcare / Health Tech',
    datePublished: '2024-09-01',
    projectSummary:
      'Mohd Suhail led product design for Direct Care Source — a healthcare platform connecting patients with care services — covering concept validation, product strategy, and UX design. The engagement focused on building patient trust, ensuring accessibility, and streamlining the care service discovery experience.',
    processOutcome: {
      problem:
        'Patients often struggle to discover and trust the right care services, while early-stage healthcare products risk being built without validating real user needs.',
      approach:
        'The engagement spanned concept validation and market research, business and product strategy, and complete user-experience design — focused on building patient trust, ensuring accessibility, and streamlining how patients find and connect with care services.',
      outcome:
        'The result is a validated product direction and a care-platform experience designed around real user insights, intended to attract new patients and reduce churn through clearer service discovery and stronger customer relationships.',
    },
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
      {meta?.projectSummary && (
        <section
          aria-label="Project overview"
          className="bg-[#121212] px-4 md:px-12 pt-8 pb-2 max-w-6xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 font-body">
              {meta.industry}
            </p>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-neutral-100 mb-3">
              {meta.title.split(' —')[0]}
            </h2>
            <p className="text-sm md:text-base text-neutral-400 font-body leading-relaxed">
              {meta.projectSummary}
            </p>
          </div>
        </section>
      )}
      {meta?.processOutcome && (
        <section
          aria-label="Process and outcome"
          className="bg-[#121212] px-4 md:px-12 pt-4 pb-2 max-w-6xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
            <h2 className="text-lg md:text-xl font-heading font-bold text-neutral-100 mb-4">
              Process &amp; Outcome
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1 font-body">
                  The problem
                </dt>
                <dd className="text-sm md:text-base text-neutral-400 font-body leading-relaxed">
                  {meta.processOutcome.problem}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1 font-body">
                  Approach
                </dt>
                <dd className="text-sm md:text-base text-neutral-400 font-body leading-relaxed">
                  {meta.processOutcome.approach}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1 font-body">
                  Outcome
                </dt>
                <dd className="text-sm md:text-base text-neutral-400 font-body leading-relaxed">
                  {meta.processOutcome.outcome}
                </dd>
              </div>
            </dl>
          </div>
        </section>
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
