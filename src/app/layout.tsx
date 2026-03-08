import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const metadata: Metadata = {
  title: "What's new in Finegym",
  description:
    'Stay up to date with the latest features, improvements, and updates to Finegym.',
  openGraph: {
    title: "What's new in Finegym",
    description:
      'Stay up to date with the latest features, improvements, and updates to Finegym.',
    type: 'website',
    url: 'https://changelog.finegym.io',
    siteName: 'Finegym Changelog',
    images: [
      {
        url: 'https://changelog.finegym.io/logo.svg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "What's new in Finegym",
    description:
      'Stay up to date with the latest features, improvements, and updates to Finegym.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        {children}
        <footer className="border-t border-gray-200 py-8">
          <div className="mx-auto max-w-4xl px-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Finegym. All rights reserved.
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
