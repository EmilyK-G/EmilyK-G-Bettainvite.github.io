import Link from 'next/link';


function Event(props:any) {
  return (
    <div className="flex flex-col items-center justify-start h-full w-full text-th-primary-dark bg-th-primary-light bg-opacity-60 text-center">
      <div className='flex flex-col items-center justify-center flex-1 p-10'>
        <p className='text-6xl landscape:text-4xl m-10 landscape:m-3'>To the National</p>
        <p className='text-9xl landscape:text-8xl font-thin m-10 my-20 laptop:my-12 landscape:my-0'>Cherry Blossom Festival</p>
        <Link 
          href={"/" + props.eventName + "/" + props.lightviteId + "/about"}
          className=" text-6xl tablet:text-3xl font-mono text-th-primary-medium bg-whitesmoke laptop:bg-transparent bg-opacity-30 font-bold underline hover:underline-offset-4 p-10 tablet:p-8 landscape:p-0 mt-10 landscape:mt-2">
          Details
        </Link>
      </div>
      <div className='flex flex-col items-end justify-center p-10 px-32 bg-th-primary-medium bg-opacity-50 landscape:border-t-2 landscape:border-th-accent-light text-th-primary-light w-full'>
        <p className='text-4xl font-thin mt-0 ml-60'> <small className='text-2xl'>Hosted by</small> New York City</p>
      </div>
    </div>
  )
}

export default Event