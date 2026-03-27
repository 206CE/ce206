/* CSS */
import '@/app/globals.css';

/* SEO */
import { siteMetadata, siteViewport } from '@/lib/metadata';

export const metadata = siteMetadata;
export const viewport = siteViewport;

/* FONT (1) */
import {Audiowide} from 'next/font/google';

const audiowide = Audiowide({
  weight: '400', subsets:['latin'],})


import localFont from 'next/font/local';
export const myCustomFont = localFont({src: '../../public/fonts/Audiowide/Audiowide-Regular.ttf', weight:'400',style:'normal',})

import { Logo, DesktopMenu, MobileMenu, CopyRight } from '@/components';

const NavItem = [
  
    { label: 'HOME', href: '/' },
    { label: 'SERVICES', href: '/services' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
  ,
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  {/*const session = await auth0.getSession();
  const user = session?.user;*/}
  return (
    <html lang='en'>
      <body className={` ${audiowide.className} antialiased`}>
        <div className='flex items-center gap-3'>
          <Logo
            text='CE_206'
            imgPath='/Logo_32.png'
            imgSize={30}
          />
          <div className=''>
            <DesktopMenu items={NavItem} />
            <MobileMenu items={NavItem} />
          </div>

        </div>
        {children}
        <footer className=' pt-4'>
          <CopyRight />
        </footer>
      </body>
    </html>
  );
}
