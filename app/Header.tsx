import React from 'react';
import '../styles/globals.css';
import Image from 'next/image';
import hborder from '../public/bettainvite-border.png';
import '../styles/globals.css';

const Header = () => {
  return (
    <div className='p-20 text-darkchocolate rounded-xl bg-th-accent-light bg-opacity-80 h-96 flex justify-center items-center flex-col mix-blend-multiply hover:mix-blend-overlay'>
        <p className='text-7xl'>You are invited</p>
        <Image
          src={hborder} 
          alt='border'
          className='absolute borderPosition w-96'
        />
    </div>
  )
}

export default Header