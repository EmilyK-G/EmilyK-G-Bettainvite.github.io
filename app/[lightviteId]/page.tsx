"use client"

import { ThemeProvider } from 'next-themes';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Header from './Header';
import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
import icon from '../../public/light_icon_transparent.png';

import Event from './Event';
import EventDate from './EventDate';
import EventAttendance from './EventAttendance';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import MyModal from './MyModal';

import Head from 'next/head';
import Themes from './Themes';
import { eventsList } from '../Invites/events';

type HomeProps = {
  params: {
    lightviteId: string
  }
}

export default function Home({ params: {lightviteId} }: HomeProps) {

  const parallax = useRef<IParallax>(null!);

  const [acceptModalShow, setAcceptModalShow] = useState<boolean>(false);
  const [rejectModalShow, setRejectModalShow] = useState<boolean>(false);
  const [defaultTheme, setDefaultTheme] = useState<string>('default');
  const [isInvite, setIsInvite] = useState<null|boolean>(null);
 
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(()=>{
    eventsList.map((eve)=>{
      if (lightviteId === eve.name){
        setIsInvite(true);
        return setDefaultTheme(eve.theme)
      }
    })
  },[])

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null
  if (!isInvite) return (
    <div className="flex justify-center items-center">
      <p>{`Oops, this isn't an invite :)`}</p>
      <p>If you received a link, try clciking it. Or check your spelling</p>
    </div>
  )

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
          factor={4.5}
          style={{
            backgroundImage: `var(--background-image)`,
            backgroundSize: 'contain',
            backgroundRepeat:'no-repeat',
            zIndex: -1 
          }}
          
        />
        {/* <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} style={{ backgroundImage:'linear-gradient(to bottom, rgba(47,72,88,1),rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,1), rgba(47,72,88,0.3), rgba(47,72,88,0.3), rgba(47,72,88,0.4))'}} /> */}
        <ParallaxLayer offset={0.7} factor={1.8} speed={0.5} className='bg-th-primary-medium opacity-100 landscape:bg-transparent' />
        <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'0'}} />
        <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: 'var(--primary-dark)', opacity:'1'}} />

        <ParallaxLayer
          offset={0.2}
          speed={1}
          className='flex justify-center items-center px-20 landscape:px-0'
        >
          <Header />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0}
          speed={0.2}
          onClick={() => {parallax.current.scrollTo(1)}}
          className='flex justify-start landscape:justify-center items-end'
        >
          <div
            style={{
              backgroundImage: 'var(--static-1)',
              backgroundSize: 'cover',
              backgroundPosition:'center'
            }}
            className='h-64 landscape:h-36 w-64 landscape:w-36 mb-5 landscape:mb-0'
          >
          </div>

          <div
            style={{
              backgroundImage: 'var(--static-1)',
              backgroundSize: 'cover',
              backgroundPosition:'center'
            }}
            className='ml-[-150px] landscape:ml-0 h-64 landscape:h-36 w-64 landscape:w-36 mb-5 landscape:mb-0'
          ></div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0}
          speed={-1} 
          className='flex justify-start landscape:justify-center items-end z-10'
          style={{ pointerEvents: 'none' }}
        >
          <div
            style={{
              backgroundImage: 'var(--static-1)',
              backgroundSize: 'cover',
              backgroundPosition:'center'
            }}
            className='ml-14 landscape:ml-[-0.5rem] mb-2 landscape:mb-[-0.8rem] h-64 landscape:h-36 w-64 landscape:w-36'
            onLoadedData={()=>console.log('loading image')}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1}
          speed={0.4}
          onClick={() => {parallax.current.scrollTo(2)}}
          className='flex justify-center items-center'
        >
          <Event lightviteId={lightviteId}/>
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
          className='flex flex-col landscape:flex-row justify-center items-center p-20'
        >
          <EventAttendance openRejectModal={()=>setRejectModalShow(true)} openAcceptModal={()=>setAcceptModalShow(true)}/>
          <Themes defaultTheme={defaultTheme}/>
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
            className=' h-32 w-auto z-20 landscape:hidden'
          />
          <Image
            src={icon}
            alt='icon separator'
            className=' h-32 w-auto z-20 landscape:hidden'
          />
          <Image
            src={icon}
            alt='icon separator'
            className=' h-32 w-auto z-20 landscape:hidden'
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
