import React from 'react';
import Image from 'next/image';
import hborder from '../../../../public/bettainvite-border.png';

const Header = () => {
  return (
    <div className='landscape:w-full p-20 landscape:px-0 rounded-xl landscape:rounded-none bg-th-accent-light landscape:bg-th-primary-medium h-96 tablet:h-40 flex justify-center items-center flex-col mix-blend-multiply hover:mix-blend-overlay landscape:border-y-2 landscape:border-whitesmoke'>
        <p className='text-7xl landscape:text-6xl text-darkchocolate landscape:text-th-accent-light'>You are invited</p>
        <Image
          src={hborder} 
          alt='border'
          className='absolute top-2/4 w-96 tablet:w-52'
        />
    </div>
  )
}

export default Header