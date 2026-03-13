import React from 'react';

const TypographyGuide = () => {
  return (
    <div className='min-h-screen bg-(--bg-primary) p-10 space-y-16'>
      <section className='max-w-4xl mx-auto space-y-12'>
        {/* 1. Display & Hero Section */}
        <div>
          <span className='text-xs font-black uppercase tracking-[0.2em] text-(--tertiary) mb-2 block'>
            01. Display & Headings
          </span>
          <h1 className='text-5xl md:text-7xl font-black text-(--text-primary) tracking-tighter leading-none mb-6'>
            Hero Headline
          </h1>
          <h2 className='text-3xl md:text-5xl font-bold text-(--text-secondary) tracking-tight'>
            Secondary Section Header
          </h2>
        </div>

        {/* 2. Body & Prose */}
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <span className='text-xs font-black uppercase tracking-[0.2em] text-(--tertiary) mb-2 block'>
              02. Body Copy
            </span>
            <p className='text-xl text-gray-300 leading-relaxed mb-4'>
              The Lead Paragraph: A slightly larger font size for introductions.
              It bridges the gap between the header and the details.
            </p>
            <p className='text-base text-gray-400 leading-normal'>
              Standard Body: Designed for readability. We use a muted gray
              rather than pure white to prevent eye strain on our dark{' '}
              <code className='text-(--primary)'>--bg-primary</code> background.
            </p>
          </div>

          {/* 3. Specialized Elements */}
          <div className='space-y-6'>
            <span className='text-xs font-black uppercase tracking-[0.2em] text-(--tertiary) mb-2 block'>
              03. UI Elements
            </span>
            <div>
              <button className='btn-primary w-full md:w-auto'>
                Primary Button
              </button>
            </div>
            <p className='text-sm italic text-gray-500'>
              Microcopy/Caption: Use this for image credits, dates, or very
              minor technical details.
            </p>
            <div className='p-4 border-l-4 border-(--secondary) bg-white/5'>
              <p className='text-(--text-secondary) font-medium'>
                "This is a blockquote for testimonials or key takeaways."
              </p>
            </div>
          </div>
        </div>

        {/* 4. Interactive Components (The IconGrid Context) */}
        <div>
          <span className='text-xs font-black uppercase tracking-[0.2em] text-(--tertiary) mb-6 block'>
            04. Components (Card Typography)
          </span>
          <div className='bg-(--bg-secondary) p-8 rounded-xl border border-(--border) max-w-sm group'>
            <h3 className='text-2xl font-semibold mb-3 text-(--text-primary) group-hover:text-(--secondary) transition-colors'>
              Feature Title
            </h3>
            <p className='text-(--text-secondary) leading-relaxed'>
              This text is secondary to the title but still provides essential
              information about the feature.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypographyGuide;
