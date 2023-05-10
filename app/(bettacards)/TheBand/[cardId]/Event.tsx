import Link from 'next/link';


function Event(props:any) {
  return (
    <div className="flex flex-col items-center justify-start h-full w-full text-th-primary-light bg-lightcyan bg-opacity-30 text-center">
      <div className='flex flex-col items-center justify-center p-10'>
        <p className='text-6xl landscape:text-4xl landscape:m-3'>{`"We don't even have a band yet... just musical group exploring ideas"`}</p>
        <Link 
          href={"/" + props.eventName + "/" + props.bettacardId + "/about"}
          className="hidden text-6xl tablet:text-3xl font-mono text-th-primary-medium bg-whitesmoke laptop:bg-transparent bg-opacity-30 font-bold underline hover:underline-offset-4 p-10 tablet:p-8 landscape:p-0 mt-10 landscape:mt-2">
          Detalles
        </Link>
      </div>
    </div>
    
  )
}

export default Event