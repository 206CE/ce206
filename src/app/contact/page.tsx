import Contacts from '@/components/Contacts';

export default function Contact() {
  return (
    <section className='bg-(--bg-primary) flex flex-row justify-center'>
      <div className='w-3/4'>
        <Contacts />
      </div>
    </section>
  );
}
