import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b-2 border-t-2 border-green-500 shadow-lg shadow-green-500/50 backdrop-blur-md'>
        <div className='flex  mx-auto  text-[18px]  px-4 sm:px-6 lg:px-8 py-4  max-w-7xl justify-between  items-center'>
            <Link href={'/'} className='font-bold text-green-500 text-[30px]'>CardNerd</Link >
            <ul className='flex space-x-6 font-medium'>
                <li className='hover:text-emerald-300 transition delay-100'><Link href={'/'}>Home</Link></li>
                <li className='hover:text-emerald-300 transition delay-100'><Link href={'/blog'}>Blogs</Link></li>
                <li className='hover:text-emerald-300 transition delay-100'><Link href={'/about'}>About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar