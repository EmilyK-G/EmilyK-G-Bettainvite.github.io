"use client"

import React, { useState } from 'react';

const AcceptModal= () => {

  const [confirmation, setConfirmation] = useState<string>('')

  const sendConfirmationMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
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
    } else {
      console.log('there was an error:(');
    }
  };
  

  return (
    <div className='bg-midnight text-6xl p-20 flex flex-col rounded-lg'>
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
      <p><small className='text-2xl'>There are 10 people on the list</small></p>
      <button 
        className="myBtn mt-5" 
        onClick={e=>sendConfirmationMessage(e)}>
          Add me!
      </button>
    </div>  
  )
}

export default AcceptModal