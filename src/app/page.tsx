import {Hero} from '@/components';


export default function Home() {
  return (
    <div className='sm:text-hook text-md'>
      <main className=''>
        <Hero
          title='CE_206'
          subtitle='Simplify Everything'
          ctas={[{ label: 'Contact', href: '/contact' }]}
          imgSrc='/hero-1920-1080.webp'
          imgAlt='A burning Star'
          imgSize={500}
        />
      </main>

    </div>
  );
}
