/**
 * SEO Utilities for Portfolio Website
 * Comprehensive SEO management with dynamic meta tags, structured data, and optimization
 */

// Import enhanced schema markup functions
import {
  createPersonSchema,
  createWebsiteSchema,
  createProfessionalServiceSchema,
  createBreadcrumbSchema,
  createProjectSchema,
  createArticleSchema,
  createOrganizationSchema,
  createFAQSchema,
  injectSchema,
  injectMultipleSchemas,
  clearAllSchemas,
} from './schemaMarkup.js';

// Target keywords for different pages with optimal density
export const SEO_KEYWORDS = {
  global: [
    'Mohd Suhail',
    'Senior UI/UX Designer',
    'Senior Product Designer',
    'Lead UX Designer',
    'Lead Product Designer',
    'Principal UX Designer',
    'UX Design Lead',
    'Product Design Lead',
    'UI/UX Designer',
    'Product Designer',
    'User Experience Designer',
    'User Interface Designer',
    'Digital Product Designer',
    'Experience Designer',
    'Interaction Designer',
    'Visual Designer',
    'UX Researcher',
    'Design Strategist',
    'Human-Centered Designer',
    'User-Centered Designer',
    'B2B Product Designer',
    'B2C Product Designer',
    'Enterprise UX Designer',
    'Consumer Product Designer',
    'SaaS Product Designer',
    'B2B UX Specialist',
    'B2C UX Specialist',
    'Enterprise Product Design',
    'Consumer Experience Design',
    'Business Product Designer',
    'Customer Experience Designer',
    'Service Designer',
    'UX/UI Consultant',
    'Product Design Consultant',
    'Design Thinking Expert',
    'User Research Specialist',
    'Usability Expert',
    'UX Strategy',
    'Product Strategy',
    'Design Strategy',
    'UX Architecture',
    'Information Architecture',
    'User Flow Design',
    'Journey Mapping',
    'User Journey Designer',
    'Persona Development',
    'Wireframing Expert',
    'Prototyping Specialist',
    'High-Fidelity Design',
    'Low-Fidelity Prototyping',
    'Interactive Prototypes',
    'Usability Testing',
    'User Testing',
    'A/B Testing Designer',
    'Design Validation',
    'Data-Driven Design',
    // Design Tools & Software
    'Figma Expert',
    'Sketch Designer',
    'Adobe XD Specialist',
    'InVision Prototyping',
    'Principle Animation',
    'Framer Designer',
    'Adobe Creative Suite',
    'Photoshop Designer',
    'Illustrator Expert',
    'After Effects Designer',
    'Miro Collaboration',
    'FigJam Facilitator',
    'Whimsical Designer',
    'Balsamiq Wireframes',
    'Axure RP Expert',
    'Webflow Designer',
    // Design Systems & Methodology
    'Design System Architect',
    'Design System Designer',
    'Component Library Design',
    'Design Token System',
    'Atomic Design',
    'Design Patterns',
    'Style Guide Creator',
    'Brand Guidelines',
    'Design Documentation',
    'Design Standards',
    'Accessibility Guidelines',
    'WCAG Compliance',
    'Inclusive Design',
    'Universal Design',
    'Mobile Design',
    'Responsive Design',
    'Adaptive Design',
    'Desktop Design',
    'Tablet Design',
    'Web Design',
    'Mobile App Design',
    'iOS Design',
    'Android Design',
    'Material Design',
    'iOS Human Interface',
    // UX Research & Strategy
    'UX Research',
    'User Research',
    'Qualitative Research',
    'Quantitative Research',
    'User Interviews',
    'Contextual Inquiry',
    'Field Studies',
    'Ethnographic Research',
    'Survey Design',
    'Analytics Analysis',
    'Heuristic Evaluation',
    'Competitive Analysis',
    'Market Research',
    'Stakeholder Interviews',
    'Requirements Gathering',
    'Product Discovery',
    'Design Thinking Workshops',
    'Ideation Sessions',
    'Brainstorming Facilitation',
    'Workshop Facilitation',
  ],
  homepage: [
    'Senior UI/UX Designer Portfolio',
    'Senior Product Designer Portfolio',
    'Lead UX Designer India',
    'Product Design Consultant',
    'B2B Product Designer',
    'B2C UX Designer',
    'Enterprise UX Design',
    'SaaS Product Design',
    'User Experience Portfolio',
    'Product Design Portfolio',
    'UX Design Services',
    'Product Design Services',
    'UI Design Services',
    'User Research Services',
    'Design Strategy Consulting',
    'Digital Product Design',
    'Mobile App UX Design',
    'Web Application Design',
    'Dashboard Design Expert',
    'E-commerce UX Design',
    'Fintech Product Design',
    'Healthcare UX Design',
    'EdTech Product Design',
    'B2B SaaS Designer',
    'Enterprise Software Design',
    'Consumer App Design',
    'Startup Product Designer',
    'Design System Creation',
    'User-Centered Design',
    'Human-Centered Design',
    'Design Thinking Practitioner',
    'Agile UX Designer',
    'Lean UX Expert',
    'Remote Product Designer',
    'Freelance UX Designer',
    'Contract Product Designer',
  ],
  about: [
    'Senior UX Designer Background',
    'Product Designer Experience',
    'UI/UX Design Journey',
    'Product Design Career',
    'UX Design Experience',
    'Design Leadership',
    'Design Team Lead',
    'UX Design Skills',
    'Product Design Skills',
    'User Research Skills',
    'Design Strategy Skills',
    'Visual Design Expertise',
    'Interaction Design Skills',
    'Design Thinking Approach',
    'Human-Centered Design Philosophy',
    'User-Centered Design Methodology',
    'Agile UX Experience',
    'Lean UX Methodology',
    'Design Sprint Facilitation',
    'Product Discovery Experience',
    'B2B Design Experience',
    'B2C Design Experience',
    'Enterprise Design Background',
    'SaaS Design Expertise',
    'Startup Design Experience',
    'Design Consulting Experience',
    'Cross-functional Collaboration',
    'Stakeholder Management',
    'Design Process',
    'Problem-Solving Designer',
    'Innovation in Design',
    'Continuous Learning Designer',
    'Design Enthusiast',
    'Empathy-Driven Design',
  ],
  projects: [
    'UI/UX Design Portfolio',
    'Product Design Portfolio',
    'UX Case Studies',
    'Product Design Case Studies',
    'Design Portfolio Projects',
    'B2B Product Design Projects',
    'B2C UX Design Projects',
    'Enterprise UX Portfolio',
    'SaaS Product Design',
    'Mobile App UX Design',
    'Web App Product Design',
    'Dashboard Design',
    'E-commerce UX Design',
    'Fintech Product Design',
    'Healthcare UX Projects',
    'EdTech Product Design',
    'Consumer App Design',
    'Business Software Design',
    'Enterprise Software UX',
    'Startup Product Design',
    'Design System Projects',
    'Component Library Design',
    'User Research Projects',
    'Usability Testing Case Studies',
    'Wireframe Examples',
    'Prototype Portfolio',
    'High-Fidelity Mockups',
    'Interactive Prototypes',
    'User Journey Maps',
    'Persona Development',
    'Information Architecture',
    'User Flow Design',
    'Design Sprint Projects',
    'Visual Design Portfolio',
    'Branding Projects',
    'Design Documentation',
    'Accessibility Design',
    'Inclusive Design Projects',
    'Responsive Design Examples',
    'Mobile-First Design',
    'Desktop Design Projects',
    'Tablet Design Optimization',
    'Cross-Platform Design',
    'iOS App Design',
    'Android App Design',
    'Web Design Projects',
    'Landing Page Design',
    'Marketing Website Design',
    'Product Page Design',
    'Checkout Flow Design',
    'Onboarding Experience Design',
    'Account Management UX',
    'Settings Interface Design',
    'Admin Dashboard Design',
    'Analytics Dashboard',
    'Data Visualization Design',
    'Complex UI Design',
    'Form Design Optimization',
    'Navigation Design',
    'Menu Design',
    'Search Interface Design',
    'Filter Design',
    'Table Design',
    'List View Design',
    'Card Design Pattern',
    'Modal Design',
    'Notification Design',
    'Empty State Design',
    'Error State Design',
    'Loading State Design',
    'Micro-interaction Design',
    'Animation Design',
    'Transition Design',
    'Design for Conversion',
    'CRO Design',
    'Growth Design',
  ],
  contact: [
    'Hire Senior UX Designer',
    'Hire Product Designer',
    'Hire UI/UX Designer',
    'Hire UX Researcher',
    'Hire Design Strategist',
    'Senior UX Designer for Hire',
    'Product Designer for Hire',
    'Freelance UX Designer',
    'Freelance Product Designer',
    'Contract UX Designer',
    'Contract Product Designer',
    'Remote UX Designer',
    'Remote Product Designer',
    'Independent UX Designer',
    'Independent Product Designer',
    'UX Design Consultant',
    'Product Design Consultant',
    'Design Strategy Consultant',
    'UX Design Services',
    'Product Design Services',
    'UI Design Services',
    'User Research Services',
    'Usability Testing Services',
    'Design Sprint Services',
    'Design System Services',
    'B2B Product Design Services',
    'B2C UX Design Services',
    'Enterprise UX Design',
    'SaaS Product Design',
    'Mobile App UX Design',
    'Web Application Design',
    'Dashboard Design Services',
    'E-commerce UX Design',
    'Startup Product Design',
    'Digital Product Design',
    'Product Strategy Services',
    'UX Strategy Consulting',
    'Design Thinking Workshop',
    'User Research Workshop',
    'Usability Testing Session',
    'Design Audit Services',
    'UX Audit',
    'Heuristic Evaluation',
    'Accessibility Audit',
    'Design QA',
    'Part-time UX Designer',
    'Full-time Product Designer',
    'Contract UX Work',
    'Project-based Design',
    'Long-term Design Partner',
    'Short-term Design Projects',
    'MVP Design',
    'Prototype Design',
    'Proof of Concept Design',
    // B2B/B2C Specific Services
    'B2B Product Design',
    'B2C UX Design',
    'Enterprise Software Design',
    'Consumer App Design',
    'Business Software UX',
    'Customer Facing Design',
    'Internal Tool Design',
    'Admin Interface Design',
    'Client Portal Design',
    'Customer Dashboard',
    'Sales Dashboard Design',
    'CRM Design',
    'ERP Design',
    'Workflow Design',
    'Process Optimization Design',
    // Industry-Specific Design
    'SaaS Product Design',
    'Fintech UX Design',
    'Healthcare Product Design',
    'EdTech UX Design',
    'E-commerce Design',
    'Marketplace Design',
    'Platform Design',
    'Mobile Banking Design',
    'Insurance Product Design',
    'Real Estate Platform Design',
    'Travel App Design',
    'Hospitality UX Design',
    'Restaurant App Design',
    'Food Delivery Design',
    'Logistics Platform Design',
    'Supply Chain UX',
    'HR Software Design',
    'Recruitment Platform Design',
    'Learning Management System Design',
    'Content Management Design',
    'Social Platform Design',
    'Community Platform Design',
    'Forum Design',
    'Chat Interface Design',
    'Video Platform Design',
    'Music App Design',
    'Podcast App Design',
    'News App Design',
    'Blog Platform Design',
    'Portfolio Platform Design',
    'Job Board Design',
    'Booking Platform Design',
    'Scheduling App Design',
    'Calendar Interface Design',
    'Project Management Tool Design',
    'Collaboration Tool Design',
    'Communication App Design',
    'Productivity App Design',
    'Note-taking App Design',
    'Task Management Design',
    // Geographic Services
    'UX Designer India',
    'Product Designer Remote',
    'Global Design Services',
    'International Design Projects',
    'Cross-timezone Design',
    'US Client Design Services',
    'European Design Services',
    'UK Product Designer',
    'Australian UX Services',
    'Canadian Design Services',
    'Asia-Pacific Design',
    'Middle East Design Services',
  ],
};

