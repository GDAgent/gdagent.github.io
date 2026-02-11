import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildRssXml } from '../utils/rss';

const FALLBACK_SITE_URL = 'https://gdagent.github.io';

const toPath = (id: string) => `/blog/${id.replace(/\.md$/, '')}`;

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = (site?.toString() ?? FALLBACK_SITE_URL).replace(/\/$/, '');
  const posts = (await getCollection('blog', ({ data }) => data.draft !== true)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const rss = buildRssXml({
    title: 'GDAgent Blog',
    description: 'Product stories, deep dives, and practical guides from the GDAgent team.',
    siteUrl,
    feedPath: '/blog.xml',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: toPath(post.id),
      pubDate: post.data.date,
      categories: post.data.tags,
    })),
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=900',
    },
  });
};
