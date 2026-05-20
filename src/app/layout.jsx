import { Inter, Fira_Code, Open_Sans } from 'next/font/google';
import Script from 'next/script';
import '../index.css';
import Navbar from '../components/pages/Navbar';
import I18nProvider from './providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '700'],
  display: 'swap',
  preload: false,
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600'],
  display: 'swap',
  preload: false,
});

export const metadata = {
  metadataBase: new URL('https://suhail.design'),
  title: {
    default: 'Mohd Suhail — UI/UX & Product Designer',
    template: '%s | Mohd Suhail',
  },
  description:
    'UI/UX Designer & Product Designer with 4+ years of experience in B2B and B2C product design. Explore case studies in user research, design systems, and human-centered design.',
  keywords: [
    'UI/UX Designer',
    'Product Designer',
    'Mohd Suhail',
    'UX Case Studies',
    'Design Systems',
    'Figma',
    'User Research',
    'Interaction Design',
    'freelance UI UX designer India',
  ],
  authors: [{ name: 'Mohd Suhail', url: 'https://suhail.design' }],
  creator: 'Mohd Suhail',
  alternates: {
    canonical: 'https://suhail.design',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suhail.design',
    siteName: 'Mohd Suhail — Portfolio',
    title: 'Mohd Suhail — UI/UX & Product Designer',
    description:
      'UI/UX Designer & Product Designer with 4+ years of experience. Explore B2B and B2C case studies in user research, design systems, and interaction design.',
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohd Suhail — UI/UX and Product Designer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohd Suhail — UI/UX & Product Designer',
    description:
      'UI/UX Designer & Product Designer with 4+ years experience. B2B and B2C design case studies.',
    images: ['/og/home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      'ahrefs-site-verification':
        '17f1be0b4dec7dcab39a7472b4a6fd101acdb15509545e1b77f8adea8fd88766',
    },
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'Delhi, India',
    'geo.position': '28.7041;77.1025',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohd Suhail',
  alternateName: ['Suhail', 'Mohammad Suhail'],
  jobTitle: 'Senior UI/UX Designer & Product Designer',
  description:
    'Senior Product Designer with 4+ years of professional experience in UX research, product strategy, design systems, and human-centered product design for B2B and B2C clients.',
  url: 'https://suhail.design',
  email: 'sirsuhail01@gmail.com',
  image: 'https://suhail.design/og/home.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'UI/UX Design',
    'Product Design',
    'UX Research',
    'Design Systems',
    'Figma',
    'Prototyping',
    'Information Architecture',
    'Usability Testing',
    'Interaction Design',
    'Accessibility (WCAG)',
    'Design Strategy',
    'B2B Product Design',
    'B2C Product Design',
  ],
  sameAs: [
    'https://www.linkedin.com/in/suuhail01/',
    'https://www.behance.net/suuhail01',
    'https://www.figma.com/@suhail01',
  ],
  seeks: {
    '@type': 'Demand',
    name: 'Product Design & UX Projects',
    description:
      'Available for freelance and contract product design and UX projects — B2B, B2C, SaaS, mobile, and enterprise. Contact: sirsuhail01@gmail.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaCode.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-[#121212] text-white min-h-screen`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K84FZC5M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-white text-black p-2 z-50"
        >
          Skip to main content
        </a>

        <header role="banner">
          <I18nProvider>
            <Navbar />
          </I18nProvider>
        </header>

        <main id="main-content" className="pt-20 w-full">
          {children}
        </main>

        {/* GTM — afterInteractive so it never blocks initial render / LCP */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K84FZC5M');`}
        </Script>

        {/* Microsoft Clarity — afterInteractive */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,'clarity','script','rzcuh6iazh');`}
        </Script>

        {/* Ahrefs Analytics — lazyOnload (lowest priority, runs during idle) */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Pzawj/CkgIISCpwWNqFJSQ"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
