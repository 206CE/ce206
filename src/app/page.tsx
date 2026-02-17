import Hero from '@/components/Hero';
import Services from './services/page';
import AboutP from './about/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <div className='bg-(--bg-primary)'>
      <main className=''>
        <Hero
          title='CE_206'
          tagline='Simplify Everything'
          ctas={[{ label: 'Contact', href: '/contact' }]}
          itemFormat='btn'
          listformat=''
          imageSrc='/Logo_2048.webp'
          imageAlt='Company Logo'
          imageSize={200}
        />
      </main>
      <section>
        <Services />
      </section>
      <section>
        <AboutP />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
