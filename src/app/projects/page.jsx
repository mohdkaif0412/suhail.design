import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Projects — UI/UX Design Portfolio & Case Studies',
  description:
    "Explore Mohd Suhail's UI/UX design portfolio. B2B and B2C product design case studies featuring user research, design systems, wireframing, and human-centered design solutions.",
  alternates: {
    canonical: 'https://suhail.design/projects',
  },
  openGraph: {
    title: 'Projects — Mohd Suhail UI/UX Design Portfolio',
    description:
      'B2B and B2C product design case studies with user research, interaction design, and design systems by Mohd Suhail.',
    url: 'https://suhail.design/projects',
    images: [
      {
        url: '/og/projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — UI/UX Design Projects Portfolio',
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
