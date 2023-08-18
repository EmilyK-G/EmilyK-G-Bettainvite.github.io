import Link from 'next/link';


function Event(props:any) {
  return (
    <div className={"flex flex-col items-center justify-start h-full w-full text-center" + (props.lightMode ? ' text-th-accent-dark' : ' text-th-primary-light')}>
      <div className='flex flex-col items-center justify-around p-10 h-full'>
        <p className='text-6xl'>{`"We don't even have a band yet... just musical group exploring ideas"`}</p>
        <Link 
          href={"/" + props.eventName + "/" + props.bettacardId + "/about"}
          onClick={(e)=> e.stopPropagation()}
          className={"text-3xl font-mono bg-whitesmoke bg-opacity-5 underline hover:underline-offset-4 p-10 mt-10 z-20" + (props.lightMode ? ' text-th-primary-dark': ' text-th-primary-light')}>
          More
        </Link>
      </div>
    </div>
    
  )
}

export default Event