import React from 'react';
import Image from 'next/image';
import icon from '../../public/light_icon_transparent.png';
import Link from 'next/link';

const About = () => {
  return (
    <div className='text-5xl m-10 flex flex-col content-between items-center'>
        <div className='text-whitesmoke bg-midnight p-20'>
            <p className='text-9xl font-thin m-10'>About...</p>
            <hr className='mb-10'/>
            <p className='font-mono m-10 font-thin opacity-70'>A <span className='text-6xl'>Foodshare</span> party 
                is a time to enjoy life and relax with food and frineds. 
                Each guest brings a special dish and share 
                it with everyone.</p>
        </div>
    
        <Image
            src={icon}
            alt='icon separator'
            className='h-20 w-20 m-32'
        />

        <p className='font-mono m-10 text-darkchocolate'>Expect between 10-15 guests</p>

        <Link 
          href="/"
          className="text-3xl mt-20 font-mono font-bold text-success">
          Back to invite
        </Link>
        
    </div>
  )
}

export default About