import Hero from '@/components/Hero';


export default function Home() {
  return (
    <div className='sm:text-hook text-md'>
      <main className=''>
        <Hero
          title='CE_206'
          tagline='Simplify Everything'
          ctas={[{ label: 'Contact', href: '/contact' }]}
          itemFormat='btn-primary '
          listformat='text-2xl mr-2'
          imageSrc='/Logo_256.webp'
          imageAlt='Company Logo'
          imageSize={200}
        />
      </main>

    </div>
  );
}
