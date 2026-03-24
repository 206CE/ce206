/**
 *
 */

/* CSS */
import '@/app/globals.css';
import { ThemeProvider } from 'next-themes';
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
import { Logo, Navigation, ThemeToggle } from '@/components';

/* FOOTER*/
import { Social, ContactInfo, CopyRight, CtaBar } from '@/components';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={` ${myCustomFont.className} antialiased`}>
        <ThemeProvider
          attribute='data-theme'
          defaultTheme='dark'
          enableSystem={false}
        >
          <div className='bg-scan' />
          <div className='bg-(--bg-primary) border-(--border) border-b-2'>
            <div className='flex  items-center gap-3 pt-2 pl-2'>
              <div className='nav-link'>
                <Logo text='CE_206' imgPath='/new_logo.svg' imgSize={45} />
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
                        { label: 'CULTURE', href: '/about/culture' },
                        { label: 'PHILOSOPHY', href: '/about/philosophy' },
                        { label: 'BIOGRAPHY', href: '/about/biography' },
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
              <div className='nav-link cursor-pointer'>
                <ThemeToggle />
              </div>
            </div>
          </div>
          {children}
          <footer className=' pt-4 pb-20'>
            <CtaBar
              className=''
              title='Please choose an option of how you would like to proceed.'
              CtaItems={[
                { id: '1', title: 'Contact Us', href: '/contact' },
                {
                  id: '2',
                  title: 'More about me...',
                  href: '/about/biography',
                },
                {
                  id: '3',
                  title: 'Share your own opinion',
                  href: '/about/philosophy',
                },
              ]}
            />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
