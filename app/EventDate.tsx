import React from 'react'

function EventDate() {
  return (
    <div className='flex flex-col items-center justify-evenly text-whitesmoke p-10'>
        <p className='text-7xl m-10'>Saturday, October 15th</p>
        <p className='text-5xl m-10 mb-20'>at <span className='text-6xl'>4:00PM</span></p>
        <p className="text-6xl font-bold mt-10">144 Crowell St.</p>
        <p className="text-5xl font-bold m-5">Hempstead, NY 11550</p>
    </div>
  )
}

export default EventDate