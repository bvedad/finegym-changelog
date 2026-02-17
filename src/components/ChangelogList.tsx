'use client';

import { useState } from 'react';
import type { ChangelogEntry as Entry, Category } from '@/lib/changelog';
import ChangelogEntry from './ChangelogEntry';
import CategoryFilter from './CategoryFilter';

interface ChangelogListProps {
  entries: Entry[];
  categories: Category[];
}

export default function ChangelogList({
  entries,
  categories,
}: ChangelogListProps) {
  const [selected, setSelected] = useState<Category | null>(null);

  const filtered = selected
    ? entries.filter((e) => e.categories.includes(selected))
    : entries;

  return (
    <div>
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />
      </div>
      <div className="divide-y divide-gray-200">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-gray-500">No posts found.</p>
        ) : (
          filtered.map((entry) => (
            <ChangelogEntry key={entry.slug} entry={entry} />
          ))
        )}
      </div>
    </div>
  );
}
