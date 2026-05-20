import HomeClient from './HomeClient';

export const metadata = {
  title: 'Mohd Suhail — UI/UX & Product Designer',
  description:
    'UI/UX Designer & Product Designer with 4+ years of experience in B2B and B2C product design. Explore case studies in user research, design systems, and human-centered design.',
  alternates: {
    canonical: 'https://suhail.design',
  },
  openGraph: {
    title: 'Mohd Suhail — UI/UX & Product Designer',
    description:
      'UI/UX Designer & Product Designer with 4+ years of experience. Explore B2B and B2C design case studies in user research and interaction design.',
    url: 'https://suhail.design',
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — UI/UX and Product Designer Portfolio',
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
