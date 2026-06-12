import { Section, CardList } from '@/components';
import Image from 'next/image';

export const metadata = {
  title: 'The services we offer',
};

export default function ServicesP() {
  return (
    <section>
      <Section title='Our service Offerings' subtitle='Services Simplified'>
        <CardList
          className='grid md:grid-cols-1 gap-3 grid-cols-1'
          items={[
            {
              id: 3,
              title: 'Training & Tutoring',
              description: 'We teach and train anyone who needs to excel',
              imgSrc: '/services/Training_Learning_800.webp',
              imgSize: 200,
              href: '/services/training',
            },
            {
              id: 1,
              title: 'Software Development',
              subtitle: 'Websites, Apps.',
              description:
                'From basic to advanced websites custom built with added Content Management Systems that Users can update themselves.',
              imgSrc: '/services/Web_Development_800.webp',
              imgSize: 200,
              href: '/services/webdev',
            },
            {
              id: 2,
              title: 'Service Management',
              description: 'We manage your services to retain clients.',
              imgSrc: '/services/Service_Management_800.webp',
              imgSize: 200,
              href: '/services/serman',
            },
          ]}
        />
      </Section>
    </section>
  );
}
