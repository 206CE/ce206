/**
 * CSS: cards, text-card-primary, text-card-secondary
 */

import React from 'react';

// 1. Define the shape of a single item
interface GridItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// 2. Define the props for the grid component (an array of items)
interface IconGridProps {
  items: GridItem[];
}

export function Icongrid ({ items }: IconGridProps) {
  return (
    <section className='p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {items.map((item) => {
          // Destructure the icon as a Capitalized component
          const { icon: Icon, title, description } = item;

          return (
            <div
              key={title}
              className='cards'
            >
              {/* Render the Icon component */}
              <div className='mb-6 text-(--primary) group-hover:scale-110 transition-transform duration-300'>
                {/* Check if Icon is a function (Component) or an object (JSX Element)
                 */}
                {typeof Icon === 'function' ? <Icon size={40} /> : Icon}
              </div>

              <h3 className='text-card-primary'>
                {title}
              </h3>

              <p className='text-card-secondary'>
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
