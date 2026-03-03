'use client';
import React, { useEffect, useRef } from 'react';



export default function Modal ({
  isOpen,
  onClose,
  title = 'Terms and Conditions',
  children,
}) {
  const modalRef = useRef(null);

  // Close on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Optional: trap focus inside modal (basic version)
      modalRef.current?.focus();
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm'
      onClick={onClose} // Click outside → close
      aria-modal='true'
      role='dialog'
    >
      {/* Inner modal - stop propagation so clicks inside don't close */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className='relative w-full max-w-4xl mx-4 my-8 bg-white rounded-xl shadow-2xl overflow-hidden focus:outline-none'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-gray-200'>
          <h2 className='text-xl font-semibold text-gray-900'>{title}</h2>
          <button
            type='button'
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 focus:outline-none'
            aria-label='Close'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className='px-6 py-6 max-h-[80vh] overflow-y-auto prose prose-slate'>
          {children}
        </div>

        {/* Optional footer with Accept button */}
        <div className='flex justify-end px-6 py-4 border-t border-gray-200'>
          <button
            onClick={onClose}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};

