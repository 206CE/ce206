import { ServiceList } from "@/components/ServiceList";

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
          itemStyle='card'
          services={[
            {
              title: 'Website Development',
              description:
                'From basic to advanced websites custom built with added Content Management Systems that Users can update themselves.',
              imgUrl: '/services/Web_Development_800.webp',
              imgSize: 200,
              link: '/services/webdev',
            },
            {
              title: 'Service Management',
              description: 'We manage your services to retain clients.',
              imgUrl: '/services/Service_Management_800.webp',
              imgSize: 200,
              link: '/services/servicemanagement',
            },
            {
              title: 'Training & Tutoring',
              description: 'We teach and train anyone who needs to excel',
              imgUrl: '/services/Training_Learning_800.webp',
              imgSize: 200,
              link: '/services/training',
            },
          ]}
          layout='grid'
          columns={3}
        />
      </div>
    </section>
  );
}
