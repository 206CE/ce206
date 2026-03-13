import { ServiceList } from "@/components/8_ServiceList";

export default function Philosophy() {
  return (
    <div>
      <ServiceList
        heading='Our Philosophy'
        subheading='If we cant create it, we dont understand it - Richard Fynneman'
        layout='grid'
        services={[
          {
            title: 'Ontology',
            description: 'What is real? (Does it matter?)',
            icon: '',
            imgUrl: '/Philosopy/Ontology.png',
            imgSize: 100,
          },
          {
            title: 'Cosmology',
            description: 'Where does it all come from? (Does it matter?)',
            icon: '',
            imgUrl: '/Philosopy/Cosmology.png',
            imgSize: 100,
          },
          {
            title: 'Anthropology',
            description: 'What are human beings?',
            icon: '',
            imgUrl: '/Philosopy/Anthropology.png',
            imgSize: 100,
          },
          {
            title: 'Epistemology',
            description: 'How do you know the truth?',
            icon: '',
            imgUrl: '/Philosopy/Epistemology.png',
            imgSize: 100,
          },
          {
            title: 'Ethics',
            description: 'What is right and wrong?',
            icon: '',
            imgUrl: '/Philosopy/Ethics.png',
            imgSize: 100,
          },
          {
            title: 'Purpose',
            description: 'What is the meaning of life?',
            icon: '',
            imgUrl: '/Philosopy/Purpose.png',
            imgSize: 100,
          },
          {
            title: 'Soteriology',
            description: 'What is wrong with the world?',
            icon: '',
            imgUrl: '/Philosopy/Soteriology.png',
            imgSize: 100,
          },
          {
            title: 'Eschatology',
            description: 'What does the future hold?',
            icon: '',
            imgUrl: '/Philosopy/Eschatology.png',
            imgSize: 100,
          },
          {
            title: 'Axiology',
            description: 'What is worth pursuing?',
            icon: '',
            imgUrl: '/Philosopy/Axiology.png',
            imgSize: 100,
          },
          {
            title: 'Practice',
            description: 'How is our view lived?',
            icon: '',
            imgUrl: '/Philosopy/Practice.png',
            imgSize: 100,
          },
        ]}
      />
    </div>
  );
}
