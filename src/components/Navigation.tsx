/* BAD - 1.0.0

1. Lucide 
2. Simplify

*/

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Logo } from './Logo';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

interface NavigationProps {
  items: NavItem[];
  compStyling?: string;
}

export function Navigation({ items, compStyling = '' }: NavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const commonLinkClass = `flex  ${compStyling}`;

  const renderItem = (item: NavItem, closeOnClick = false) =>
    item.dropdown ? (
      <DropdownMenu key={item.label}>
        <DropdownMenuTrigger asChild>
          <Button className={`cursor-pointer ${commonLinkClass}`} type='button'>
            {item.label}
            <FaChevronDown className='mt-2 ml-2 h-4 w-4' aria-hidden='true' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='absolute z-10 w-max cursor-pointer'>
          {item.dropdown.map((drop) => (
            <DropdownMenuItem asChild key={drop.label}>
              <Link
                href={drop.href}
                className={commonLinkClass}
                onClick={closeOnClick ? () => setOpen(false) : undefined}
              >
                {drop.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <Link
        key={item.label}
        href={
          item.href ||
          `/${
            item.label === 'Home'
              ? ''
              : item.label.toLowerCase().replace(/\s+/g, '-')
          }`
        }
        className={commonLinkClass}
        onClick={closeOnClick ? () => setOpen(false) : undefined}
      >
        {item.label}
      </Link>
    );

  return (
    <nav className='relative'>
      {/* Desktop Menu */}
      <div className='hidden  sm:text-md md:flex md:text-xl py-2 gap-1 items-center text-2xl font-extrabold z-10'>
        {items.map((item) => renderItem(item))}
      </div>

      {/* Hamburger */}
      <button
        className={`md:hidden fixed top-1 right-1 z-10 p-2 cursor-pointer bg-(--bg-primary) ${commonLinkClass}`}
        onClick={() => setOpen(!open)}
        aria-label='Toggle menu'
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div className='fixed inset-0 z-40' onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-2 right-0 z-50 w-2/3 mr-2 p-2 h-full transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col gap-2   '>
          {items.map((item) => renderItem(item, true))}
        </div>
      </div>
    </nav>
  );
}




export function Navigation2({ items, compStyling = '' }: NavigationProps) {


  return (
    <header>
      <div>
        <div>
          <Logo />
          {/*Desktop Menu*/}
          <nav>
            {items.map((item) => (
              <Link
                key={item.href}
                href={
                  item.href ||
                  `/${
                    item.label === 'Home'
                      ? ''
                      : item.label.toLowerCase().replace(/\s+/g, '-')
                  }`
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Mobile Hamburger Button */}
          <Button><Menu size={28}/></Button>
        </div>
      </div>
    </header>
  );
}
