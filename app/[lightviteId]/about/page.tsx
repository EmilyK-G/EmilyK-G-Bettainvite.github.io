"use client"

import React from 'react';
import Image from 'next/image';
import icon from '../../../public/light_icon_transparent.png';
import Link from 'next/link';

const About = () => {
  return (
    <div className='text-5xl m-20 mt-0 flex flex-col content-between items-center h-screen'>
        <div className='text-darkchocolate p-20 flex-1 flex flex-col items-center justify-evenly'>
            <div>
              <p className='text-9xl font-thin'>Please bring...</p>
              <hr className='mb-5'/>
            </div>
            <p className='font-mono font-thin opacity-70'>For the <span className='text-6xl'>Fashion Show</span> you will need to bring
            your wedding attire. If you have more than one, feel free to bring them all.</p>

            {/* <p className='font-mono m-10 opacity-70'>{`Expect <=20 guests`}</p> */}
        </div>

        {/* <p className='m-10 opacity-70 text-7xl text-center'>{`Sígueme en instagram ->`} <a className='text-th-primary-medium decoration-1 decoration-solid m-10' href="https://instagram.com/monymar18?igshid=MDM4ZDc5MmU=">monymar18</a> </p> */}
    
        <Image 
            src={icon}
            alt='icon separator'
            className='h-20 w-20'
        />

        <Link 
          href="/[lightviteId]"
          className="text-4xl mt-20 font-mono font-bold text-success">
          Back to the invitation
        </Link>
        
    </div>
  )
}

export default About