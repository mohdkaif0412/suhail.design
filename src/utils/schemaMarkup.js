// Enhanced Structured Data for SEO - Schema.org Markup
// This file contains comprehensive structured data for better search engine understanding

export const createPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohd Suhail',
  alternateName: ['Suhail', 'Mohammad Suhail', 'Suhail UI/UX Designer'],
  jobTitle: 'Senior Product Designer & UX Designer',
  description:
    'Senior Product Designer with 4+ years of professional experience in UX research, product strategy, design systems, and human-centered product design. I create user-centric digital products and measurable product outcomes for B2B and B2C clients.',
  url: 'https://Suhail.in',
  email: 'iam@Suhail.in',
  telephone: '+91-9910978079',
  image: 'https://Suhail.design/logo.jpg',
  birthPlace: {
    '@type': 'Place',
    name: 'India',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'India',
    postalCode: '110025',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Educational Institution',
  },
  knowsAbout: [
    'Product Design',
    'UX Research',
    'User Testing & Usability',
    'Design Systems',
    'Interaction Design',
    'Information Architecture',
    'Prototyping (Figma, Framer)',
    'High-Fidelity Design',
    'Wireframing',
    'Accessibility (WCAG)',
    'Design Strategy',
    'Product Discovery',
    'User Interviews',
    'Persona Development',
    'Customer Journey Mapping',
    'UX Writing & Content Design',
    'DesignOps',
    'A/B Testing',
    'Analytics for UX',
    'Conversion Optimization',
    'Onboarding UX',
    'Mobile UX',
    'Dashboard & Admin UX',
    'E-commerce UX',
    'B2B Product Design',
    'B2C Product Design',
    'Service Design',
    'Workshop Facilitation',
    'Design Sprints',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Product Designer',
    description: 'Specializing in UX research, product strategy, and design systems',
    skills: [
      'UX Research',
      'User Interviews',
      'Usability Testing',
      'Figma',
      'Sketch',
      'Prototyping',
      'Design Systems',
      'Information Architecture',
      'Wireframing',
      'High-Fidelity Design',
      'Interaction Design',
      'Accessibility (WCAG)',
      'UX Writing',
      'Analytics for UX',
      'A/B Testing',
      'Design Sprints',
      'Workshop Facilitation',
      'DesignOps',
      'Product Discovery',
      'Service Design',
    ],
    qualifications: '4+ years professional experience in product & UX design',
  },
  award: ['Senior Product Design Recognition', 'User Experience Excellence Award'],
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ['India', 'United States', 'Canada', 'United Kingdom', 'Germany', 'Europe'],
    },
  },
  seeks: {
    '@type': 'Demand',
    name: 'Product Design & UX Projects',
    description:
      'Seeking product design and UX opportunities, collaborations, and strategic design engagements for B2B and B2C products',
  },
});

export const createWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mohd Suhail - Product Design Portfolio',
  alternateName: ['Mohd Suhail Portfolio', 'Product Design Portfolio 2025'],
  url: 'https://Suhail.in',
  description:
    'Portfolio showcasing product and UX design case studies, design systems, and user research by Mohd Suhail. Focused on B2B and B2C product outcomes.',
  author: {
    '@type': 'Person',
    name: 'Mohd Suhail',
  },
  publisher: {
    '@type': 'Person',
    name: 'Mohd Suhail',
  },
  inLanguage: ['en-US', 'de-DE', 'en-GB', 'en-CA', 'en-IN'],
  about: {
    '@type': 'Thing',
    name: 'Product Design',
    description: 'Human-centered product design, UX research, and design systems',
  },
  keywords: [
    'Product Designer',
    'UX Designer',
    'UI/UX Portfolio',
    'Design Systems',
    'UX Research',
    'User Testing',
    'Figma',
    'Prototyping',
    'Accessibility',
    'B2B Product Design',
    'B2C Product Design',
    'Interaction Design',
    'Information Architecture',
    'Service Design',
    'Design Strategy',
  ],
  copyrightYear: '2025',
  copyrightHolder: {
    '@type': 'Person',
    name: 'Mohd Suhail',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://Suhail.design/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
});

export const createProfessionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mohd Suhail Product Design & UX Services',
  description:
    'Expert product design and UX services specializing in UX research, product strategy, design systems, prototyping, and interaction design. I help startups and enterprises create user-centered products.',
  provider: {
    '@type': 'Person',
    name: 'Mohd Suhail',
  },
  serviceType: 'Product Design',
  category: [
    'Product Design',
    'UX Research',
    'Design Systems',
    'Interaction Design',
    'Service Design',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Product Design & UX Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Product Strategy & Discovery',
          description: 'Product discovery, stakeholder workshops, and roadmap alignment',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UX Research & User Testing',
          description: 'Qualitative and quantitative research, usability testing, and interviews',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Design Systems & UI Libraries',
          description: 'Design system setup, component libraries, and documentation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Prototyping & Interaction Design',
          description: 'High-fidelity prototypes, micro-interactions, and motion design',
        },
      },
    ],
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'India',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
    {
      '@type': 'Country',
      name: 'Canada',
    },
    {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    {
      '@type': 'Country',
      name: 'Germany',
    },
    {
      '@type': 'Country',
      name: 'Poland',
    },
    {
      '@type': 'Country',
      name: 'Luxembourg',
    },
    {
      '@type': 'Country',
      name: 'Switzerland',
    },
  ],
  availableLanguage: ['English', 'Hindi'],
  url: 'https://Suhail.in',
  telephone: '+91-9910978079',
  email: 'iam@Suhail.in',
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Credit Card', 'PayPal', 'Bank Transfer'],
  currenciesAccepted: 'USD, EUR, INR, GBP, CAD',
});

