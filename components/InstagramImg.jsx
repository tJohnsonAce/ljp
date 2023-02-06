import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

const InstagramImg = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image 
        src={socialImg} 
        alt='Instagram Image' 
        className='w-full h-full'
        layout='responsive'
      />
      <div className='flex justify-center items-center w-full h-full absolute top-0 left-o right-0 bottom-0 hover:bg-black/50 group'>
      <p className='text-gray-300 hidden group-hover:block'>
        <FaInstagram size={35}/>
        </p>
      </div>
    </div>
  )
}

export default InstagramImg