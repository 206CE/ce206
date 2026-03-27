import { About } from '@/components';

export const metadata = {
  title: 'About Us',
};

export default function AboutP() {
  return (
    <section>
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
    </section>
  );
}
