"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const About = () => {

  const router = useRouter();

  return (
    <div className='m-20 flex flex-col content-between items-center h-screen'>
        <div className='text-th-accent-light p-5 landscape:pb-0 flex-1 flex flex-col items-center justify-evenly'>
            <div>
              <p className='text-9xl landscape:text-5xl font-thin'>This is our band!!</p>
              <hr className='mb-14 mt-24'/>
            </div>
            <div className='font-mono font-thin indent-2 leading-relaxed opacity-70 text-5xl landscape:text-3xl'>
              <p>This is an exmple of a <span className='text-6xl font-semibold'>Band</span> website. Made by a group of friends. Since this is an example it might
              not make sense at all, or maybe it does a little. You'll know. I any case, I have to fill up this space with something and could not think of 
              anything better than a waste of your precious time!</p>
              <p>Any questions, please send me a text message to +1 516-725-7543, or email me: <span className=' font-light'>emilikimberly1@gmail.com</span></p>
            </div>
        </div>

        <button 
          onClick={()=> router.back()}
          className="text-4xl landscape:text-3xl mt-20 landscape:mt-0 pb-10 font-mono font-bold text-gray underline landscape:self-end">
          {`back`}
        </button>
        
    </div>
  )
}

export default About