import AboutClient from './AboutClient';

export const metadata = {
  title: 'My Journey — Background & Experience',
  description:
    'The professional journey of Mohd Suhail, UI/UX Designer with 4+ years of experience. From early Photoshop experiments in 2010 to designing enterprise products at Copper Digital and AcadAlly.',
  alternates: {
    canonical: 'https://suhail.design/about',
  },
  openGraph: {
    title: 'My Journey — Mohd Suhail UI/UX Designer',
    description:
      'From Photoshop at 14 to designing enterprise products — the full story of Mohd Suhail, Senior UI/UX & Product Designer.',
    url: 'https://suhail.design/about',
    images: [
      {
        url: '/og/about.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — Professional Journey as UI/UX Designer',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
