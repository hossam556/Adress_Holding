import React , {useState} from 'react'
import Nav from './Nav/Nav'
import Filter from './Filter/Filter'
import Table from './Table/Table'
import Pagination from './Pagination/Pagination'
import MobileNav from './MobileNav/MobileNav'
import SideDrawer from './SideDrawer/SideDrawer'

const Landing = ({results}) => {
  const [page , setPage] = useState(1);
  const [opened , setOpened] = useState(false);

  const nextHandler =() => {
    if(page === 2) return;
     setPage(prev => prev + 1)
  }
  const backHandler =() => {
    if(page === 1) return;
    setPage(prev => prev - 1)
 }
 const sideDrawerHandler = () => {
  let element = document.querySelector('#sideDrawer');
  element.classList.toggle("translate-x-64")
 }

  let usersNo = results.length ;
  let noPerPage = usersNo/2 ;
  let firstIndex = (page -1) * noPerPage ; 
  let secondIndex = (page * noPerPage) -1 ;

  let newUsers = results.slice(firstIndex,secondIndex+1) ;

  return (
    <div className='relative w-full h-full md:p-4 md:m-4 overflow-y-auto '>
      <MobileNav sideDrawerHandler={sideDrawerHandler}/>
      <div className='p-4 md:p-0 '>
        <Nav/>
        <Filter/>
        <Table newUsers={results}/>
        <Pagination 
          usersNo={usersNo} 
          page={page}
          firstIndex={firstIndex} 
          secondIndex={secondIndex}
          nextHandler={nextHandler}
          backHandler={backHandler}/>
      </div>
      <SideDrawer 
      // opened={opened}
      />
    </div>
  )
}

export default Landing