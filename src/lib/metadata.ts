// src/lib/metadata.ts
import type { Metadata, Viewport } from 'next';

export const siteViewport: Viewport = {
  themeColor: '#0a0a10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://ce206.vercel.app/'), // Added this to fix your previous error!
  title: '206_CE Services - Best Websites in Potchefstroom',
  description:
    'We cultivate and enhance your business and your people to improve performance on all levels.',
  keywords: [
    'Websites',
    'web development',
    'next.js',
    'South Africa',
    'seo',
    'tutoring',
    'services',
    'service management',
  ],
  authors: [{ name: 'Jaco Botha' }],
  openGraph: {
    title: '206_CE Services',
    description:
      'We make your company digitally efficient, become our partner.',
    url: 'https://ce206.vercel.app/',
    siteName: '206_CE',
    images: [
      {
        url: '/og_1200_630.webp', // Removed /public/ as Next.js handles this automatically
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '206_CE',
    description:
      'We improve services, digital presence and increase employee production.',
    images: '/og_1200_630.webp', // Removed /public/
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
};