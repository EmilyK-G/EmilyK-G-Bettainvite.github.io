import Link from 'next/link';


function Event(props:any) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-th-primary-dark bg-th-primary-light bg-opacity-60 text-center">
      <div className='flex flex-col items-center justify-center flex-1 p-10 '>
        <p className='text-6xl m-10'>To the National</p>
        <p className='text-9xl font-thin m-10 my-20'>Cherry Blossom Festival</p>
        <Link 
          href={"/" + props.lightviteId + "/about"}
          className=" text-6xl tablet:text-4xl font-mono text-th-primary-medium bg-whitesmoke bg-opacity-30 font-bold underline hover:underline-offset-4 p-10 tablet:p-8 mt-10">
          Details
        </Link>
      </div>
      <div className='flex flex-col items-end justify-center p-10 px-32 bg-th-primary-medium bg-opacity-50 text-th-primary-light w-full'>
        <p className='text-6xl font-thin m-10  ml-60'> <small className='text-5xl'>Hosted by</small> New York City</p>
      </div>
    </div>
    
  )
}

export default Event