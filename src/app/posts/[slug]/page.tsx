import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getEntryBySlug, getAllSlugs } from '@/lib/changelog';
import { CategoryBadge } from '@/components/CategoryFilter';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getEntryBySlug(slug);
  if (!entry) return {};

  const title = `${entry.title} - Finegym Changelog`;
  
  const textContent = entry.contentHtml.replace(/<[^>]*>/g, '');
  const maxLength = 150;
  let description = textContent.slice(0, maxLength);
  if (textContent.length > maxLength) {
    const lastSpaceIndex = description.lastIndexOf(' ');
    if (lastSpaceIndex > 0) {
      description = description.slice(0, lastSpaceIndex);
    }
    description += '...';
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://changelog.finegym.io/posts/${slug}`,
      siteName: 'Finegym Changelog',
      images: [
        {
          url: 'https://changelog.finegym.io/logo.svg',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getEntryBySlug(slug);

  if (!entry) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-[#3b82f6] hover:underline"
      >
        &larr; Back to Changelog
      </Link>

      <article className="mt-8">
        <time
          className="text-sm font-medium uppercase tracking-wide text-gray-500"
          dateTime={entry.date}
        >
          {formatDate(entry.date)}
        </time>

        <h1 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-gray-900">
          {entry.title}
        </h1>

        <div
          className="prose prose-gray max-w-none text-gray-600 prose-p:leading-relaxed prose-ul:mt-2 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {entry.categories.map((cat) => (
            <CategoryBadge key={cat} category={cat} />
          ))}
        </div>
      </article>
    </main>
  );
}
