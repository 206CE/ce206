import {Hero} from '@/components';


export default function Home() {
  return (
    <div className='sm:text-hook text-md'>
      <main className=''>
        <Hero
          title='CE_206'
          subtitle='Simplify Everything'
          ctas={[{ label: 'Contact', href: '/contact' }]}
          imgSrc='/Logo_256.webp'
          imgAlt='Company Logo'
          imgSize={256}
        />
      </main>

    </div>
  );
}