// International Service-Specific Keywords for Global Targeting
export const INTERNATIONAL_SERVICE_KEYWORDS = {
  europe: [
    'Senior UX Designer Freelance Services France',
    'Product Designer B2B Consulting Sweden',
    'UI/UX Designer SaaS Design Germany',
    'UX Researcher Portfolio London',
    'Product Designer User Research Spain',
    'Senior UI Designer Design Strategy Europe',
    'UX Designer Hiring Europe',
    'Product Designer Design Systems Berlin',
    'UI/UX Designer Remote Work France',
    'Senior UX Designer UX Audit Netherlands',
    'Product Designer Portfolio France',
    'UX Designer Usability Testing Italy',
    'Senior Product Designer B2C Design UK',
    'UI/UX Designer User Research Manchester',
    'Product Designer Enterprise UX Sweden',
    'Experience Designer Design Audit London',
    'Senior UX Designer Remote Work London',
    'Product Designer B2B SaaS Toronto',
    'Lead UX Designer Hiring California',
    'Design Strategist Hiring Manchester',
    'UX Researcher Design Thinking France',
    'Product Designer Design Sprint Canada',
    'UX Designer Consultation UK',
    'Senior Product Designer Freelance Vancouver',
    'UI/UX Designer Remote Work Berlin',
    'Product Designer User Journey Poland',
    'Senior UX Designer Wireframing Italy',
    'Experience Designer Remote Work Vancouver',
    'UX Designer Remote Work Sweden',
    'Product Designer B2B Design USA',
    'Interaction Designer UX Audit Europe',
    'UX Designer Mobile App Design UK',
    'Product Designer Prototyping Manchester',
    'UI/UX Designer Design Systems Spain',
    'UX Designer Freelance Services France',
    'Product Designer Dashboard Design France',
    'UX Designer E-commerce UX Italy',
    'Product Designer Fintech Design Poland',
    'Senior UX Designer Design Strategy Europe',
    'Interaction Designer User Testing UK',
    'UI/UX Designer Healthcare UX France',
    'UX Designer B2C Experience Vancouver',
    'Product Designer Design Review Europe',
    'Senior Product Designer SaaS Platform Germany',
    'UX Designer Freelance Services Germany',
    'Interaction Designer User Research Toronto',
    'Product Designer Consultation California',
    'UX Designer Portfolio Sweden',
    'Senior UI Designer B2B Product France',
    'Product Designer Mobile UX United States',
    'UI/UX Designer Portfolio Vancouver',
    'Product Designer Design Consulting California',
    'UX Designer Freelance Services Italy',
    'Experience Designer UX Audit Vancouver',
    'Senior Product Designer Portfolio Toronto',
    'Interaction Designer User Testing France',
    'Product Designer Design Strategy Manchester',
    'Senior UX Designer Design Sprint Manchester',
    'Product Designer Portfolio California',
    'UX Researcher User Interviews Europe',
    'Interaction Designer Persona Development Texas',
    'UX Designer Accessibility Design Manchester',
    'Product Designer Design Consulting Netherlands',
    'UX Designer Dashboard Design London',
    'UI/UX Designer Mobile App UX Canada',
    'Product Designer Information Architecture Netherlands',
    'Product Designer Freelance Services Germany',
    'UX Designer Freelance Services California',
    'Senior Product Designer UX Audit Canada',
    'Product Designer Design Consulting Toronto',
    'Senior UX Designer Portfolio UK',
    'Product Designer WCAG Compliance Canada',
    'UX Designer Web Application Design UK',
    'UI/UX Designer B2B Platform Texas',
    'Product Designer Design Consulting Europe',
    'UX Researcher Usability Testing Europe',
    'Product Designer Portfolio Spain',
    'Interaction Designer User Journey Toronto',
    'UX Designer Accessibility Audit Texas',
    'UX Designer Enterprise Software USA',
    'Interaction Designer Design Thinking Netherlands',
    'Experience Designer Consumer App Netherlands',
    'UX Designer Fintech Design Italy',
    'Product Designer E-commerce UX France',
    'Senior Product Designer Portfolio Europe',
    'UX Designer Remote Work Canada',
    'Product Designer SaaS Design Italy',
    'UX Designer Freelance Services Texas',
    'UX Designer WCAG Compliance Texas',
    'UX Designer Healthcare Platform Europe',
    'Interaction Designer Hiring Vancouver',
    'Senior UX Designer B2C Product USA',
    'UX Designer Mobile-First Design Italy',
    'Senior Product Designer Hiring Berlin',
    'Product Designer Remote Work United States',
    'UI/UX Designer Mobile Design UK',
    'UX Designer EdTech Design Berlin',
    'UX Designer E-commerce Platform New York',
    'UX Designer Freelance Services Netherlands',
    'Product Designer Consultation Netherlands',
    'UX Designer Remote Work New York',
    'Product Designer Design Systems Sweden',
    'Product Designer User Flow Design Manchester',
    'Senior Product Designer Design Review Toronto',
    'UX Designer Design Sprint France',
    'Interaction Designer Remote Work United States',
    'UX Designer B2B SaaS Germany',
    'Product Designer Hiring United States',
    'UX Designer Design Consulting UK',
    'Senior Product Designer Remote Work Manchester',
    'UX Designer Dashboard UX London',
    'Product Designer Hiring Poland',
    'UX Researcher User Testing USA',
    'Product Designer Hiring United States',
    'UX Designer Web App Design Toronto',
    'Product Designer Portfolio California',
    'Senior UX Designer Enterprise Design Spain',
    'Product Designer Design Thinking France',
    'UX Designer Accessibility Compliance California',
    'UX Researcher Usability Study Canada',
    'UX Designer Responsive Design France',
    'UX Designer Design Strategy UK',
    'Product Designer Design Review Poland',
    'Senior Product Designer B2B Platform Spain',
    'Experience Designer UX Audit Canada',
    'Product Designer UX Audit France',
    'Product Designer Remote Work California',
    'UX Designer Mobile App Design Vancouver',
    'Senior UX Designer User Research USA',
    'UX Designer Design Consulting Toronto',
    'UI/UX Designer UX Audit Spain',
    'Product Designer UX Audit Toronto',
    'UX Designer Design Consulting France',
    'Experience Designer Wireframing France',
    'Experience Designer Accessibility Design Spain',
    'UX Designer Platform Design Netherlands',
    'UX Researcher User Research Canada',
    'Product Designer Freelance Services USA',
    'UX Designer Hiring USA',
    'Product Designer Accessibility Audit Vancouver',
    'UX Designer Prototyping Poland',
    'UX Designer E-commerce Design USA',
    'Product Designer E-commerce UX Spain',
    'UX Designer Consultation Italy',
    'Product Designer User Testing USA',
    'UX Designer E-commerce Platform Italy',
    'UX Designer Consultation Vancouver',
    'UX Designer Design Sprint Europe',
    'Product Designer Mobile App UX Spain',
    'Senior Product Designer Freelance Berlin',
    'UX Designer E-commerce Platform Germany',
    'Experience Designer Accessibility Design Sweden',
    'UX Designer Hiring Canada',
    'Product Designer Design Review Vancouver',
    'UX Designer Hiring Berlin',
    'Interaction Designer User Research Germany',
    'UX Designer Dashboard Design USA',
    'Senior Product Designer UX Audit Sweden',
    'Senior UX Designer Design Consulting USA',
    'Interaction Designer Consultation Vancouver',
    'UX Designer B2B SaaS Manchester',
    'Senior Product Designer Hiring UK',
    'Product Designer Consultation Texas',
    'UX Designer Consultation Spain',
    'UX Designer Platform Design Netherlands',
    'Senior Product Designer Accessibility Spain',
    'Senior Product Designer Design Consulting Canada',
    'Interaction Designer Hiring Netherlands',
    'Product Designer Prototyping Spain',
    'UX Researcher Qualitative Research Sweden',
    'Product Designer Freelance Services Manchester',
    'Senior UX Designer B2B Product New York',
    'Product Designer Dashboard Design Vancouver',
    'UX Designer Enterprise Platform London',
    'UX Designer Consultation New York',
    'UX Designer E-commerce Design California',
    'Product Designer Accessibility Design Germany',
    'UX Designer Freelance Services Canada',
    'UX Designer Design Systems Manchester',
    'UX Researcher Remote Work Manchester',
    'UX Designer Portfolio Vancouver',
    'UX Designer Remote Work New York',
    'Product Designer Hiring Texas',
    'UX Researcher Portfolio California',
    'UX Designer UX Audit Spain',
    'UX Researcher User Testing Toronto',
    'UX Designer Consultation Spain',
    'Senior Product Designer Design Consulting Texas',
    'UX Designer Remote Work United States',
    'Product Designer Consultation Netherlands',
    'UX Designer Accessibility Compliance Berlin',
    'Senior Product Designer Prototyping Berlin',
    'Product Designer Remote Work UK',
    'Senior Product Designer Design Consulting California',
    'Experience Designer Design Strategy USA',
    'UX Designer Freelance Services Italy',
    'Product Designer Remote Work Vancouver',
    'Product Designer E-commerce UX Germany',
    'UX Designer Freelance Services Sweden',
    'Interaction Designer Consultation Germany',
    'Senior Product Designer Hiring Canada',
    'UX Designer Accessibility Compliance Poland',
    'Experience Designer Freelance Services Texas',
    'UX Designer Hiring Italy',
    'Senior Product Designer Accessibility Texas',
    'UX Designer Freelance Services London',
    'Experience Designer Design Consulting Canada',
    'UX Designer B2C Product Poland',
    'Product Designer Mobile Design Europe',
    'Experience Designer Design Review Toronto',
    'Senior UX Designer Design Systems Sweden',
    'UX Designer Freelance Services UK',
    'Product Designer Remote Work Spain',
    'Experience Designer Dashboard Design USA',
    'Product Designer Fintech UX Italy',
    'Senior Product Designer Remote Work California',
    'UX Designer Remote Work California',
    'Product Designer Platform Design Spain',
    'Senior Product Designer Design Consulting Berlin',
    'Experience Designer Portfolio Texas',
    'Interaction Designer E-commerce UX California',
    'UX Designer Consultation Europe',
    'UX Designer Remote Work USA',
    'UX Researcher Design Thinking USA',
    'Senior Product Designer UX Audit Vancouver',
    'Product Designer Design Strategy Netherlands',
    'Senior Product Designer Accessibility Sweden',
    'UX Designer Hiring London',
    'UX Designer Mobile-First Design UK',
    'UX Designer Dashboard UX New York',
    'UX Designer Design Review Poland',
    'Product Designer Design Review Poland',
    'Senior UX Designer UX Audit Netherlands',
    'Senior Product Designer Remote Work Sweden',
    'UX Designer Platform Design Toronto',
    'Experience Designer B2B Design France',
    'UX Designer Hiring Canada',
    'UX Designer Consultation New York',
    'UX Researcher User Testing Italy',
    'Senior Product Designer Remote Work Manchester',
    'Product Designer Mobile App Design Vancouver',
    'Product Designer Portfolio New York',
    'Product Designer Design Consulting Vancouver',
    'Interaction Designer User Journey Berlin',
    'Interaction Designer Wireframing California',
    'UX Designer Freelance Services France',
    'Senior Product Designer Portfolio Canada',
    'Senior Product Designer Design Review Poland',
    'Product Designer Remote Work Germany',
    'Senior Product Designer SaaS Design Sweden',
    'Interaction Designer UX Audit Sweden',
    'Senior UX Designer Remote Work UK',
    'UX Designer Mobile App Design Canada',
    'Senior Product Designer Consultation Netherlands',
    'UX Designer UX Audit London',
    'UX Designer Design Consulting London',
    'UX Designer E-commerce Platform Toronto',
    'UX Designer E-commerce UX Toronto',
    'UX Designer Portfolio Texas',
    'UX Designer B2B Design USA',
    'Product Designer UX Audit Berlin',
    'Product Designer Consultation Europe',
    'Senior Product Designer Remote Work Berlin',
    'Senior Product Designer Prototyping New York',
    'UX Designer E-commerce Design London',
    'Product Designer Portfolio Texas',
    'Senior Product Designer Hiring Europe',
    'Product Designer Design Consulting Europe',
    'UX Designer User Research Texas',
    'UX Researcher Freelance Services California',
    'Senior UX Designer Accessibility Manchester',
    'UX Designer User Testing Europe',
    'Senior Product Designer Design Consulting Texas',
    'Product Designer Design Review Sweden',
    'UX Designer Design Strategy Berlin',
    'Senior UX Designer User Research Texas',
    'Product Designer B2C Design United States',
    'Product Designer Portfolio Spain',
  ],
  northAmerica: [
    'UX Designer Freelance Services Canada',
    'Product Designer E-commerce UX New York',
    'Experience Designer Remote Work United States',
    'Product Designer Design Consulting Texas',
    'Interaction Designer Accessibility Design Toronto',
    'UX Designer Platform Design Manchester',
    'UX Designer UX Audit New York',
    'Senior Product Designer Portfolio Canada',
    'Senior UX Designer Remote Work UK',
    'Senior UX Designer Remote Work Canada',
    'Senior Product Designer Accessibility France',
    'Senior Product Designer Dashboard Design Toronto',
    'Senior UX Designer UX Audit Italy',
    'Senior UX Designer B2B SaaS UK',
    'Senior UX Designer Design Strategy USA',
    'Senior UX Designer Design Consulting Canada',
    'Senior Product Designer Consultation California',
  ],
  serviceSpecific: [
    'UX Researcher User Testing Spain',
    'UX Designer Responsive Design Canada',
    'Product Designer Design Strategy Europe',
    'UX Designer Design Review Canada',
    'UX Designer Mobile-First Design France',
    'UX Designer Prototyping Poland',
    'UX Designer E-commerce Platform Germany',
    'Product Designer User Journey USA',
    'Product Designer Design Systems Manchester',
    'UX Designer Consultation Spain',
    'UX Designer Platform Design USA',
    'Product Designer Hiring London',
    'UX Designer Consultation New York',
    'Product Designer Hiring Canada',
    'UX Designer Consultation Europe',
  ],
  germany: [
    'Senior UX-Designer Berlin',
    'Produktdesigner München',
    'UX-Researcher Deutschland',
    'Design-Strategie Berater Deutschland',
    'Interaction Designer Hamburg',
    'Accessibility-Experte WCAG Deutschland',
    'Design Systems Architekt Berlin',
    'Service Designer Deutschland',
    'Senior Produktdesigner Frankfurt',
    'B2B Produktdesigner Deutschland',
    'B2C UX-Designer Deutschland',
    'SaaS Produktdesigner München',
    'E-Commerce UX-Designer Köln',
    'Healthcare UX-Designer Bremen',
    'Fintech UX-Designer Nürnberg',
    'EdTech Produktdesigner Berlin',
    'Enterprise UX-Designer Stuttgart',
    'Mobile UX-Designer Frankfurt',
    'Usability-Tester Deutschland',
    'Prototyping Spezialist Deutschland',
    'User-Testing Experten Deutschland',
    'Persona-Entwicklung Spezialist Deutschland',
    'Customer Journey Mapping Deutschland',
    'User Flow Designer Deutschland',
    'Information Architecture Experte Deutschland',
    'Wireframing Spezialist Deutschland',
    'High-Fidelity Designer Deutschland',
    'Design Sprint Facilitator Germany',
    'UX-Strategie Berater Deutschland',
    'Produktdesign Berater Berlin',
    'Freiberuflicher Produktdesigner Deutschland',
    'Remote UX-Designer Germany',
    'Consulting: UX & Produktdesign Deutschland',
    'Design System Implementation Deutschland',
    'Component Library Designer Germany',
    'WCAG Compliance Berater Deutschland',
    'Barrierefreiheit Spezialist Deutschland',
    'Conversion-optimierter UX-Designer Germany',
    'User Research & Testing Berlin',
    'Qualitative Research Spezialist Deutschland',
    'Quantitative Research Analyst Germany',
    'UX-Writer & Content Design Germany',
    'Onboarding UX-Designer Deutschland',
    'Dashboard UX-Designer Germany',
    'Analytics UX Specialist Germany',
    'Design Handoff & Documentation Germany',
    'Figma Prototyping Specialist Germany',
    'Design Facilitation & Workshops Germany',
    'Product Discovery Facilitator Germany',
    'MVP Produktdesigner Deutschland',
    'Proof of Concept Designer Germany',
    'Enterprise Produktdesign Consultant Germany',
    'Consumer App UX Designer Germany',
    'Internal Tools UX Designer Germany',
    'Admin Interface UX Designer Germany',
    'Client Portal UX Designer Germany',
    'Search & Navigation UX Designer Germany',
    'Form UX Specialist Germany',
    'Accessibility Audit Services Germany',
    'UX Audit Services Berlin',
    'Design System Audit Germany',
    'Product Design Workshops Munich',
    'User Interview Services Germany',
    'Remote Product Design Services Germany',
    'Senior UX Consultant Germany',
    'Lead Product Designer Germany',
    'Head of Product Design Germany',
    'DesignOps Specialist Germany',
    'Interaction Prototyping Germany',
    'Micro-interaction Designer Germany',
    'UX Case Study Portfolio Germany',
    'Produktdesigner für internationales Design Germany',
  ],
};

