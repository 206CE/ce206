/**
 * This will be a container for a text-primary and text-secondary
 */
import { ReactNode } from "react";

interface SectionProps {
    title?:string;
    subtitle?:string;
    children?: ReactNode;
    className?: string;
}

export function Section({className = '', title, subtitle, children}:SectionProps) {
    return (
      <section
        className={`flex-col text-center p-4 m-3 border-(--border) border-2 ${className}`}
      >
        <h1 className='text-primary mb-5'>{title}</h1>
        <h2 className='text-secondary mb-5'>{subtitle}</h2>
        {children}
      </section>
    );
}