/**
 *
 */

/* CSS */
import '@/app/globals.css';

/* auth0 
import { Profile } from '@/components';
*/

/* SEO */
import { siteMetadata, siteViewport } from '@/lib/metadata';

export const metadata = siteMetadata;
export const viewport = siteViewport;

/* FONT (1) */
import localFont from 'next/font/local';
export const myCustomFont = localFont({
  src: '../../public/fonts/Audiowide/Audiowide-Regular.ttf',
  weight: '400',
  style: 'normal',
});

/* HEADER */
import { Logo, Navigation } from '@/components';

/* FOOTER*/
import { Social, ContactInfo, CopyRight } from '@/components';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={` ${myCustomFont.className} antialiased`}>
        <div className='bg-scan' />
        <div>
          <div className='flex   gap-3 pt-2'>
            <div
              className='bg-linear-to-b from-(--sun-core) to-(--sun-flare)
           bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,107,53,0.3)]
           text-2xl  font-black tracking-tighter'
            >
              <Logo text='CE_206' imgPath='/new_logo.svg' size={45} />
            </div>
            <div className=''>
              <Navigation
                items={[
                  { label: 'HOME', href: '/' },
                  { label: 'SERVICES', href: '/services' },
                  {
                    label: 'ABOUT',
                    dropdown: [
                      { label: 'COMPANY', href: '/about/company' },
                      { label: 'CAREER', href: '/about/career' },
                      { label: 'CULTURE', href: '/about/culture'},
                      {label:'PHILOSOPY', href: '/about/philosophy'},
                      {label:'BIOGRAPHY', href:'/about/biography'},
                    ],
                  },
                  { label: 'CONTACT', href: '/contact' },
                  { label: 'BLOG', href: '/blog' },
                ]}
              />
            </div>
            {/*}
            <div className=''>
              <Profile />
            </div>
            */}
          </div>
        </div>
        {children}
        <footer className=' pt-4'>
          <Social
            urls={[
              'https://www.linkedin.com/in/jaco-botha-886b7b95/',
              'https://www.facebook.com/jaco.botha.12139',
              'https://github.com/206CE',
              'https://discord.com/users/1337346807100866580',
              'https://x.com/206Roaches',
            ]}
          />
          <div className=''>
            <ContactInfo
              cellphone='+27 079 497 2646'
              email='jacobotha206@gmail.com'
              address='19 Carpie Diem, Baillie Park, Potchefstroom, 2531'
            />
          </div>
          <CopyRight />
        </footer>
      </body>
    </html>
  );
}
