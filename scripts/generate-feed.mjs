// Pre-build: public/feed.xml, an RSS feed of the newest entries with their full text.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const SITE_URL = 'https://changelog.finegym.io';
const FEED_ENTRIES = 30;
const contentDir = path.join(process.cwd(), 'content', 'changelog');
const publicDir = path.join(process.cwd(), 'public');

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const files = fs
  .readdirSync(contentDir)
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const slug = file.replace(/\.md$/, '');
    const { data, content } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
    return { slug, title: data.title, date: data.date, categories: data.categories || [], content };
  })
  .filter((e) => e.date && e.title)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug < b.slug ? 1 : -1))
  .slice(0, FEED_ENTRIES);

const items = await Promise.all(
  files.map(async (e) => {
    const body = (await remark().use(html).process(e.content)).toString();
    const url = `${SITE_URL}/posts/${e.slug}`;
    // Entries carry a day, not a time: noon UTC keeps the day the same everywhere.
    const pubDate = new Date(`${e.date}T12:00:00Z`).toUTCString();
    return [
      '    <item>',
      `      <title>${escape(e.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${pubDate}</pubDate>`,
      ...e.categories.map((c) => `      <category>${escape(c)}</category>`),
      `      <description><![CDATA[${body}]]></description>`,
      '    </item>',
    ].join('\n');
  }),
);

const feed = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
  '  <channel>',
  "    <title>What's new in Finegym</title>",
  `    <link>${SITE_URL}</link>`,
  '    <description>New features, improvements and fixes in Finegym, as they ship.</description>',
  '    <language>en</language>',
  `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
  ...items,
  '  </channel>',
  '</rss>',
  '',
].join('\n');

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'feed.xml'), feed);
console.log(`Generated feed.xml with ${files.length} entries`);
