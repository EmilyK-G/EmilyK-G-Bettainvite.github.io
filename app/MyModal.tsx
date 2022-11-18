import React, { useEffect, useState } from 'react';

interface ChildProps {
    onClose: any;
    children: React.ReactNode;
  }

const MyModal = ({onClose, children}: ChildProps) => {

    const [transitionWrapper, setTransitionWrapper] = useState<string>('opacity-0');
    
    useEffect(()=>{
      setTimeout(() => {
        setTransitionWrapper('opacity-1');
      }, 100);
    }, [])

    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        e.stopPropagation();
        if((e.target as Element).id === 'wrapper') onClose();
    }

  return (
    <div 
        className={`fixed inset-0 bg-midnight ${transitionWrapper} bg-opacity-75 backdrop-blur-sm
        flex justify-center items-center bg-fixed transition-opacity duration-300 ease-in-out`}
        id='wrapper'
        onClick={handleClose}>
        <div 
            className="w-10/12 flex flex-col">
            <button 
                className='text-whitesmoke text-4xl place-self-end'
                onClick={(e)=>{e.stopPropagation();onClose()}}>
                X
            </button>
            <div className={`bg-white p-2 rounded`}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default MyModal