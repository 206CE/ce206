/* 1.0.1

1. Testing
2. Lucide
3. Add Address

*/
import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

interface ContactInfoProps {
  cellphone?: string;
  email?: string;
  address?: string; // Added address prop
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  cellphone,
  email,
  address,
}) => {
  // State to handle privacy toggle
  const [isPrivate, setIsPrivate] = useState(true);

  const togglePrivacy = () => setIsPrivate(!isPrivate);

  // Helper to mask data
  const maskData = (data: string) => (isPrivate ? '••••••••••••' : data);

  return (
    /* Semantic <address> tag is best practice for contact info */
    <address className='not-italic flex flex-wrap justify-between text-(--text-secondary) font-semibold m-5 gap-4'>
      {cellphone && (
        <div className='flex flex-row items-center space-x-2'>
          <MdPhone className='text-md text-blue-500' />
          <span onClick={togglePrivacy} className='cursor-pointer'>
            {maskData(cellphone)}
          </span>
        </div>
      )}

      {email && (
        <div className='flex flex-row items-center space-x-2'>
          <MdEmail className='text-md text-green-500' />
          <span onClick={togglePrivacy} className='cursor-pointer'>
            {maskData(email)}
          </span>
        </div>
      )}

      {address && (
        <div className='flex flex-row items-center space-x-2'>
          <MdLocationOn className='text-md text-red-500' />
          <span onClick={togglePrivacy} className='cursor-pointer'>
            {maskData(address)}
          </span>
        </div>
      )}

      {isPrivate && (
        <button
          onClick={togglePrivacy}
          className='text-xs text-blue-400 underline hover:text-blue-600 transition'
        >
          Show Info
        </button>
      )}
    </address>
  );
};

export default ContactInfo;
