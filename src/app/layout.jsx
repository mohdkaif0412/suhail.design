import { Inter, Fira_Code, Open_Sans } from 'next/font/google';
import '../index.css';
import Navbar from '../components/pages/Navbar';
import I18nProvider from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700']
});
const openSans = Open_Sans({ 
  subsets: ['latin'], 
  variable: '--font-body',
  weight: ['300', '400', '600', '700', '800']
});

export const metadata = {
  title: {
    default: 'Mohd. Suhail - UI UX & Product Design Expert',
    template: '%s | Mohd. Suhail Portfolio'
  },
  description: 'UI/UX Designer & Product Designer with 3+ years of experience. Explore innovative design solutions and case studies in my portfolio.',
  keywords: ['UI/UX Designer', 'Product Designer', 'Suhel', 'Suhail', 'Graphic Designer', 'Mobile app designer', 'Product designer portfolio', 'case study', 'freelance ui ux designer india'],
  authors: [{ name: 'Mohd. Suhail' }],
  creator: 'Mohd. Suhail',
  metadataBase: new URL('https://www.Suhail.design'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['hi_IN', 'es_ES', 'de_DE', 'fr_FR'],
    url: 'https://www.Suhail.design/',
    siteName: 'Mohd. Suhail - UI UX & Product Designer Portfolio',
    title: 'Mohd. Suhail - UI UX Designer | Product Designer Expert',
    description: 'Expert Frontend Developer with 3+ years experience in React, JavaScript & TypeScript. View innovative projects and modern web solutions.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohd. Suhail - Expert Frontend Developer specializing in React, JavaScript, and modern web technologies',
        type: 'image/jpeg'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohd. Suhail - UI UX Designer | Product Designer Expert',
    description: 'UI/UX Designer & Product Designer with 3+ years of experience. Explore innovative design solutions and case studies in my portfolio.',
    images: ['/logo.jpg'],
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
      'ahrefs-site-verification': '17f1be0b4dec7dcab39a7472b4a6fd101acdb15509545e1b77f8adea8fd88766',
    },
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'Delhi, India',
    'geo.position': '28.7041;77.1025',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaCode.variable} ${openSans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K84FZC5M');`,
          }}
        />
        
        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Pzawj/CkgIISCpwWNqFJSQ"
          async
        />

        {/* IndexNow Integration */}
        <script src="/indexnow-service.js" async />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,'clarity','script','rzcuh6iazh');`,
          }}
        />

        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mohd Suhail',
              alternateName: ['Suhail', 'Suhel'],
              jobTitle: 'UI UX Designer',
              description: 'Expert Frontend Developer with 3+ years of professional experience in React, JavaScript, TypeScript, and modern web technologies.',
              url: 'https://Suhail.design',
              email: 'sirsuhail01@gmail.com',
              telephone: '+91-8937062577',
              image: 'https://www.Suhail.in/logo.jpg',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Delhi',
                addressRegion: 'Delhi',
                addressCountry: 'India'
              },
              sameAs: [
                'https://github.com/himanrawat',
                'https://www.linkedin.com/in/suuhail01/',
                'https://x.com/Suhail_',
                'https://www.behance.net/himanshu_rawat'
              ]
            })
          }}
        />

        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Mohd. Suhail UI UX Design Services',
              description: 'Professional frontend development services specializing in React, JavaScript, and modern web technologies',
              url: 'https://Suhail.design',
              provider: {
                '@type': 'Person',
                name: 'Mohd. Suhail'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#121212] text-white min-h-screen`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-K84FZC5M"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-white text-black p-2 z-50"
        >
          Skip to main content
        </a>

        {/* Header with navigation */}
        <header role="banner">
          <I18nProvider>
            <Navbar />
          </I18nProvider>
        </header>

        {/* Main content */}
        <main id="main-content" className="pt-20 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
