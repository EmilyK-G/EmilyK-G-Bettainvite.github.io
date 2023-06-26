"use client"

import { ThemeProvider } from 'next-themes';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef, useState, useEffect } from 'react';

import Event from './Event';
import EventAttendance from './EventAttendance';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import MyModal from '../../../MyModal';

import Head from 'next/head';
import { eventsList } from '../../../Invites/events';
import Background from './background';
import LandscapeScreen from '../../../LandscapeScreen';

type HomeProps = {
  params: {
    cardId: string
  }
}

export default function Home({ params: {cardId} }: HomeProps) {

  const parallax = useRef<IParallax>(null!);

  const [acceptModalShow, setAcceptModalShow] = useState<boolean>(false);
  const [rejectModalShow, setRejectModalShow] = useState<boolean>(false);

  const [isInvite, setIsInvite] = useState<null|boolean>(null);
  const [eventName, setEventName] = useState<null|string>(null);
 
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(()=>{
    eventsList.map((eve)=>{
      if (cardId === eve.eventId){
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
    <ThemeProvider forcedTheme='band'>

      <div className=' h-screen w-screen hidden landscape:flex'><LandscapeScreen /></div>
      
      <Parallax ref={parallax} pages={4} className='landscape:hidden'>
        <Head>
          <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled'/>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/light_icon_transparent.png" />
        </Head>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            height: '100vh',
            zIndex:'-1'
          }}
        >
            <Background />
          </ParallaxLayer>
        {/* <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundImage:'linear-gradient(to bottom, midnight,rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,0.3), rgba(47,72,88,0.3), rgba(47,72,88,0.4))'}} /> */}
        <ParallaxLayer offset={0.8} factor={0.2} speed={0} className='bg-th-primary-dark opacity-50 landscape:bg-transparent' />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'var(--primary-medium)', opacity:'0.3'}} />
        <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'1'}} />

        <ParallaxLayer
          offset={0.3}
          speed={1} 
          onClick={() => {parallax.current.scrollTo(1)}}
          className='flex justify-center items-center px-20 landscape:px-0'
        >
          <Header />
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
          speed={0.4}
          onClick={() => {parallax.current.scrollTo(2)}}
          className='flex justify-center items-center'
        >
          <Event bettacardId={cardId} eventName={eventName}/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          speed={1}
          onClick={() => {parallax.current.scrollTo(3)}}
        >
          <video className=' h-[36rem] w-96 object-cover my-20 mx-10 rounded-lg' muted autoPlay loop controls onClick={e=>e.stopPropagation()}>
            <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.2}
          speed={2}
          onClick={() => {parallax.current.scrollTo(3)}}
        >
          <video className=' h-[36rem] w-96 object-cover ml-auto mr-10 rounded-lg' muted autoPlay loop controls onClick={e=>e.stopPropagation()}>
            <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.4}
          speed={3}
          onClick={() => {parallax.current.scrollTo(3)}}
        >
          <video className=' h-[36rem] w-96 object-cover my-20 mx-10 rounded-lg' muted autoPlay loop controls onClick={e=>e.stopPropagation()}>
            <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.6}
          speed={4}
          onClick={() => {parallax.current.scrollTo(3)}}
        >
          <video className=' h-[36rem] w-96 object-cover ml-auto mr-10 rounded-lg' muted autoPlay loop controls onClick={e=>e.stopPropagation()}>
            <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          speed={3}
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
