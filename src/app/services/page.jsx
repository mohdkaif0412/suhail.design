import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Services — UI/UX Design & Product Strategy',
  description:
    'Professional UI/UX design services by Mohd Suhail — user research, product strategy, UX design, and design systems. Specializing in human-centered design for B2B and B2C products.',
  alternates: {
    canonical: 'https://suhail.design/services',
  },
  openGraph: {
    title: 'Services — Mohd Suhail UI/UX Design & Product Strategy',
    description:
      'Professional UI/UX design services: user research, product strategy, interaction design, and design systems for B2B and B2C products.',
    url: 'https://suhail.design/services',
    images: [
      {
        url: '/og/services.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — UI/UX Design Services',
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
