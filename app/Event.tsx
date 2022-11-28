import Link from 'next/link';

function Event() {
  return (
    <div className="flex flex-col items-center justify-between px-20 h-full bg-midnight bg-opacity-40 text-whitesmoke text-center">
      <div className='flex flex-col items-center justify-center p-10 bg-midnight'>
        <p className='text-6xl m-10'>To my</p>
        <p className='text-9xl font-thin m-10'>Fall Outdoor <span className="m-5">Foodshare</span></p>
        <Link 
          href="/about"
          className="text-5xl font-mono font-bold underline hover:underline-offset-4 mt-auto">
          Details
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center p-10 bg-midnight bg-opacity-60 w-full'>
        <p className='text-5xl font-thin m-10'> <small>Hosted by Emily Kimberly</small></p>
      </div>
    </div>
    
  )
}

export default Event