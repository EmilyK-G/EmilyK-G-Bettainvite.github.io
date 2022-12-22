import React from 'react';

function EventDate() {
  return (
    <div className='h-full w-full bg-th-primary-dark bg-opacity-40 px-20 flex justify-center items-end'>
      <div className='flex flex-col items-center justify-evenly text-darkchocolate p-20 bg-th-primary-light h-full bg-opacity-95 text-center'>
        <h1 className='text-9xl m-10'>Lugar y Fecha:</h1>
        <div>
          <p className='text-8xl m-10 leading-snug'>Domingo 18 de Diciembre</p>
          <p className='text-5xl m-30 font-mono'>de <span className='text-6xl'>10:00AM</span> a <span className='text-6xl'>05:00PM</span></p>
        </div>
        <p className="text-5xl font-mono font-thin">Lorenzo de Garaycoa y Venezuela</p>
      </div>
    </div>
  )
}

export default EventDate