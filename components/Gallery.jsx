import React, { useState } from 'react'
import { SliderData } from 'components/SliderData.js'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Gallery = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div id='gallery' className='max-w-[1240px] max-auto bg-violet-200'>
      <h1 className='text-2xl font-bold text-center p-4'>
        Gallery
      </h1>
      <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === current 
                  ? 'opacity-[1] ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousSlide}
                  className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === current && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='/'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextSlide}
                    className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery