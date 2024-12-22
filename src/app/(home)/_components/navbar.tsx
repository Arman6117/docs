import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './search-input'

const  Navbar = ({query}:{query:string}) => {

  return (
    <nav className='flex items-center justify-between h-full w-full'>
        <div className='flex gap-3 items-center  shrink-0 pr-6'>
            <Link href={'/'}>
                <Image src={'/logo.svg'} width={36} height={36} alt='logo'/>
            </Link>
            <h3 className='text-xl'>Docs</h3>
        </div>
        <SearchInput query={query}/>
        <div/>
    </nav>
  )
}

export default Navbar