/**
 * CSS: text-primary, text-secondary,text-lead, text-body 
 * 
 * Check Additional section.
 */

import Image from 'next/image';

type AboutSection = {
  heading: string;
  content: string;
  image?: string; // optional image URL
};

type AboutProps = {
  companyName: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  sections?: AboutSection[];
  heroImage?: string;
};

export  function About({
  companyName,
  tagline,
  description,
  mission,
  vision,
  values,
  sections = [],
  heroImage,
}: AboutProps) {
  return (
    <div className=''>
      {/* Hero */}
      <section className='py-16 px-4 text-center'>
        {heroImage && (
          <div className='mb-6'>
            <Image
              src={heroImage}
              alt={`${companyName} hero`}
              width={800}
              height={400}
              className='mx-auto '
              priority
            />
          </div>
        )}
        <h1 className='text-primary'>{companyName}</h1>
        <p className='text-secondary'>{tagline}</p>
      </section>

      {/* Description */}
      <section className='max-w-4xl mx-auto px-6 py-10'>
        <h2 className='text-lead'>About Us</h2>
        <p className='text-body'>
          {description}
        </p>
      </section>

      {/* Mission & Vision */}
      <section className='py-10 px-6'>
        <div className='max-w-4xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2 '>
          <div>
            <h3 className='text-lead'>Our Mission</h3>
            <p className='text-body'>{mission}</p>
          </div>
          <div>
            <h3 className='text-lead'>Our Vision</h3>
            <p className='text-body'>{vision}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='max-w-4xl mx-auto px-6 py-10'>
        <h3 className='text-secondary'>Our Core Values</h3>
        <ul className='lg:list-disc space-y-3 mt-10'>
          {values.map((value, index) => (
            <li className='text-lead' key={index}>{value}</li>
          ))}
        </ul>
      </section>

      {/* Additional Sections */}
      {sections.length > 0 && (
        <section className='max-w-4xl mx-auto px-6 py-10 space-y-12'>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className='text-2xl font-semibold mb-2'>{section.heading}</h3>
              <p className='mb-4 '>
                {section.content}
              </p>
              {section.image && (
                <Image
                  src={section.image}
                  alt={section.heading}
                  width={800}
                  height={400}
                  className=' shadow'
                />
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
