"use client"

import React from 'react';
import { useRouter } from 'next/navigation';


const About = () => {

  const router = useRouter();

  return (
    <div className='m-20 flex flex-col content-between items-center h-full'>
        <div className='text-th-accent-light p-5 flex-1 flex flex-col items-center justify-evenly'>
            <div>
              <p className='text-8xl landscape:text-5xl font-thin'>The Band <span className='text-6xl'>-behind scenes</span></p>
              <hr className='mb-14 mt-24'/>
            </div>
            <div className='font-mono font-thin indent-2 leading-relaxed opacity-70 text-5xl'>
              <p>This is an exmple of a <span className='text-6xl font-semibold'>Band</span> website. Since this is an example it might
              not make sense at all, or maybe it does a little. You'll see. I any case, I have to fill up this space with something and couldn't think of 
              anything better than a waste of your precious time!</p>
              <p>Any questions, please send me a text message to +1 516-725-7543, or email me: <span className=' font-light'>emilikimberly1@gmail.com</span></p>
            </div>
        </div>

        <button 
          onClick={()=> router.back()}
          className="text-5xl mt-20 pb-10 font-bold text-th-accent-light underline">
          {`back`}
        </button>
        
    </div>
  )
}

export default About