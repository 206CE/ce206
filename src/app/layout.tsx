/* CSS */
import '@/app/globals.css';
import '@/app/styles/Typo-Hierarchy.css';
import '@/app/styles/Form-Inputs.css';


/* auth0 */ 
import { auth0 } from '@/lib/auth0';
import LoginButton from '@/components/LoginButton';
import Profile from '@/components/Profile';

/* SEO */ 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CE206 Services',
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
        url: '/public/og_1200_630.webp',
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
    images: '/public/og_1200_630.webp',
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

/* FONT (1) */
import localFont from 'next/font/local';
export const myCustomFont = localFont({src: '../../public/fonts/Audiowide/Audiowide-Regular.ttf', weight:'400',style:'normal',})

import { Logo, Navigation, ContactInfo } from '@/components';
import Social from '@/components/Social';
import CopyRight from '@/components/CopyRight';


const Items: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <html lang='en'>
      <body className={` ${myCustomFont.className} antialiased`}>
        <div className='flex items-center gap-3'>
          {/* <Logo> */}
          <Logo
            compStyling='text-(--primary) block'
            text='CE_206'
            imgPath='/Logo_32.png'
            size={50}
          />
          {/* <Navi> */}
          <Navigation
            compStyling='btn-primary text-2xl font-extrabold justify-items'
            items={[
              { label: 'HOME', href: '/' },
              { label: 'SERVICES', href: '/services' },
              { label: 'ABOUT', href: '/about' },
              { label: 'CONTACT', href: '/contact' },
              { label: 'BLOG', href: '/blog' },
            ]}
          />

          <div className='fixed font-extrabold not-first:flex z-10  top-12 right-1 md:hidden'>
            {user ? (
              <div className='flex'>
                <Profile />
              </div>
            ) : (
              <div className='fixed  top-1 right-11 btn-primary p-2'>
                <LoginButton />
              </div>
            )}
          </div>
        </div>
        {children}
        <footer className=' pt-4'>
          <Social
            linkStyle='btn-primary'
            urls={[
              'https://www.linkedin.com/in/jaco-botha-886b7b95/',
              'https://www.facebook.com/jaco.botha.12139',
              'https://github.com/206CE',
              'https://discord.com/users/1337346807100866580',
              'https://x.com/206Roaches',
            ]}
          />
          <ContactInfo
            cellphone='+27 079 497 2646'
            email='jacobotha206@gmail.com'
            address='19 Carpie Diem, Baillie Park, Potchefstroom, 2531'
          />
          <CopyRight />
        </footer>
      </body>
    </html>
  );
}
