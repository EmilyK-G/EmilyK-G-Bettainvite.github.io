import React from 'react';

interface headerProps {
  lightMode: boolean
}

const Header = ({lightMode}:headerProps) => {
  return (
    <div className='flex landscape:w-full p-20 landscape:px-0 rounded-xl landscape:rounded-none bg-transparent h-1/5 justify-between items-center flex-col mix-blend-multiply hover:mix-blend-overlay landscape:border-y-2 landscape:border-whitesmoke'>
        <p className={'text-9xl' + (lightMode ?' text-th-accent-dark':' text-th-primary-light')}>The Band</p>
        <p className='text-7xl landscape:text-5xl text-th-primary-light'>- music band -</p>
    </div>
  )
}

export default Header