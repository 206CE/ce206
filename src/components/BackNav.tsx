/** GOOD - 0.1.0.0

1. Lucide

 */

'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export function BackNav() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className={'nav-link mx-10 cursor-pointer'}
    >
      <IoIosArrowBack className='' />
    </Button>
  );
}
