import React from 'react';

function EventDate() {
  return (
    <div className='h-full w-full bg-brick bg-opacity-40 px-20 flex justify-center items-end'>
      <div className='flex flex-col items-center justify-evenly text-whitesmoke p-20 bg-brick h-full bg-opacity-95 text-center'>
        <h1 className='text-9xl m-10'>Date:</h1>
        <div>
          <p className='text-8xl m-10 leading-snug'>Saturday, October 15th</p>
          <p className='text-5xl m-30 font-mono'>at <span className='text-6xl'>4:00PM</span></p>
        </div>
        <p className="text-5xl font-mono font-thin">144 Crowell St. Hempstead, NY 11550</p>
      </div>
    </div>
  )
}

export default EventDate