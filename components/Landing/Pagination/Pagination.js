import React from 'react'
import {ArrowSmLeftIcon , ArrowSmRightIcon , ChevronDownIcon} from '@heroicons/react/outline'

const Pagination = ({usersNo ,firstIndex ,secondIndex,backHandler,nextHandler , page}) => {
  // let usersNumber = results.length ;

  return (
    <div className='mt-8 flex justify-between items-center p-4 rounded-lg bg-gray-50 drop-shadow-sm'>
        <span className='text-xs text-gray-500'>{firstIndex +1}-{secondIndex +1} of {usersNo}</span>
        <div className='flex items-center'>
            <span className='text-xs text-gray-500'>The page you'are on</span>
            <div className='ml-3 flex items-center bg-white rounded-lg px-1 py-0.5 border-2 border-gray-200 font-bold'>
                <span className='text-xs text-blue-900'>{page}</span>
               <ChevronDownIcon className='w-3 h-3 ml-1 text-blue-900'/>
            </div>
            <div 
                 className='ml-3 flex items-center bg-white rounded-lg px-1 py-0.5 border-2 border-gray-200 font-bold'
                 onClick={backHandler}>
               <ArrowSmLeftIcon className={`w-4 h-4  ${firstIndex === 5 ? "text-blue-900" : "text-gray-400"}`}/>
            </div>
            <div 
               className='ml-1 flex items-center bg-white rounded-lg px-1 py-0.5 border-2 border-gray-200 font-bold'
               onClick={nextHandler}>
               <ArrowSmRightIcon className={`w-4 h-4 ${firstIndex === 5 ? "text-gray-400" : "text-blue-900"}`}/>
            </div>
        </div>
    </div>
  )
}

export default Pagination