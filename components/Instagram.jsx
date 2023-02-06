import React from 'react'
import IgImg1 from 'public/igImg1.jpg'
import IgImg2 from 'public/igImg2.jpg'
import IgImg3 from 'public/igImg3.jpg'
import IgImg4 from 'public/igImg4.jpg'
import IgImg5 from 'public/igImg5.jpg'
import IgImg6 from 'public/igImg6.jpg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px]  text-center py-24'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4'>@ljphotography</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg_grid-cols-6 gap-2 p-4'>
        <InstagramImg socialImg={IgImg1}/>
        <InstagramImg socialImg={IgImg2}/>
        <InstagramImg socialImg={IgImg3}/>
        <InstagramImg socialImg={IgImg4}/>
        <InstagramImg socialImg={IgImg5}/>
        <InstagramImg socialImg={IgImg6}/>
      </div>
    </div>
  )
}

export default Instagram