// Geographic targeting for different regions
export const GEO_TARGETING = {
  india: {
    region: 'IN-DL',
    placename: 'Delhi, India',
    position: '28.7041;77.1025',
    icbm: '28.7041, 77.1025',
    keywords: [
      'Senior UX Designer India',
      'Product Designer Delhi',
      'UI/UX Designer Delhi NCR',
      'Senior Product Designer India',
      'UX Designer Mumbai',
      'Product Designer Bangalore',
      'UI/UX Designer Pune',
      'Senior UX Designer Hyderabad',
      'Product Designer Noida',
      'UX Designer Gurgaon',
    ],
  },
  usa: {
    region: 'US',
    keywords: [
      'Senior UX Designer USA',
      'Product Designer America',
      'Remote UX Designer US',
      'Senior Product Designer Silicon Valley',
      'UX Designer New York',
      'Product Designer California',
      'Senior UX Designer San Francisco',
      'UX Designer Seattle',
      'Product Designer Austin',
      'Senior Product Designer Boston',
    ],
  },
  canada: {
    region: 'CA',
    keywords: [
      'Senior UX Designer Canada',
      'Product Designer Toronto',
      'Remote UX Designer CA',
      'Senior Product Designer Vancouver',
      'UX Designer Montreal',
      'Product Designer Calgary',
      'UX Designer Ottawa',
      'Product Designer Winnipeg',
    ],
  },
  uk: {
    region: 'GB',
    keywords: [
      'Senior UX Designer UK',
      'Product Designer London',
      'UX Designer Britain',
      'Senior Product Designer Manchester',
      'UX Designer Birmingham',
      'Product Designer Leeds',
      'UX Designer Scotland',
      'Product Designer Wales',
    ],
  },
  germany: {
    region: 'DE',
    keywords: [
      'Senior UX Designer Germany',
      'Produktdesigner Berlin',
      'UX Designer Deutschland',
      'Senior Produktdesigner Munich',
      'UX Designer Hamburg',
      'Produktdesigner Frankfurt',
      'UX Designer',
      'Produktdesigner',
      'UI/UX Designer',
      'Experience Designer',
      'Interaction Designer',
      'UI/UX Designer Deutschland',
      'UX Designer Berlin',
      'Senior UX Designer',
      'Lead Product Designer',
    ],
  },
  europe: {
    region: 'EU',
    keywords: [
      'Senior UX Designer Europe',
      'Product Designer EU',
      'Remote UX Designer European',
      'Senior Product Designer Netherlands',
      'UX Designer Amsterdam',
      'Product Designer Paris',
      'Senior UX Designer Stockholm',
      'Product Designer Copenhagen',
      'UX Designer Vienna',
      'Senior Product Designer Zurich',
    ],
  },
  australia: {
    region: 'AU',
    keywords: [
      'Senior UX Designer Australia',
      'Product Designer Sydney',
      'UX Designer Melbourne',
      'Senior Product Designer Brisbane',
      'UX Designer Perth',
      'Product Designer Adelaide',
    ],
  },
  global: {
    keywords: [
      'Remote UX Designer',
      'Freelance Product Designer',
      'International UX Designer',
      'Global Product Designer',
      'Remote UI/UX Designer',
      'Offshore Design Team',
      'Remote Product Design',
      'International UX Consultant',
    ],
  },
};

