"use client"

import React from 'react';
import Image from 'next/image';
import icon from '../../../public/light_icon_transparent.png';
import Link from 'next/link';

type AboutProps = {
  params: {
    lightviteId: string
  }
}

const About = ({params: {lightviteId}}:AboutProps) => {
  return (
    <div className='text-5xl m-20 mt-0 flex flex-col content-between items-center h-screen'>
        <div className='text-th-accent-light p-20 flex-1 flex flex-col items-center justify-evenly'>
            <div>
              <p className='text-9xl font-thin'>Peak Bloom is officially predicted for March 22 - 25, 2023!</p>
              <hr className='mt-5 mb-10'/>
            </div>
            <p className='font-mono font-thin opacity-70'><span className='text-6xl'>Peak Bloom</span> is when 70% of the blossoms open on the Yoshino cherry trees 
            around the Tidal Basin in Washington, DC. This highly anticipated date is predicted by the 
            National Park Service at our press conference. <span className='text-6xl'>Peak Bloom</span> is officially predicted to be between March 22 – 25, 2023! 
            </p>

            {/* <p className='font-mono m-10 opacity-70'>{`Expect <=20 guests`}</p> */}
        </div>

        {/* <p className='m-10 opacity-70 text-7xl text-center'>{`Sígueme en instagram ->`} <a className='text-th-primary-medium decoration-1 decoration-solid m-10' href="https://instagram.com/monymar18?igshid=MDM4ZDc5MmU=">monymar18</a> </p> */}
    
        <Image 
            src={icon}
            alt='icon separator'
            className='h-20 w-20'
        />

        <Link 
          href={"/" + lightviteId}
          className="text-4xl mt-20 pb-10 font-mono font-bold text-success">
          {`<- Go Back`}
        </Link>
        
    </div>
  )
}

export default About