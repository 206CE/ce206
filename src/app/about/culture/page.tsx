import { Code, BookOpen, Heart, Globe, Sun } from 'lucide-react'; // or heroicons, etc.
import { BackNav } from '@/components';

export const metadata = {
  title: 'Culture & Values | Jaco Botha',
  description:
    'What drives me, how I work, and the principles that shape my approach to code, life, and everything in between.',
};

const items = [
  {
    icon: Code,
    title: 'Perfection through Iteration',
    description:
      'I believe that getting things done is sometimes more important than doing things well. When the pressure is on, and money is at stake we must complete the task at hand. After that we can improve.',
  },
  {
    icon: Sun,
    title: 'Dependability and Routine',
    description:
      'I believe that if you want anything to succeed you have to be the first to arrive and the last to leave. If you stop doing that you are losing control.',
  },
  {
    icon: Heart,
    title: "If I cant create it, I don't understand it.",
    description:
      'Only through understanding something completely do we find solutions to what it needs.',
  },
  {
    icon: BookOpen,
    title: 'Doing a lot is the same as doing little.',
    description:
      "The only difference between someone who gets things done and one that doesn't is their ability to organize. ",
  },
  {
    icon: Globe,
    title: 'Combining different concepts, is creativity.',
    description:
      'Creativity is a problem solving skill. If you can imagine a solution you can probably find a better one.',
  },
];

export default function CulturePage() {
  return (
    <div className='min-h-screen  text-(--text-primary) '>
      {/* Hero / Manifesto-style Intro */}
      <section className='pt-20 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-primary'>Culture & Principles</h1>
          <p className='text-lead'>
            Without enough knowledge about oneself one can not improve.
          </p>
          <p className='text-body'>
            Growing up in Vereniging shaped a practical optimism to solve
            real-world problems, enjoy the process, don&apos;t take yourself too
            seriously. Here&apos;s what guides me.
          </p>
        </div>
      </section>

      <div className='font-extrabold text-4xl fixed top-6 right-4'>
        <BackNav />
      </div>
      {/* Core Values Grid */}
      <section className='p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          {items.map((item) => {
            // Destructure the icon as a Capitalized component

            return (
              <div key={item.title} className='cards'>
                {/* Render the Icon component */}
                <div className='mb-4 text-(--secondary)'>
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className='text-card-primary'>{item.title}</h3>

                <p className='text-card-secondary'>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Optional: Short Narrative / "How I Work" Block */}
      <section className='py-20 px-6 md:px-12 lg:px-24 '>
        <div className='max-w-4xl mx-auto prose prose-lg dark:prose-invert'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            How It Looks in Practice
          </h2>
          <ul className='space-y-6 text-(--text-secondary) '>
            <li>
              <strong>Swallow-the-frog</strong> — Do the thing you hate the most
              first, then the rest of the day is easy.
            </li>
            <li>
              <strong>Wish & Star</strong> — When people make a mistake also
              focus on what people do correctly. So give them a star. Then give
              them your wish.
            </li>
            <li>
              <strong>War teach us a lot about life.</strong> — I read a lot
              about war. The lessons one can learn from it is endless.
            </li>
            <li>
              <strong>That which survive...</strong> — The most important things
              we do are the things we leave behind.
            </li>
          </ul>
          <p className='text-(--text-tertiary) mt-10 text-center italic text-xl opacity-80'>
            &quot;Fear - Anger - Hate - Suffering&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
