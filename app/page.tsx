"use client"

import '../styles/globals.css';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef } from 'react';
import '../styles/globals.css';

import Image from 'next/image';
import singleapple from '../public/bettainvite-singleapple.png';
import diamond from '../public/bettainvite-diamond.webp';

import Event from './Event';

import EventDate from './EventDate';
import EventAttendance from './EventAttendance';


export default function Home() {

  const parallax = useRef<IParallax>(null!); 
  return (
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
            offset={0}
            factor={4}
            speed={0}
            className='flex flex-col justify-evenly items-center p-20'
          >
            <Image
              src={diamond}
              alt='diamond separator'
              className='h-40 w-auto opacity-50'
            />
            <Image
              src={diamond}
              alt='diamond separator'
              className='h-40 w-auto opacity-50'
            />
            <Image
              src={diamond}
              alt='diamond separator'
              className='h-40 w-auto opacity-50'
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.2}
            speed={1}
            className='flex justify-center items-center'
          >
            <Header />
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
              className='apple-2 h-64 w-auto'
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
              className='ml-14 mb-0 h-72 w-auto'
            />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={1}
            speed={0.2}
            onClick={() => parallax.current.scrollTo(2)}
            className='flex justify-center items-center p-20'
          >
            <Event />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={2}
            speed={0.2}
            onClick={() => parallax.current.scrollTo(3)}
            className='flex justify-center items-center p-20'
          >
            <EventDate />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={3}
            speed={0.2}
            onClick={() => parallax.current.scrollTo(0)}
            className='flex justify-center items-center p-20'
          >
            <EventAttendance />
          </ParallaxLayer>
        </Parallax>
  )
}
