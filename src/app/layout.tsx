/* CSS */

import '@/app/globals.css';



/* SEO */
import { siteMetadata, siteViewport } from '@/lib/metadata';

export const metadata = siteMetadata;
export const viewport = siteViewport;

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

  {/*const session = await auth0.getSession();
  const user = session?.user;*/}
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
              compStyling='nav-link'
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
        <footer className=' pt-4'>
          {/*}
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
          />*/}
          <CopyRight />
        </footer>
      </body>
    </html>
  );
}
