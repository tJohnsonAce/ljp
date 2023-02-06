import React from 'react'

const Contact = () => {
  return (
    <div className='m-auto p-4 h-screen bg-gradient-to-b from-violet-200 to-slate-400'>
      <h1 className='text-2xl font-bold text-center p-4'>
        Let&apos;s work together
      </h1>

      <form 
        action='https://getform.io/f/d61dd241-3f56-4aaa-ad58-fecf2066f7b0'
        method='POST'
        className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input 
            className='border shadow-lg p-3'
            type="text"
            name='name'
            placeholder='Name'
          />
          <input 
            className='border shadow-lg p-3' 
            type="email" 
            name='email'
            placeholder='Email'
          />
        </div>
        <input 
          className='border shadow-lg p-3 w-full my-2' 
          type="text" 
          placeholder='Subject'
          name='subject'
        />
        <textarea 
          name='message'
          className='border shadow-lg p-3 w-full' 
          cols="30" 
          rows="10" 
          placeholder='Message'>
        </textarea>
        <button className='border shadow-lg p-3 w-full mt-2 bg-white'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact