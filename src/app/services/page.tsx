import { Section, CardList } from '@/components';

export const metadata = {
  title: 'The services we offer',
};

export default function Services() {
  return (
    <section>
      <Section title='Our service Offerings' subtitle='Services Simplified'>
        <CardList
        className='grid grid-cols-3 gap-3'
          items={[
            {
              id: 1,
              title: 'Website Development',
              subtitle: '',
              description:
                'From basic to advanced websites custom built with added Content Management Systems that Users can update themselves.',
              imgSrc: '/services/Web_Development_800.webp',
              imgSize: 200,
              href: '/',
            },
            {
              id: 2,
              title: 'Service Management',
              description: 'We manage your services to retain clients.',
              imgSrc: '/services/Service_Management_800.webp',
              imgSize: 200,
              href: '/',
            },
            {
              id: 3,
              title: 'Training & Tutoring',
              description: 'We teach and train anyone who needs to excel',
              imgSrc: '/services/Training_Learning_800.webp',
              imgSize: 200,
              href: '/',
            },
          ]}
        />
      </Section>
    </section>
  );
}
