import Link from 'next/link';
import { ReactNode } from 'react';

export interface CtaItem {
  id?: string | number;
  title?: string;
  icon?: ReactNode;
  href?: string;
}

interface CtaBar {
  className?: string;
  title?: string;
  CtaItems?: CtaItem[];
}

export function CtaBar({ className = '', title = '', CtaItems }: CtaBar) {
  return (
    <>
      <div
        className={`fixed md:hidden  bottom-0 left-0 z-50 w-full  p-3 border-(--border) border-4 ${className}`}
      >
        <div>{title}</div>
        {CtaItems?.map((CtaItem, id) => (
          <ul key={id}>
            <Link className='btn-primary' href={CtaItem.href || '/'}>
              <div className='fixed'>
                {CtaItem.icon}
                {CtaItem.title}
              </div>
            </Link>
          </ul>
        ))}
      </div>
    </>
  );
}
