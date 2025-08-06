import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import StructuredData from '@/components/structured-data'
import { GoogleAnalytics } from '@/components/google-analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://meshesha.com'),
  title: 'Meshesha Solutions - The Future of Energy Storage',
  description:
    'Meshesha Solutions is revolutionizing energy storage with solid-state batteries, zinc-ion, and heat-resistant Li-ion technologies. AI-driven innovation for electric vehicles and grid storage.',
  keywords: [
    'battery technology',
    'solid-state batteries',
    'zinc-ion batteries',
    'energy storage',
    'electric vehicle batteries',
    'grid storage',
    'AI material discovery',
    'sustainable energy',
    'battery innovation',
    'cleantech startup'
  ],
  authors: [{ name: 'Meshesha Solutions' }],
  creator: 'Meshesha Solutions',
  publisher: 'Meshesha Solutions',
  openGraph: {
    title: 'Meshesha Solutions - Revolutionary Battery Technology',
    description: 'AI-driven battery innovation for the future of energy storage. Solid-state, zinc-ion, and heat-resistant technologies.',
    url: 'https://meshesha.com',
    siteName: 'Meshesha Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Meshesha Solutions - The Future of Energy Storage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meshesha Solutions - Revolutionary Battery Technology',
    description: 'AI-driven battery innovation for the future of energy storage.',
    images: ['/og-image.png'],
    creator: '@MesheshaSolutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
        <GoogleAnalytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background flex flex-col')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
