import React from 'react'
import Image from 'next/legacy/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image 
            src='https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60' 
            alt='' 
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            src='https://media.istockphoto.com/id/1400254132/photo/boyfriend-asking-his-girlfriend-to-marry-him-while-standing-on-the-beach-together-african.jpg?b=1&s=170667a&w=0&k=20&c=iDmM0bNqWd9aFsarq6kPFy_lmIlxZ5_-MKfj8flWEow=' 
            alt=''
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            src='https://media.istockphoto.com/id/1451254153/photo/beautiful-white-young-woman-showing-diamond-engagement-ring.jpg?b=1&s=170667a&w=0&k=20&c=SV1THzvkckuV3eqx1mWZOPj2jFApqMdMlbhEY2-BnNQ=' 
            alt=''
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            src='https://media.istockphoto.com/id/1385170799/photo/cropped-shot-of-an-unrecognisable-woman-standing-alone-and-taking-off-her-wedding-ring-in-her.jpg?b=1&s=170667a&w=0&k=20&c=EbFxB8m5DJZvQgOKCG1NWPSfSz2uTfPpb387H9angHs=' 
            alt=''
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            src='https://media.istockphoto.com/id/1182536094/photo/successful-marriage-proposal.jpg?b=1&s=170667a&w=0&k=20&c=92ZuDQNRy5tEeZq22PK2ruhBCrlqt0-SkDyMM4rNzoo=' 
            alt=''
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio