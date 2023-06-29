"use client"

import { ThemeProvider } from 'next-themes';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import Event from './Event';
import EventAttendance from './EventAttendance';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import MyModal from '../../../MyModal';

import { eventsList } from '../../../Invites/events';
import LandscapeScreen from '../../../LandscapeScreen';
import stageLight from '../../../../public/ilumination/stage-light.png';

import bgrDark from '../../../../public/backgrounds/band-bgr.png';

import bgrLight from '../../../../public/backgrounds/band-light.png';

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
  const [lightMode, setLightMode] = useState<null|boolean>(null);
 
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
    <ThemeProvider forcedTheme={lightMode ? 'band-light' : 'band'}>

      <div className=' h-screen w-screen hidden landscape:flex'><LandscapeScreen /></div>
    
      <Parallax ref={parallax} pages={4} className='landscape:hidden'>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            height: '100vh',
            zIndex:'-1'
          }}
        >
          <Image
            src={lightMode ? bgrLight : bgrDark}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
          <Image
            src={lightMode ? bgrLight : bgrDark}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
          <Image
            src={lightMode ? bgrLight : bgrDark}
            alt='background image'
            sizes='full'
            className='bg-contain bg-repeat -z-0'
          />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundImage:'linear-gradient(to bottom, midnight,rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,0.3), rgba(47,72,88,0.3), rgba(47,72,88,0.4))'}} /> */}
        {/* <ParallaxLayer offset={0.8} factor={0.2} speed={0} className='bg-th-primary-dark' /> */}
        <ParallaxLayer offset={1} factor={3} speed={1} style={{ backgroundColor: 'var(--primary-medium)', opacity:'0.4'}} />
        <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'1'}} />

        <ParallaxLayer
          offset={0.3}
          speed={1} 
          onClick={() => {parallax.current.scrollTo(1)}}
          className='flex justify-center items-center px-20 landscape:px-0'
        >
          <Header lightMode={lightMode}/>
        </ParallaxLayer>

        {/* <ParallaxLayer 
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
        </ParallaxLayer> */}

        <ParallaxLayer 
          offset={1}
          speed={0.4}
          onClick={() => {parallax.current.scrollTo(2)}}
          className='flex justify-center items-center'
        >
          <Event bettacardId={cardId} eventName={eventName} lightMode={lightMode}/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          speed={1}
          className={'pointer-events-none'}
        >
          <video className=' pointer-events-auto h-[36rem] w-96 object-cover my-20 mx-10 rounded-lg hover:border-x-2 border-blue' muted autoPlay loop controls>
            <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.2}
          speed={1.5}
          className={'pointer-events-none'}
        >
          <video className=' pointer-events-auto h-[36rem] w-96 object-cover ml-auto mr-10 rounded-lg hover:border-x-2 border-blue' muted autoPlay loop controls>
            <source src='/media/MissaPianoVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.4}
          speed={2}
          className={'pointer-events-none'}
        >
          <video className=' pointer-events-auto h-[36rem] w-96 object-cover my-20 mx-10 rounded-lg hover:border-x-2 border-blue' muted autoPlay loop controls>
            <source src='/media/LissVoiceVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.6}
          speed={2.5}
          className={'pointer-events-none'}
        >
          {/* <div className=' h-[36rem] w-96 object-cover ml-auto mr-10 rounded-lg bg-lightcyan bg-opacity-10 absolute left-[56%] hover:hidden'></div> */}
          <video className=' pointer-events-auto h-[36rem] w-96 object-cover ml-auto mr-10 rounded-lg hover:border-x-2 border-blue' muted autoPlay loop controls>
            <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2.9}
          speed={0}
          factor={0.1}
          className='flex justify-center items-end z-10 pointer-events-none'
        >
          <div 
            className='mb-10 landscape:mb-[-0.8rem] h-20 w-20 pointer-events-auto'
            onClick={() => {parallax.current.scrollTo(3)}}></div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          speed={3}
          onClick={() => {parallax.current.scrollTo(0)}}
          className='flex flex-col justify-center items-center p-20'
        >
          <EventAttendance lightMode={lightMode} openAcceptModal={()=>setAcceptModalShow(true)}/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-1}
          className='pointer-events-none'>
            <Image
              src={stageLight}
              alt='ilumination'
              className={'bg-contain absolute top-1 right-1 pointer-events-auto h-60 w-60 animate-pulse'}
              onClick={(e)=>{e.stopPropagation(); setLightMode(null ? true : !lightMode)}} />
        </ParallaxLayer>
        
        {acceptModalShow ? 
          <ParallaxLayer 
          sticky={{ start: 0, end: 3 }}
          speed={0}
          className='flex justify-start items-end'
        >
          {<MyModal
              onClose={() => setAcceptModalShow(false)}>
                  <AcceptModal />
          </MyModal>}
        </ParallaxLayer>
        : <></>}

      </Parallax>
    </ThemeProvider>
  )
}
