import Link from 'next/link';


function Event(props:any) {
  return (
    <div className="flex flex-col items-center justify-start h-full w-full text-center font-cinzel">
      <div className={'flex flex-col items-center justify-around p-10 h-full' + (props.lightMode ? ' text-th-primary-dark' : ' text-th-accent-light')}>
        <p className={'text-7xl leading-normal '}>{`"Hay compañeros listos para destrozarse el uno al otro, pero hay un amigo que se apega más que un hermano."`}</p>
        <p className='text-4xl text-right self-end'>-Provervios 18:24</p>
        <p className={'text-7xl font-sans leading-tight ' +  (props.lightMode ? ' text-th-accent-dark' : ' text-th-primary-light')}>Unas palabras de sus amigos de Ecuador, que aunque están lejos, los recuerdan con cariño ♥ ...</p>
        {/* <Link 
          href={"/" + props.eventName + "/" + props.bettacardId + "/about"}
          onClick={(e)=> e.stopPropagation()}
          className={"text-3xl font-mono bg-whitesmoke bg-opacity-5 underline hover:underline-offset-4 p-10 mt-10 z-20" + (props.lightMode ? ' text-th-primary-dark': ' text-th-primary-light')}>
          More
        </Link> */}
      </div>
    </div>
    
  )
}

export default Event