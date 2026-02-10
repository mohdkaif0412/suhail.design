import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// Lazy load project components from the same directory
const AcadAllyStudent = dynamic(() => import('./AcadAllyStudent'));
const AcadAllyTeacher = dynamic(() => import('./AcadAllyTeacher'));
const MindfulnessStudio = dynamic(() => import('./MindfulnessStudio'));
const GexaEnergy = dynamic(() => import('./GexaEnergy'));
const ThatsMyJam = dynamic(() => import('./ThatsMyJam'));
const Adaelo = dynamic(() => import('./Adaelo'));
const DirectCareSource = dynamic(() => import('./DirectCareSource'));

const projectComponents = {
  'acadally-student': AcadAllyStudent,
  'acadally-teacher': AcadAllyTeacher,
  'mindfulness-studio': MindfulnessStudio,
  'gexa-energy': GexaEnergy,
  'thats-my-jam': ThatsMyJam,
  'adaelo': Adaelo,
  'direct-care-source': DirectCareSource,
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProjectComponent />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'acadally-student' },
    { slug: 'acadally-teacher' },
    { slug: 'mindfulness-studio' },
    { slug: 'gexa-energy' },
    { slug: 'thats-my-jam' },
    { slug: 'adaelo' },
    { slug: 'direct-care-source' },
  ];
}
