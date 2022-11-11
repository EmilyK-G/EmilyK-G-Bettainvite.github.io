"use client"

import '../styles/globals.css';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef } from 'react';
import '../styles/globals.css';
import './layout.css';

import Image from 'next/image';
import singleapple from '../public/bettainvite-singleapple.png';

import { Dancing_Script } from '@next/font/google';

const dancingScript = Dancing_Script();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const parallax = useRef<IParallax>(null!); 
  return (
    <html lang="en" className={dancingScript.className}>
      <body>
        <Parallax ref={parallax} pages={4}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={4}
            style={{
              backgroundImage: 'url(/bettainvite-leaves.jpg)',
              backgroundSize: 'cover',
              zIndex: -1 
            }}
          />
          <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundColor: '#2F4858' }} />
          <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: '#983711' }} />
          <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: '#982A40' }} />

          <ParallaxLayer
            offset={0.2}
            speed={1}
            className='flex justify-center items-center'
          >
            <Header font={dancingScript.className}/>
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0}
            speed={0.2}
            onClick={() => parallax.current.scrollTo(1)}
            className='flex justify-start items-end'
          >
            <Image
              src={singleapple}
              alt='sticky apple'
            />
            <Image
              src={singleapple}
              alt='another sticky apple'
              className='apple-2'
            />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0}
            speed={-1} 
            className='flex justify-start items-end z-10'
            style={{ pointerEvents: 'none' }}
          >
            <Image
              src={singleapple}
              alt='apple moving'
              className='ml-20 mb-0'
            />
          </ParallaxLayer>
          
          {children}
        </Parallax>
      </body>
    </html>
  )
}
