/* CSS */
import './globals.css';

/* auth0 */

/* SEO */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '206_CE Services',
  description: 'Everything Simplified',
  openGraph: {
    title: '206_CE Services',
    description: 'Everything Simplified',
    url: 'https://ce206.vercel.app/',
    siteName: '206_CE Services',
    images: [
      {
        url: 'https://206CE.github.io/Logo/logo_res_OG.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '206_CE Services',
    description: 'Everything Simplified',
    images: 'https://206CE.github.io/Logo/logo_res_OG.png',
  },
};

/* FONT */
import { Audiowide } from 'next/font/google';

const AudioW = Audiowide({
  weight: '400',
  subsets: ['latin'],
});

import { Logo, Navigation, ContactInfo } from '@/components';

import Social from '@/components/Social';

import CopyRight from '@/components/CopyRight';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-(--bg-primary) ${AudioW.className} antialiased`}>
        <div className='flex items-center'>
          <Logo
            compStyling='text-(--primary) block'
            text='CE_206'
            imgPath='/Logo_160.webp'
            size={50}
          />
          <div className=''>
            <Navigation
              compStyling='btn-primary'
              items={[
                { label: 'HOME', href: '/' },
                { label: 'SERVICES', href: '/services' },
                { label: 'ABOUT', href: '/about' },
                { label: 'CONTACT', href: '/contact' },
              ]}
            />
          </div>
        </div>
        {children}
        <footer className='bg-(--bg-primary) pt-4'>
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
            address='19 Carpie Diem, BailliePark, Potchefstroom, 2531'
          />
          <CopyRight />
        </footer>
      </body>
    </html>
  );
}
