import { BackNav, CardList, Section } from '@/components';

const training = [
  {
    title: 'School Subjects',
    subtitle: 'We specialize in the Sciences',
    description: ['Science', 'Technology', 'Mathematics'],
  },
  { title: 'Computer Skills', subtitle: 'Mentorships', description: '' },
  { title: 'Social Engineering' },
];

export default function Training() {
  return (
    <section>
      <Section
        title='Training'
        subtitle='If we are to survive we are to adapt.'
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
