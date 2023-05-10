"use client"

import React from 'react';
import Image from 'next/image';
import icon from '../../../../../public/light_icon_transparent.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const About = () => {

  const router = useRouter();

  return (
    <div className='m-20 flex flex-col content-between items-center h-screen'>
        <div className='text-th-accent-light p-5 landscape:pb-0 flex-1 flex flex-col items-center justify-evenly'>
            <div>
              <p className='text-9xl landscape:text-5xl font-thin'>Es una sorpresa para Issa !!</p>
              <hr className='mb-14 mt-24'/>
            </div>
            <div className='font-mono font-thin indent-2 leading-relaxed opacity-70 text-5xl landscape:text-3xl'>
              <p>Como cada año, <span className='text-6xl font-semibold'>Issauris</span> visitará a su familia en la República Dominicana. Sin embargo,
              esta vez se quedará cuatro meses, así que decidimos hacerle algo pequeño y especial con sus amigos cercanos. Nos encantaría que vinieras!</p>
              <p>Cualquier pregunta, puede contactar al +516-725-7543, o escribir al correo <span className=' font-light'>emilikimberly1@gmail.com</span></p>
            </div>
        </div>
    
        <Image 
            src={icon}
            alt='icon separator'
            className='h-20 w-20 landscape:hidden'
        />

        <button 
          onClick={()=> router.back()}
          className="text-4xl landscape:text-3xl mt-20 landscape:mt-0 pb-10 font-mono font-bold text-yellow landscape:self-end">
          {`...volver`}
        </button>
        
    </div>
  )
}

export default About