"use client"

import React, {useEffect} from 'react';
import AblyWs from './AblyWs';
import {eventsList} from './Invites/events';
import WebsitesList from './websitesList';

interface eventsListProps {
  list: string[]
}

const HomePage = () => {
  
  return (
    <div className='text-5xl w-screen h-screen flex flex-col justify-center items-center py-10'>
      <div className='w-full h-full max-w-[768px]'>
        {eventsList && eventsList.map((event) => (
          <WebsitesList event={event} key={event.eventId}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage