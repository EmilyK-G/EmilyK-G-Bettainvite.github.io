import React from 'react';

interface headerProps {
  lightMode: null|boolean
}

const Header = ({lightMode}:headerProps) => {
  return (
    <div className='flex p-20 rounded-xl bg-transparent h-1/5 justify-between items-center flex-col mix-blend-multiply hover:mix-blend-overlay'>
        <p className={'text-9xl' + (lightMode ?' text-th-accent-dark':' text-th-primary-light')}>The Band</p>
        <p className={'text-7xl' + (lightMode ?' text-th-accent-dark':' text-th-primary-light')}>- music band -</p>
    </div>
  )
}

export default Header