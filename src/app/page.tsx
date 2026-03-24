import { Section } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className=''>
      <main className=' '>
        <Section
          className='flex-col text-center space-y-5'
          title='CE_206'
          subtitle='Simplify Everything'
        >
          <Image
            className='mx-auto'
            src='/hero-1920-1080.webp'
            alt='Logo of ce206 company'
            width={1900}
            height={1900}
            priority
          />

          <Link className='btn-primary' href='/contact'>
            Contact Us
          </Link>
        </Section>
      </main>
    </div>
  );
}
