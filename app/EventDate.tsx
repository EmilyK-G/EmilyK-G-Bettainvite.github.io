import React from 'react';

function EventDate() {
  return (
    <div className='h-full w-full bg-salmon bg-opacity-40 px-20 flex justify-center items-end'>
      <div className='flex flex-col items-center justify-evenly text-darkchocolate p-20 bg-salmon h-full bg-opacity-90 text-center'>
        <h1 className='text-9xl m-10'>Lugar y Fecha:</h1>
        <div>
          <p className='text-8xl m-10 leading-snug'>Domingo 18 de Diciembre</p>
          <p className='text-5xl m-30 font-mono'>desde la <span className='text-6xl'>01:00PM</span></p>
        </div>
        <p className="text-5xl font-mono font-thin">Lorenzo de Garycoa y Venezuela</p>
      </div>
    </div>
  )
}

export default EventDate