
import {ServiceList} from '@/components/ServiceList';


export default function WebDev() {
  return (
    <section>
      <ServiceList
        heading='Inside our websites are...'
        subheading='Our sites use'
        itemStyle='card'
        services={[
          {
            title: 'Node 24',
            description:
              'Node 24 includes the latest V8 engine optimizations, meaning faster startup times for your dev server and lower memory usage for Server Components.',
            link: '/',
          },
          {
            title: 'React 19',
            description:
              'Optimized Components. Handles form submissions. Clean boundary between server and client.',
            link: '/',
          },
          {
            title: 'Next 16',
            description:
              'Next.js 16 (the current 2026 standard) completes the transition that started in version 13, moving the framework into a Rust-powered era. The primary benefits center around extreme speed and predictable caching, moving away from the magic of previous versions toward more explicit control.',
            link: '/',
          },
          {
            title: 'Tailwind-merge 3',
            description:
              "In 2026, tailwind-merge is the unsung hero of the modern frontend stack. While Tailwind CSS is great, it has one major flaw: it doesn't understand CSS specificity logic when you combine strings. For better styling.",
            link: '/',
          },
        ]}
        layout='grid'
        columns={2}
      />
      <ServiceList
        heading='Our Previous Work...'
        subheading='These are the sites we are currently building'
        itemStyle='card'
        services={[
          {
            title: 'Aurora',
            description:
              'Aurora is a family tax consultancy firm that specializes in personal tax.',
            link: '/', imgUrl: '/services/Customers/Aurora-Logo-203-213.webp', 
          },
          {
            title: 'Play2Heal',
            description:
              'Professional play therapist in Potchefstroom.',
            link: '/', imgUrl: '/services/Customers/Play2Heal-Logo-596.webp'
          },
          {
            title: 'Per-Gratiam',
            description:
              'Counseling and Addiction specialist that really want to help.',
            link: '/', imgUrl: '/services/Customers/PerGratiam-Logo-364.webp'
          },
          
        ]}
        layout='grid'
        columns={1}
      />
    </section>
  );
}