/**
 * Generate optimized page title with keyword targeting
 */
export const generatePageTitle = (page, customTitle = '') => {
  const baseBrand = 'Mohd Suhail';
  const baseDesc = 'Senior UI/UX Designer & Product Designer';
  const currentYear = new Date().getFullYear();
  const titles = {
    home: `${baseBrand} - Senior UI/UX Designer | Product Designer B2B & B2C`,
    about: `About ${baseBrand} - Senior UX Designer | Background & Experience`,
    projects: `Projects - ${baseBrand} | UI/UX Design Portfolio & Case Studies`,
    contact: `Contact ${baseBrand} - Senior Product Designer | Hire Expert`,
    articles: `Articles - ${baseBrand} | UX Design & Product Design Blog`,
    404: `Page Not Found - ${baseBrand} Portfolio | UI/UX Designer`,
    custom: customTitle
      ? `${customTitle} - ${baseBrand} | ${baseDesc}`
      : `${baseBrand} - ${baseDesc}`,
  };

  return titles[page] || titles.home;
};

/**
 * Generate optimized meta description with keyword density
 */
export const generateMetaDescription = (page, customDesc = '') => {
  const descriptions = {
    home: 'Senior UI/UX Designer & Product Designer with 4+ years experience in B2B and B2C product design. View innovative UX case studies and design solutions.',
    about:
      'Learn about Mohd Suhail, Senior UI/UX Designer with 4+ years experience in product design, user research, and design strategy. Professional journey and skills.',
    projects:
      "Explore Mohd Suhail's UI/UX design portfolio. B2B and B2C product design case studies, user research, and human-centered design solutions.",
    contact:
      'Contact Mohd Suhail, Senior Product Designer specializing in B2B & B2C UX design. Available for freelance projects and design consultation.',
    articles:
      'Read articles by Mohd Suhail on UX Design, Product Design best practices, Design Thinking, and user-centered design workflows.',
    404: "Page not found on Mohd Suhail's portfolio. Explore UX design projects, about, contact, and articles featuring product design expertise.",
    custom: customDesc,
  };

  return descriptions[page] || descriptions.home;
};

