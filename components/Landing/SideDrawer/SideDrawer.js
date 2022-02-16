import React from 'react'
import Section from '../../Sidebar/Section'
import {sectionsData} from '../../../utils/sections'
import {LogoutIcon} from '@heroicons/react/outline'

const SideDrawer = ({opened}) => {
  return (
    <div 
     id='sideDrawer'
     className={`absolute top-0 -left-64 z-100 bg-blue-500 w-64 h-screen transition duration-200`}>
       <div className="flex flex-col justify-between mt-6">
            <aside>
            <ul>
                {sectionsData.map((item,index) => 
                    <Section name={item.name} Icon={item.icon} index={index} key={index}/>
                    )}
            </ul>
            </aside>
        </div>
        <div className='flex items-center p-4 text-gray-200 rounded-md  cursor-pointer hover:bg-gray-200'>
            <LogoutIcon className="w-6 h-6 mr-2"/>
            <a href='#'>Logout</a>
        </div>
    </div>
  )
}

export default SideDrawer