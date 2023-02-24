import Contact from 'components/Contact'
import Hero from 'components/Hero'
import React from 'react'

const contact = () => {
  return (
    <div>
      <Hero heading='Contact' message='Complete the form below to get in touch for details.'/>
      <Contact />
    </div>
  )
}

export default contact