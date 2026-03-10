'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { User, Ellipsis } from 'lucide-react';
import { Spinner } from './ui/spinner';

export  function Profile() {

  const { user, isLoading } = useUser();
  if (isLoading) {
    return (
      <div className='loading-state'>
        <div className='loading-text'><Spinner fontSize={20}/></div>
      </div>
    );
  }

  return (
    <div className=''>
      {user ? (
        <div className=''>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Ellipsis className=' z-10 cursor-pointer' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40' align='end'>
              <DropdownMenuGroup>
                <DropdownMenuLabel className='text-(--text-tertiary)'>
                  {user.name}
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link href='/dashboard'>Dashboard</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href='/auth/logout' className=''>
                    Log Out
                  </Link>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

      {/* Sidebar */}
      
          {/*<p className='text-body'>{user.email}</p>*/}
        </div>
      ) : (
        <div className=''>
          <a href='/auth/login' className=''>
            <User className='' size={20} />
          </a>
        </div>
      )}
    </div>
  );
}
