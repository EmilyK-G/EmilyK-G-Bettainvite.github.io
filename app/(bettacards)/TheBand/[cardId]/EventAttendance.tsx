import React from 'react';

const EventAttendance = (props: any) => {

    const handleAccept = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        props.openAcceptModal()
    }

    const handleReject = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        props.openRejectModal()
    }

  return (
    <div className='flex flex-col items-center justify-around text-th-accent-light p-10 text-center h-full'>
        <p className="text-8xl landscape:text-3xl">Contact us</p>
        <div className='text-6xl h-3/6 flex flex-col justify-around font-mono'>
            <p>theband_email@gmail.com</p>
            <p>+1 516 678 2345</p>
            <p className='text-9xl landscape:hidden'>•</p>
        </div>
        <div className='hidden text-5xl landscape:flex space-x-2'>...</div>
        <button
            className='myBtn w-full landscape:w-80 mt-10 m-2 text-5xl landscape:text-xl landscape:h-14'
            onClick={e=>handleAccept(e)}>
            Ask something
        </button>
    </div>
  )
}

export default EventAttendance