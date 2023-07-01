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
    <div className={'flex flex-col items-center justify-around p-10 text-center h-full font-cinzel' + (props.lightMode ? ' text-th-accent-dark' : ' text-th-accent-light')}>
        <p className="text-6xl">Con la participación de:</p>
        <div className='h-3/6 flex flex-col justify-evenly'>
            <p className='text-5xl'>Darlene y Pepe Torres</p>
            <p className='text-5xl'>Zoily y Armando Ripalda</p>
            <p className='text-5xl'>Ruth y Yuri Rigail</p>
            <p className='text-5xl'>•</p>
            <p className='text-5xl'>•</p>
            <p className='text-5xl'>•</p>
        </div>
        <div className='hidden text-5xl landscape:flex space-x-2'>...</div>
        <button
            className='myBtn w-full mt-10 m-2 text-5xl'
            onClick={e=>handleAccept(e)}>
            Quiero dar las gracias
        </button>
    </div>
  )
}

export default EventAttendance