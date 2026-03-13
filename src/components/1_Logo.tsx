/**
 * CSS: NONE
 */

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  text: string;
  imgPath?: string;
  size: number;
  href?: string;
}

export function Logo({
  text,
  imgPath = '@/src/app/icon.ico',
  size,
  href = '/',
}: LogoProps) {
  return (
    <div
      className=''
    >
      <Link href={href || ''}>
        <div className='flex items-center gap-2 mr-4'>
          <Image
            src={imgPath}
            alt={text}
            width={size}
            height={size}
            style={{ width: size, height: size }}
            priority
          />
          <span className='sm:hidden lg:block'>{text}</span>
        </div>
      </Link>
    </div>
  );
}
