"use client";

import Link from "next/link";
import Image from "next/image";

export interface Cta {
  label?: string;
  href?: string;
}
interface HeroProps {
  className?:string;
  title?: string;
  subtitle?: string;
  ctas?: Cta[];
  imgSrc?: string;
  imgAlt?: string;
  imgSize?: number;
}

export function Hero({
  className='',
  title = "Compute Everything",
  subtitle = "From Origin to Convergence. One Entity. Many Minds.",
  ctas = [],
  imgSrc,
  imgAlt = "Alternate text",
  imgSize = 20,
}: HeroProps) {
  return (
    <section className={`${className}`}>
      <div className="flex flex-col items-center gap-4">
        {/* Optional image display */}
        <div className="flex justify-center">
          {imgSrc && (
            <div className="p-3">
              <Image
                src={imgSrc}
                alt={imgAlt ?? "Alternate Text"}
                className=""
                width={imgSize}
                height={imgSize}
                priority
              />
            </div>
          )}
        </div>

        <h1 className="text-title">{title}</h1>

        {subtitle && <h2 className="text-subtitle">{subtitle}</h2>}
        <ul className=" mt-6 flex justify-center flex-wrap">
          {ctas.map((cta, idx) => (
            <li
              key={idx}
              className="btn-primary"
            >
              <Link href={cta.href || "/"}>{cta.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
