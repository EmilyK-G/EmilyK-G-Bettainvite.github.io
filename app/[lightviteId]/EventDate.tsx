import React from 'react';

function EventDate() {
  return (
    <div className='h-full w-full bg-th-primary-dark bg-opacity-40 px-20 flex justify-center items-end'>
      <div className='flex flex-col items-center justify-evenly tablet:justify-center text-darkchocolate p-20 bg-th-primary-light h-full bg-opacity-95 text-center'>
        <h1 className='text-9xl m-10'>Date & Time</h1>
        <div>
          <p className='text-8xl m-10 leading-snug'>Saturday, April 15th 2023</p>
          <p className='text-5xl m-30 font-mono'><span className='text-6xl'>3:00PM</span></p>
        </div>
        <p className="text-5xl font-mono font-thin">Central Park, New York</p>
      </div>
    </div>
  )
}

export default EventDate