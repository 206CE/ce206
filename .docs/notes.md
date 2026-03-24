// Package.json

{
  "name": "ce206",
  "version": "1.0.0-beta+001",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "engines": {
    "node": "24",
    "npm": "11"
  },
  "dependencies": {
    "@auth0/nextjs-auth0": "^4.16.0",
    "@icons-pack/react-simple-icons": "^13.12.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.563.0",
    "next": "16.1.6",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-icons": "^5.5.0",
    "react-markdown": "^10.1.0",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.0",
    "@types/node": "^20",
    "@types/react": "19.2.10",
    "@types/react-dom": "19.2.3",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "postcss": "^8.5.6",
    "prettier": "3.8.1",
    "shadcn": "^3.8.4",
    "tailwindcss": "^4.2.0",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  },
  "overrides": {
    "@types/react": "19.2.10",
    "@types/react-dom": "19.2.3"
  }
}

// .env.local

NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=8461831b-6c08-4586-8302-dd960d36aac6

AUTH0_DOMAIN=dev-3882nc2jfc58b48p.us.auth0.com
AUTH0_CLIENT_ID=Old5Ye36HwIED0ZhlC9iLnlljXOcQvi2
AUTH0_CLIENT_SECRET=A3lrQoplOXLVKBJFlR_gjQ5Co5IOTPR45uF6KkeWBDhOTFFhacCgNeSx7NDlZjxX
AUTH0_SECRET=6f0970c43db581492bb620250e2c1d5fe94142e3ede2822b8ec309c983815d7b
APP_BASE_URL=http://localhost:3000


For web applications using the Auth0 Vercel integration: The callback URL should point back to Auth0 rather than directly to your app. You need to set it as https://YOUR_AUTH0_DOMAIN/login/callback in your Vercel app settings, replacing YOUR_AUTH0_DOMAIN with your actual Auth0 domain 

/src/proxy.ts

import { auth0 } from './lib/auth0';

export async function proxy(request: Request) {
  // Note that proxy uses the standard Request type
  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)','/dashboard/:path*'
  ],
};

/src/lib/auth0.ts

import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client();

/src/lib/metadata.ts

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

/src/lib/posts.ts

import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Post {
  slug: string;
  content: string;
  frontMatter: {
    title: string;
    date: string;
    tags?: string[]; // The '?' makes it optional
    description?: string;
  };
}

const postsDirectory = path.join(process.cwd(), '/src/app/blog/content');

export async function getAllPosts() {
  const fileNames = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((file) => file.endsWith('.md') || file.endsWith('.txt'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$$   |\.txt   $$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');

        const { data: frontMatter, content } = matter(fileContents);

        // Convert markdown → HTML (skip if plain .txt)
        let htmlContent = content;
        if (fileName.endsWith('.md')) {
          const processed = await remark().use(html).process(content);
          htmlContent = processed.toString();
        }

        return {
          slug,
          frontMatter: {
            title: frontMatter.title || slug.replace(/-/g, ' '),
            date: frontMatter.date || new Date().toISOString(),
            ...frontMatter,
          },
          content: htmlContent,
          rawContent: content, // if you want to render client-side
        };
      }),
  );

  // Sort by date descending
  return posts.sort((a, b) =>
    a.frontMatter.date > b.frontMatter.date ? -1 : 1,
  );
}

export async function getPostBySlug(slug: string) {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}

/src/components/