/**
 * Generate structured data for different page types
 */
export const generateStructuredData = (page, data = {}) => {
  const basePersonData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohd Suhail',
    alternateName: ['Suhail', 'Mohd Suhail'],
    jobTitle: 'Senior UI/UX Designer & Product Designer',
    url: 'https://www.Suhail.in',
    email: 'iam@Suhail.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/himanrawat',
      'https://www.linkedin.com/in/suuhail01/',
      'https://x.com/Suhail_',
      'https://www.behance.net/himanshu_rawat',
      'https://dribbble.com/suhail',
    ],
  };
  const structuredDataTemplates = {
    home: {
      ...basePersonData,
      description:
        'Senior UI/UX Designer & Product Designer with 4+ years of professional experience in B2B and B2C product design, user research, and design strategy.',
      knowsAbout: SEO_KEYWORDS.global.concat(SEO_KEYWORDS.homepage),
    },
    about: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        ...basePersonData,
        description:
          'Professional background and skills of Mohd Suhail, Senior UI/UX Designer & Product Designer specializing in B2B and B2C product design.',
        knowsAbout: SEO_KEYWORDS.global.concat(SEO_KEYWORDS.about),
      },
      name: 'About Mohd Suhail - Senior UI/UX Designer',
      description:
        'Professional background and skills of Mohd Suhail, Senior UI/UX Designer & Product Designer specializing in B2B and B2C product design.',
      url: 'https://Suhail.design/about',
    },
    projects: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      mainEntity: {
        '@type': 'ItemList',
        name: 'UI/UX Design Portfolio & Case Studies',
        description: 'Portfolio showcase of B2B and B2C product design projects by Mohd Suhail',
        numberOfItems: 5,
        itemListElement: [],
      },
      name: 'UI/UX Design Portfolio & Product Design Case Studies',
      description: 'Portfolio showcase of B2B and B2C product design projects and UX case studies by Mohd Suhail',
      url: 'https://Suhail.design/projects',
      author: basePersonData,
    },
    contact: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      mainEntity: {
        ...basePersonData,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9910978079',
          email: 'iam@Suhail.in',
          contactType: 'customer service',
          availableLanguage: ['English', 'Hindi'],
        },
      },
      name: 'Contact Mohd Suhail - Senior UI/UX Designer',
      description:
        'Contact information for Mohd Suhail, Senior UI/UX Designer & Product Designer available for design projects and consultation.',
      url: 'https://Suhail.design/contact',
    },
  };

  return structuredDataTemplates[page] || structuredDataTemplates.home;
};

/**
 * Update page SEO metadata dynamically
 */
export const updatePageSEO = (page, customData = {}) => {
  // Update title
  document.title = customData.title || generatePageTitle(page);

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      customData.description || generateMetaDescription(page)
    );
  }
  // Update canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    const baseUrl = 'https://www.Suhail.in';
    const pageUrl = page === 'home' ? baseUrl : `${baseUrl}/${page}`;
    canonicalLink.setAttribute('href', customData.canonical || pageUrl);
  }

  // Update Open Graph tags
  updateOpenGraphTags(page, customData);

  // Update Twitter Card tags
  updateTwitterCardTags(page, customData);

  // Add/Update structured data
  addStructuredData(page, customData);
};

/**
 * Update Open Graph meta tags
 */
export const updateOpenGraphTags = (page, customData = {}) => {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');

  if (ogTitle) {
    ogTitle.setAttribute('content', customData.ogTitle || generatePageTitle(page));
  }

  if (ogDescription) {
    ogDescription.setAttribute(
      'content',
      customData.ogDescription || generateMetaDescription(page)
    );
  }
  if (ogUrl) {
    const baseUrl = 'https://www.Suhail.in';
    const pageUrl = page === 'home' ? baseUrl : `${baseUrl}/${page}`;
    ogUrl.setAttribute('content', customData.ogUrl || pageUrl);
  }
};

/**
 * Update Twitter Card meta tags
 */
export const updateTwitterCardTags = (page, customData = {}) => {
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');

  if (twitterTitle) {
    twitterTitle.setAttribute('content', customData.twitterTitle || generatePageTitle(page));
  }

  if (twitterDescription) {
    twitterDescription.setAttribute(
      'content',
      customData.twitterDescription || generateMetaDescription(page)
    );
  }
};

/**
 * Add structured data to page
 */
