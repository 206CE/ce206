/** DISABLED
 * 
 * BUGS:
 * 1. Not working on vercel
 * 2. Login Buggy
 * 3. Spinner Buggy
 * 
 */
'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { User, Ellipsis } from 'lucide-react';
import { Spinner } from './ui/spinner';
import { useState, useEffect } from 'react';

export function Profile() {
  const [open, setOpen] = useState(false);
  const { user, isLoading } = useUser();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (isLoading) return <Spinner  />;

  return (
    <div className=''>
      {user ? (
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button className='nav-link '>
              <Ellipsis />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className='w-56 bg-(--bg-secondary) border-(--border) text-(--text-primary)'

          >
            <DropdownMenuLabel className='font-normal border-b border-(--border)/50 pb-2 mb-1'>
              <div className='flex flex-col space-y-1'>
                {/* Primary User Name */}
                <p className='text-sm font-bold leading-none text-(--text-primary)'>
                  {user.name}
                </p>
                {/* Secondary Muted Email */}
                <p className='text-xs leading-none text-gray-400'>
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuGroup>
              <DropdownMenuItem
                asChild
                className='focus:bg-white/5 cursor-pointer'
              >
                <Link
                  href='/dashboard'
                  className='w-full text-(--text-secondary) hover:text-(--text-primary) transition-colors'
                >
                  Dashboard
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className='bg-(--border)' />

            <DropdownMenuItem
              asChild
              className='focus:bg-red-500/10 cursor-pointer'
            >
              <a
                href='/auth/logout'
                className='w-full text-red-500 font-medium'
              >
                Log Out
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <a href='/auth/login' aria-label='Login' className='nav-link'>
          <User />
        </a>
      )}

      {/* Consistent Background Overlay with Navigation */}
      {open && (
        <div
          className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40'
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}