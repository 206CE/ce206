import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react'; // or your icon library

export const metadata = {
  title: 'Career | Jaco Botha',
  description:
    'My professional journey, roles, achievements, and what drives me in tech.',
};

export default function CareerPage() {
  // You can move this to a separate data file later (e.g. lib/career.ts)
  const careerTimeline = [
    {
      year: '2024 – Present',
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Pty Ltd',
      location: 'Pretoria, South Africa',
      description:
        'Leading frontend architecture with Next.js 15+, TypeScript, Tailwind, and App Router. Migrated legacy systems to modern stacks, improved performance by 60%, and mentored junior developers.',
      achievements: [
        'Reduced page load time from 4.2s → 0.9s',
        'Implemented CI/CD pipelines with Vercel & GitHub Actions',
      ],
    },
    {
      year: '2021 – 2024',
      role: 'Full-Stack Developer',
      company: 'Digital Solutions SA',
      location: 'Remote / Johannesburg',
      description:
        'Built scalable web applications using React, Node.js, PostgreSQL. Focused heavily on responsive design, accessibility, and SEO optimization.',
      achievements: [
        'Launched 12+ client projects',
        'Contributed to open-source Next.js utilities',
      ],
    },
    {
      year: '2018 – 2021',
      role: 'Junior Web Developer',
      company: 'StartUp Grid',
      location: 'Pretoria, Gauteng',
      description:
        'Developed and maintained multiple websites using WordPress, custom PHP, and early React projects. Gained strong foundation in JavaScript and UI/UX principles.',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900'>
      {/* Hero / Intro */}
      <section className='pt-16 pb-20 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>
            My Career Journey
          </h1>
          <p className='mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            From early web tinkering in Pretoria to building modern, performant
            applications — here's the path that shaped who I am today.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className='pb-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto'>
        <div className='relative'>
          {/* Vertical line */}
          <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2' />

          {careerTimeline.map((entry, index) => (
            <div
              key={entry.year}
              className={`relative mb-16 flex flex-col md:flex-row items-start md:items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Date bubble - centered on desktop */}
              <div className='flex items-center justify-center w-28 h-28 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-600 shadow-lg z-10 md:absolute md:left-1/2 md:-translate-x-1/2'>
                <div className='text-center'>
                  <Calendar className='mx-auto mb-1 h-6 w-6 text-blue-600 dark:text-blue-400' />
                  <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                    {entry.year}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-5/12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-7 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-blue-600 dark:text-blue-400' />
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                    {entry.role}
                  </h3>
                </div>

                <p className='text-gray-700 dark:text-gray-300 font-medium mb-2'>
                  {entry.company}
                  {entry.location && (
                    <span className='inline-flex items-center gap-1 ml-3 text-sm text-gray-500 dark:text-gray-400'>
                      <MapPin className='h-4 w-4' /> {entry.location}
                    </span>
                  )}
                </p>

                <p className='text-gray-600 dark:text-gray-400 mb-5'>
                  {entry.description}
                </p>

                {entry.achievements && entry.achievements.length > 0 && (
                  <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
                    {entry.achievements.map((ach, i) => (
                      <li key={i} className='flex items-start gap-2'>
                        <span className='text-green-500 mt-1'>•</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional: Skills / Tech Stack Highlights */}
      <section className='py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-900/50'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
            Core Skills & Technologies
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {[
              'Next.js 15+',
              'TypeScript',
              'Tailwind CSS',
              'React Server Components',
              'Node.js / Express',
              'PostgreSQL / Prisma',
              'Vercel / Deployment',
              'Git & GitHub',
            ].map((skill) => (
              <div
                key={skill}
                className='bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow'
              >
                <p className='font-medium text-gray-900 dark:text-white'>
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: Education block */}
      <section className='py-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
          Education & Certifications
        </h2>

        <div className='space-y-10'>
          <div className='flex items-start gap-6'>
            <GraduationCap className='h-10 w-10 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1' />
            <div>
              <h3 className='text-xl font-semibold'>BSc Computer Science</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                University of Pretoria • 2015 – 2018
              </p>
              <p className='mt-2 text-gray-700 dark:text-gray-300'>
                Focused on software engineering, algorithms, and web
                technologies.
              </p>
            </div>
          </div>

          {/* Add more entries as needed */}
        </div>
      </section>
    </div>
  );
}
