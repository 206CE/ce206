import ServiceList from '@/components/ServiceList';

export default function ServiceManagement() {
  return (
    <section>
      <ServiceList
        heading='What we do...'
        subheading="We find value others don't see."
        itemStyle='card'
        services={[
          {
            title: 'Focus on value',
            description:
              "If you are doing something that doesn't help your company, stop doing it.",
            link: '/',
          },
          {
            title: 'Iterate with feedback',
            description:
              'Make improvements but always make sure you have feedback as well',
            link: '/',
          },
          {
            title: 'Optimize and Automate',
            description: 'When something new works, make it effortless.',
            link: '/',
          },
          {
            title: 'Keep it simple and practical',
            description: "Don't over complicate it.",
            link: '/',
          },

          {
            title: 'Start where you are',
            description: 'There is no better place to start than where you are',
            link: '/',
          },

          {
            title: 'Think and Work Holistically',
            description: 'Try to keep the big picture in mind.',
            link: '/',
          },
          {
            title: 'Visible Collaboration',
            description: 'Make sure what everyone is doing is also visible.',
            link: '/',
          },
        ]}
        layout='grid'
        columns={2}
      />
    </section>
  );
}
