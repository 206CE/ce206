/** 1.0.0
 * 
 * CSS: text-primary, text-secondary, btn-primary, --bg-secondary, --border, 
 */

'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface Cta {
  label: string;
  href: string;
}

interface HeroProps {
  title?: string;
  tagline?: string;
  ctas?: Cta[];
  imgSrc?: string;
  imgAlt?: string;
  imgSize?: number;
}

export function Hero({
  title = 'Compute Everything',
  tagline = 'From Origin to Convergence. One Entity. Many Minds.',
  ctas = [],
  imgSrc,
  imgAlt = 'Alternate text',
  imgSize = 20,
}:HeroProps){
  return (
    <section className='p-4 bg-(--bg-secondary) m-3 border-(--border) border-2'>
      <div className='flex flex-col items-center'>
        {/* Optional image display */}
        <div className='flex justify-center'>
          {imgSrc && (
            <div className='p-3'>
              <Image
                src={imgSrc}
                alt={imgAlt ?? 'Alternate Text'}
                className=''
                width={imgSize}
                height={imgSize}
                priority
              />
            </div>
          )}
        </div>
        <h1 className='text-primary'>
          {title}
        </h1>

        {tagline && (
          <h2 className='text-secondary'>
            {tagline}
          </h2>
        )}
        <ul className=' mt-6 flex justify-center flex-wrap'>
          {ctas.map((cta, idx) => (
            <li key={idx} className='btn-primary'>
              <Link href={cta.href}>{cta.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
