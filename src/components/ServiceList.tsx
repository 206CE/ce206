/** BAD - 1.0.0

1. CSS Dependency
2. Icons
3. Responsive Grid

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
  heading?: string;
  subheading?: string;
  services: ServiceItem[];
  itemStyle?: string;
  layout?: 'grid' | 'list';
  columns?: number;
};

export function ServiceList({
  heading,
  subheading,
  services,
  itemStyle,
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
    <section className='p-5  text-(--text-primary)'>
      <div className='text-center mb-5'>
        {heading && <h1 className='text-3xl font-bold'>{heading}</h1>}
        {subheading && (
          <h2 className='text-lg text-(--text-secondary) mt-2'>{subheading}</h2>
        )}
      </div>
      <div
        className={`${
          layout === 'grid' ? `grid ${gridCols}` : 'space-y-8'
        } gap-8 max-w-7xl mx-auto `}
      >
        {services.map((service, idx) => (
          <div
            className={`flex flex-col  justify-items-center p-6 border border-(--border) shadow-md hover:shadow-lg transition-shadow duration-300 bg-(--bg-secondary) ${itemStyle}`}
            key={idx}
          >
            {service.link && (
              <Link className='justify-center' href={service.link}>
                {service.icon && (
                  <div className='mb-4 text-(--text-primary) text-3xl'>
                    {service.icon}
                  </div>
                )}
                {/* End Icon */}
                {service.imgUrl && (
                  <Image
                    className='object-cover mb-4 '
                    src={service.imgUrl}
                    alt={service.description}
                    height={service.imgSize || 50}
                    width={service.imgSize || 50}
                  />
                )}
                {/* End Image */}
                {service.title && (
                  <h3 className='text-xl font-semibold '>{service.title}</h3>
                )}
                {service.description && (
                  <p className='text-(--text-secondary) mb-4'>
                    {service.description}
                  </p>
                )}
              </Link>
            )}
          </div>
        ))}
        {/*End Map */}
      </div>
    </section>
  );
}
