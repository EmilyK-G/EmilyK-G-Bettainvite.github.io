"use client"

import { ThemeProvider } from 'next-themes';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
import icon from '../../../../public/light_icon_transparent.png';
import applePicking from '../../../../public/apple-picking.png';

import Event from './Event';
import EventDate from './EventDate';
import EventAttendance from './EventAttendance';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import MyModal from '../../../MyModal';
import LandscapeScreen from '../../../LandscapeScreen';

import Head from 'next/head';
import { eventsList } from '../../../Invites/events';

type HomeProps = {
  params: {
    themeId: string
  }
}

export default function Home({ params: {themeId} }: HomeProps) {

  const parallax = useRef<IParallax>(null!);

  const [acceptModalShow, setAcceptModalShow] = useState<boolean>(false);
  const [rejectModalShow, setRejectModalShow] = useState<boolean>(false);

  const [isInvite, setIsInvite] = useState<null|boolean>(null);
  const [eventName, setEventName] = useState<null|string>(null);
 
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(()=>{
    eventsList.map((eve)=>{
      if (themeId === eve.eventId){
        console.log(eve.theme)
        setIsInvite(true);
        setEventName(eve.name);
        return 
      }
    })
  },[])

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null
  if (!isInvite) return (
    <div className="flex flex-col justify-center items-center text-3xl h-screen">
      <p>{`Oops, esta no es la invitación :)`}</p>
      <p className='text-3xl'>Si reciviste un enlace úsalo o chequea la dirección web</p>
    </div>
  )

  return (
    <ThemeProvider forcedTheme='fall'>
      <div className=' h-screen w-screen hidden landscape:flex  overflow-hidden'><LandscapeScreen /></div>
      <Parallax ref={parallax} pages={4}>
        <Head>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/light_icon_transparent.png" />
        </Head>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4.5}
          style={{
            backgroundImage: `var(--background-image)`,
            backgroundSize: 'contain',
            backgroundRepeat:'repeat',
            zIndex: -1 
          }}
          
        />
        {/* <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundImage:'linear-gradient(to bottom, midnight,rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,0.3), rgba(47,72,88,0.3), rgba(47,72,88,0.4))'}} /> */}
        <ParallaxLayer offset={0.9} factor={6} speed={2} style={{ backgroundColor: 'var(--accent-dark)', opacity:'0.6'}}/>
        <ParallaxLayer offset={0.8} factor={0.2} speed={0} className='bg-th-primary-dark opacity-100' />
        <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'0'}} />
        <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'1'}} />

        <ParallaxLayer
          offset={0}
          speed={1}
          className='flex flex-col justify-end items-center px-20 text-9xl'
        >
          <Image
            src={applePicking}
            alt='Apple Picking Logo'
            className='h-[500px] w-auto mb-52 landscape:mb-10'
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          onClick={() => {parallax.current.scrollTo(1)}}
          className='flex justify-center items-end pb-48'
        >
          <p className='text-7xl text-th-primary-light landscape:hidden'>- a friends hangout -</p>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0}
          speed={-1}
          className='flex justify-center items-end z-10'
          style={{ pointerEvents: 'none' }}
        >
          <div
            style={{
              backgroundImage: 'var(--static-1)',
              backgroundSize: 'cover',
              backgroundPosition:'center'
            }}
            className='mb-10 landscape:mb-[-0.8rem] h-20 w-20'
            onLoadedData={()=>console.log('loading image')}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1}
          speed={1}
          onClick={() => {parallax.current.scrollTo(2)}}
          className='flex justify-center items-center'
        >
          <Event themeId={themeId} eventName={eventName}/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          speed={0.4}
          onClick={() => {parallax.current.scrollTo(3)}}
          className='flex justify-center items-center'
        >
          <EventDate />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          speed={0.4}
          onClick={() => {parallax.current.scrollTo(0)}}
          className='flex flex-col landscape:flex-row justify-center items-center p-20'
        >
          <EventAttendance openRejectModal={()=>setRejectModalShow(true)} openAcceptModal={()=>setAcceptModalShow(true)}/>
        </ParallaxLayer>
        
        {acceptModalShow || rejectModalShow 
        ? <ParallaxLayer 
          sticky={{ start: 0, end: 3 }}
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
