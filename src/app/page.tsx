import Hero from '@/components/Hero';


export default function Home() {
  return (
    <div className=''>
      <main className=''>
        <Hero
          title='CE_206'
          tagline='Simplify Everything'
          ctas={[{ label: 'Contact', href: '/contact' }]}
          itemFormat='btn'
          listformat=''
          imageSrc='/Logo_256.webp'
          imageAlt='Company Logo'
          imageSize={200}
        />
      </main>

    </div>
  );
}
