import { Code, BookOpen, Heart, Globe, Sun } from 'lucide-react'; // or heroicons, etc.
import { BackNav, Section, CardList } from '@/components';

export const metadata = {
  title: 'Culture & Values | Jaco Botha',
  description:
    'What drives me, how I work, and the principles that shape my approach to code, life, and everything in between.',
};

const principles = [
  {
    icon: <Code />,
    title: 'Perfection through Iteration',
    description:
      'I believe that getting things done is sometimes more important than doing things well. When the pressure is on, and money is at stake we must complete the task at hand. After that we can improve.',
  },
  {
    icon: <Sun />,
    title: 'Dependability and Routine',
    description:
      'I believe that if you want anything to succeed you have to be the first to arrive and the last to leave. If you stop doing that you are losing control.',
  },
  {
    icon: <Heart />,
    title: "If I cant create it, I don't understand it.",
    description:
      'Only through understanding something completely do we find solutions to what it needs.',
  },
  {
    icon: <BookOpen />,
    title: 'Doing a lot is the same as doing little.',
    description:
      "The only difference between someone who gets things done and one that doesn't is their ability to organize. ",
  },
  {
    icon: <Globe />,
    title: 'Combining different concepts, is creativity.',
    description:
      'Creativity is a problem solving skill. If you can imagine a solution you can probably find a better one.',
  },
];



export default function CulturePage() {
  return (
    <>
      <Section
        title='Culture & Principles'
        subtitle='Without enough knowledge about oneself one can not improve.'
      >
        <BackNav className='mb-2 fixed top-15 right-4 z-10 bg-black' />

        <p className='text-body mb-3'>
          Growing up in Vereniging shaped a practical optimism to solve
          real-world problems, enjoy the process, don&apos;t take yourself too
          seriously. Here&apos;s what guides me.
        </p>
        <CardList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          items={principles}
        />
      </Section>
      <Section title='The way I work' subtitle='What does it look like?'>
        <ul className='space-y-6 text-(--text-secondary) '>
          <li>
            <strong>Swallow-the-frog</strong> — Do the thing you hate the most
            first, then the rest of the day is easy.
          </li>
          <li>
            <strong>Wish & Star</strong> — When people make a mistake also focus
            on what people do correctly. So give them a star. Then give them
            your wish.
          </li>
          <li>
            <strong>War teach us a lot about life.</strong> — I read a lot about
            war. The lessons one can learn from it is endless.
          </li>
          <li>
            <strong>That which survive...</strong> — The most important things
            we do are the things we leave behind.
          </li>
        </ul>
      </Section>
    </>
  );
}
