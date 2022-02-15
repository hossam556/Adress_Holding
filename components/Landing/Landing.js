import React from 'react'
import Nav from './Nav/Nav'
import Filter from './Filter/Filter'
import Table from './Table/Table'
import Pagination from './Pagination/Pagination'

const Landing = ({results}) => {
  return (
    <div className='w-full h-full p-4 m-4 overflow-y-auto'>
        <Nav/>
        <Filter/>
        <Table results={results}/>
        <Pagination/>
    </div>
  )
}

export default Landing