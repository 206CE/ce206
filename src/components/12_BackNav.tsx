/**
 * CSS: btn-secondary
 * 
 * Goes behind cards when they scale.
 */

'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { StepBack } from 'lucide-react';

export function BackNav() {
  const router = useRouter();

  return (
    <Button
    
      onClick={() => router.back()}
      className='btn-secondary'
    >
      <StepBack  />
    </Button>
  );
}
