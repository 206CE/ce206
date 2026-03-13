/** 
 * CSS: text-primary, text-secondary, text-microcopy, text-lead, text-body 
 */


import Image from 'next/image';

interface TeamMember {
  id: string | number;
  name: string;
  role?: string;
  bio?: string;
  imgUrl?: string;
  size?: number | 50;
}

interface TeamMemberProps {
  heading: string;
  subheading?: string;
  members: TeamMember[];
}

export  function Team({
  heading,
  subheading,
  members,
}: TeamMemberProps) {
  return (
    <section className='p-5'>
      <div className='text-center mb-group space-y-4 p-2'>
        <h2 className='text-primary'>{heading}</h2>
        {subheading && (
          <h4 className='text-secondary'>
            {subheading}
          </h4>
        )}
      </div>
      <div>
        {members.map((member, index) => (
          <div key={index} className='cards'>
            {member.imgUrl && (
              <Image
                className=''
                src={member.imgUrl}
                alt={`portrait of ${member.name}`}
                height={member.size}
                width={member.size}
              />
            )}
            <h5 className='text-microcopy'>{member.name}</h5>
            {member.role && (
              <p className='text-lead'>{member.role}</p>
            )}
            {member.bio && (
              <p className='text-body'>
                {member.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
