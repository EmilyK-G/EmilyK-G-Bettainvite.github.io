import React from 'react'

const LandscapeScreen = () => {
  return (
    <div className='bg-th-primary-dark h-full w-full flex flex-row flex-wrap justify-evenly items-center'>
        <div
            style={{
              backgroundImage: 'var(--static-1)',
              backgroundSize: 'cover',
              backgroundPosition:'center'
            }}
            className='mb-10 landscape:mb-[-0.8rem] h-20 w-20 animate-bounce'
            onLoadedData={()=>console.log('loading image')}
            ></div>
        <p className=' text-th-accent-light text-6xl'>Please rotate your phone</p>
    </div>
  )
}

export default LandscapeScreen