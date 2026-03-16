import { BackNav, CardList, Section } from '@/components';

const training = [
  { title: 'Improve what you have' },
  { title: 'Keep your workers accountable' },
];

export default function Training() {
  return (
    <section>
      <Section
        title='Training'
        subtitle='Improvement can be made by the right skills'
      >
        <BackNav className='mb-2 fixed top-15 right-4 z-10 bg-black' />
        <CardList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          items={training}
        />
      </Section>
    </section>
  );
}
