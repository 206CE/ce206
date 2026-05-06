'use client';
import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export function MobileMenu({ items = [] }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className='md:hidden'>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='absolute p-2 text-2xl focus:outline-none top-3 right-3 cursor-pointer'
        aria-label='Toggle Menu'
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav className={`fixed inset-y-0 right-0 z-50 w-64 bg-(--bg-secondary) border-l border-border p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className='flex flex-col gap-2'>
            {items.map((item, idx) => (
              <li
                key={idx}
                className='list-none border-b border-(--border) last:border-0'
              >
                {item.children ? (
                  <>
                    {/* Dropdown Trigger */}
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className='flex items-center justify-between w-full py-3 nav-link cursor-pointer'
                    >
                      {item.label}
                      <span
                        className={`nav-item text-xs transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Nested Dropdown Items */}
                    {openDropdown === item.label && (
                      <ul className='pl-4 pb-2 flex flex-col gap-2 bg-(--bg-secondary)'>
                        {item.children.map((child, cIdx) => (
                          <li key={cIdx} className='list-none nav-item'>
                            <Link
                              href={child.href || '#'}
                              className='block py-2 text-sm nav-item'
                              onClick={() => setIsOpen(false)} // Close menu on click
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className='block py-3 nav-link'
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
