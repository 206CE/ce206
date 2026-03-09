import { TimeLine } from '@/components/TimeLine';
import { Briefcase, Calendar, GraduationCap, MapPin, Code } from 'lucide-react';

const workExperience = [
  {
    year: '2025',
    role: 'Field Support Engineer',
    company: 'Purple-Blue Technologies',
    location: 'Potchefstroom, South Africa',
    description:
      'Provided IT support services to South African Department of Justice',
    achievements: [
      'Created a positive working environment by providing good customer experiences.',
    ],
  },{
    year: '2024 - 2025',
    role: 'Lecturer',
    company: 'Eduvos',
    location: 'Potchefstroom, South Africa',
    description: 'Gave lectures on IT and other related subjects',
    achievements: [
      'Created my own content and sparked interest for IT in the next generation.',
    ],
  },
  {
    year: '2024 – Present',
    role: 'Front-End Developer',
    company: 'CE206',
    location: 'Potchefstroom, South Africa',
    description: 'Building production grade software utilizing Next 16+',
    achievements: [
      'Reduced page load time from 4.2s → 0.9s',
      'Implemented CI/CD',
    ],
  },
  {
    year: '2017 - 2024',
    role: 'Operational Manager',
    company: 'Sunfarming South Africa',
    location: 'Potchefstroom, South Africa',
    description:
      'Workforce leadership, Financial Oversight, Data-Driven Decision Making, IT & Systems',
    achievements: [
      'Oversaw and trained teams to perform optimally',
      'Managed budgets, controlled resources, maintained transaction records',
      'Analyzed data and generated reports for international projects.',
      'Used Sage One and managed assets and vehicles.',
    ],
  },
  {
    year: '2016 - 2017',
    role: 'IT Consultant',
    company: 'CE206',
    location: 'Wolmaransstad, South Africa',
    description:
      'Provided IT support services to Individuals and small companies.',
    achievements: [
      'Created a positive working environment by providing good customer experiences.',
    ],
  },
  {
    year: '2009 - 2015',
    role: 'Teacher',
    company: 'Department of Basic Education',
    location: 'Wolmaransstad, South Africa',
    description: 'Taught computer related subjects to college students.',
    achievements: [
      'Provided extra support and classes to learners when needed during public holidays',
      'Coached the Girls Hockey team.',
      'Conducted IT Support tasks for School and School Staff',
    ],
  },

  // ... more work entries
];

const projects = [
  {
    year: '2026',
    role: 'Lead Software Engineer',
    company: 'CE206',
    description:
      'I am constructing this site using all the skills I know as a portfolio and proof of my competence.',
  },
  {
    year: '2026',
    role: 'Front-End Engineer',
    company: 'FreeCodeCamp',
    description:
      'I took part in the spring co-hort where we collaborated and worked on a production grade site.',
  },
  {
    year: '2025',
    role: 'Open Source Contributor',
    company: 'FreeCodeCamp',
    description:
      'I identify bugs and add features to the FreeCodeCamp curriculum.',
  },
  {
    year: '2025',
    role: 'Website Developer',
    company: 'Per-Gratiam',
    description:
      'Building a website for Per-Gratiam, a company that saves lives every day.',
  },
  {
    year: '2025',
    role: 'Website Developer',
    company: 'Aurora Tax Consultants',
    description:
      'Building a website for marketing purposes of a financial tax firm.',
  },
  { year: '2022', role: 'Architect', company: 'Sunfarming South Africa', description: 'Built a live display to show green energy contribution in shops via Raspberry Pi&apos;s and LAMP servers.' },
  {
    year: '2020',
    role: 'Project Leader',
    company: 'Private',
    description:
      'Coded and Implemented hardware in Raspberry Pi&apos;s to act as Milk dispensers for german company',
  },
  {
    year: '2019',
    role: 'Architect',
    company: 'Sunfarming South Africa',
    description: 'Green House Monitoring using Images, Temperature and Humidity sensors to automate greenhouses.',
  }
];

const education = [
  {
    year: '2025',
    role: 'ITIL v4 Foundation',
    company: 'People Cert',
    description: 'Qualified Service management certificate.',
  },
  {
    year: '2025',
    role: 'Google IT Support',
    company: 'Coursera',
    description: 'Completed the Google IT Support certificate.',
  },
  {
    year: '2022',
    role: 'Bachelors Degree in Science',
    company: 'Computing',
    description:
      'Completed my 3 year degree in Computing while working full-time.',
  },
  {
    year: '2016',
    role: 'Web Design, Development & Marketing Courses',
    company: 'Upskillist',
    description: 'Completed various certifications in Web Technologies.',
  },
  {
    year: '2009',
    role: 'Bachelors Degree in Education (incomplete)',
    company: 'North West University',
    description:
      'Completed 90% of program but had to go work full time for financial reasons.',
  },
  {
    year: '2000',
    role: 'National Senior Certificate',
    company: 'HighSchool Three Rivers',
    description:
      'Complted college with Math, Science, Biology, IT, Afrikaans, English',
  },
];

export default function CareerPage() {
  return (
    <div className='min-h-screen'>
      <header className='pt-16 pb-10 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-[var(--text-primary)]'>
          Professional History
        </h1>
      </header>
      <div className='grid-cols-3'>
        {/* 1. Work Timeline */}
        <TimeLine
          title='Work Experience'
          data={workExperience}
          icon={Briefcase}
        />

        {/* 2. Projects/Freelance Timeline */}
        <TimeLine title='Projects' data={projects} icon={Code} />

        {/* 3. Education Timeline */}
        <TimeLine title='Education' data={education} icon={GraduationCap} />
      </div>
    </div>
  );
}