export const addStructuredData = (page, customData = {}) => {
  // Remove existing structured data for the page
  const existingScript = document.querySelector(`script[data-page="${page}"]`);
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-page', page);
  script.textContent = JSON.stringify(customData.structuredData || generateStructuredData(page));
  document.head.appendChild(script);
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbs = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Calculate keyword density for content optimization
 */
export const calculateKeywordDensity = (content, keyword) => {
  const words = content.toLowerCase().split(/\s+/);
  const keywordCount = words.filter((word) => word.includes(keyword.toLowerCase())).length;
  return ((keywordCount / words.length) * 100).toFixed(2);
};

/**
 * Validate SEO compliance
 */
export const validateSEO = () => {
  const issues = [];

  // Check title length (50-60 characters optimal)
  const title = document.title;
  if (title.length < 30 || title.length > 60) {
    issues.push(`Title length (${title.length}) should be between 30-60 characters`);
  }

  // Check meta description length (150-160 characters optimal)
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const descLength = metaDesc.getAttribute('content').length;
    if (descLength < 120 || descLength > 160) {
      issues.push(`Meta description length (${descLength}) should be between 120-160 characters`);
    }
  } else {
    issues.push('Meta description is missing');
  }

  // Check for canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    issues.push('Canonical URL is missing');
  }

  // Check for alt attributes on images
  const images = document.querySelectorAll('img');
  const missingAlt = Array.from(images).filter((img) => !img.getAttribute('alt'));
  if (missingAlt.length > 0) {
    issues.push(`${missingAlt.length} images missing alt attributes`);
  }

  return issues;
};

/**
 * Generate hreflang tags for international targeting
 */
export const generateHreflangTags = () => {
  const languages = [
    { lang: 'en', region: 'us', url: 'https://Suhail.design/' },
    { lang: 'en', region: 'gb', url: 'https://Suhail.design/' },
    { lang: 'en', region: 'ca', url: 'https://Suhail.design/' },
    { lang: 'hi', region: 'in', url: 'https://Suhail.design/?lang=hi' },
    { lang: 'es', region: 'es', url: 'https://Suhail.design/?lang=es' },
    { lang: 'de', region: 'de', url: 'https://Suhail.design/?lang=de' },
    { lang: 'fr', region: 'fr', url: 'https://Suhail.design/?lang=fr' },
  ];

  return languages.map(({ lang, region, url }) => ({
    rel: 'alternate',
    hreflang: `${lang}-${region}`,
    href: url,
  }));
};

/**
 * Monitor Core Web Vitals for SEO
 */
export const monitorWebVitals = () => {
  if (typeof window !== 'undefined' && 'web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};

/**
 * Generate localized content for different regions
 */
export const getLocalizedContent = (region = 'global') => {
  const localizedContent = {
    india: {
      currency: '₹',
      timeZone: 'Asia/Kolkata',
      workingHours: '9:00 AM - 6:00 PM IST',
      availability: 'Available for full-time and freelance opportunities in India and globally',
    },
    usa: {
      currency: '$',
      timeZone: 'America/New_York',
      workingHours: 'Flexible hours to match US timezone',
      availability: 'Available for remote collaboration with US-based companies',
    },
    europe: {
      currency: '€',
      timeZone: 'Europe/London',
      workingHours: 'Flexible hours to match European timezone',
      availability: 'Available for remote collaboration with European clients',
    },
    global: {
      availability: 'Available for remote work globally with flexible hours',
    },
  };

  return localizedContent[region] || localizedContent.global;
};

/**
 * INDEXING ENHANCEMENT FUNCTIONS
 * Functions to improve Google crawling and indexing speed
 */

/**
 * Core pages that must be indexed for portfolio visibility
 */
export const PRIORITY_PAGES = ['/', '/about', '/projects', '/contact', '/articles'];

/**
 * Project pages for additional crawling
 */
export const PROJECT_PAGES = [
  '/projects/iamart',
  '/projects/last3feet',
  '/projects/nextdoor',
  '/projects/wanderlustwoof',
];

/**
 * Article pages
 */
export const ARTICLE_PAGES = ['/articles/react-development-2025'];

/**
 * Enhanced crawl signals for better indexing
 */
export const enhanceCrawlability = () => {
  // Add crawl enhancement meta tags
  const crawlMeta = document.createElement('meta');
  crawlMeta.name = 'robots';
  crawlMeta.content = 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1';
  document.head.appendChild(crawlMeta);

  // Add updated timestamp for freshness signal
  const lastModified = document.createElement('meta');
  lastModified.name = 'last-modified';
  lastModified.content = new Date().toISOString();
  document.head.appendChild(lastModified);

  // Add cache control for proper crawling
  const cacheControl = document.createElement('meta');
  cacheControl.httpEquiv = 'Cache-Control';
  cacheControl.content = 'public, max-age=31536000';
  document.head.appendChild(cacheControl);
};

/**
 * Generate internal linking structure for better crawl discovery
 */
export const generateInternalLinks = (currentPage) => {
  const allPages = [...PRIORITY_PAGES, ...PROJECT_PAGES, ...ARTICLE_PAGES];

  // Filter out current page and return related pages for internal linking
  const relatedPages = allPages
    .filter((page) => page !== currentPage)
    .map((page) => ({
      url: `https://Suhail.in${page}`,
      title: generatePageTitle(page.replace('/', '')),
      relevance: calculatePageRelevance(currentPage, page),
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 5); // Top 5 related pages

  return relatedPages;
};

/**
 * Calculate page relevance for internal linking
 */
const calculatePageRelevance = (currentPage, targetPage) => {
  // Simple relevance scoring based on page type and content similarity
  let score = 0;

  if (currentPage.includes('project') && targetPage.includes('project')) score += 3;
  if (currentPage.includes('article') && targetPage.includes('article')) score += 3;
  if (currentPage === '/' && PRIORITY_PAGES.includes(targetPage)) score += 2;
  if (targetPage === '/about' || targetPage === '/contact') score += 1;

  return score;
};

/**
 * Add breadcrumb structured data for better crawling
 */
export const addBreadcrumbStructuredData = (currentPath) => {
  const pathSegments = currentPath.split('/').filter(Boolean);
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://Suhail.in',
      },
    ],
  };

  // Build breadcrumb chain
  let currentUrl = 'https://Suhail.in';
  pathSegments.forEach((segment, index) => {
    currentUrl += `/${segment}`;
    breadcrumbList.itemListElement.push({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '),
      item: currentUrl,
    });
  });

  // Inject breadcrumb schema
  injectSchema(breadcrumbList, 'breadcrumb-schema');
};

/**
 * Preload critical pages for faster crawling
 */
export const preloadCriticalPages = () => {
  PRIORITY_PAGES.forEach((page) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = `https://Suhail.in${page}`;
    link.as = 'document';
    document.head.appendChild(link);
  });
};

/**
 * Add SEO performance monitoring
 */
export const initializeSEOMonitoring = () => {
  // Monitor Core Web Vitals for SEO
  if ('web-vital' in window) {
    window.webVitals.getCLS(console.log);
    window.webVitals.getFID(console.log);
    window.webVitals.getLCP(console.log);
  }

  // Log crawl-friendly events
  if (process.env.NODE_ENV === 'development') {
    console.log('SEO Monitoring initialized');
    console.log('Priority pages:', PRIORITY_PAGES);
    console.log('Current timestamp:', new Date().toISOString());
  }
};

/**
 * Request indexing for current page (development utility)
 */
