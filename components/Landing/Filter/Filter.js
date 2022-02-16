import React from 'react'
import {SearchIcon , FilterIcon , ArrowCircleDownIcon} from '@heroicons/react/outline'


const Filter = () => {
  return (
    <div className='mt-4 flex flex-col lg:flex-row justify-between items-center p-4 rounded-lg bg-gray-100 drop-shadow-sm'>
        <form className='w-4/5 relative drop-shadow-md mb-2 lg:mb-0'>
            <SearchIcon className='w-5 h-5 absolute left-2 top-2.5 text-gray-500'/>
            <input className='border-none py-2 pl-9 pr-3 border-2 border-gray-300 rounded-lg w-full outline-none' 
                   type='search' 
                   placeholder="Search for organizations , trading amounts.."/>      
        </form>
        <div className='flex justify-around items-center w-full  lg:w-1/5 ml-7 text-blue-900 '>
            <button className='flex items-center justify-around bg-white max-w-xs  px-3 py-2 rounded-lg font-semibold drop-shadow-md mr-1 hover:scale-110 transition duration-150'>
                <FilterIcon className='w-5 h-5 mr-2'/>
                Filters
            </button>
            <button className='flex items-center justify-around bg-white max-w-xs  px-3 py-2 rounded-lg font-semibold drop-shadow-md hover:scale-110 transition duration-150'>
                <ArrowCircleDownIcon className='w-5 h-5 mr-2'/>
                Export
            </button>
        </div>
    </div>
  )
}

export default Filter