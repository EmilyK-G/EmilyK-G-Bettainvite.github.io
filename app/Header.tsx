import React from 'react';
import '../styles/globals.css';
import Image from 'next/image';
import hborder from '../public/bettainvite-border.png';
import '../styles/globals.css';

const Header = () => {
  return (
    <header className='p-5 bg-whitesmoke w-2/4 h-96 flex justify-end items-center flex-col'>
        <p className='text-6xl mbTitle'>You are invited</p>
        <Image
          src={hborder} 
          alt='header border'
        />
    </header>
  )
}

export default Header