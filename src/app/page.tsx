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
          imgSrc='/hero-352_197.webp'
          imgSize={200}
          imgAlt='A burning Star'
        />
      </main>
      <ServicesP />
    </div>
  );
}
