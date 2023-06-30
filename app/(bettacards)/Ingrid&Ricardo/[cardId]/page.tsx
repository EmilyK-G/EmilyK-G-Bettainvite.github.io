"use client"

import { ThemeProvider } from 'next-themes';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import Event from './Event';
import EventAttendance from './EventAttendance';
import AcceptModal from './AcceptModal';
import MyModal from '../../../MyModal';

import { eventsList } from '../../../Invites/events';
import LandscapeScreen from '../../../LandscapeScreen';
import stageLight from '../../../../public/ilumination/stage-light.png';
import pingImg from '../../../../public/icons/press-icon.png';


type HomeProps = {
  params: {
    cardId: string
  }
}

export default function Home({ params: {cardId} }: HomeProps) {

  const parallax = useRef<IParallax>(null!);

  const [acceptModalShow, setAcceptModalShow] = useState<boolean>(false);

  const [isInvite, setIsInvite] = useState<null|boolean>(null);
  const [eventName, setEventName] = useState<null|string>(null);
  const [lightMode, setLightMode] = useState<null|boolean>(null);
  const [ping, setPing] = useState<boolean>(false);

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

  useEffect(()=>{setTimeout(()=>setPing(true), 10000)}, [])
  useEffect(()=>{setTimeout(()=>setPing(false), 4000)}, [ping])

  if (!mounted) return null
  if (!isInvite) return (
    <div className="flex flex-col justify-center items-center text-7xl text-th-accent-light text-center h-screen">
      <p>{`Oops, esta no es la página :)`}</p>
      <p className='text-5xl mt-10 mx-5'>Si reciviste un enlace úsalo o chequea la dirección web</p>
    </div>
  )

  return (
    <ThemeProvider forcedTheme={lightMode ? 'garnet-light' : 'garnet'}>

      <div className=' h-screen w-screen hidden landscape:flex  overflow-hidden'><LandscapeScreen /></div>
    
      <Parallax 
        ref={parallax} 
        pages={4} 
        className='landscape:hidden' 
        onTouchMove={()=>{parallax.current.scrollTo(parallax.current.offset); setPing(true)}} 
        onClick={()=>setPing(false)}>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            height: '100vh',
            zIndex:'-1'
          }}
        >
          <video className=' h-full w-full object-cover' onClick={e=>e.stopPropagation()} muted autoPlay loop>
            <source src='/media/aniversary-video-bgr.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0} style={{ backgroundColor: 'var(--primary-medium)', opacity:'0.3'}} className={lightMode ? 'hidden' : ''} />
        <ParallaxLayer offset={1} factor={5} speed={1} style={{ backgroundColor: 'var(--primary-medium)', opacity:'0.3'}} />
        {/* <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'1'}} /> */}

        <ParallaxLayer
          offset={0.3}
          speed={1} 
          onClick={() => {parallax.current.scrollTo(1)}}
          className='flex justify-center items-center px-20'
        >
          {/* <Header lightMode={lightMode}/> */}
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1}
          speed={0.4}
          onClick={() => {parallax.current.scrollTo(2)}}
          className='flex justify-center items-center'
        >
          <Event bettacardId={cardId} eventName={eventName} lightMode={lightMode}/>
        </ParallaxLayer>
        
        <ParallaxLayer offset={2} onClick={() => {parallax.current.scrollTo(3)}}/>

        <ParallaxLayer 
          offset={2}
          speed={1}
          className={'pointer-events-none'}
        >
          <video className=' pointer-events-auto h-[36rem] w-96 object-cover my-20 mx-10 rounded-lg hover:border-x-2 border-blue' onClick={e=>e.stopPropagation()} muted autoPlay loop controls>
            <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.2}
          speed={1.5}
          className={'pointer-events-none'}
        >
          <video className=' pointer-events-auto h-[36rem] w-96 object-cover ml-auto mr-10 rounded-lg hover:border-x-2 border-blue' onClick={e=>e.stopPropagation()} muted autoPlay loop controls>
            <source src='/media/MissaPianoVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.4}
          speed={2}
          className={'pointer-events-none'}
        >
          <video className=' pointer-events-auto h-[36rem] w-96 object-cover my-20 mx-10 rounded-lg hover:border-x-2 border-blue' onClick={e=>e.stopPropagation()} muted autoPlay loop controls>
            <source src='/media/LissVoiceVideo.mp4' type='video/mp4'/>
          </video>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2.6}
          speed={2.5}
          className={'pointer-events-none'}
        >
          <video className=' pointer-events-auto h-[36rem] w-96 object-cover ml-auto mr-10 rounded-lg hover:border-x-2 border-blue' onClick={e=>e.stopPropagation()} muted autoPlay loop controls>
            <source src='/media/DomsGuitarVideo.mp4' type='video/mp4'/>
          </video>
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
          className='pointer-events-none grid grid-cols-3 grid-rows-4'>
            <Image
              src={stageLight}
              alt='ilumination'
              className={'bg-contain absolute top-1 right-1 pointer-events-auto h-60 w-60'}
              onClick={(e)=>{e.stopPropagation(); setLightMode(null ? true : !lightMode)}} 
            />
            <div className={' animate-pulse text-5xl text-th-accent-light absolute top-10 right-24' + (lightMode ? ' hidden' : '')}>{`Change lighting >>`}</div>
            <Image
              src={pingImg}
              alt='ping image'
              className={'bg-contain animate-pulse text-th-primary-medium h-80 w-80 opacity-10 row-start-3 col-start-2 place-self-center brightness-200 ' + (ping ? '' : ' hidden')}
            />
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
