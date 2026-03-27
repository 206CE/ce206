/**
 * This will be a container for a text-title and text-subtitle
 */
import { ReactNode } from "react";

interface SectionProps {
    title?:string;
    subtitle?:string;
    children?: ReactNode;
    className?: string;
}

export function Section({className = '', title = 'text-title', subtitle = 'text-subtitle', children}:SectionProps) {
    return (
      <section
        className={`flex-col text-center p-4 m-3 border-border border-2 ${className}`}
      >
        <h1 className='text-title mb-5'>{title}</h1>
        <h2 className='text-subtitle mb-5'>{subtitle}</h2>
        {children}
      </section>
    );
}