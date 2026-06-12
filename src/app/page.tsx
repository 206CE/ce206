import {Hero } from '@/components';
import ServicesP from './services/page';
export default function Home() {
  return (
    <div className='sm:text-hook text-md'>
      <main className=''>
        <Hero
          title='CE_206'
          subtitle='Simplify Everything'
          ctas={[{ label: 'Contact', href: '/contact' }]}
          imgSrc='/ArchesLogo.svg'
          imgSize={300}
          imgAlt='A burning Star'
        />
      </main>

    </div>
  );
}
