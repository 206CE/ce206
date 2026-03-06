'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // ← shadcn/ui utility — add if missing

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

interface MenuItem {
  title: string;
  href: string;
  desc?: string; // made optional
}

interface ComponentMenuProps {
  items: MenuItem[];
  triggerLabel?: string; // customizable trigger text
  className?: string;
}

export function Navi({
  items,
  triggerLabel = 'Components',
  className,
}: ComponentMenuProps) {
  return (
    <NavigationMenu className={cn('max-w-full', className)}>
      <NavigationMenuList>
        <NavigationMenuItem className='hidden md:flex'>
          <NavigationMenuTrigger>{triggerLabel}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              {items.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.desc}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Optional: add simple links outside the dropdown if needed */}
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string;
    children?: React.ReactNode;
  }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline',
            'outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
            'focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          {children && (
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
