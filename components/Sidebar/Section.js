import React from 'react'

const Section = ({name , Icon , index}) => {
  return (
 <li className='mt-2'>
    <a className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md ${index===1 && 'bg-gray-200 text-blue-800'}`} href="#">
        <Icon className="w-6 h-6 mr-5" />
        <span className="font-medium">{name}</span>
    </a>
  </li>
  )
}

export default Section