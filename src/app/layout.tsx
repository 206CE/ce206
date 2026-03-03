/* CSS */
import './globals.css';

/* auth0 */
import { auth0 } from '@/lib/auth0';


/* SEO */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Per-Gratiam - Professional Counselling Services',
  description:
    'Offering professional counselling services including life coaching, addiction counselling, trauma-informed care, and more.',
  keywords:
    'counselling, life coaching, addiction counselling, trauma care, workplace counselling, career coaching',
  authors: [{ name: '206CE', url: 'https://206ce.github.io' }],
  openGraph: {
    title: 'Per-Gratiam',
    description:
      'We can help you improve your life.',
    url: 'https://pergratiam.vercel.app/',
    siteName: 'Per-Gratiam',
    images: [
      {
        url: '/public/og-1024-1024.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Per-Gratiam',
    description:
      'We improve services, digital presence and increase employee production.',
    images: '/public/og-1024-1024.png',
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

/* FONT */
import localFont from 'next/font/local';

export const myCustomFont = localFont({src: '../../public/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf', weight:'400',style:'normal',})

import { Logo, Navigation, ContactInfo } from '@/components';

import Social from '@/components/Social';

import CopyRight from '@/components/CopyRight';

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
        <div className='flex items-center'>
          <Logo
            compStyling='text-(--text-primary) block'
            text='Per-Gratiam'
            imgPath='/Logo-751-736.png'
            size={50}
          />
          <div className=''>
            <Navigation
              compStyling='btn-primary border'
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                {
                  label: 'Services',
                  dropdown: [
                    { label: 'Life Coaching', href: '/services/life' },
                    {
                      label: 'Addiction Counselling',
                      href: '/services/addiction',
                    },
                    { label: 'Trauma-Informed Care', href: '/services/trauma' },
                    {
                      label: 'Workplace & Employee Counselling',
                      href: '/services/workplace',
                    },
                    { label: 'Career Coaching', href: '/services/career' },
                    { label: '24/7 Crisis Control', href: '/services/crisis' },
                  ],
                },
                { label: 'Testimonials', href: 'testimonials' },
                { label: 'Resources', href: '/resources' },
                { label: 'Contact', href: '/contact' },
              ]}
            />
          </div>
          {/** CMS Pergratiam
          <div className='p-4'>
            {user ? (
              <div className='flex'>
                <Profile />
              </div>
            ) : (
              <>
                <LoginButton />
              </>
            )}
          </div>*/}
        </div>
        {children}
        <footer className=' pt-4'>
          <Social
            linkStyle='btn-primary'
            urls={[
             
            ]}
          />
          <ContactInfo

          />
          <CopyRight />
        </footer>
      </body>
    </html>
  );
}