export const requestPageIndexing = (url = window.location.href) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🚀 Request indexing for: ${url}`);
    console.log('Manual steps:');
    console.log('1. Go to Google Search Console');
    console.log('2. Use URL Inspection tool');
    console.log('3. Enter URL and click "REQUEST INDEXING"');
  }
};

// Create FAQ schema from Accordion data specifically for About page
export const createAboutPageFAQSchema = (faqItems) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        item.answer ||
        (item.subSections
          ? item.subSections.map((section) => `${section.title}: ${section.description}`).join(' ')
          : 'Professional UI/UX design and product design services with expertise in B2B and B2C product design, user research, and design strategy.'),
    },
  })),
});

// Enhanced schema injection that prevents FAQ duplication
export const injectAboutPageSchemas = (faqItems = []) => {
  // Clear any existing schemas to prevent conflicts
  const existingSchemas = document.querySelectorAll('script[data-schema-id^="schema-"]');
  existingSchemas.forEach((script) => script.remove());

  const schemas = [];

  // Always include Person and Organization schemas
  schemas.push(createPersonSchema());
  schemas.push(createOrganizationSchema());
  schemas.push(createWebsiteSchema());
  schemas.push(createProfessionalServiceSchema());

  // Add About page specific FAQ schema if FAQ items exist
  if (faqItems && faqItems.length > 0) {
    schemas.push(createAboutPageFAQSchema(faqItems));
  }

  // Inject all schemas with unique identifiers
  injectMultipleSchemas(schemas);
};

// Enhanced Schema Injection for Better SEO
export const injectEnhancedSchemas = (pageType, data = {}) => {
  // Clear existing enhanced schemas to prevent duplicates
  const existingEnhanced = document.querySelectorAll('script[data-schema-id^="schema-"]');
  existingEnhanced.forEach((script) => script.remove());

  const schemas = [];

  // Always include Person and Organization schemas
  schemas.push(createPersonSchema());
  schemas.push(createOrganizationSchema());
  schemas.push(createWebsiteSchema());
  schemas.push(createProfessionalServiceSchema());

  // Add page-specific schemas
  switch (pageType) {
    case 'homepage':
      schemas.push(createFAQSchema());
      break;
    case 'about':
      // About page has its own FAQ content via Accordion component
      // Don't add FAQ schema here to avoid duplication
      break;
    case 'project':
      if (data.project) {
        schemas.push(createProjectSchema(data.project));
      }
      break;
    case 'article':
      if (data.article) {
        schemas.push(createArticleSchema(data.article));
      }
      break;
    case 'breadcrumb':
      if (data.breadcrumbs) {
        schemas.push(createBreadcrumbSchema(data.breadcrumbs));
      }
      break;
  }

  // Inject all schemas with unique identifiers
  injectMultipleSchemas(schemas);
};

// SEO Performance Optimization
export const optimizePageForSEO = async (pageType = 'general') => {
  // Initialize monitoring
  initializeSEOMonitoring();

  // Inject enhanced schemas
  injectEnhancedSchemas(pageType);

  // Optimize critical resources
  await optimizeCriticalResources();

  // Add structured data for better search results
  enhanceSearchAppearance();

  // Monitor and report SEO metrics
  if (typeof window !== 'undefined' && window.SEOPerformanceMonitor) {
    const monitor = new window.SEOPerformanceMonitor();
    return monitor.generateReport();
  }
};

// Critical Resource Optimization
const optimizeCriticalResources = async () => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    } // Only preload resources that are actually used immediately on page load
    // Logo.svg is used in navbar which loads immediately
    const criticalImages = ['/logo/logo.svg'];

    criticalImages.forEach((image) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = image;
      link.as = 'image';
      document.head.appendChild(link);
    });

    resolve();
  });
};

// Enhance Search Appearance
const enhanceSearchAppearance = () => {
  if (typeof window === 'undefined') return;

  // Add Rich Snippets data
  const existingRichSnippets = document.querySelector('script[type="application/ld+json"]');
  if (!existingRichSnippets) {
    // Fallback schema if none exists
    injectSchema(createPersonSchema());
  }

  // Optimize meta tags for better CTR
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    const content = metaDescription.getAttribute('content');
    if (content && content.length > 160) {
      const optimizedContent = content.substring(0, 157) + '...';
      metaDescription.setAttribute('content', optimizedContent);
    }
  }

  // Add Twitter and Open Graph optimizations
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && !ogImage.getAttribute('content').includes('https://')) {
    const currentContent = ogImage.getAttribute('content');
    ogImage.setAttribute('content', `https://Suhail.in${currentContent}`);
  }
};

// Enhanced SEO Validation with Technical SEO Checks
export const validateEnhancedSEO = () => {
  const results = {
    score: 0,
    maxScore: 100,
    issues: [],
    recommendations: [],
  };

  // Technical SEO Checks
  const technicalChecks = [
    {
      name: 'HTTPS Protocol',
      check: () => window.location.protocol === 'https:',
      weight: 10,
      recommendation: 'Ensure the website uses HTTPS for security and SEO benefits',
    },
    {
      name: 'Mobile Viewport',
      check: () => document.querySelector('meta[name="viewport"]'),
      weight: 10,
      recommendation: 'Add viewport meta tag for mobile responsiveness',
    },
    {
      name: 'Canonical URL',
      check: () => document.querySelector('link[rel="canonical"]'),
      weight: 8,
      recommendation: 'Add canonical URL to prevent duplicate content issues',
    },
    {
      name: 'Meta Description',
      check: () => {
        const meta = document.querySelector('meta[name="description"]');
        return (
          meta &&
          meta.getAttribute('content').length >= 120 &&
          meta.getAttribute('content').length <= 160
        );
      },
      weight: 8,
      recommendation: 'Optimize meta description to 120-160 characters',
    },
    {
      name: 'Structured Data',
      check: () => document.querySelector('script[type="application/ld+json"]'),
      weight: 10,
      recommendation: 'Add structured data for better search results',
    },
    {
      name: 'Alt Text for Images',
      check: () => {
        const images = document.querySelectorAll('img');
        const imagesWithoutAlt = Array.from(images).filter(
          (img) => !img.alt || img.alt.trim() === ''
        );
        return imagesWithoutAlt.length === 0;
      },
      weight: 8,
      recommendation: 'Add descriptive alt text to all images',
    },
    {
      name: 'Page Loading Speed',
      check: () => {
        // This would be checked by Core Web Vitals monitoring
        return true; // Placeholder - actual check done by performance monitor
      },
      weight: 15,
      recommendation: 'Optimize Core Web Vitals (LCP, FID, CLS) for better rankings',
    },
  ];

  // Run technical checks
  technicalChecks.forEach((check) => {
    if (check.check()) {
      results.score += check.weight;
    } else {
      results.issues.push(check.name);
      results.recommendations.push(check.recommendation);
    }
  });

  return results;
};

/**
 * Validate structured data schema compliance
 */
export const validateStructuredDataSchema = () => {
  const issues = [];
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');

  scripts.forEach((script, index) => {
    try {
      const data = JSON.parse(script.textContent);

      // Check for required fields based on schema type
      if (data['@type'] === 'ProfilePage') {
        if (!data.mainEntity) {
          issues.push(
            `ProfilePage schema (script ${index + 1}) missing required 'mainEntity' field`
          );
        }
        if (!data.name) {
          issues.push(`ProfilePage schema (script ${index + 1}) missing 'name' field`);
        }
        if (!data.url) {
          issues.push(`ProfilePage schema (script ${index + 1}) missing 'url' field`);
        }
      }

      if (data['@type'] === 'CollectionPage') {
        if (!data.mainEntity) {
          issues.push(
            `CollectionPage schema (script ${index + 1}) missing required 'mainEntity' field`
          );
        }
      }

      if (data['@type'] === 'ContactPage') {
        if (!data.mainEntity) {
          issues.push(
            `ContactPage schema (script ${index + 1}) missing required 'mainEntity' field`
          );
        }
      }

      // Check for required @context and @type
      if (!data['@context']) {
        issues.push(`Schema ${index + 1} missing '@context' field`);
      }

      if (!data['@type']) {
        issues.push(`Schema ${index + 1} missing '@type' field`);
      }

      // Validate URL patterns
      if (data.url && !data.url.startsWith('https://Suhail.in')) {
        issues.push(`Schema ${index + 1} has incorrect URL pattern: ${data.url}`);
      }
    } catch (error) {
      issues.push(`Schema ${index + 1} contains invalid JSON: ${error.message}`);
    }
  });

  return {
    isValid: issues.length === 0,
    issues: issues,
    schemaCount: scripts.length,
  };
};

