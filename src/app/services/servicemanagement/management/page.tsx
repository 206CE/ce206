import { CardList } from "@/components";



export default function ServiceManagement() {
  return (

      <CardList

        items={[
          {
            title: 'Operational & Support Services',
            description:
              'Working directly with users and customers to make approved changes, manage incidents and become a single point of contact for your people.',
          },
          {
            title: 'Coordination & Governance Services',
            description:
              'Monitoring events, managing events and making it easier to adapt to change.',
          },
          {
            title: 'Relationship & Value Services',
            description:
              'Make sure IT meets business requirements, Improve systems to save money and time. Ensure that IT systems align with what customers realy need.',
          },
        ]}
      />

  );
}
