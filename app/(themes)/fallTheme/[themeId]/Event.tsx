import Link from 'next/link';


function Event(props:any) {
  return (
    <div className="flex flex-col items-center justify-start h-full w-full text-whitesmoke text-center">
      <div className='flex flex-col items-center justify-around p-10 h-full'>
        <p className='text-9xl'>{`Get ready for a bushel of fun!`}</p>
        <p className='text-7xl'>Join us for a crisp and colorful apple picking adventure in the scenic orchards. Let's pluck memories together and savor the sweet taste of fall.</p>
        <Link 
          href={"/" + props.eventName + "/" + props.themeId + "/about"}
          className="hidden text-6xl tablet:text-3xl font-mono text-th-primary-medium bg-whitesmoke laptop:bg-transparent bg-opacity-30 font-bold underline hover:underline-offset-4 p-10 tablet:p-8 landscape:p-0 mt-10 landscape:mt-2">
          Details
        </Link>
      </div>
    </div>
    
  )
}

export default Event