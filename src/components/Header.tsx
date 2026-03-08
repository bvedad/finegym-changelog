import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Finegym" width={32} height={32} />
          <span className="text-lg font-semibold text-[#3b82f6]">Finegym</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="https://www.finegym.io"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Website
          </Link>
          <Link
            href="https://docs.finegym.io"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Docs
          </Link>
          <Link
            href="https://app.finegym.io"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Go to App
          </Link>
        </nav>
      </div>
    </header>
  );
}
