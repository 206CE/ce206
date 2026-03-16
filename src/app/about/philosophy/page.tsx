import { CardList } from "@/components";

export default function Philosophy() {
  return (
    <div>
      <CardList
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'
        items={[
          {
            title: 'Ontology',
            description: 'What is real? (Does it matter?)',
            icon: '',
            imgUrl: '/about/Philosopy/Ontology.png',
            imgSize: 100,
          },
          {
            title: 'Cosmology',
            description: 'Where does it all come from? (Does it matter?)',
            icon: '',
            imgUrl: '/about/Philosopy/Cosmology.png',
            imgSize: 100,
          },
          {
            title: 'Anthropology',
            description: 'What are human beings?',
            icon: '',
            imgUrl: '/about/Philosopy/Anthropology.png',
            imgSize: 100,
          },
          {
            title: 'Epistemology',
            description: 'How do you know the truth?',
            icon: '',
            imgUrl: '/about/Philosopy/Epistemology.png',
            imgSize: 100,
          },
          {
            title: 'Ethics',
            description: 'What is right and wrong?',
            icon: '',
            imgUrl: '/about/Philosopy/Ethics.png',
            imgSize: 100,
          },
          {
            title: 'Purpose',
            description: 'What is the meaning of life?',
            icon: '',
            imgUrl: '/about/Philosopy/Purpose.png',
            imgSize: 100,
          },
          {
            title: 'Soteriology',
            description: 'What is wrong with the world?',
            icon: '',
            imgUrl: '/about/Philosopy/Soteriology.png',
            imgSize: 100,
          },
          {
            title: 'Eschatology',
            description: 'What does the future hold?',
            icon: '',
            imgUrl: '/about/Philosopy/Eschatology.png',
            imgSize: 100,
          },
          {
            title: 'Axiology',
            description: 'What is worth pursuing?',
            icon: '',
            imgUrl: '/about/Philosopy/Axiology.png',
            imgSize: 100,
          },
          {
            title: 'Practice',
            description: 'How is our view lived?',
            icon: '',
            imgUrl: '/about/Philosopy/Practice.png',
            imgSize: 100,
          },
        ]}
      />
    </div>
  );
}
