"use client"

import '../styles/globals.css';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';
import '../styles/globals.css';

import Image from 'next/image';
import singleapple from '../public/bettainvite-singleapple.png';
import diamond from '../public/bettainvite-diamond.webp';

import Event from './Event';

import EventDate from './EventDate';
import EventAttendance from './EventAttendance';

import Head from 'next/head';

export default function Home() {

  const [bounce, setBounce] = useState<string | null>('animate-bounce');

  const [pageNum, setPageNum] = useState<number | null>(null);

  const parallax = useRef<IParallax>(null!);

  useEffect(()=>{
    !bounce && setBounce('animate-bounce');
    !pageNum && setBounce(null)
  }, [pageNum])
 
  return (
        <Parallax ref={parallax} pages={4}>
          <Head>
            <title>
              LightVite
            </title>
          </Head>
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
            onClick={() => {parallax.current.scrollTo(1); setPageNum(2)}}
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
              className={`ml-14 mb-0 h-72 w-auto ${bounce}`}
            />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={1}
            speed={0.2}
            onClick={() => {parallax.current.scrollTo(2); setPageNum(3)}}
            className='flex justify-center items-center p-20'
          >
            <Event />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={2}
            speed={0.2}
            onClick={() => {parallax.current.scrollTo(3); setPageNum(null)}}
            className='flex justify-center items-center p-20'
          >
            <EventDate />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={3}
            speed={0.2}
            onClick={() => {parallax.current.scrollTo(0); setPageNum(1)}}
            className='flex justify-center items-center p-20'
          >
            <EventAttendance />
          </ParallaxLayer>
        </Parallax>
  )
}
