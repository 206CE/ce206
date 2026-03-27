import React, { ReactNode } from 'react';
import Image from 'next/image';

// --- Interface Defining Component Props ---
export interface TwoColumnSplitProps {
  imgSrc: string;
  imgSize?: number; // 1. Added imgSize prop
  title: string;
  subtitle?: string;
  description?: string | string[];
  reverseLayout?: boolean;
  verticalAlignment?: 'top' | 'center' | 'bottom';
  containerClassName?: string;
  imageColumnClassName?: string;
  textColumnClassName?: string;
}

// --- The Reusable Component ---
export function TwoColumnSplit({
  imgSrc = '',
  imgSize = 400, // 2. Set a sensible default (e.g., 400px)
  title,
  subtitle,
  description,
  reverseLayout = false,
  verticalAlignment = 'center',
  containerClassName = '',
  imageColumnClassName = '',
  textColumnClassName = '',
}: TwoColumnSplitProps) {
  const alignmentClassMap: Record<string, string> = {
    top: 'items-start',
    center: 'items-center',
    bottom: 'items-end',
  };

  const alignmentClass = alignmentClassMap[verticalAlignment] || 'items-center';
  const flexDirectionClass = reverseLayout ? 'flex-row-reverse' : 'flex-row';

  // 3. Safety Check for Next.js 16.2 Image component
  const hasValidImage = imgSrc && imgSrc !== '/' && imgSrc !== '#';

  return (
    <div
      className={`
        flex flex-wrap ${flexDirectionClass} ${alignmentClass}
        w-full max-w-7xl mx-auto py-12 px-6 md:px-10 lg:px-16
        ${containerClassName}
      `}
    >
      {/* 1. Image Column */}
      <div
        className={`
          w-full md:w-1/2 p-4 md:p-8
          flex justify-center
          ${imageColumnClassName}
        `}
      >
        <div className='w-full max-w-xl flex justify-center'>
          {hasValidImage && (
            <Image
              src={imgSrc}
              alt={title}
              height={imgSize}
              width={imgSize}
              style={{ height: 'auto', width: 'auto' }} // Keeps it proportional
              priority
            />
          )}
        </div>
      </div>

      {/* 2. Text Column */}
      <div
        className={`
          w-full md:w-1/2 p-4 md:p-8
          text-center md:text-left
          ${textColumnClassName}
        `}
      >
        <div className='max-w-lg mx-auto md:mx-0'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-(--text-primary) leading-tight'>
            {title}
          </h2>
          {subtitle && (
            <p className='mt-4 text-lg md:text-xl text-(--text-secondary) leading-relaxed'>
              {subtitle}
            </p>
          )}

          {description && (
            <div className='text-card-secondary mt-2 w-full'>
              {Array.isArray(description) ? (
                <ul className='space-y-2 text-left inline-block mx-auto'>
                  {description.map((line, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--text-secondary) shadow-[0_0_8px_var(--text-secondary)]' />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{description}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
