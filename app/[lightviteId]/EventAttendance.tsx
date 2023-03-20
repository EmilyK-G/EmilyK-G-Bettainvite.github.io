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
    <div className='flex flex-col items-center justify-center text-th-accent-light p-10 text-center h-full'>
        <p className="text-9xl landscape:text-3xl">Are you coming?</p>
        <div className='text-9xl landscape:hidden'>
            <p>•</p>
            <p>•</p>
            <p>•</p>
        </div>
        <div className='hidden text-5xl landscape:flex space-x-2'>...</div>
        <button
            className='myBtn w-full landscape:w-80 mt-10 m-2 text-5xl landscape:text-xl landscape:h-14'
            onClick={e=>handleAccept(e)}>
            Yes
        </button>
        
        <button 
            className='myBtn w-full landscape:w-80 m-2 text-5xl landscape:text-xl landscape:h-14'
            onClick={e=>handleReject(e)}
        >
            No
        </button>
    </div>
  )
}

export default EventAttendance