import React , {useState} from 'react'

const DropDown = ({ changeHandler , item , lessHandler , moreHandler}) => {
    

  return (
    <div 
      style={{maxWidth:'250px', boxShadow:"0px 2px 2px 0px black"}}
      className={`absolute left-3 z-10 p-5 bg-white rounded-lg shadow-lg ${item === 'id' ? 'bottom-[-145px]' : 'bottom-[-80px]'}`}>
        <input 
            className='border-2 border-orange-300 outline-none w-24 p-1' 
            type={item === 'id' ? 'number' : 'text'} 
            placeholder='Filter'
            // value={userInput}
            // onChange={(e) =>changeHandler(e)}
            onKeyDown={(e) =>changeHandler(e ,item)}/>
      {item === 'id' &&
       <> <input 
            className='border-2 border-orange-300 outline-none w-24 p-1 my-1' 
            type={item === 'id' ? 'number' : 'text'} 
            placeholder='Less than'
            onChange={(e) =>lessHandler(e , item)}/>
        <input 
            className='border-2 border-orange-300 outline-none w-24 p-1' 
            type={item === 'id' ? 'number' : 'text'} 
            placeholder='More than'
            onKeyDown={(e) =>moreHandler(e , item)}/>
        </>}
    </div>
  )
}

export default DropDown