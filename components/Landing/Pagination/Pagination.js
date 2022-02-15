import React from 'react'
import {ArrowSmLeftIcon , ArrowSmRightIcon , ChevronDownIcon} from '@heroicons/react/outline'

const Pagination = () => {
  return (
    <div className='mt-8 flex justify-between items-center p-4 rounded-lg bg-gray-50 drop-shadow-sm'>
        <span className='text-xs text-gray-500'>1-5 of 39</span>
        <div className='flex items-center'>
            <span className='text-xs text-gray-500'>The page you'are on</span>
            <div className='ml-3 flex items-center bg-white rounded-lg px-1 py-0.5 border-2 border-gray-200 font-bold'>
                <span className='text-xs text-blue-900'>1</span>
               <ChevronDownIcon className='w-3 h-3 ml-1 text-blue-900'/>
            </div>
            <div className='ml-3 flex items-center bg-white rounded-lg px-1 py-0.5 border-2 border-gray-200 font-bold'>
               <ArrowSmLeftIcon className='w-4 h-4 text-gray-400'/>
            </div>
            <div className='ml-1 flex items-center bg-white rounded-lg px-1 py-0.5 border-2 border-gray-200 font-bold'>
               <ArrowSmRightIcon className='w-4 h-4 text-blue-900'/>
            </div>
        </div>
    </div>
  )
}

export default Pagination