export const createBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

export const createProjectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.description,
  creator: {
    '@type': 'Person',
    name: 'Mohd Suhail',
  },
  dateCreated: project.year,
  image: project.image,
  url: project.liveUrl,
  codeRepository: project.projectUrl,
  programmingLanguage: project.tags,
  // Backwards-compatible: also expose design tools/tags when available
  tools: project.tools || project.tags,
  genre:
    project.category === 'design'
      ? 'Product Design'
      : project.category === 'frontend'
      ? 'Web Development'
      : 'UI/UX Design',
  keywords: (project.tags || []).join(', '),
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  license: 'https://opensource.org/licenses/MIT',
});

export const createArticleSchema = (article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  image: article.image,
  datePublished: article.publishDate,
  dateModified: article.lastModified || article.publishDate,
  author: {
    '@type': 'Person',
    name: 'Mohd Suhail',
    url: 'https://Suhail.in',
  },
  publisher: {
    '@type': 'Person',
    name: 'Mohd Suhail',
    logo: {
      '@type': 'ImageObject',
      url: 'https://Suhail.design/logo.jpg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
  articleSection: article.category,
  keywords: article.tags.join(', '),
  wordCount: article.readingTime * 200, // Estimate
  inLanguage: 'en-US',
  isAccessibleForFree: true,
});

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mohd Suhail Product Design',
  alternateName: 'Mohd Suhail Portfolio',
  url: 'https://Suhail.in',
  logo: 'https://Suhail.design/logo.jpg',
  image: 'https://Suhail.design/logo.jpg',
  description:
    'Product design and UX services specializing in UX research, design systems, prototyping, and human-centered product design.',
  email: 'iam@Suhail.in',
  telephone: '+91-9910978079',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'India',
  },
  founder: {
    '@type': 'Person',
    name: 'Mohd Suhail',
  },
  foundingDate: '2022',
  numberOfEmployees: '1',
  knowsAbout: [
    'Product Design',
    'UX Research',
    'Design Systems',
    'Interaction Design',
    'Accessibility (WCAG)',
    'Service Design',
  ],
  sameAs: ['https://dribbble.com/suhail', 'https://www.linkedin.com/in/suuhail01/'],
});

// SEO-enhanced FAQ Schema
export const createFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What design tools and methods does Mohd Suhail specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mohd Suhail specializes in Figma, Framer, prototyping, design systems, usability testing, user research, and accessibility (WCAG). He has 4+ years of professional experience delivering product design and UX outcomes for B2B and B2C clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Mohd Suhail work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Mohd Suhail provides product design and UX services to clients globally, including the United States, Canada, United Kingdom, Germany, Europe, Poland, Luxembourg, Switzerland, and India. He works remotely and collaborates across different time zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of design projects does Mohd Suhail work on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mohd Suhail works on product design projects including UX research, design systems, SaaS product design, e-commerce UX, enterprise dashboards, onboarding experiences, and mobile apps. He focuses on human-centered design and measurable product outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Mohd Suhail for a project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Mohd Suhail via email at iam@Suhail.in, phone at +91-9910978079, or through the contact form on his website at https://Suhail.design/contact. He responds to all project inquiries promptly.',
      },
    },
  ],
});

// Helper function to inject schema into page
export const injectSchema = (schemaObject, schemaId = null) => {
  // Generate a unique ID for the schema based on its type
  const schemaType = schemaObject['@type'];
  const uniqueId = schemaId || `schema-${schemaType.toLowerCase()}`;

  // Remove existing schema of the same type to prevent duplicates
  const existingSchema = document.querySelector(`script[data-schema-id="${uniqueId}"]`);
  if (existingSchema) {
    existingSchema.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema-id', uniqueId);
  script.textContent = JSON.stringify(schemaObject);
  document.head.appendChild(script);
};

// Helper function to inject multiple schemas
export const injectMultipleSchemas = (schemas) => {
  schemas.forEach((schema, index) => {
    const schemaType = schema['@type'];
    const uniqueId = `schema-${schemaType.toLowerCase()}-${index}`;
    injectSchema(schema, uniqueId);
  });
};

// Helper function to clear all existing schemas
export const clearAllSchemas = () => {
  const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
  existingSchemas.forEach((script) => script.remove());
};
