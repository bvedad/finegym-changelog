import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type Category =
  | 'Admin'
  | 'Mobile'
  | 'Payments'
  | 'Scheduling'
  | 'Members'
  | 'Integrations'
  | 'Improvements'
  | 'i18n';

export interface ChangelogEntry {
  slug: string;
  title: string;
  date: string;
  categories: Category[];
  contentHtml: string;
}

const contentDirectory = path.join(process.cwd(), 'content', 'changelog');

export async function getAllEntries(): Promise<ChangelogEntry[]> {
  const fileNames = fs.readdirSync(contentDirectory);
  const entries = await Promise.all(
    fileNames
      .filter((f) => f.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
          slug,
          title: data.title,
          date: data.date,
          categories: data.categories || [],
          contentHtml,
        };
      })
  );

  return entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getEntryBySlug(
  slug: string
): Promise<ChangelogEntry | null> {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    categories: data.categories || [],
    contentHtml: processedContent.toString(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllCategories(): Category[] {
  return [
    'Admin',
    'Mobile',
    'Payments',
    'Scheduling',
    'Members',
    'Integrations',
    'Improvements',
    'i18n',
  ];
}
