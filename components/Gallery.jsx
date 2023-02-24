import React, { useState } from 'react'
import { Wedding, Engagement, Family, Senior, Prom, Baptism, Pet, Holiday, Specialty } from 'components/Photos.js'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Gallery = ({slides}) => {
  const [currentWedding, setCurrentWedding] = useState(0)
  const [currentEngagement, setCurrentEngagement] = useState(0)
  const [currentFamily, setCurrentFamily] = useState(0)
  const [currentSenior, setCurrentSenior] = useState(0)
  const [currentProm, setCurrentProm] = useState(0)
  const [currentBaptism, setCurrentBaptism] = useState(0)
  const [currentPet, setCurrentPet] = useState(0)
  const [currentHoliday, setCurrentHoliday] = useState(0)
  const [currentSpecialty, setCurrentSpecialty] = useState(0)
  const weddingLength = Wedding.length
  const engagementLength = Engagement.length
  const familyLength = Family.length
  const seniorLength = Senior.length
  const promLength = Prom.length
  const baptismLength = Baptism.length
  const petLength = Pet.length
  const holidayLength = Holiday.length
  const specialtyLength = Specialty.length
  

  const nextWeddingSlide = () => {
    setCurrentWedding(currentWedding === weddingLength - 1 ? 0 : currentWedding + 1)
  }
  const previousWeddingSlide = () => {
    setCurrentWedding(currentWedding === 0 ? weddingLength - 1 : currentWedding - 1)
  }
  const nextEngagementSlide = () => {
    setCurrentEngagement(currentEngagement === engagementLength - 1 ? 0 : currentEngagement + 1)
  }
  const previousEngagementSlide = () => {
    setCurrentEngagement(currentEngagement === 0 ? engagementLength - 1 : currentEngagement - 1)
  }
  const nextFamilySlide = () => {
    setCurrentFamily(currentFamily === familyLength - 1 ? 0 : currentFamily + 1)
  }
  const previousFamilySlide = () => {
    setCurrentFamily(currentFamily === 0 ? familyLength - 1 : currentFamily - 1)
  }
  const nextSeniorSlide = () => {
    setCurrentSenior(currentSenior === seniorLength - 1 ? 0 : currentSenior + 1)
  }
  const previousSeniorSlide = () => {
    setCurrentSenior(currentSenior === 0 ? seniorLength - 1 : currentSenior - 1)
  }
  const nextPromSlide = () => {
    setCurrentProm(currentProm === promLength - 1 ? 0 : currentProm + 1)
  }
  const previousPromSlide = () => {
    setCurrentProm(currentProm === 0 ? promLength - 1 : currentProm - 1)
  }
  const nextBaptismSlide = () => {
    setCurrentBaptism(currentBaptism === baptismLength - 1 ? 0 : currentBaptism + 1)
  }
  const previousBaptismSlide = () => {
    setCurrentBaptism(currentBaptism === 0 ? baptismLength - 1 : currentBaptism - 1)
  }
  const nextPetSlide = () => {
    setCurrentPet(currentPet === petLength - 1 ? 0 : currentPet + 1)
  }
  const previousPetSlide = () => {
    setCurrentPet(currentBaptism === 0 ? petLength - 1 : currentPet - 1)
  }
  const nextHolidaySlide = () => {
    setCurrentHoliday(currentHoliday === holidayLength - 1 ? 0 : currentHoliday + 1)
  }
  const previousHolidaySlide = () => {
    setCurrentHoliday(currentHoliday === 0 ? holidayLength - 1 : currentHoliday - 1)
  }
  const nextSpecialtySlide = () => {
    setCurrentSpecialty(currentSpecialty === specialtyLength - 1 ? 0 : currentSpecialty + 1)
  }
  const previousSpecialtySlide = () => {
    setCurrentSpecialty(currentSpecialty === 0 ? specialtyLength - 1 : currentSpecialty - 1)
  }
    if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div id='gallery' className='max-w-1240 max-auto'>
      <h1 className='script text-5xl text-center p-4'>
        Wedding
      </h1>
      <div className='relative flex justify-center p-4'>
        {Wedding.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentWedding 
                  ? 'opacity-1 ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousWeddingSlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentWedding && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Wedding photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextWeddingSlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
      <h1 className='script text-5xl text-center p-4'>
        Engagement
      </h1>
      <div className='relative flex justify-center p-4'>
        {Engagement.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentEngagement 
                  ? 'opacity-[1] ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousEngagementSlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentEngagement && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Engagement photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextEngagementSlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
      <h1 className='script text-5xl text-center p-4'>
        Family
      </h1>
      <div className='relative flex justify-center p-4'>
        {Family.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentFamily 
                  ? 'opacity-[1] ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousFamilySlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentFamily && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Family photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextFamilySlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
      <h1 className='script text-5xl text-center p-4'>
        Senior Portraits
      </h1>
      <div className='relative flex justify-center p-4'>
        {Senior.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentSenior 
                  ? 'opacity-1 ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousSeniorSlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentSenior && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Senior photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextSeniorSlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
      <h1 className='script text-5xl text-center p-4'>
        Prom and Homecoming
      </h1>
      <div className='relative flex justify-center p-4'>
        {Prom.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentProm
                  ? 'opacity-1 ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousPromSlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentProm && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Prom and Homecoming photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextPromSlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
      <h1 className='script text-5xl text-center p-4'>
        Baptism
      </h1>
      <div className='relative flex justify-center p-4'>
        {Baptism.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentBaptism
                  ? 'opacity-1 ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousBaptismSlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentBaptism && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Baptism photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextBaptismSlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
      <h1 className='script text-5xl text-center p-4'>
        Pet
      </h1>
      <div className='relative flex justify-center p-4'>
        {Pet.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentPet
                  ? 'opacity-1 ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousPetSlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentPet && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Pet photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextPetSlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
      <h1 className='script text-5xl text-center p-4'>
        Holiday
      </h1>
      <div className='relative flex justify-center p-4'>
        {Holiday.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentHoliday
                  ? 'opacity-1 ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousHolidaySlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentHoliday && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Holiday photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextHolidaySlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                    size={50} 
                  />
              </div>
          )
        })}
      </div>
      <h1 className='script text-5xl text-center p-4'>
        Specialty
      </h1>
      <div className='relative flex justify-center p-4'>
        {Specialty.map((slide, index) => {
          return (
            <div 
              key={index} 
              className={
                index === currentSpecialty 
                  ? 'opacity-1 ease-in-out duration-1000' 
                  : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={previousSpecialtySlide}
                  className='absolute top-[50%] left-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
                {index === currentSpecialty && (
                  <Image 
                    style={{ objectFit: 'cover' }}
                    src={slide.image}
                    alt='Specialty photos'
                    width='1440'
                    height='600'
                  />
                )}
                  <FaArrowCircleRight 
                    onClick={nextSpecialtySlide}
                    className='absolute top-[50%] right-[30px] text-violet-200 text-opacity-60 cursor-pointer select-none z-[2]' 
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