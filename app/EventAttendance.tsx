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
    <div className='flex flex-col items-center justify-center text-whitesmoke p-10 text-center'>
        <p className="text-9xl">Will you attend?</p>
        <button
            className='myBtn w-full mt-10 m-2 text-5xl'
            onClick={e=>handleAccept(e)}>
            Yes!
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