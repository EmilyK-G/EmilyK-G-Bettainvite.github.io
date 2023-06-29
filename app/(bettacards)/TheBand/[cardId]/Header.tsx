import React from 'react';
import Image from 'next/image';
import hborder from '../../../../public/bettainvite-border.png';

const Header = () => {
  return (
    <div className='flex landscape:w-full p-20 landscape:px-0 rounded-xl landscape:rounded-none bg-transparent h-1/5 justify-between items-center flex-col mix-blend-multiply hover:mix-blend-overlay landscape:border-y-2 landscape:border-whitesmoke'>
        <p className='text-9xl landscape:text-6xl text-th-primary-light landscape:text-th-accent-light'>The Band</p>
        <p className='text-7xl landscape:text-5xl text-th-primary-light landscape:text-th-accent-light'>- music band -</p>
    </div>
  )
}

export default Header