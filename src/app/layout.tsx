/* CSS */
import '@/app/globals.css';
import { ThemeProvider } from 'next-themes';
/* auth0 

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
import {
  Logo,
  DesktopMenu,
  MobileMenu,
  ThemeToggle,
} from '@/components';

/* FOOTER*/
import { Social, CopyRight } from '@/components';

const navItems = [
  { label: 'HOME', href: '/' },
  {
    label: 'SERVICES',
    children: [
      { label: 'Software Development', href: '/services/webdev' },
      {
        label: 'Service Management',
        href: '/services/servicemanagement',
      },
      { label: 'Training', href: '/services/training' },
    ],
  },
  {
    label: 'ABOUT',
    children: [
      { label: 'COMPANY', href: '/about/company' },
      { label: 'CAREER', href: '/about/career' },
      { label: 'CULTURE', href: '/about/culture' },
      { label: 'PHILOSOPHY', href: '/about/philosophy' },
      { label: 'BIOGRAPHY', href: '/about/biography' },
    ],
  },
  { label: 'CONTACT', href: '/contact' },
  { label: 'BLOG', href: '/blog' },
];

const Ctas = [
  { id: '1', title: 'Contact Us', href: '/contact' },
  {
    id: '2',
    title: 'About me...',
    href: '/about/biography',
  },
  {
    id: '3',
    title: 'Share your own opinion',
    href: '/about/philosophy',
  },
];

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
          <div className='mb-20' />
          <div className='fixed left-0 top-0  bg-(--bg-primary) border-(--border) border-b-2 w-full pb-1'>
            <div className=' flex w-full justify-between items-center gap-3 pt-2 pl-2 '>
              <Logo text='CE_206' imgPath='/ArchesLogo.svg' imgSize={45} />
              <DesktopMenu items={navItems} />
              <MobileMenu items={navItems} />

              <ThemeToggle />
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
            <CopyRight />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
