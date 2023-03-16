import React from 'react';
import Image from 'next/image';
import hborder from '../../public/bettainvite-border.png';

const Header = () => {
  return (
    <div className='laptop:w-full p-20 laptop:px-0 rounded-xl laptop:rounded-none bg-th-accent-light laptop:bg-th-primary-medium h-96 tablet:h-40 flex justify-center items-center flex-col mix-blend-multiply hover:mix-blend-overlay laptop:border-y-2 laptop:border-whitesmoke'>
        <p className='text-7xl laptop:text-6xl text-darkchocolate laptop:text-th-accent-light'>You are invited</p>
        <Image
          src={hborder} 
          alt='border'
          className='absolute top-2/4 w-96 tablet:w-52'
        />
    </div>
  )
}

export default Header