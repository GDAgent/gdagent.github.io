interface RssItem {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  categories?: string[];
}

interface BuildRssOptions {
  title: string;
  description: string;
  siteUrl: string;
  feedPath: string;
  items: RssItem[];
}

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const toAbsoluteUrl = (siteUrl: string, path: string) => {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedSite = siteUrl.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedSite}${normalizedPath}`;
};

export const buildRssXml = ({ title, description, siteUrl, feedPath, items }: BuildRssOptions) => {
  const feedUrl = toAbsoluteUrl(siteUrl, feedPath);
  const homepageUrl = toAbsoluteUrl(siteUrl, '/');
  const lastBuildDate =
    items.length > 0
      ? new Date(Math.max(...items.map((item) => item.pubDate.getTime()))).toUTCString()
      : new Date().toUTCString();

  const itemXml = items
    .map((item) => {
      const itemUrl = toAbsoluteUrl(siteUrl, item.link);
      const categories = (item.categories ?? [])
        .filter(Boolean)
        .map((category) => `<category>${xmlEscape(category)}</category>`)
        .join('');

      return `<item>
  <title>${xmlEscape(item.title)}</title>
  <description>${xmlEscape(item.description)}</description>
  <link>${xmlEscape(itemUrl)}</link>
  <guid isPermaLink="true">${xmlEscape(itemUrl)}</guid>
  <pubDate>${item.pubDate.toUTCString()}</pubDate>
  ${categories}
</item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${xmlEscape(title)}</title>
  <description>${xmlEscape(description)}</description>
  <link>${xmlEscape(homepageUrl)}</link>
  <atom:link href="${xmlEscape(feedUrl)}" rel="self" type="application/rss+xml" />
  <language>en-us</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <generator>Astro</generator>
${itemXml}
</channel>
</rss>`;
};
