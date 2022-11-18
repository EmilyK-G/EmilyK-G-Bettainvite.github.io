import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ChildProps {
    show: boolean;
    onClose: any;
    children: React.ReactNode;
  }

const MyModal = ({show, onClose, children}: ChildProps) => {

    if(!show) return null;

    const { ref, inView } = useInView();

    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        e.stopPropagation();
        if((e.target as Element).id === 'wrapper') onClose();
        console.log(inView)
    }

  return (
    <div 
        className={`fixed inset-0 bg-midnight bg-opacity-75 backdrop-blur-sm
        flex justify-center items-center bg-fixed`}
        id='wrapper'
        onClick={handleClose}>
        <div 
            className='w-[600px] flex flex-col'>
            <button 
                className='text-whitesmoke text-4xl place-self-end'
                onClick={(e)=>{e.stopPropagation();onClose()}}>
                X
            </button>
            <div className='bg-white p-2 rounded' ref={ref}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default MyModal