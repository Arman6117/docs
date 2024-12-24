import Image from 'next/image'
import React from 'react'

const FullscreenLoader = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen h-full w-full '>
        <Image
         src={'/logo.svg'}
         alt='logo'
         width={100}
         height={100}
         className='animate-ping'
         />
    </div>
  )
}

export default FullscreenLoader