import React from 'react';

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
        <div className='h-3/6 flex flex-col justify-evenly font-mono'>
            <p className='text-4xl'>theband_email@gmail.com</p>
            <p className='text-5xl'>+1 516 678 2345</p>
            <p className='text-9xl landscape:hidden'>•</p>
        </div>
        <div className='hidden text-5xl landscape:flex space-x-2'>...</div>
        <button
            className='myBtn w-full mt-10 m-2 text-5xl'
            onClick={e=>handleAccept(e)}>
            Ask something
        </button>
    </div>
  )
}

export default EventAttendance