// Internal linking structure for better SEO
export const INTERNAL_LINK_STRUCTURE = {
  homepage: {
    links: ['/about', '/projects', '/contact', '/articles'],
    anchor_texts: ['About Himanshu', 'Portfolio Projects', 'Hire Me', 'Tech Articles'],
  },
  about: {
    links: ['/projects', '/contact', '/', '/articles'],
    anchor_texts: ['View My Work', 'Get In Touch', 'Homepage', 'Technical Blog'],
  },
  projects: {
    links: ['/about', '/contact', '/articles', '/'],
    anchor_texts: ['My Background', 'Discuss Project', 'Technical Blog', 'Homepage'],
  },
  contact: {
    links: ['/projects', '/about', '/', '/articles'],
    anchor_texts: ['View Portfolio', 'About Me', 'Homepage', 'Blog Articles'],
  },
  articles: {
    links: ['/projects', '/about', '/contact', '/'],
    anchor_texts: ['Portfolio Work', 'About Me', 'Contact', 'Homepage'],
  },
};

// Strategic external links for relationship building
export const STRATEGIC_EXTERNAL_LINKS = {
  tools: [
    { name: 'Figma', url: 'https://www.figma.com/', context: 'Design tool I use for UI/UX design' },
    { name: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html', context: 'Prototyping and design tool' },
    {
      name: 'InVision',
      url: 'https://www.invisionapp.com/',
      context: 'Design collaboration platform',
    },
    { name: 'Miro', url: 'https://miro.com/', context: 'Whiteboarding and collaboration tool' },
    {
      name: 'Sketch',
      url: 'https://www.sketch.com/',
      context: 'Mac design application',
    },
  ],
  resources: [
    {
      name: 'Nielsen Norman Group',
      url: 'https://www.nngroup.com/',
      context: 'UX research and insights',
    },
    {
      name: 'Material Design',
      url: 'https://material.io/design',
      context: 'Google design system resource',
    },
    {
      name: 'WCAG Guidelines',
      url: 'https://www.w3.org/WAI/WCAG21/quickref/',
      context: 'Web accessibility guidelines',
    },
  ],
  communities: [
    { name: 'Dev.to', url: 'https://dev.to/', context: 'Developer community platform' },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      context: 'Programming Q&A community',
    },
    { name: 'GitHub', url: 'https://github.com/', context: 'Code repository and collaboration' },
  ],
};

// Backlink tracking and monitoring
export const BACKLINK_TRACKING = {
  sources: [],
  addBacklink: (source, url, type, dateAcquired) => {
    BACKLINK_TRACKING.sources.push({
      source,
      url,
      type, // 'directory', 'article', 'profile', 'guest-post', 'community'
      dateAcquired,
      status: 'active',
    });
  },
  getBacklinkCount: () => BACKLINK_TRACKING.sources.filter((b) => b.status === 'active').length,
  getBacklinksByType: (type) => BACKLINK_TRACKING.sources.filter((b) => b.type === type),
};

/**
 * INDEXNOW INTEGRATION FUNCTIONS
 * Automatically submit URLs to search engines for faster indexing
 */

// IndexNow Configuration
const INDEXNOW_CONFIG = {
  apiKey: 'f96a2bb9354643a0897f33b9ec52275c',
  host: 'www.Suhail.in',
  endpoint: 'https://api.indexnow.org/indexnow',
  keyLocation: 'https://www.Suhail.in/f96a2bb9354643a0897f33b9ec52275c.txt',
};

/**
 * Submit single URL to IndexNow
 * @param {string} url - URL to submit for indexing
 * @returns {Promise<boolean>} - Success status
 */
export const submitUrlToIndexNow = async (url) => {
  try {
    const requestUrl = `${INDEXNOW_CONFIG.endpoint}?url=${encodeURIComponent(url)}&key=${
      INDEXNOW_CONFIG.apiKey
    }&keyLocation=${encodeURIComponent(INDEXNOW_CONFIG.keyLocation)}`;

    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'IndexNow-Suhail-Portfolio/1.0',
      },
    });

    if (response.ok) {
      console.log(`✅ IndexNow: Successfully submitted ${url}`);
      return true;
    } else {
      console.warn(`⚠️ IndexNow: Failed to submit ${url} - Status: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error('❌ IndexNow: Submission error:', error);
    return false;
  }
};

/**
 * Submit multiple URLs in bulk to IndexNow
 * @param {string[]} urls - Array of URLs to submit
 * @returns {Promise<boolean>} - Success status
 */
export const submitBulkUrlsToIndexNow = async (urls) => {
  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return false;
  }

  const payload = {
    host: INDEXNOW_CONFIG.host,
    key: INDEXNOW_CONFIG.apiKey,
    keyLocation: INDEXNOW_CONFIG.keyLocation,
    urlList: urls,
  };

  try {
    const response = await fetch(INDEXNOW_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'IndexNow-Suhail-Portfolio/1.0',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`✅ IndexNow: Successfully submitted ${urls.length} URLs in bulk`);
      return true;
    } else {
      console.warn(`⚠️ IndexNow: Bulk submission failed - Status: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error('❌ IndexNow: Bulk submission error:', error);
    return false;
  }
};

/**
 * Submit current page to IndexNow
 * @returns {Promise<boolean>} - Success status
 */
export const submitCurrentPageToIndexNow = async () => {
  if (typeof window === 'undefined') return false;

  const currentUrl = window.location.href;
  return await submitUrlToIndexNow(currentUrl);
};

/**
 * Submit all important portfolio pages to IndexNow
 * @returns {Promise<boolean>} - Success status
 */
export const submitAllPortfolioPagesToIndexNow = async () => {
  const portfolioUrls = [
    `https://${INDEXNOW_CONFIG.host}/`,
    `https://${INDEXNOW_CONFIG.host}/about`,
    `https://${INDEXNOW_CONFIG.host}/projects`,
    `https://${INDEXNOW_CONFIG.host}/contact`,
    `https://${INDEXNOW_CONFIG.host}/articles`,
    `https://${INDEXNOW_CONFIG.host}/articles/react-development-2025`,
    `https://${INDEXNOW_CONFIG.host}/projects/iamart`,
    `https://${INDEXNOW_CONFIG.host}/projects/last3feet`,
    `https://${INDEXNOW_CONFIG.host}/projects/nextdoor`,
    `https://${INDEXNOW_CONFIG.host}/projects/wanderlustwoof`,
  ];

  return await submitBulkUrlsToIndexNow(portfolioUrls);
};

/**
 * Auto-submit pages based on page type
 * @param {string} pageType - Type of page being loaded
 */
export const autoSubmitToIndexNow = async (pageType = 'general') => {
  // Only submit in production to avoid unnecessary API calls
  if (process.env.NODE_ENV !== 'production') {
    console.log('🔄 IndexNow: Skipping submission in development mode');
    return;
  }

  // Submit current page
  setTimeout(async () => {
    await submitCurrentPageToIndexNow();
  }, 2000);

  // On homepage, submit all important pages
  if (pageType === 'homepage' || window.location.pathname === '/') {
    setTimeout(async () => {
      await submitAllPortfolioPagesToIndexNow();
    }, 5000);
  }
};

export default {
  updatePageSEO,
  generatePageTitle,
  generateMetaDescription,
  generateStructuredData,
  validateSEO,
  validateStructuredDataSchema,
  calculateKeywordDensity,
  monitorWebVitals,
  getLocalizedContent,
  enhanceCrawlability,
  generateInternalLinks,
  addBreadcrumbStructuredData,
  preloadCriticalPages,
  initializeSEOMonitoring,
  requestPageIndexing,
  injectAboutPageSchemas,
  createAboutPageFAQSchema,
  SEO_KEYWORDS,
  GEO_TARGETING,
  PRIORITY_PAGES,
  PROJECT_PAGES,
  ARTICLE_PAGES,
  submitUrlToIndexNow,
  submitBulkUrlsToIndexNow,
  submitCurrentPageToIndexNow,
  submitAllPortfolioPagesToIndexNow,
  autoSubmitToIndexNow,
};
