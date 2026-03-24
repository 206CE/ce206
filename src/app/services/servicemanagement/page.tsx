import { BackNav, CardList, Section,TwoColumnSplit } from '@/components';

const serviceManagement = [
  {
    title: 'Focus on value',
    subtitle: 'If a task is not adding value to your company, dont do it.',
    description:
      'It is important to remember that even when we do work, not all of it contributes the same amount of value. It is easy these days to work hard and achieve little.',
    href: '/',
    imgUrl: '/services/ITIL_Guiding_Principles/ITIL_Focus_Value_1024.png',
    imgSize: 200,
  },
  {
    title: 'Iterate with feedback',
    subtitle: 'Remember to get feedback',
    description:
      'Sometimes we improve systems and forget to get feedback, its the feedback that will improve future improvements and make these changes permanent.',
    href: '/',
    imgUrl: '/services/ITIL_Guiding_Principles/ITIL_Itterate_Feedback_1024.png',
    imgSize: 200,
  },
  {
    title: 'Optimize and Automate',
    subtitle: 'Do not re-do anything',
    description:
      'When we do the same things every day, it can free up some resources if we can automate it, so that we can go back and focus on adding value.',
    href: '/',
    imgUrl: '/services/ITIL_Guiding_Principles/ITIL_Optimize_Automate_1024.png',
    imgSize: 200,
  },
  {
    title: 'Keep it simple and practical',
    subtitle: 'Sometimes the simplest and most practical solution is best.',
    description:
      'Never get held up by extra complex situations. If it addresses the issue there is no need to redesign the entire organization.',
    href: '/',
    imgUrl: '/services/ITIL_Guiding_Principles/ITIL_Simple_Practical1024.png',
    imgSize: 200,
  },

  {
    title: 'Start where you are',
    subtitle: 'Sometimes we dont know where to start to make changes.',
    description:
      'It is better to make any change than none at all, so start where you are and work your way out.',
    href: '/',
    imgUrl: '/services/ITIL_Guiding_Principles/ITIL_Start_Where_you_are_1024.png',
    imgSize: 200,
  },

  {
    title: 'Think and Work Holistically',
    subtitle: 'It can be hard sometimes to keep the big picture in mind.',
    description:
      'Remember that no system exist in absolute isolation so it helps to keep focused on the big picture.',
    href: '/',
    imgUrl: '/services/ITIL_Guiding_Principles/ITIL_Think_Work_Holistically_1024.png',
    imgSize: 200,
  },
  {
    title: 'Visible Collaboration',
    subtitle: 'Keeping everyones contributions visible will ad urgency.',
    description:
      'If everyone can see what the others are doing it will contribute to improved collaboration.',
    href: '/',
    imgUrl: '/services/ITIL_Guiding_Principles/ITIL_Visible_Collaboration_1024.png',
    imgSize: 200,
  },
];

export default function ServiceManagement() {
  return (
    <section>
      <Section
        title='We Improve your service delivery'
        subtitle='The modern economy is service centered.'
      >
        
        <BackNav className='mb-2 fixed top-15 right-4 z-10 bg-black' />
        <CardList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          items={serviceManagement}
        />
      </Section>
    </section>
  );
}
