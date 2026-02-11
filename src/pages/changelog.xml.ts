import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildRssXml } from '../utils/rss';

const FALLBACK_SITE_URL = 'https://gdagent.github.io';

const toPath = (id: string) => `/docs/changelog#${id.replace(/\.md$/, '')}`;

const typeLabels = {
  'major-release': 'Major Release',
  'minor-release': 'Minor Release',
} as const;

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = (site?.toString() ?? FALLBACK_SITE_URL).replace(/\/$/, '');
  const entries = (await getCollection('changelog', ({ data }) => data.draft !== true)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const rss = buildRssXml({
    title: 'GDAgent Changelog',
    description: 'Major and minor release notes from GDAgent.',
    siteUrl,
    feedPath: '/changelog.xml',
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      link: toPath(entry.id),
      pubDate: entry.data.date,
      categories: [typeLabels[entry.data.type]],
    })),
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=900',
    },
  });
};
