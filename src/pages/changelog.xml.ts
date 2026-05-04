import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildRssXml } from '../utils/rss';

const FALLBACK_SITE_URL = 'https://gdagent.dev';

const toPath = (id: string) => `/docs/changelog#${id.replace(/\.md$/, '')}`;

const typeLabels = {
  'major-release': 'Major Release',
  'minor-release': 'Minor Release',
} as const;

const parseVersion = (version: string | undefined) => {
  if (!version) return [0, 0, 0];
  const parts = version.replace(/^v/, '').split('.').map(Number);
  return [parts[0] || 0, parts[1] || 0, parts[2] || 0];
};

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = (site?.toString() ?? FALLBACK_SITE_URL).replace(/\/$/, '');
  const entries = (await getCollection('changelog', ({ data }) => data.draft !== true)).sort((a, b) => {
    const dateDiff = b.data.date.getTime() - a.data.date.getTime();
    if (dateDiff !== 0) return dateDiff;
    const [aMajor, aMinor, aPatch] = parseVersion(a.data.version);
    const [bMajor, bMinor, bPatch] = parseVersion(b.data.version);
    return (bMajor - aMajor) || (bMinor - aMinor) || (bPatch - aPatch);
  });

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
