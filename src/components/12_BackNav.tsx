/**
 * CSS: btn-secondary
 * 
 * Goes behind cards when they scale.
 */

'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { StepBack } from 'lucide-react';

interface Styling {
  className?:string;
}

export function BackNav( {className=''}:Styling) {
  const router = useRouter();

  return (
    <Button
    
      onClick={() => router.back()}
      className={`btn-secondary ${className}`}
    >
      <StepBack  />
    </Button>
  );
}
