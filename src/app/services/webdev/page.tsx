import { BackNav, CardList, Section, TwoColumnSplit } from '@/components';
import {
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from '@icons-pack/react-simple-icons';

const webdevinfo = [
  {
    title: 'Node 24',
    icon: <SiNodedotjs />,
    description:
      'Node 24 includes the latest V8 engine optimizations, meaning faster startup times for your dev server and lower memory usage for Server Components.',
    href: 'https://nodejs.org/',
  },
  {
    title: 'React 19',
    icon: <SiReact />,
    description:
      'Optimized Components. Handles form submissions. Clean boundary between server and client.',
    href: 'https://react.dev/',
  },
  {
    title: 'Next 16',
    icon: <SiNextdotjs />,
    description:
      'Next.js 16 (the current 2026 standard) completes the transition that started in version 13, moving the framework into a Rust-powered era. The primary benefits center around extreme speed and predictable caching, moving away from the magic of previous versions toward more explicit control.',
    href: 'https://nextjs.org/',
  },
  {
    title: 'Tailwindcss 4',
    icon: <SiTailwindcss />,
    description:
      "In 2026, tailwind-merge is the unsung hero of the modern frontend stack. While Tailwind CSS is great, it has one major flaw: it doesn't understand CSS specificity logic when you combine strings. For better styling.",
    href: 'https://tailwindcss.com/',
  },
];

const sites = [
  {
    title: 'Aurora',
    description:
      'Aurora is a family tax consultancy firm that specializes in personal tax.',
    href: 'https://cust-aurora.vercel.app/',
    imgUrl: '/services/Customers/Aurora-Logo-203-213.webp',
  },
  {
    title: 'Play2Heal',
    description: 'Professional play therapist in Potchefstroom.',
    href: 'https://cust-play2heal.vercel.app/',
    imgUrl: '/services/Customers/Play2Heal-Logo-596.webp',
  },
  {
    title: 'Per-Gratiam',
    description:
      'Counseling and Addiction specialist that really want to help.',
    href: 'https://cust-pergratiam.vercel.app/',
    imgUrl: '/services/Customers/PerGratiam-Logo-364.webp',
  },
  {
    title: 'Hobby-Site',
    description: 'I built this site to demonstrate different styling.',
    href: 'https://hobby-site-coral.vercel.app/',
    imgUrl: '/Logo_256.webp',
  },
];

export default function WebDev() {
  return (
    <section>
      <Section
        title='How we aproach a website'
        subtitle='The compexity is astounding.'
      >
        <TwoColumnSplit
          imgSrc='/'
          title='Phase 1: Planning'
          subtitle='The following needs to be done, cause who says you need a website? Right?'
          description={[
            'Situation Analisis: Company porfolio',
            'Branding: Def. Personality, Voice',
            'Change Enablement, Audiance Alignment, Hosting, Costs, Competetor Analisis',
          ]}
        />
        <TwoColumnSplit
          imgSrc='/'
          title='Phase 2: Basic'
          subtitle='Basic site'
          description={[
            'Home page with Hero section',
            'Services page with Services',
            'About page with Company details',
            'Contacts page to email company',
          ]}
        />
        <TwoColumnSplit
          imgSrc='/'
          title='Phase 3: Intermediate'
          subtitle='Smart Site'
          description={[
            '+4 pages',
            'Own Blog with CMS for owner',
            'Monitoring',
            'Analitics',

          ]} containerClassName='h-full'
           textColumnClassName=' ' 
          imageColumnClassName='max-w-0'      />
      </Section>

      <Section title='To build our sites' subtitle='The Tools we use:'>
        <BackNav className='mb-2 fixed top-15 right-4 z-10 bg-black' />
        <CardList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          items={webdevinfo}
        />
      </Section>
      <Section
        title='Previous Projects'
        subtitle='These are completed or still busy with projects'
      >
        <CardList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          items={sites}
        />
      </Section>
    </section>
  );
}
