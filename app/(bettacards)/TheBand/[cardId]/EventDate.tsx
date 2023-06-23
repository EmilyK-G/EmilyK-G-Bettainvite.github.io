import React from 'react';

function EventDate() {
  return (
    <div className='h-screen w-screen flex justify-center items-end'>
      <video className=' h-full w-full object-contain' autoPlay loop muted>
        <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}

export default EventDate