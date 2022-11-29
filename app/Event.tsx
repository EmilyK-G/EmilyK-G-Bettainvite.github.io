import Link from 'next/link';

// import Image from 'next/image';
// import woman from '../public/bettainvite_woman.jpg';

function Event() {
  return (
    <div className="flex flex-col items-center justify-between h-full text-whitesmoke bg-midnight bg-opacity-40 text-center">
      <div className='flex flex-col items-center justify-center p-10 '>
        <p className='text-6xl m-10'>To my</p>
        <p className='text-9xl font-thin m-10'>Fall Outdoor <span className="m-5">Foodshare</span></p>
        <Link 
          href="/about"
          className="text-5xl font-mono font-bold underline hover:underline-offset-4 mt-auto">
          Details
        </Link>
      </div>
      {/* <div className='flex-1 relative'>
        <Image 
          src={woman}
          alt='woman picture'
          className='object-cover h-full z-0'/>
        <div className='absolute bg-midnight bg-opacity-40 z-30 flex-1'></div>
      </div> */}
      <div className='flex flex-col items-end justify-center p-10 px-32 bg-midnight w-full'>
        <p className='text-6xl font-thin m-10'> <small className='text-5xl'>Hosted by</small> Emily Kimberly</p>
      </div>
    </div>
    
  )
}

export default Event