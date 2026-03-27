import Contacts from '@/components/Contacts';

export const metadata = {
  title: 'Send us an email now',
}

export default function Contact() {
  return (
    <section className=' flex flex-row justify-center'>
      <div className='w-3/4'>
        <Contacts />
      </div>
    </section>
  );
}
