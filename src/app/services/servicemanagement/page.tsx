import { CardList } from "@/components";
import { BackNav } from "@/components";
export default function ServiceManagement() {
  return (
    <section>
      <BackNav />
      <CardList
        items={[
          {
            title: 'Focus on value',
            description:
              "If you are doing something that doesn't help your company, stop doing it.",
            href: '/',
          },
          {
            title: 'Iterate with feedback',
            description:
              'Make improvements but always make sure you have feedback as well',
            href: '/',
          },
          {
            title: 'Optimize and Automate',
            description: 'When something new works, make it effortless.',
            href: '/',
          },
          {
            title: 'Keep it simple and practical',
            description: "Don't over complicate it.",
            href: '/',
          },

          {
            title: 'Start where you are',
            description: 'There is no better place to start than where you are',
            href: '/',
          },

          {
            title: 'Think and Work Holistically',
            description: 'Try to keep the big picture in mind.',
            href: '/',
          },
          {
            title: 'Visible Collaboration',
            description: 'Make sure what everyone is doing is also visible.',
            href: '/',
          },
        ]}

      />
    </section>
  );
}
