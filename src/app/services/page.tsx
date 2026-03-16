import { Section, CardList } from '@/components';

export const metadata = {
  title: 'The services we offer',
};

const servicelist = [
  {
    title: 'Website Development',
    description:
      'From basic to advanced websites custom built with added Content Management Systems that Users can update themselves.',
    imgUrl: '/services/Web_Development_800.webp',
    imgSize: 200,
    href: '/services/webdev',
  },
  {
    title: 'Service Management',
    description: 'We manage your services to retain clients.',
    imgUrl: '/services/Service_Management_800.webp',
    imgSize: 200,
    href: '/services/servicemanagement',
  },
  {
    title: 'Training & Tutoring',
    description: 'We teach and train anyone who needs to excel',
    imgUrl: '/services/Training_Learning_800.webp',
    imgSize: 200,
    href: '/services/training',
  },
];

export default function Services() {
  return (
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
  );
}
