/**
 * 
 * CSS: text-primary, text-secondary, cards, text-card-primary,
 */

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export type ServiceItem = {
  title: string;
  description: string;
  icon?: ReactNode;
  imgUrl?: string;
  imgSize?: number;
  link?: string;
};

type ServiceListProps = {

  services: ServiceItem[];
  layout?: 'grid' | 'list';
  columns?: number;
};

export function ServiceList({

  services,
  layout = 'grid',
  columns = 3,
}: ServiceListProps) {

  const gridCols =
    {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    }[columns] || 'grid-cols-1';

  return (
    <section className='p-8 '>
      {/* Services Container */}
      <div
        className={`${
          layout === 'grid' ? `grid ${gridCols}` : 'flex flex-col space-y-8'
        } gap-8 max-w-7xl mx-auto`}
      >
        {services.map((service, idx) => (
          <article key={idx} className='cards'>
            {/* Wrapper for Link logic */}
            {service.link ? (
              <Link
                href={service.link}
                className='flex flex-col items-center w-full'
              >
                <ServiceContent service={service} />
              </Link>
            ) : (
              <ServiceContent service={service} />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

// Sub-component to keep code clean and handle centering
function ServiceContent({ service }: { service: ServiceItem }) {
  return (
    <>
      {service.icon && (
        <div className='mb-6  group-hover:scale-110 transition-transform duration-300'>
          {service.icon}
        </div>
      )}

      {service.imgUrl && (
        <div className='relative mb-6 flex justify-center'>
          <Image
            src={service.imgUrl}
            alt={service.title}
            height={service.imgSize || 60}
            width={service.imgSize || 60}
            className='object-contain'
          />
        </div>
      )}

      {service.title && (
        <h3 className='text-card-primary'>
          {service.title}
        </h3>
      )}

      {service.description && (
        <p className='text-card-secondary'>
          {service.description}
        </p>
      )}
    </>
  );
}
