"use client"

import '../styles/globals.css';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef, useState } from 'react';
import '../styles/globals.css';

import Image from 'next/image';
import singleapple from '../public/bettainvite-singleapple.png';
import icon from '../public/light_icon_transparent.png';

import Event from './Event';
import EventDate from './EventDate';
import EventAttendance from './EventAttendance';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import MyModal from './MyModal';

import Head from 'next/head';

export default function Home() {

  const parallax = useRef<IParallax>(null!);

  const [acceptModalShow, setAcceptModalShow] = useState<boolean>(false);
  const [rejectModalShow, setRejectModalShow] = useState<boolean>(false);
 
  return (
        <Parallax ref={parallax} pages={4}>
          <Head>
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/light_icon_transparent.png" />
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
          <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: '#2F4858' }} />

          <ParallaxLayer
            offset={0}
            factor={4}
            speed={0}
            className='flex flex-col justify-evenly items-center p-20'
          >
            <Image
              src={icon}
              alt='icon separator'
              className=' h-32 w-auto'
            />
            <Image
              src={icon}
              alt='icon separator'
              className=' h-32 w-auto'
            />
            <Image
              src={icon}
              alt='icon separator'
              className=' h-32 w-auto'
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
            onClick={() => {parallax.current.scrollTo(1)}}
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
              priority
              alt='apple moving'
              className={`ml-14 mb-0 h-72 w-auto`}
            />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={1}
            speed={0.4}
            onClick={() => {parallax.current.scrollTo(2)}}
            className='flex justify-center items-center p-20'
          >
            <Event />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={2}
            speed={0.4}
            onClick={() => {parallax.current.scrollTo(3)}}
            className='flex justify-center items-center p-20'
          >
            <EventDate />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={3}
            speed={0.4}
            onClick={() => {parallax.current.scrollTo(0)}}
            className='flex justify-center items-center p-20'
          >
            <EventAttendance openRejectModal={()=>setRejectModalShow(true)} openAcceptModal={()=>setAcceptModalShow(true)}/>
          </ParallaxLayer>

          
          {acceptModalShow || rejectModalShow 
          ? <ParallaxLayer 
            sticky={{ start: 1, end: 3 }}
            speed={0}
            className='flex justify-start items-end'
          >
            {acceptModalShow
            && <MyModal
                onClose={() => setAcceptModalShow(false)}>
                    <AcceptModal />
            </MyModal>}
            {rejectModalShow 
            && <MyModal
                onClose={() => setRejectModalShow(false)}>
                    <RejectModal />
            </MyModal>}
          </ParallaxLayer>
          : <></>}

        </Parallax>
  )
}
