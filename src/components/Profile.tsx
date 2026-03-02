'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function Profile() {
  const { user, isLoading } = useUser();
  const { Open, setOpen } = useState(false);

  if (isLoading) {
    return (
      <div className='loading-state'>
        <div className='loading-text'>Loading user profile...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className='flex p-2 items-center'>
      <img
        src={
          user.picture ||
          `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2363b3ed'/%3E%3Cpath d='M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z' fill='%23fff'/%3E%3C/svg%3E`
        }
        alt={user.name || 'User profile'}
        className='size-10 mr-5'
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2363b3ed'/%3E%3Cpath d='M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z' fill='%23fff'/%3E%3C/svg%3E`;
        }}
      />
      <div className='flex-col items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-40' align='start'>
            <DropdownMenuGroup>
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href='/dashboard'>Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <a href='/auth/logout' className=''>
                  Log Out
                </a>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/*<p className='text-body'>{user.email}</p>*/}
      </div>
    </div>
  );
}
