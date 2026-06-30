import type { MetadataRoute } from 'next';

const BASE_URL = 'https://suhail.design';

const projectEntryDates: Record<string, string> = {
  'acadally-student':   '2026-04-01',
  'acadally-teacher':   '2026-04-01',
  'mindfulness-studio': '2026-04-01',
  'gexa-energy':        '2026-04-01',
  'thats-my-jam':       '2026-04-01',
  'adaelo':             '2026-04-01',
  'direct-care-source': '2026-04-01',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = Object.entries(projectEntryDates).map(
    ([slug, date]) => ({
      url: `${BASE_URL}/projects/${slug}`,
      lastModified: new Date(date),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })
  );

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...projectEntries,
  ];
}
