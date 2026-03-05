/* CSS */
import '@/app/styles/Basic.css';
import '@/app/styles/Typo-Hierarchy.css';
import '@/app/styles/Form-Inputs.css';
import '@/app/styles/Navi-Interaction.css';

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
          <Logo
            compStyling='text-(--primary) block'
            text='CE_206'
            imgPath='/Logo_32.png'
            size={50}
          />
          <div className=''>
            <Navigation
              compStyling='btn-primary'
              items={[
                { label: 'HOME', href: '/' },
                { label: 'SERVICES', href: '/services' },
                { label: 'ABOUT', dropdown: [{label:'CAREER',href:'/about/career'},{label: 'CULTURE',href:'/about/culture'}] },
                { label: 'CONTACT', href: '/contact' },
              ]}
            />
          </div>
          
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
