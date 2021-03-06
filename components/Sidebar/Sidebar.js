import React from 'react'
import { ColorSwatchIcon ,LogoutIcon} from '@heroicons/react/outline'
import Section from './Section'
import {sectionsData} from '../../utils/sections'

const Sidebar = () => {

   

  return (
    <div className='md:flex flex-col justify-between w-80 h-screen px-4 pt-8 overflow-y-auto border-r hidden'>
         <div>
            <h3 className="flex items-center text-2xl px-4 font-semibold text-blue-800">
                <ColorSwatchIcon className="w-6 h-6 mr-5"/>
                <span>X</span>
                Trade
            </h3>
            <div className='flex items-center px-4 mt-10'>
                <span className='rounded-full bg-gray-200 px-2 py-1 text-blue-800'>LS</span>
                <div className='ml-3'>
                    <span className='text-xs text-gray-500 '>Supplier</span><br/>
                    <span className='font-bold'>Laura Schellen</span>
                </div>
            </div>
            <div className="flex flex-col justify-between mt-6">
                <aside>
                <ul>
                    {sectionsData.map((item,index) => 
                        <Section name={item.name} Icon={item.icon} index={index} key={index}/>
                        )}
                </ul>
                </aside>
            </div>
        </div>
        <div className='flex items-center p-4 text-gray-600 rounded-md mb-2 cursor-pointer hover:bg-gray-200'>
            <LogoutIcon className="w-6 h-6 mr-2"/>
            <a href='#'>Logout</a>
        </div>
    </div>
  )
}

export default Sidebar