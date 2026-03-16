import { TimeLine, BackNav } from '@/components';

const Experience = [
  // --- 2026 ---
  {
    year: '2026',
    type: 'project',
    role: 'Lead Software Engineer',
    company: 'CE206',
    description:
      'I am constructing this site using all the skills I know as a portfolio and proof of my competence.',
  },
  {
    year: '2026',
    type: 'project',
    role: 'Front-End Engineer',
    company: 'FreeCodeCamp',
    description:
      'I took part in the spring co-hort where we collaborated and worked on a production grade site.',
  },

  // --- 2025 ---
  {
    year: '2024 – Present',
    type: 'work',
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
    year: '2025',
    type: 'work',
    role: 'Field Support Engineer',
    company: 'Purple-Blue Technologies',
    location: 'Potchefstroom, South Africa',
    description:
      'Provided IT support services to South African Department of Justice',
    achievements: [
      'Created a positive working environment by providing good customer experiences.',
    ],
  },
  {
    year: '2025',
    type: 'project',
    role: 'Open Source Contributor',
    company: 'FreeCodeCamp',
    description:
      'I identify bugs and add features to the FreeCodeCamp curriculum.',
  },
  {
    year: '2025',
    type: 'project',
    role: 'Website Developer',
    company: 'Per-Gratiam',
    description:
      'Building a website for Per-Gratiam, a company that saves lives every day.',
  },
  {
    year: '2025',
    type: 'project',
    role: 'Website Developer',
    company: 'Aurora Tax Consultants',
    description:
      'Building a website for marketing purposes of a financial tax firm.',
  },
  {
    year: '2025',
    type: 'education',
    role: 'ITIL v4 Foundation',
    company: 'People Cert',
    description: 'Qualified Service management certificate.',
  },
  {
    year: '2025',
    type: 'education',
    role: 'Google IT Support',
    company: 'Coursera',
    description: 'Completed the Google IT Support certificate.',
  },

  // --- 2024 ---
  {
    year: '2024 - 2025',
    type: 'work',
    role: 'Lecturer',
    company: 'Eduvos',
    location: 'Potchefstroom, South Africa',
    description: 'Gave lectures on IT and other related subjects',
    achievements: [
      'Created my own content and sparked interest for IT in the next generation.',
    ],
  },
  {
    year: '2017 - 2024',
    type: 'work',
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

  // --- 2022 ---
  {
    year: '2022',
    type: 'project',
    role: 'Architect',
    company: 'Sunfarming South Africa',
    description:
      'Built a live display to show green energy contribution in shops via Raspberry Pi&apos;s and LAMP servers.',
  },
  {
    year: '2022',
    type: 'education',
    role: 'Bachelors Degree in Science',
    company: 'Computing',
    description:
      'Completed my 3 year degree in Computing while working full-time.',
  },

  // --- 2020 ---
  {
    year: '2020',
    type: 'project',
    role: 'Project Leader',
    company: 'Private',
    description:
      'Coded and Implemented hardware in Raspberry Pi&apos;s to act as Milk dispensers for german company',
  },

  // --- 2019 ---
  {
    year: '2019',
    type: 'project',
    role: 'Architect',
    company: 'Sunfarming South Africa',
    description:
      'Green House Monitoring using Images, Temperature and Humidity sensors to automate greenhouses.',
  },

  // --- 2016 / 2017 ---
  {
    year: '2016 - 2017',
    type: 'work',
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
    year: '2016',
    type: 'education',
    role: 'Web Design, Development & Marketing Courses',
    company: 'Upskillist',
    description: 'Completed various certifications in Web Technologies.',
  },

  // --- 2009 - 2015 ---
  {
    year: '2009 - 2015',
    type: 'work',
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
  {
    year: '2009',
    type: 'education',
    role: 'Bachelors Degree in Education (incomplete)',
    company: 'North West University',
    description:
      'Completed 90% of program but had to go work full time for financial reasons.',
  },

  // --- 2000 ---
  {
    year: '2000',
    type: 'education',
    role: 'National Senior Certificate',
    company: 'HighSchool Three Rivers',
    description:
      'Completed college with Math, Science, Biology, IT, Afrikaans, English',
  },
];

export default function CareerPage() {
  return (
    <section>
      <span className='fixed top-10 right-10 font-extrabold'>
        <BackNav />
      </span>
      <div>
        <TimeLine title='Timeline' data={Experience} />
      </div>
    </section>
  );
}
