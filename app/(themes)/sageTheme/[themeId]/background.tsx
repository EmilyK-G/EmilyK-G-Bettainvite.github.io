import React from 'react';
import Image from 'next/image';
import sageBgr from '../../../../public/backgrounds/sage-bgr.jpg';

const Background = () => {
  return (
    <>
        <Image
            src={sageBgr}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
          <Image
            src={sageBgr}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
          <Image
            src={sageBgr}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
          <Image
            src={sageBgr}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
    </>
  )
}

export default Background