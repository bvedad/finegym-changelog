import { getAllEntries, getAllCategories } from '@/lib/changelog';
import ChangelogList from '@/components/ChangelogList';

export default async function Home() {
  const entries = await getAllEntries();
  const categories = getAllCategories();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
          What&apos;s new in Finegym
        </h1>
        <p className="text-lg text-gray-500">
          All the latest features, improvements, and updates.
        </p>
      </div>
      <ChangelogList entries={entries} categories={categories} />
    </main>
  );
}
