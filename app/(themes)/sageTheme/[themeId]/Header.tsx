import React from 'react';

const Header = () => {
  return (
    <div className='flex landscape:w-full p-10 landscape:px-0 rounded-xl landscape:rounded-none bg-transparent h-1/5 justify-between items-center flex-col mix-blend-multiply hover:mix-blend-overlay landscape:border-y-2 landscape:border-whitesmoke'>
        <p className='text-9xl landscape:text-6xl text-th-accent-dark landscape:text-th-accent-dark'>The Title</p>
        <p className='text-6xl landscape:text-5xl text-th-accent-light landscape:text-th-accent-dark'>- the brief explanation -</p>
    </div>
  )
}

export default Header