"use client"

import React, { useState } from 'react';

const AcceptModal= () => {

  const [confirmation, setConfirmation] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const sendConfirmationMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setError(null);
    setSuccess(false);

    if(confirmation.length <= 5 ) return setError('Name too short')

    setIsSending(true);

    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: confirmation }),
    });
    
    const json = await response.json();

    if (response.ok) {
      setIsSending(false);
      setSuccess(true);
    } else {
      setIsSending(false);
      setError(`Please try again...`);
    }
  };
  

  return (
    <div className='bg-th-primary-medium text-th-primary-light text-6xl p-20 landscape:px-1 landscape:pt-1 landscape:pb-10 flex flex-col rounded-lg border-2 laptop:border-none'>
      {!success && <>
        <h2 className='keyboard_hide text-9xl'>Awesome!</h2>
        <p className='font-serif mt-4 landscape:text-lg'>Send your name to accept the invite...</p>
      </>}
      <input 
        type="text" 
        maxLength={35}
        autoFocus
        placeholder='Your name here'
        value={confirmation}
        onChange={(e)=>setConfirmation(e.target.value)}
        id='modal_accept'
        className='p-5 text-8xl laptop:text-5xl my-40 keyboard_modal_margin h-36 rounded-md enabled:hover:border-th-accent-dark 
        disabled:opacity-75 placeholder:text-th-accent-light placeholder:opacity-30 block bg-transparent
        shadow-sm focus:outline-none focus:border-th-accent-light text-center'/>

      {error && <div className='text-error font-serif text-2xl'><p>{`Confirmation didn't go through:(`}</p> <p className='mt-2 text-3xl'>{error}</p></div>}
      {success && <div className='text-success'>{`Thanks, see you soon!:)`}</div>}
      {isSending 
        ? <p className='mt-5 rounded-md p-3 w-3/6 place-self-center text-th-accent-light'>Confirming <span className='animate-ping'>...</span></p>
        : <button
            disabled={success}
            className="myBtn landscape:h-20 landscape:w-1/3 landscape:self-center laptop:border-none mt-5 text-7xl landscape:text-4xl laptop:text-3xl bg-th-primary-light text-th-accent-dark" 
            onClick={e=>sendConfirmationMessage(e)}>
              {success ? 'Sent!' : 'Confirm'}
          </button>}
    </div>
  )
}

export default AcceptModal