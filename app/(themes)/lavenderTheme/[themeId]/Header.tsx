import React from 'react';

const Header = () => {
  return (
    <div className='flex landscape:w-full p-20 landscape:px-0 rounded-xl landscape:rounded-none bg-transparent h-1/5 justify-between items-center flex-col mix-blend-multiply hover:mix-blend-overlay landscape:border-y-2 landscape:border-whitesmoke'>
        <p className='text-8xl landscape:text-6xl text-th-primary-light landscape:text-th-accent-light'>The Title</p>
        <p className='text-6xl landscape:text-5xl text-th-primary-light landscape:text-th-accent-light'>- the brief explanation -</p>
    </div>
  )
}

export default Header