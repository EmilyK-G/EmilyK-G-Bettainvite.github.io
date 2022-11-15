import React from 'react';

const AcceptModal= () => {
  return (
    <div className='bg-magenta text-6xl p-20 flex flex-col rounded-lg'>
      <h2 className='text-slate-500'>Yay! <span>Add your name to the list...</span></h2>
      <input 
        type="text" 
        maxLength={35}
        autoFocus
        placeholder='Emily Garcia'
        className='p-5 mt-10 rounded-md enabled:hover:border-gray-400 
        disabled:opacity-75 placeholder:text-slate-500 block bg-transparent
        shadow-sm focus:outline-none focus:border-magenta text-center'/>
    </div>  
  )
}

export default AcceptModal