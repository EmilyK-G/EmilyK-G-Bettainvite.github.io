import React from 'react';
import Image from 'next/image';
import bgr from '../../../../public/backgrounds/neon-guitar-portrait-bgr.png';

const Background = () => {
  return (
    <>
        <Image
            src={bgr}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
          <Image
            src={bgr}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
          <Image
            src={bgr}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
          <Image
            src={bgr}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
    </>
  )
}

export default Background