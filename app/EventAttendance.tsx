import React, { useEffect, useState } from 'react';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import MyModal from './MyModal';
import { useInView } from 'react-intersection-observer';

function EventAttendance() {

    const [acceptModalShow, setAcceptModalShow] = useState<boolean>(false);
    const [rejectModalShow, setRejectModalShow] = useState<boolean>(false);

    const { ref, inView } = useInView();

    useEffect(()=>{
        if(!inView){
            acceptModalShow && setAcceptModalShow(false);
            rejectModalShow && setRejectModalShow(false)
        }
    },[inView])

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
            ref={ref}
            className='myBtn w-full mt-10 m-2 text-5xl'
            onClick={e=>handleAccept(e)}
        >
            Yes!
        </button>
        {acceptModalShow 
        && <MyModal
            onClose={() => setAcceptModalShow(false)}>
                <AcceptModal/>
        </MyModal>}
        
        <button 
            className='myBtn w-full m-2 text-5xl'
            onClick={e=>handleReject(e)}
        >
            No
        </button>
        {rejectModalShow 
        && <MyModal
            onClose={() => setRejectModalShow(false)}>
                <RejectModal/>
        </MyModal>}
    </div>
  )
}

export default EventAttendance