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
      console.log('success');
      setIsSending(false);
      setSuccess(true);
    } else {
      console.log('there was an error:(');
      setIsSending(false);
      setError(`Please try again...`);
    }
  };
  

  return (
    <div className='bg-midnight text-4xl p-20 flex flex-col rounded-lg border-2'>
      <h2 className='text-9xl'>Yay!</h2>
      <p className='font-serif mt-4'>Please send me your full name to confirm...</p>
      <input 
        type="text" 
        maxLength={35}
        autoFocus
        placeholder='Emily Garcia'
        value={confirmation}
        onChange={(e)=>setConfirmation(e.target.value)}
        className='p-5 text-8xl my-40 h-36 rounded-md enabled:hover:border-gray-400 
        disabled:opacity-75 placeholder:text-whitesmoke placeholder:opacity-30 block bg-transparent
        shadow-sm focus:outline-none focus:border-magenta text-center'/>

      {error && <div className='text-error font-serif'><p>{`Confirmation failed:(`}</p> <p className='text-3xl'>{error}</p></div>}
      
      {isSending 
        ? <p className='mt-5 text-3xl bg-darknavy rounded-md p-3 w-3/6 place-self-center'>Confirming <span className='animate-ping'>...</span></p>
        : success 
          ? <div className='text-success'>{`Thank you for confirming, see you later:)`}</div>
          : <button
              className="myBtn mt-5 text-7xl" 
              onClick={e=>sendConfirmationMessage(e)}>
                Confirm
            </button>}
    </div>  
  )
}

export default AcceptModal