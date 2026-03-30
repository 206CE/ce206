import {Hero } from '@/components';
import ServicesP from '@/app/services/page';

export default function Home() {
  return (
    <div className='sm:text-hook text-md'>
      <main className=''>
        <Hero
          title='CE_206'
          subtitle='Simplify Everything'
          ctas={[{ label: 'Contact', href: '/contact' }]}

        />
      </main>
      <ServicesP />
    </div>
  );
}
