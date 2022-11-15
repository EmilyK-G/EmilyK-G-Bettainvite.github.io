import React, { useState } from 'react';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import MyModal from './MyModal';

function EventAttendance() {

    const [acceptModalShow, setAcceptModalShow] = useState<boolean>(true);
    const [rejectModalShow, setRejectModalShow] = useState<boolean>(false);

    const handleAccept = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        setAcceptModalShow(true)
    }

    const handleReject = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
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
        <MyModal 
            show={acceptModalShow}
            onClose={() => setAcceptModalShow(false)}>
                <AcceptModal/>
        </MyModal>
        
        <button 
            className='myBtn w-full m-2 text-3xl'
            onClick={e=>handleReject(e)}
        >
            No
        </button>
        <MyModal 
            show={rejectModalShow}
            onClose={() => setRejectModalShow(false)}>
                <RejectModal/>
        </MyModal>
    </div>
  )
}

export default EventAttendance