// Pre-build: public/latest.json, read by the admin's "What's new" link. `date` is the newest
// entry's date (what the admin compares with the date staff last looked), and `entries` the
// three newest, newest first, for the link to name them.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SITE_URL = 'https://changelog.finegym.io';
const contentDir = path.join(process.cwd(), 'content', 'changelog');
const publicDir = path.join(process.cwd(), 'public');

const entries = fs
  .readdirSync(contentDir)
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const slug = file.replace(/\.md$/, '');
    const { data } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
    return { slug, title: data.title, date: data.date, url: `${SITE_URL}/posts/${slug}` };
  })
  .filter((e) => e.date && e.title)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug < b.slug ? 1 : -1));

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(
  path.join(publicDir, 'latest.json'),
  JSON.stringify({ date: entries[0]?.date ?? '', entries: entries.slice(0, 3) }) + '\n',
);
console.log(`Generated latest.json with date: ${entries[0]?.date ?? ''}`);
