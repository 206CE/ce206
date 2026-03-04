'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { useDebouncedCallback } from 'use-debounce'; // npm i use-debounce
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // This function waits 300ms after the user stops typing to update the URL
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    // Updates the URL without a full page reload
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className='relative w-full max-w-sm'>
      <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
      <Input
        placeholder='Search products...'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        className='pl-9'
        disabled
      />
    </div>
  );
}
