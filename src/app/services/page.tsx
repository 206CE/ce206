import { ServiceList } from "@/components";

export const metadata = {
  title: 'The services we offer',
}

export default function Services() {
  return (
    <section>
      <div className=''>
        <ServiceList
          heading='Our Service Offerings'
          subheading='Services Simplified'
          services={[
            {
              title: 'Website Development',
              description:
                'From basic to advanced websites custom built with added Content Management Systems that Users can update themselves.',
              imgUrl: '/services/Web_Development_800.webp',
              imgSize: 200,
              link: '/',
            },
            {
              title: 'Service Management',
              description: 'We manage your services to retain clients.',
              imgUrl: '/services/Service_Management_800.webp',
              imgSize: 200,
              link: '/',
            },
            {
              title: 'Training & Tutoring',
              description: 'We teach and train anyone who needs to excel',
              imgUrl: '/services/Training_Learning_800.webp',
              imgSize: 200,
              link: '/',
            },
          ]}
          layout='grid'
          columns={3}
        />
      </div>
    </section>
  );
}
