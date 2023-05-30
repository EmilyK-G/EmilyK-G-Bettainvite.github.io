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
    <div className='text-5xl h-screen flex flex-col justify-center items-center'>
        {/* <AblyWs /> */}
        {eventsList && eventsList.map((event) => (
          <WebsitesList event={event} key={event.eventId}/>
        ))}
    </div>
  )
}

export default HomePage