import React from 'react';
import '../styles/globals.css';
import Image from 'next/image';
import hborder from '../public/bettainvite-border.png';
import '../styles/globals.css';

const Header = () => {
  return (
    <div className='p-20 text-darkchocolate rounded bg-whitesmoke bg-opacity-95 h-96 flex justify-center items-center flex-col'>
        <p className='text-8xl'>You are invited</p>
        <Image
          src={hborder} 
          alt='border'
          className='absolute borderPosition w-96'
        />
    </div>
  )
}

export default Header