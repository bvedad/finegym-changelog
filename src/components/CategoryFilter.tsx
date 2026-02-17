'use client';

import type { Category } from '@/lib/changelog';

const CATEGORY_COLORS: Record<Category, string> = {
  Admin: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
  Mobile: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
  Payments: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
  Scheduling:
    'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100',
  Members: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100',
  Integrations:
    'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100',
  Improvements:
    'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100',
  i18n: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
};

interface CategoryFilterProps {
  categories: Category[];
  selected: Category | null;
  onSelect: (category: Category | null) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
          selected === null
            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
            : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(selected === category ? null : category)}
          className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
            selected === category
              ? CATEGORY_COLORS[category]
              : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[category]}`}
    >
      {category}
    </span>
  );
}
