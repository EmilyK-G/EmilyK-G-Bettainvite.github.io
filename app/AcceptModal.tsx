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
    <div className='bg-darknavy text-champagne text-6xl p-20 flex flex-col rounded-lg border-2'>
      <h2 className='keyboard_hide text-9xl'>Genial!</h2>
      <p className='font-serif mt-4'>Por favor envíame tu nombre para confirmar...</p>
      <input 
        type="text" 
        maxLength={35}
        autoFocus
        placeholder='Tu nombre aquí'
        value={confirmation}
        onChange={(e)=>setConfirmation(e.target.value)}
        id='modal_accept'
        className='p-5 text-8xl my-40 keyboard_modal_margin h-36 rounded-md enabled:hover:border-gray-400 
        disabled:opacity-75 placeholder:text-whitesmoke placeholder:opacity-30 block bg-transparent
        shadow-sm focus:outline-none focus:border-magenta text-center'/>

      {error && <div className='text-error font-serif'><p>{`No se pudo confirmar:(`}</p> <p className='text-3xl'>{error}</p></div>}
      {success && <div className='text-success'>{`Gracias por confirmar, nos vemos:)`}</div>}
      {isSending 
        ? <p className='mt-5 rounded-md p-3 w-3/6 place-self-center text-champagne'>Confirmando <span className='animate-ping'>...</span></p>
        : <button
            disabled={success}
            className="myBtn mt-5 text-7xl bg-salmon" 
            onClick={e=>sendConfirmationMessage(e)}>
              {success ? 'Enviado!' : 'Confirmar'}
          </button>}
    </div>  
  )
}

export default AcceptModal