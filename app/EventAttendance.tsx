import React, { useState } from 'react';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';

function EventAttendance() {

    const [acceptModalShow, setAcceptModalShow] = useState<boolean>(false);
    const [rejectModalShow, setRejectModalShow] = useState<boolean>(false);

    const handleAccept = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        setAcceptModalShow(true)
    }

    const handleReject = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        setRejectModalShow(true)
    }

  return (
    <div className='flex flex-col items-center justify-center text-whitesmoke p-10 text-center'>
        <p className="text-9xl">Will you attend?</p>
        <button 
            className='myBtn w-full mt-10 m-2 text-3xl'
            onClick={e=>handleAccept(e)}
        >
            Yes!
        </button>
        <AcceptModal
            show={acceptModalShow}
            onHide={() => setAcceptModalShow(false)}
        />
        <button 
            className='myBtn w-full m-2 text-3xl'
            onClick={e=>handleReject(e)}
        >
            No
        </button>
        <RejectModal
            show={rejectModalShow}
            onHide={() => setRejectModalShow(false)}
        />
    </div>
  )
}

export default EventAttendance