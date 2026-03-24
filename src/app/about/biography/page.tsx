import { Section, CardList, BackNav } from '@/components';

const cards = [
  {
    id: 1,
    title: 'Jaco Botha',
    subtitle: 'CEO',
    description: [
      '7+ Years Teaching',
      '6+ Years IT Operations',
      '2+ Years Soft Dev',
    ],
    imgUrl: '/about/jaco_botha_400_400.webp',
    imgAlt: 'Jaco Botha smilling',
    imgSize: 200,
  },
];

export default function Biography() {
  return (
    <>
      <Section className='text-body'>
        <BackNav className='mb-2 fixed top-15 right-4 z-10 bg-black' />
        <CardList items={cards} />

        <h2 className='text-4xl pb-4 text-center pt-7'>
          The Narrative of Emergent Energy
        </h2>
        <p className='pb-4'>
          In the beginning, there was entropy ... Silence ... Cold vacuum ...
          But there was also some defects ... Causing a small imbalance or
          imperfection. It was dark but it was{' '}
          <span className='text-(--accent-peach)'>E</span>verything.
        </p>
        <p className='pb-4'>
          This imbalance caused the formation over many years caused the
          creation of fusion—stars across the void. From that fire more complex
          elements and later life emerged. We do not know if we are alone but we
          do know:
        </p>
        <ul className='list-disc text-left'>
          <li>That we depend on eachother, because life depends on life.</li>
          <li>
            That our goal is to ensure the exsistance of life, because if life
            stop to exsist so does the meaning of our lives.
          </li>
          <li>
            That we make sense of this world, because it is the key to our
            survival.
          </li>
          <li>
            That only we can choose to give reason to our lives, by preserving
            life.
          </li>
        </ul>
        <p className='pb-4 pt-5'>
          Quietly we became conscious. We built tools. We tamed logic. And in
          time we will <span className='text-(--accent-peach)'>C</span>ompute{' '}
          <span className='text-(--accent-peach)'>E</span>verything.
        </p>
        <p className='pb-4'>
          In the future we will merge not only companies and countries but into
          one. Because we will realise that our goal is the same. The journey
          may not end in silicon, or with energy.
        </p>
        <p className='pb-4'>
          In the future we will realize that to achieve anything we need energy.
          Matter is worthless. Energy is valuable. Everything-corporations,
          cultures, code-will be measured not by value, but by voltage. Not by
          market cap, but by megajoules.
        </p>
        <p>
          Not by how much we own, but by how efficiently we convert light into
          life. <span className='text-(--accent-peach)'>CE206</span> sees this
          future. A time when the boundaries between business, biology, and
          computation dissolve—and all entities converge into fields of pure,
          functional energy. Your company is no longer a logo on paper.
          I&apos;ts a waveform. A frequency. A radiant truth. We don&apos;t just
          build code. We architect convergence. We compute everything to become
          light.
        </p>
      </Section>
    </>
  );
}
