import React , {useState} from 'react'
import Nav from './Nav/Nav'
import Filter from './Filter/Filter'
import Table from './Table/Table'
import Pagination from './Pagination/Pagination'

const Landing = ({results}) => {
  const [page , setPage] = useState(1);

  const nextHandler =() => {
    if(page === 2) return;
     setPage(prev => prev + 1)
  }
  const backHandler =() => {
    if(page === 1) return;
    setPage(prev => prev - 1)
 }

  let usersNo = results.length ;
  let noPerPage = usersNo/2 ;
  let firstIndex = (page -1) * noPerPage ; 
  let secondIndex = (page * noPerPage) -1 ;

  let newUsers = results.slice(firstIndex,secondIndex) ;

  return (
    <div className='w-full h-full p-4 m-4 overflow-y-auto'>
        <Nav/>
        <Filter/>
        <Table newUsers={newUsers}/>
        <Pagination 
          usersNo={usersNo} 
          page={page}
          firstIndex={firstIndex} 
          secondIndex={secondIndex}
          nextHandler={nextHandler}
          backHandler={backHandler}/>
    </div>
  )
}

export default Landing