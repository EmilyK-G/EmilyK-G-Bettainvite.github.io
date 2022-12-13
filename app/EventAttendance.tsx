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
    <div className='flex flex-col items-center justify-end text-darknavy p-10 text-center h-full'>
        <p className="text-9xl">Vas a venir?</p>
        <button
            className='myBtn w-full mt-10 m-2 text-5xl'
            onClick={e=>handleAccept(e)}>
            Sí!
        </button>
        
        <button 
            className='myBtn w-full m-2 text-5xl'
            onClick={e=>handleReject(e)}
        >
            No
        </button>
        <div className='text-9xl'>
            <p>•</p>
            <p>•</p>
            <p>•</p>
        </div>

        <p className='m-10 opacity-70 text-6xl ml-48'>{`Sígueme en instagram ->`} <a className='text-lightolive m-10' href="https://instagram.com/monymar18?igshid=MDM4ZDc5MmU=">monymar18</a> </p>
    </div>
  )
}

export default EventAttendance