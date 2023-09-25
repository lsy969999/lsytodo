import Link from 'next/link';
import React from 'react'
const links = ["Services", "Blog", "About"];


const Header = () => {
  return (
    <nav className='bg-gray-800 flex justify-between items-center h-20 p-4'>
        {/* Logo */}
        <p className='text-yellow-50 ml-4 font-semibold text-2xl'>EduHub</p>
        <ul className='flex gap-6 list-none text-gray-200 font-semibold'>
            {links.map((link)=>(<li key={link}><Link className='hover:bg-slate-600 p-2 hover:rounded-md active:bg-purple-700 focus:rounded-md focus:ring-green-600' href={`/proto/tailwind/prac1/${link.toLowerCase()}`}>{link}</Link></li>))}
        </ul>
    </nav>
  )
}

export default Header