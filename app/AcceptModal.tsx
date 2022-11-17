"use client"

import React, { useState } from 'react';

const AcceptModal= () => {

  const [confirmation, setConfirmation] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const sendConfirmationMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);
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
      setError(true);
    }
  };
  

  return (
    <div className='bg-midnight text-6xl p-20 flex flex-col rounded-lg border-2'>
      <h2>Yay!</h2>
      <p className='text-2xl'>Please confirm by adding your name to the list...</p>
      <input 
        type="text" 
        maxLength={35}
        autoFocus
        placeholder='Emily Garcia'
        value={confirmation}
        onChange={(e)=>setConfirmation(e.target.value)}
        className='p-5 text-7xl mt-10 h-36 rounded-md enabled:hover:border-gray-400 
        disabled:opacity-75 placeholder:text-slate-500 block bg-transparent
        shadow-sm focus:outline-none focus:border-magenta text-center'/>

      {error && <div className='text-4xl text-error'>{`Confirmation failed:(`}</div>}
      {success && <div className='text-4xl text-success'>{`Confirmed! See you soon:)`}</div>}
      
      <p><small className='text-2xl'>There are 10 people on the list</small></p>
      {isSending 
        ? <p className='mt-5 text-3xl bg-darknavy rounded-md p-3 w-3/6 place-self-center'>Confirming <span className='animate-ping'>...</span></p>
        : <button 
            className="myBtn mt-5" 
            onClick={e=>sendConfirmationMessage(e)}>
              Add me!
          </button>}
    </div>  
  )
}

export default AcceptModal