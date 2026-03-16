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
            src='/new_logo.svg'
            alt='Logo of ce206 company'
            width={256}
            height={256}
            preload
          />

          <Link className='btn-primary' href='/contact'>
            Contact Us
          </Link>
        </Section>
      </main>
    </div>
  );
}
