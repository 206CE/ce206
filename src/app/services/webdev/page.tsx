import { Section } from '@/components';
import { List } from '@/components/Listcomp';

const listItems = [
  {
    title: '0.0.0:001',
    description:
      'In this phase we focus on research and branding of the business/service. When we are done with this phase the client should have a foundation from where to start. The key outcomes for this phase is:',
    list: [
      'Analisis of current situation',
      'New or improved conversion paths',
      'Customer alignment',
      'Brand Identity',
      'Competition, costs and tech-stack selection',
    ],
  },
  {
    title: '1.0.0-alpha:001',
    description:
      'At the end of this phase we have a fully functional although limited website/app that has not been deployed to the public yet. The customer can give inputs and make changes before beta phase begins, to make sure we are on the same page. Key components of this phase are:',
    list: [
      'Typography',
      'SEO',
      'Logos and navigation',
      'Debugging P1&2 Errors',
      'Responsiveness checks',
    ],
  },
  {

    title: '1.0.0-beta:001',
    description:
      'At the end of this phase we will have a complete but potentially unstable site/app. It will be released to the public and be limitedly hosted for debugging. For this phase we will complete:',
    list: ['A hero section','Proper Icons','Detailed media discribing services.','Team info and media','Debugged all errors',
    ],
  },
  {
    
    title: '1.0.0-rc:001',
    description:
      'A mature build that is considered for final release, last critical bugs get squeiched.',
list: ['Video, placeholders and asset optimization','Accessiby','Forms and T&Cs','Customer dashboard','Blog'
    ],
  },{
    title: '1.0.0:001',
    description:
      'This would be the production-ready, stable release that is distributed to end-users.',
list: ['Themes added',
          'Languages',
          '0Auth',
          'Signup/in',
          'AI chat',
          'Smart SEO',
          'Security audit',
          'Post-Launch Monitoring and Analitics',
          'Completely responsive',
    ],
  },
];

import Image from 'next/image';

export default function WebDevP() {
  return (
    <Section
      title='Software Development'
      subtitle='Do you need a digital or internet presence?'
      className='p-1 border border-(--border) text-left'
    >
      <h5 className='text-card-primary'>Our phases:</h5>
      <List items={listItems} />



      <div className=''>
        <Image
          src='/services/Web_Development_800.webp'
          alt='Web Development'
          width={200}
          height={200}
          className='object-cover'
        />
        <p></p>
      </div>
    </Section>
  );
}
