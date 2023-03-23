"use client"

import React from 'react';
import Image from 'next/image';
import icon from '../../../../../public/light_icon_transparent.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const About = () => {

  const router = useRouter();

  return (
    <div className='m-20 mt-0 flex flex-col content-between items-center h-screen'>
        <div className='text-th-accent-light p-20 landscape:pb-0 flex-1 flex flex-col items-center justify-evenly'>
            <div>
              <p className='text-9xl landscape:text-5xl font-thin'>"Cada uno de ellos será como un refugio contra el viento,
                un refugio contra la tormenta de lluvia <span className='text-6xl'>-Isaías 32:1-20"</span></p>
              <hr className='mt-5 mb-10'/>
            </div>
            <div className='font-mono font-thin opacity-70 text-5xl landscape:text-3xl'>Nuestros queridos<span className='text-4xl'>ancianos</span>
            nos cuidan y nos enseñan con el ejemplo:
            <ul>
              <li>Fortalecen su amistad con Jehová y ayudan a su familia a que haga lo mismo.</li>
              <li>Se preocupan por todos los que forman parte de la congregación.</li>
              <li>Predican con frecuencia.</li>
              <li>Son maestros. También ayudan en la limpieza y en otras tareas.</li>
            </ul>
            <small className='text-lg opacity-50'>
              <Link href={'https://www.jw.org/es/biblioteca/libros/disfrute-vida-para-siempre/seccion-2/leccion-20/'}>Referencia</Link>
            </small>
            </div>
        </div>
    
        <Image 
            src={icon}
            alt='icon separator'
            className='h-20 w-20 landscape:hidden'
        />

        <button 
          onClick={()=> router.back()}
          className="text-4xl landscape:text-3xl mt-20 landscape:mt-0 pb-10 font-mono font-bold text-success landscape:self-end">
          {`...volver`}
        </button>
        
    </div>
  )
}

export default About