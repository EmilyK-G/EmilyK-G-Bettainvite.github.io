import Link from 'next/link';
import Image from 'next/image';
import apple from '../../../../public/icons/bettainvite-singleapple.png';


function Event(props:any) {
  return (
    <div className="flex flex-col items-center justify-start h-full w-full text-whitesmoke text-center">
      <div className='flex flex-col items-center justify-center p-10 h-full'>
        <p className='text-9xl landscape:text-8xl'>{`Get ready for a bushel of fun!`}</p>
        <Image
            src={apple}
            alt='icon separator'
            className='h-48 w-auto my-32 landscape:hidden'
          />
        <p className='text-7xl landscape:text-5xl'>Join us for a crisp and colorful apple picking adventure <span className='landscape:hidden'>in the scenic orchards. Let's pluck memories together and savor the sweet taste of fall</span>.</p>
      </div>
    </div>
  )
}

export default Event