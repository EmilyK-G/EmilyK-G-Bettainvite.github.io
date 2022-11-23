import Link from 'next/link';
import React from 'react';

function Event() {
  return (
    <div className='flex flex-col h-full items-center justify-center text-whitesmoke p-10 text-center'>
        <p className='text-6xl m-10'>To my</p>
        <p className='text-9xl font-thin m-10'>Fall Outdoor <span className="m-5">Foodshare</span></p>
        <Link 
          href="/about"
          className="text-3xl font-mono font-bold underline hover:underline-offset-4 text-brick">
          What is this about?
        </Link>
        <p className='text-5xl font-thin m-10 mt-auto'> <small>Hosted by Emily Kimberly</small></p>
    </div>
  )
}

export default Event