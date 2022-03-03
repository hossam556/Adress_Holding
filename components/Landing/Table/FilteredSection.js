import React from 'react'
import {XCircleIcon} from '@heroicons/react/outline'


const FilteredSection = ({filteredArray , deletFilterHandler}) => {

  return (
    <div className='flex items-center p-2'>
        {filteredArray.map((item,index) => 
        {
        return <div       
           key={index}
           style={{maxWidth:'180px', boxShadow:"0px 2px 2px 0px black"}}
           className={`z-10 p-3 bg-green-300 rounded-lg shadow-lg mr-1 text-xs flex items-center`}>
            <span>filtered by {item.col} : {item.value}</span>
            <XCircleIcon className='h-5 w-5 ml-2 text-gray-500 hover:text-gray-800 cursor-pointer'  onClick={() => deletFilterHandler(item.col)}/>
        </div>
        }
        )}
    </div>
  )
}

export default FilteredSection