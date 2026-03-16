import { About, Section, CardList, BackNav} from '@/components';

export const metadata = {
  title: 'About Us',
};

const people = [
  {
    id: 1,
    title: 'Jaco Botha',
    subtitle: 'Computer Enthusiast',
    description: 'From theory to practice, to leading to learning.',
    imgUrl: '/about/jaco_botha_400_400.webp',
    imgSize: 200,
  },
];
export default function AboutP() {
  return (
    <section className=''>

      <Section
        className='flex flex-col items-center'
        title='CE_206'
        subtitle='Who we are'
      ><BackNav className='mb-2 fixed top-15 right-4 z-10 bg-black'/>
        <CardList className='mb-4 ' items={people} />
      </Section>

      <Section>
        <About
          companyName='CE_206'
          tagline='One number, many forms.'
          description='At CE_206, we believe that the future economy is service centered. Products have taken the back seat in the economy. The line between consumer and producer is increasingly hard to distinguish. Using technology we can create a network of services that can serve everyone and create a space in the economy for everyone to deliver services. You do not need to be a big co-operation to organize.'
          mission='Deliver services so that others can deliver their services and expand the economy to a sustainable, interdependent network of service providers and consumers that all play a part in contributing to the betterment of mankind as a whole.'
          vision='To architect this framework we must approach the economy from a service management perspective. This will increase the amount of services available and provide services to those that need it.'
          values={[
            'Everyone has something to offer.',
            'Everyone needs something sometimes.',
            'Improvement of services improve quality of life.',
          ]}
        />
      </Section>
    </section>
  );
}
