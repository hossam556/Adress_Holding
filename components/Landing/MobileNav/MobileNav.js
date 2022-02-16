import React from 'react'
import {MenuAlt1Icon} from '@heroicons/react/outline'

const MobileNav = ({sideDrawerHandler}) => {
  return (
    <nav className='flex items-center justify-between md:hidden bg-blue-900 h-16 px-4 py-2'>
        <div className='flex items-center '>
            <span className='rounded-full bg-gray-200 px-2 py-1 text-blue-800'>LS</span>
            <div className='ml-3'>
                <span className='text-xs text-white '>Supplier</span><br/>
                <span className='font-bold text-white'>Laura Schellen</span>
            </div>
        </div>
        <MenuAlt1Icon className='w-6 h-6 text-white cursor-pointer' onClick={sideDrawerHandler}/>
    </nav>
  )
}

export default MobileNav