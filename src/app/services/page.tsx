import { Section, CardList, TwoColumnSplit } from '@/components';

export const metadata = {
  title: 'The services we offer',
};

const humanApproach = [
  {
    title: 'The Financial Wall',
    subtitle:
      'Digital transformation is expensive, and for many SMEs, the ROI (Return on Investment) isnt immediate.',
    description: [
      'High Upfront Costs: Beyond just buying software, there are costs for hardware upgrades, high-speed internet, and cloud subscriptions.',
      'Hidden Expenses: Maintenance, cybersecurity premiums, and integration fees often exceed the original budget',
      'The Funding Gap: Many SMEs struggle to secure loans or grants specifically for "digital" infrastructure, as traditional lenders may see it as a high-risk intangible asset.',
    ],
    href: '',
  },
  {
    title: 'The Skills Gap',
    subtitle:
      'SMEs often lack in-house technical experts, leaving them dependent on expensive external consultants.',
    description: [
      'Lack of Expertise: Existing staff may be brilliant at their core jobs but lack "digital literacy"—the ability to use complex CRM, ERP, or data analytics tools effectively.',
      'Recruitment Struggles: In 2026, the competition for tech talent is fierce. Small companies often cant compete with the salaries or perks offered by Big Tech.',
      'Training Burden: Upskilling a small team takes time away from daily operations, which can temporarily hurt productivity.',
    ],
    href: '',
  },
  {
    title: 'Change Fatigue',
    subtitle: 'The human element is often the biggest hurdle.',
    description: [
      'Resistance to Change: Employees who have done things "the old way" for 20 years may fear that automation leads to job displacement.',
      'Mindset Misalignment: If the leadership doesnt fully believe in the digital shift, the rest of the company wont either. Digitalization requires a total shift in how value is delivered, not just a "new app."',
    ],
  },
  {
    title: 'Technical Integration',
    subtitle:
      'Many SMEs operate on a patchwork of old systems that dont talk to each other.',
    description: [
      'Compatibility Issues: New digital platforms often wont sync with old "legacy" software or manual databases, leading to data silos (where info is stuck in one department).',
      'Complexity: Trying to move a decade’s worth of paper records or outdated Excel sheets into a modern cloud system is a technical nightmare that often leads to data loss or corruption.',
    ],
  },
  {
    title: 'Trust & Cybersecurity',
    subtitle:
      'Moving to a digital platform increases the "attack surface" of a company.',
    description: [
      'Targeted Attacks: Small businesses are often seen as "easy targets" by hackers because they lack robust security. A single ransomware attack can be fatal for a company with thin margins.',
      'Compliance Weight: Navigating data privacy laws (like GDPR, CCPA, or local equivalents) is a heavy administrative burden for a small team.',
    ],
  },
];

const servicelist = [
  {
    title: 'Website Development',
    subtitle: 'Digital Business Presence',
    description:
      'From basic to advanced websites custom built with added Content Management Systems that Users can update themselves.',
    imgSrc: '/services/Web_Development_800.webp',
    imgSize: 200,
    href: '/services/webdev',
  },
  {
    title: 'Service Management',
    subtitle: 'Everything is a service',
    description: 'We manage your services to retain clients.',
    imgSrc: '/services/Service_Management_800.webp',
    imgSize: 200,
    href: '/services/servicemanagement',
  },
  {
    title: 'Training & Tutoring',
    subtitle: 'Constant Improvement is a must.',
    description: 'We teach and train anyone who needs to excel',
    imgSrc: '/services/Training_Learning_800.webp',
    imgSize: 200,
    href: '/services/training',
  },
];

export default function Services() {
  return (
    <section>
      <Section
        className=''
        title='Our Service Offerings'
        subtitle='Services Simplified'
      >
        <CardList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          items={servicelist}
        />
      </Section>
      <Section
        title='Why not do business online?'
        subtitle='Which concern is mostly yours.'
      >
        <TwoColumnSplit
          imgSrc=''
          title='The Financial Wall'
          subtitle='Digital transformation is expensive, and for many SMEs, the ROI (Return on Investment) isnt immediate.'
          description={[
            'High Upfront Costs: Beyond just buying software, there are costs for hardware upgrades, high-speed internet, and cloud subscriptions.',
            'Hidden Expenses: Maintenance, cybersecurity premiums, and integration fees often exceed the original budget',
            'The Funding Gap: Many SMEs struggle to secure loans or grants specifically for "digital" infrastructure, as traditional lenders may see it as a high-risk intangible asset.',
          ]}
        />
        <CardList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          items={humanApproach}
        />
      </Section>
    </section>
  );
}
