import Link from 'next/link';

// Single source of truth for case-study cross-links.
// `relations` prioritises same-industry or same-skill matches so each page
// surfaces 2-3 genuinely related case studies for crawl depth and context.
const projects = {
  'acadally-student': {
    title: 'AcadAlly Student App',
    industry: 'EdTech / Education',
    blurb: 'End-to-end UX for a diagnostic ed-tech app that finds and closes student learning gaps.',
  },
  'acadally-teacher': {
    title: 'AcadAlly Teacher App',
    industry: 'EdTech / B2B SaaS',
    blurb: 'A data-dense B2B dashboard helping educators act on student learning gaps at scale.',
  },
  'mindfulness-studio': {
    title: 'Mindfulness Studio',
    industry: 'Health & Wellness',
    blurb: 'A B2C meditation app with adaptive, time-of-day routines and progress tracking.',
  },
  'gexa-energy': {
    title: 'Gexa Energy Dashboard',
    industry: 'Energy / Utilities',
    blurb: 'An energy management dashboard for real-time usage, billing, and thermostat control.',
  },
  'thats-my-jam': {
    title: "That's My Jam",
    industry: 'Music / Entertainment',
    blurb: 'A B2C music-discovery app connecting fans with live local artists and events.',
  },
  'adaelo': {
    title: 'Adaelo',
    industry: 'Music Tech / B2B Marketplace',
    blurb: 'A B2B marketplace simplifying music licensing for artists, licensees, and labels.',
  },
  'direct-care-source': {
    title: 'Direct Care Source',
    industry: 'Healthcare / Health Tech',
    blurb: 'A healthcare platform connecting patients with care services, built on validated needs.',
  },
};

const relations = {
  'acadally-student': ['acadally-teacher', 'thats-my-jam', 'mindfulness-studio'],
  'acadally-teacher': ['acadally-student', 'gexa-energy', 'direct-care-source'],
  'mindfulness-studio': ['direct-care-source', 'thats-my-jam', 'acadally-student'],
  'gexa-energy': ['acadally-teacher', 'adaelo', 'direct-care-source'],
  'thats-my-jam': ['adaelo', 'mindfulness-studio', 'acadally-student'],
  'adaelo': ['thats-my-jam', 'acadally-teacher', 'gexa-energy'],
  'direct-care-source': ['mindfulness-studio', 'acadally-teacher', 'gexa-energy'],
};

const RelatedWork = ({ currentSlug }) => {
  const slugs = (relations[currentSlug] || []).filter((slug) => projects[slug]);

  if (slugs.length === 0) return null;

  return (
    <section
      aria-label="More case studies"
      className="max-w-6xl mx-auto px-4 md:px-12 py-10 sm:py-16 border-t border-neutral-800"
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-100 mb-2">
        More Case Studies
      </h2>
      <p className="text-sm text-neutral-500 font-body mb-8">
        Related UI/UX and product design work by Mohd Suhail.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {slugs.map((slug) => {
          const project = projects[slug];
          return (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 hover:border-white/25 hover:bg-white/[0.06] transition-colors duration-300"
            >
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 font-body">
                {project.industry}
              </span>
              <span className="font-heading text-lg font-bold text-neutral-100 mb-2">
                {project.title}
              </span>
              <span className="text-sm text-neutral-400 font-body leading-relaxed mb-4">
                {project.blurb}
              </span>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
                View case study
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedWork;
