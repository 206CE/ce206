'use client'; // Required for hover/state logic
import Link from 'next/link';

export function DesktopMenu({ items = [] }: { items: NavItem[] }) {
  return (
    <nav className='relative hidden md:flex items-center gap-6'>
      {items.map((item, idx) => (
        <li key={idx} className='list-none group relative'>
          {item.children ? (
            // Render Dropdown Trigger
            <>
              <button className='flex items-center gap-1 nav-link py-2 cursor-pointer'>
                {item.label}
                <span className='text-xs transition-transform group-hover:rotate-180'>
                  ▼
                </span>
              </button>

              {/* The Dropdown Menu */}
              <ul className='absolute left-0 top-full hidden group-hover:block min-w-40 bg-(--bg-secondary) border border-gray-100 shadow-lg rounded-md p-2 z-50'>
                {item.children.map((child, cIdx) => (
                  <li key={cIdx} className='list-none'>
                    <Link
                      href={child.href || '#'}
                      className='nav-item'
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            // Render Standard Link
            <Link href={item.href || '/'} className='nav-link'>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </nav>
  );
}
