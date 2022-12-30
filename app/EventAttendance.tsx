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
        <p className="text-9xl">Are you coming?</p>
        <div className='text-9xl'>
            <p>•</p>
            <p>•</p>
            <p>•</p>
        </div>
        <button
            className='myBtn w-full mt-10 m-2 text-5xl'
            onClick={e=>handleAccept(e)}>
            Yes
        </button>
        
        <button 
            className='myBtn w-full m-2 text-5xl'
            onClick={e=>handleReject(e)}
        >
            No
        </button>
    </div>
  )
}

export default EventAttendance