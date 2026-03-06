import { Coffee, Code, BookOpen, Heart, Globe, Sun } from 'lucide-react'; // or heroicons, etc.

export const metadata = {
  title: 'Culture & Values | Jaco Botha',
  description: 'What drives me, how I work, and the principles that shape my approach to code, life, and everything in between.',
};

export default function CulturePage() {
  // Feel free to move this to a data file (lib/values.ts) later
  const coreValues = [
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: 'Craft Over Cargo Cult',
      description:
        'I believe in understanding why things work, not just copying patterns. Clean, intentional code > trendy shortcuts every time.',
    },
    {
      icon: <Sun className="h-10 w-10 text-amber-600 " />,
      title: 'Optimism & Iteration',
      description:
        'Start with the best version you can imagine today, then improve it tomorrow. Small, consistent steps beat waiting for perfection.',
    },
    {
      icon: <Heart className="h-10 w-10 text-red-600 " />,
      title: 'People First',
      description:
        'Tech serves humans. I write code that’s maintainable for the next dev, accessible for users, and respectful of everyone’s time and energy.',
    },
    {
      icon: <BookOpen className="h-10 w-10 text-purple-600 " />,
      title: 'Lifelong Learning',
      description:
        'The stack changes fast — embracing curiosity keeps me sharp. From Next.js experiments to deep dives into performance or Rust side projects.',
    },
    {
      icon: <Globe className="h-10 w-10 text-green-600 " />,
      title: 'Open & Generous',
      description:
        'Share what I learn. Open source when possible, write about wins & failures, help others in the community — knowledge grows when it’s given away.',
    },
    {
      icon: <Coffee className="h-10 w-10 text-rose-600 " />,
      title: 'Balance & Grounding',
      description:
        'Code is important, but so is family, braai with friends, a good trail run in the veld, and not burning out. Sustainable pace wins long-term.',
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
            I build software the way I try to live: deliberately, kindly,
            curiously, and with respect for the long game.
          </p>
          <p className='mt-8 text-lg max-w-3xl mx-auto text-(--text-tertiary)'>
            Growing up in Pretoria shaped a practical optimism — solve real
            problems, enjoy the process, don&apos;t take yourself too seriously.
            Here&apos;s what guides me.
          </p>
        </div>
      </section>

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
              <strong>Mornings</strong> — Coffee, planning the day&apos;s deep
              work blocks, usually tackling the hardest problem first while the
              mind is fresh.
            </li>
            <li>
              <strong>Code style</strong> — Readable &gt; clever. Strong typing
              with TypeScript, component composition over inheritance, and lots
              of comments explaining &quote;why&quote; not just
              &quote;what&quote;.
            </li>
            <li>
              <strong>Collaboration</strong> — Async-first communication, clear
              PR descriptions, and genuine feedback without ego. I learn as much
              from reviews as I give.
            </li>
            <li>
              <strong>Outside work</strong> — Family time, hiking in the
              Magaliesberg when possible, reading (tech + non-tech), and
              occasionally tinkering with side projects just for fun.
            </li>
          </ul>
          <p className='text-(--text-tertiary) mt-10 text-center italic text-xl opacity-80'>
            &quot;Good code is like a good braai: thoughtful prep, the right
            heat, and enjoyed with good company.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}