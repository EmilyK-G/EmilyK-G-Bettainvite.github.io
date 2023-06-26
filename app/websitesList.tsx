import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface eventProps {
    event: {eventId:string, name:string, theme:string, bgr: string},
  }

const WebsitesList = ({event}:eventProps) => {
  return (
            <Link 
              href={"/" + event.name + "/" + event.eventId} 
              className="flex flex-col items-center justify-center w-full h-44 my-1 border-spacing-10 border-y-2 border-lightgray border-opacity-20 relative z-20">
                <Image 
                    src={`/backgrounds/`+ event.bgr}
                    alt='image'
                    fill={true}
                    sizes="fill"
                    className='object-cover opacity-90'/>
                    <div className="flex items-center justify-end h-full w-full mr-3 bg-whitesmoke bg-opacity-5 relative z-10 hover:bg-opacity-0 hover:text-whitesmoke websitesListItem">
                        <p className='z-20'>{event.name}</p>
                    </div>
            </Link>
  )
}

export default WebsitesList