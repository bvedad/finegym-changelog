import Link from 'next/link';
import type { ChangelogEntry as Entry } from '@/lib/changelog';
import { CategoryBadge } from './CategoryFilter';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ChangelogEntry({ entry }: { entry: Entry }) {
  return (
    <article className="relative grid grid-cols-[140px_1fr] gap-8 py-10">
      <div className="pt-1">
        <time className="text-sm font-medium text-gray-500" dateTime={entry.date}>
          {formatDate(entry.date)}
        </time>
      </div>
      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          {entry.categories.map((cat) => (
            <CategoryBadge key={cat} category={cat} />
          ))}
        </div>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          <Link
            href={`/posts/${entry.slug}`}
            className="hover:text-[#3b82f6] transition-colors"
          >
            {entry.title}
          </Link>
        </h2>
        <div
          className="prose prose-gray max-w-none text-gray-600 prose-p:leading-relaxed prose-ul:mt-2 prose-li:text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
        />
      </div>
    </article>
  );
}
