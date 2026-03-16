/**
 * CSS: cards, text-card-primary, text-card-secondary , form-label, text-body, --border, --bg-secondary, --text-tertiary, --text-secondary, 
 */

import {
  Briefcase,
  GraduationCap,
  Code,
  MapPin,
  LucideIcon,
} from 'lucide-react';

// 1. Map types to specific icons
const TYPE_ICONS: Record<string, LucideIcon> = {
  work: Briefcase,
  education: GraduationCap,
  project: Code,
};

export function TimeLine({ title, data }: { title: string; data: any[] }) {
  return (
    <section className='py-20 p-6 md:px-12 lg:px-24 max-w-4xl mx-auto'>
      <h2 className='text-primary'>
        {title}
      </h2>

      <div className='relative'>
        {/* Central Vertical line */}
        <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-(--border) transform md:-translate-x-1/2' />

        {data.map((entry, index) => {
          // 2. Determine which icon to use for this specific entry
          const Icon =
            TYPE_ICONS[entry.type as keyof typeof TYPE_ICONS] || Briefcase;

          return (
            <div
              key={index}
              className={`relative  flex flex-col  gap-2 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dynamic Icon/Date bubble */}
              <div className='flex items-center justify-center w-20 h-20 rounded-full bg-(--bg-secondary) border-4 border-(--border) shadow-lg z-10 '>
                <div className='flex flex-col items-center justify-center'>
                  <Icon className='h-6 w-6 text-(--text-tertiary) mb-1' />
                  <span className='text-[10px] font-bold text-(--text-secondary) block px-2 leading-tight text-center'>
                    {entry.year}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div
                className={`cards w-full md:w-5/12 bg-(--bg-secondary)  p-3 border border-(--border) transition-all hover:shadow-xl ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className='flex flex-col mb-2'>

                  <h3 className='text-card-primary'>
                    {entry.role}
                  </h3>
                </div>

                <p className='text-card-secondary'>
                  {entry.company}
</p><p>
                  {entry.location && (
                    <span className='flex mt-2 form-label'>
                      <MapPin className='h-3 w-3' /> 
                      {entry.location}
                    </span>
                  )}
                </p>
                <p className='text-body'>
                  {entry.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
