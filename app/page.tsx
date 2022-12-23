"use client"

import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import '../styles/globals.css';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef, useState, useEffect } from 'react';
import '../styles/globals.css';

import Image from 'next/image';
import icon from '../public/light_icon_transparent.png';

import Event from './Event';
import EventDate from './EventDate';
import EventAttendance from './EventAttendance';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import MyModal from './MyModal';

import Head from 'next/head';
import Themes from './Themes';


export default function Home() {

  const parallax = useRef<IParallax>(null!);

  const [acceptModalShow, setAcceptModalShow] = useState<boolean>(false);
  const [rejectModalShow, setRejectModalShow] = useState<boolean>(false);
 
  const [mounted, setMounted] = useState<boolean>(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null

  return (
    <ThemeProvider>
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
            backgroundImage: `var(--background-image)`,
            backgroundSize: 'cover',
            zIndex: -1 
          }}
          
        />
        {/* <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundImage:'linear-gradient(to bottom, rgba(47,72,88,1),rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,0.3), rgba(47,72,88,0.3), rgba(47,72,88,0.4))'}} /> */}
        <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundColor:'var(--primary-medium)', opacity:'1'}} />
        <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'0'}} />
        <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'90%'}} />

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
          <div
            style={{
              backgroundImage: 'var(--static-1)',
              backgroundSize: 'cover'
            }}
            className='h-80 w-80'
          >
          </div>

          <div
            style={{
              backgroundImage: 'var(--static-1)',
              backgroundSize: 'cover'
            }}
            className='icon-2 h-80 w-80'
          ></div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0}
          speed={-1} 
          className='flex justify-start items-end z-10'
          style={{ pointerEvents: 'none' }}
        >
          <div
            style={{
              backgroundImage: 'var(--static-1)',
              backgroundSize: 'cover'
            }}
            className='ml-14 mb-0 h-80 w-80'
            onLoadedData={()=>console.log('loading image')}
          ></div>
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
          className='flex flex-col justify-center items-center p-20'
        >
          <EventAttendance openRejectModal={()=>setRejectModalShow(true)} openAcceptModal={()=>setAcceptModalShow(true)}/>
          <Themes/>
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
    </ThemeProvider>
  )
}
