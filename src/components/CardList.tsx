/** * Simplified Card List (No internal grid)
 * CSS: cards, text-primary, text-secondary, text-card-secondary
 */

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface GridItem {
  
  id?: string | number;
  title: string;
  subtitle?: string;
  description?: string | string[];
  icon?: ReactNode;
  imgUrl?: string;
  imgSize?: number;
  href?: string;
}

interface CardListProps {
  className?: string;
  items: GridItem[];
}

export function CardList({ className='', items }: CardListProps) {
  return (
    <div className={className}>
      {items.map((item, idx) => {
        const content = (
          <div className='flex flex-col items-center text-center'>
            {/* Media: Icon or Image */}
            {item.icon && (
              <div className='mb-4 text-(--secondary)'>{item.icon}</div>
            )}

            {item.imgUrl && (
              <div className='mb-4 overflow-hidden rounded-lg'>
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={item.imgSize || 80}
                  height={item.imgSize || 80}
                  className='object-cover'
                />
              </div>
            )}

            {/* Text Content */}
            <h3 className='text-primary font-bold text-xl'>{item.title}</h3>

            {item.subtitle && (
              <p className='text-card-primary  font-medium mb-2 tracking-wide'>
                {item.subtitle}
              </p>
            )}


              {/* Description Logic */}
            {item.description && (
              <div className='text-card-secondary mt-2 w-full'>
                {Array.isArray(item.description) ? (
                  <ul className='space-y-2 text-left inline-block mx-auto'>
                    {item.description.map((line, i) => (
                      <li key={i} className='flex items-start gap-2'>
                        {/* Custom Solar Bullet */}
                        <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--sun-flare) shadow-[0_0_8px_var(--sun-flare)]' />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.description}</p>
                )}</div>
            )}
          </div>
        );

        return (
          <article key={item.id || idx} className='cards group w-full'>
            {item.href ? (
              <Link href={item.href} className='w-full'>
                {content}
              </Link>
            ) : (
              content
            )}
          </article>
        );
      })}
    </div>
  );
}
