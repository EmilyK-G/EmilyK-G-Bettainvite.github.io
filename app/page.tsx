"use client"

import '../styles/globals.css';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef, useState } from 'react';
import '../styles/globals.css';

import Image from 'next/image';
// import singleapple from '../public/bettainvite-singleapple.png';
import cookingSih from '../public/bettainvite_cooking.png';
import modelSih from '../public/bettainvite_model.png';
import yarn from '../public/bettainvite_yarn.png';
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
              backgroundImage: 'url(/bettainvite_pink_background.jpg)',
              backgroundSize: 'cover',
              zIndex: -1 
            }}
          />
          {/* <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundImage:'linear-gradient(to bottom, rgba(47,72,88,1),rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,0.3), rgba(47,72,88,0.3), rgba(47,72,88,0.4))'}} /> */}
          <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundColor:'#39486A'}} />
          <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: '#FFB895', opacity:'0'}} />
          <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: '#FFB895', opacity:'90%'}} />

          <ParallaxLayer
            offset={0.2}
            speed={1}
            className='flex justify-center items-center px-20'
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
              src={cookingSih}
              alt='sticky icon'
              className='h-80 w-auto'
            />
            <Image
              src={modelSih}
              alt='another sticky icon'
              className='icon-2 h-80 w-auto'
            />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0}
            speed={-1} 
            className='flex justify-start items-end z-10'
            style={{ pointerEvents: 'none' }}
          >
            <Image
              src={yarn}
              priority
              alt='icon moving'
              className={`ml-14 mb-0 h-72 w-auto icon-moving`}
            />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={1}
            speed={0.4}
            onClick={() => {parallax.current.scrollTo(2)}}
            className='flex justify-center items-center'
            style={{
              backgroundImage: 'url(/bettainvite_art.JPG)',
              backgroundSize: 'cover',
              backgroundPosition:'center',
            }}
          >
            <Event />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={2}
            speed={0.4}
            onClick={() => {parallax.current.scrollTo(3)}}
            className='flex justify-center items-center'
            // style={{
            //   backgroundImage: 'url(/bettainvite_woman.jpg)',
            //   backgroundSize: 'cover',
            //   backgroundPosition:'center',
            // }}
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

          <ParallaxLayer
            offset={0}
            factor={4}
            speed={0}
            className='flex flex-col justify-evenly items-center p-20 pointer-events-none'
          >
            <Image
              src={icon}
              alt='icon separator'
              className=' h-32 w-auto z-20'
            />
            <Image
              src={icon}
              alt='icon separator'
              className=' h-32 w-auto z-20'
            />
            <Image
              src={icon}
              alt='icon separator'
              className=' h-32 w-auto z-20'
            />
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
