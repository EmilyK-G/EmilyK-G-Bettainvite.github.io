import React from 'react';

function EventDate() {
  return (
    <div className='h-full w-full bg-th-primary-dark bg-opacity-40 px-20 flex justify-center items-end'>
      <div className='flex flex-col items-center justify-evenly laptop:justify-center text-darkchocolate p-20 bg-th-primary-light h-full bg-opacity-95 text-center'>
        <h1 className='text-8xl landscape:text-4xl m-10'>Date & Time</h1>
        <div>
          <p className='landscape:flex-1 text-8xl landscape:text-5xl m-10 landscape:m-5 leading-snug'>Saturday, April 15th 2023</p>
          <p className='text-5xl landscape:text-xl landscape:mb-5 font-mono landscape:font-sans'><span className='text-6xl landscape:text-4xl'>3:00PM</span></p>
        </div>
        <p className="text-5xl landscape:text-3xl font-mono font-thin">Central Park, New York</p>
      </div>
    </div>
  )
}

export default EventDate