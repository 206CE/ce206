import Hero from '@/components/Hero';


export default function Home() {
  return (
    <div className='sm:text-hook text-md'>
      <main className=''>

        <Hero
          title='RECOVERY & WELLNESS GROUP'
          tagline='Empowering growth, healing, and transformation through professional coaching and counselling services.'
          ctas={[{ label: 'Contact Us', href: '/contact' }]}
          imageSrc=''
          imageAlt=''
          imageSize={100}
          itemFormat='btn-primary border'
        />
      </main>
    </div>
  );
}
