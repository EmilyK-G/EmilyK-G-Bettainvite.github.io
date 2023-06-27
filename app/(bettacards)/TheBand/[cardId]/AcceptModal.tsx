"use client"

import React, { useEffect, useState } from 'react';

const AcceptModal= () => {

  const [confirmation, setConfirmation] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(()=>{

    const confirmed = localStorage.getItem('accepted');

    console.log(confirmed)

    if (!confirmed) return;

    const expDate = JSON.parse(confirmed).expDate;

    const value = JSON.parse(confirmed).value;

    const name = JSON.parse(confirmed).name;

    if (value === 'false') {
      setSuccess(false)
      console.log(value, 'false')
    }
    if (value === 'true') {
      const expired = (new Date()).getTime() > expDate;
     
      if (expired) {
        localStorage.removeItem('accepted');
        setSuccess(false);
        return
      }
      if(name){
        setConfirmation(name)
      }
      setSuccess(true)
    }
  }, [])

  const sendConfirmationMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    e.preventDefault();

    setError(null);

    const date = new Date().setDate(new Date().getDate() + 5);

    if(confirmation.length <= 6 ) return setError('Please enter a valid email')

    setIsSending(true);

    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: confirmation,
        myNumber: '+15167257543'
       }),
    });
    
    const json = await response.json();

    if (response.ok) {
      setIsSending(false);
      setSuccess(true);
      localStorage.setItem('accepted', JSON.stringify({
        value: 'true',
        name: confirmation,
        expDate: date
      }) )
    } else {
      setIsSending(false);
      setError(`Please try again...`);
    }
  };
  

  return (
    <div className='bg-th-primary-dark text-th-primary-light text-4xl p-20 landscape:px-1 landscape:pt-1 landscape:pb-10 flex flex-col rounded-lg'>
      <div className='flex flex-col landscape:hidden laptop:landscape:contents'>
      {!success && <>
        <h2 className='keyboard_hide text-9xl'>Cool</h2>
        <p className='font-serif mt-8 laptop:text-lg'>send us your email and we'll contact you shortly</p>
      </>}
      <input 
        type="text" 
        maxLength={100}
        autoFocus
        placeholder='your_email@mail.com'
        value={confirmation}
        onChange={(e)=>setConfirmation(e.target.value)}
        id='modal_accept'
        className='p-5 text-5xl font-mono w-full laptop:text-5xl my-32 keyboard_modal_margin h-36 rounded-md enabled:hover:border-th-accent-dark 
        disabled:opacity-75 placeholder:text-th-accent-light placeholder:opacity-30 block bg-transparent
        shadow-sm focus:outline-none focus:border-th-accent-light text-center'/>

      {error && <div className='text-error font-serif text-2xl'><p>{`No se pudo confirmar:(`}</p> <p className='mt-2 text-3xl'>{error}</p></div>}
      {success && <div className='text-success'>{`Thanks! We'll be in touch soon`}</div>}
      {isSending 
        ? <p className='mt-5 rounded-md p-3 w-2/3 self-center text-th-accent-light text-6xl'>Sending <span className='animate-ping'>...</span></p>
        : <button
            disabled={success}
            className={"myBtn laptop:h-14 laptop:rounded-sm laptop:w-1/3 laptop:border-none laptop:self-center mt-5 text-7xl laptop:text-3xl bg-th-primary-light text-th-accent-dark" + (success ? " hidden":"")} 
            onClick={e=>sendConfirmationMessage(e)}>
              Send
          </button>}
    </div>
    <div className=' portrait:hidden laptop:hidden text-3xl mt-10'>
      <p>
        Please rotate your phone
      </p>
    </div>
    </div>
  )
}

export default AcceptModal