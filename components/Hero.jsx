import React from 'react';
import Link from 'next/link'

const Hero = ({heading, message}) => {

  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='flex flex-col justify-center items-center script text-6xl text-white text-opacity-60'>
          {heading}
        </h2>
        <div className='flex flex-col justify-center items-center h-full'>
          <p className='py-5 text-xl text-white text-opacity-60'>
            {message}
          </p>
          <div className='mt-5'>
          <Link href="/contact#contact-form">
            <button className='px-8 py-2 border'>
              Book
            </button>
          </Link>
          </div>

        </div>
      </div>
    </div>
  );
  
};

export default Hero;