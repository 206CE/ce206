import { Coffee, Code, BookOpen, Heart, Globe, Sun } from 'lucide-react'; // or heroicons, etc.
import { BackNav } from '@/components/BackNav';

export const metadata = {
  title: 'Culture & Values | Jaco Botha',
  description: 'What drives me, how I work, and the principles that shape my approach to code, life, and everything in between.',
};

export default function CulturePage() {
  // Feel free to move this to a data file (lib/values.ts) later
  const coreValues = [
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: 'Perfection through Iteration',
      description:
        'I believe that getting things done is sometimes more important than doing things well. When the pressure is on, and money is at stake we must complete the task at hand. After that we can improve.',
    },
    {
      icon: <Sun className="h-10 w-10 text-amber-600 " />,
      title: 'Dependability and Routine',
      description:
        'I believe that if you want anything to succeed you have to be the first to arrive and the last to leave. If you stop doing that you are losing control.',
    },
    {
      icon: <Heart className="h-10 w-10 text-red-600 " />,
      title: 'If I cant create it, I don\'t understand it.',
      description:
        'Only through understanding something completely do we find solutions to what it needs.',
    },
    {
      icon: <BookOpen className="h-10 w-10 text-purple-600 " />,
      title: 'Doing a lot is the same as doing little.',
      description:
        'The only difference between someone who gets things done and one that doesn\'t is their ability to organize. ',
    },
    {
      icon: <Globe className="h-10 w-10 text-green-600 " />,
      title: 'Combining different concepts, is creativity.',
      description:
        'Creativity is a problem solving skill. If you can imagine a solution you can probably find a better one.',
    },

  ];

  return (
    <div className='min-h-screen  text-(--text-primary) '>
      {/* Hero / Manifesto-style Intro */}
      <section className='pt-20 pb-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-5xl md:text-6xl font-bold tracking-tight mb-8'>
            Culture & Principles
          </h1>
          <p className='text-(--text-secondary)   text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90'>
            Without enough knowledge about oneself one can not improve.
          </p>
          <p className='mt-8 text-lg max-w-3xl mx-auto text-(--text-tertiary)'>
            Growing up in Vereniging shaped a practical optimism to solve real-world problems, enjoy the process, don&apos;t take yourself too seriously. Here&apos;s what guides me.
          </p>
        </div>
      </section>
      <div className='font-extrabold text-4xl fixed top-4 right-4'>
        <BackNav />
      </div>
      {/* Core Values Grid */}
      <section className='pb-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {coreValues.map((value) => (
            <div
              key={value.title}
              className='bg-(--bg-secondary)  p-8 border-4 border-(--border)  hover:border-blue-200  transition-all hover:shadow-lg group'
            >
              <div className='mb-6'>{value.icon}</div>
              <h3 className='text-2xl font-semibold mb-4 group-hover:text-blue-600  transition-colors'>
                {value.title}
              </h3>
              <p className='text-(--text-secondary)  leading-relaxed hover:text-(--text-primary)'>
                {value.description}
              </p>
            </div>
          ))}
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
              <strong>Swallow-the-frog</strong> — Do the thing you hate the most first, then the rest of the day is easy.
            </li>
            <li>
              <strong>Wish & Star</strong> — When people make a mistake also focus on what people do correctly. So give them a star. Then give them your wish.
            </li>
            <li>
              <strong>War teach us a lot about life.</strong> — I read a lot about war. The lessons one can learn from it is endless.
            </li>
            <li>
              <strong>That which survive...</strong> — The most important things we do are the things we leave behind.
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