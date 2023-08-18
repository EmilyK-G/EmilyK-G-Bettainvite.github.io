import React from 'react';
import Image from 'next/image';
import bgrPic from '../../../../public/backgrounds/curtain-bgr.jpg';
import email from '../../../../public/icons/email-icon.png';
import phone from '../../../../public/icons/phone-icon.png';

interface eventAttendanceProps {
    openAcceptModal: any
    lightMode: null|boolean
}

const EventAttendance = (props: eventAttendanceProps) => {

    const handleAccept = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        props.openAcceptModal()
    }

  return (
    <div className={'flex flex-col items-center justify-around p-10 text-center h-full text-th-accent-light'}>
        <p className="text-8xl landscape:text-3xl">Contact us</p>
        <Image
            src={bgrPic}
            alt='background image'
            className='bg-contain h-96 w-96 -z-0 rounded-full'
          />
        <div className='h-3/6 flex flex-col justify-evenly items-center font-mono'>
            <div className='bg-cover h-28 w-28 rounded-full my-5'>
                <Image
                    src={email}
                    onClick={()=>window.open('mailto:theband@gmail.com')}
                    alt='email icon'
                    className='bg-cover'
                />
            </div>
            <div className='bg-cover h-24 w-24 rounded-full my-5'>
                <Image
                    src={phone}
                    onClick={()=>window.open('tel:+15167257543')}
                    alt='email icon'
                    className='bg-cover'
                />
            </div>
            {/* <p className='text-4xl'>theband_email@gmail.com</p> */}
            {/* <p className='text-5xl'>+1 516 678 2345</p> */}
            <p className='text-9xl'>•</p>
        </div>
        <div className='hidden text-5xl space-x-2'>...</div>
        {/* <button
            className='myBtn w-full mt-10 m-2 text-5xl'
            onClick={e=>handleAccept(e)}>
            Ask something
        </button> */}
    </div>
  )
}

export default EventAttendance