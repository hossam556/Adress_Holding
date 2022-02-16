import React ,{useState} from 'react'

const Nav = () => {
  const [clicked , setClicked] = useState('all');

  const clickHandler = (item) => {
    setClicked(item)
  }

  return (
    <div className='mt-2 md:mt-0'>
        <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold'>Trades</h1>
            <button className='bg-blue-900 text-white rounded-lg px-7 py-3 hover:bg-blue-700  transition duration-150'>
              Create a new trade
            </button>
        </div>
        <div className='mt-5 flex justify-start items-center border-b-2 '>
          <p  
            className={`mr-8 py-3 cursor-pointer ${clicked === 'all' ? 'text-blue-800 font-semibold border-b-2 border-blue-800' :'text-gray-400'}`}
            onClick={() => clickHandler('all')}>
            All trades
          </p>
          <p className={`py-3 cursor-pointer ${clicked === 'offers' ? 'text-blue-800 font-semibold border-b-2 border-blue-800'  :'text-gray-400'}`}
              onClick={() => clickHandler('offers')}>
              Trade offers
          </p>
        </div>
    </div>
  )
}


export default Nav
