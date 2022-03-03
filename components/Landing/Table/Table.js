import React , {useState , useRef , useEffect} from 'react'
import {FilterIcon , ArrowCircleDownIcon} from '@heroicons/react/outline'
import DropDown from './DropDown'
import FilteredSection from './FilteredSection';

const Table = ({newUsers}) => {
  const [users , setUsers] = useState(newUsers);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [lessthan, setLessthan] = useState('');
  const [morethan, setMorethan] = useState('');
  const [showedFilter, setShowedFilter] = useState('');
  const [descending , setDescending] = useState(false);
  const [notFoundMassege , setNotFound] = useState('');

  let currentUsers = filteredUsers.length > 0 ? filteredUsers : users ;
  const usersKeys =  Object.keys(users[0]);

  const ref = useRef()

  // console.log(filteredArray)

  const updatingFilterHandler = (filterd) => {
    let objects = {}
    let counter = {}
    let newFiltered = filterd.map(item => item.users)

    newFiltered.map(function(ary, n) {
        ary.map(function(obj) {
            var key = JSON.stringify(obj);
            objects[key] = obj;
            counter[key] = (counter[key] || 0) | (1 << n);
        })
    })

    let intersection = []
    Object.keys(counter).map(function(key) {
        if(counter[key] == (1 << newFiltered.length) - 1)
            intersection.push(objects[key]);
    })

    setFilteredUsers(intersection)
  }

  useEffect(()=>{
    // let intialValues = JSON.parse(localStorage.getItem('filteredusers')) ?
    //                    JSON.parse(localStorage.getItem('filteredusers')) : [] ;

    // setFilteredUsers(intialValues)
    let intialValues = JSON.parse(localStorage.getItem('filteredArray')) ?
                       JSON.parse(localStorage.getItem('filteredArray')) : [] ;

    setFilteredArray(intialValues)
    updatingFilterHandler(intialValues)
  },[])

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showedFilter && ref.current && !ref.current.contains(e.target)) {
        setShowedFilter('')
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [showedFilter])


  const addRemoveCol = (type)=> {
    let checkBox = document.getElementById(`${type}Checkbox`);
    let elements = document.querySelectorAll(`#${type}`);
    if (checkBox.checked == true){
      for(let i=0 ; i < elements.length ; i++ ){
            elements[i].classList.add("hidden");
          }

    } else {
      for(let i=0 ; i < elements.length ; i++ ){
        elements[i].classList.remove("hidden");
      }
    }

  }

  const changeHandler = (e , col)=> {
    if (e.key === 'Enter') {
      const value = e.target.value
      if(col === 'id'){
        value = +value ;
        setUserInput(value);
        setShowedFilter('');
        let sortedUsers = users.filter(item => item.id === value);
        if(sortedUsers.length === 0) {
          setNotFound('No users to display')
          return
        }else{
          setNotFound('')
        }
        let newFilteredArray = [...filteredArray];
        newFilteredArray.push(
          {
            col : col ,
            value : value ,
            users : sortedUsers
          });
        setFilteredArray(newFilteredArray);  
        // localStorage.setItem('filteredusers',JSON.stringify(sortedUsers))
        localStorage.setItem('filteredArray',JSON.stringify(newFilteredArray))
        updatingFilterHandler(newFilteredArray)
      }else{
        setUserInput(value)
        setShowedFilter('')
        let sortedUsers = users.filter(item => item[col].toLowerCase().includes(value.toLowerCase()));
        if(sortedUsers.length === 0) {
          setNotFound('No users to display')
          return
        }else{
          setNotFound('')
        }
        let newFilteredArray = [...filteredArray];
        newFilteredArray.push(
          {
            col : col ,
            value : value ,
            users : sortedUsers
          });
        setFilteredArray(newFilteredArray);    
        // localStorage.setItem('filteredusers',JSON.stringify(sortedUsers))
        localStorage.setItem('filteredArray',JSON.stringify(newFilteredArray))
        updatingFilterHandler(newFilteredArray)
        // if(sortedUsers.length === 0) {
        //   setNotFound('No users to display')
        // }else{
        //   setNotFound('')
        // }
      }
    }
  }

  const lessHandler = (e , col) => {
    const value = e.target.value;
    value = +value;
    setLessthan(value);
    if(e.key === 'Enter' && morethan != ''){ 
      setShowedFilter('');
      let sortedUsers = users.filter(item => morethan < item.id < value );  
      if(sortedUsers.length === 0) {
        setNotFound('No users to display')
        return
      }else{
        setNotFound('')
      }
      let newFilteredArray = [...filteredArray];
      newFilteredArray.push(
        { 
          col : col ,
          value :  '' + morethan + '-' + value  ,
          users : sortedUsers
        });
      setFilteredArray(newFilteredArray);  
      // localStorage.setItem('filteredusers',JSON.stringify(sortedUsers))
      localStorage.setItem('filteredArray',JSON.stringify(newFilteredArray))
      updatingFilterHandler(newFilteredArray)
    }
  }
  const moreHandler = (e , col) => {
    const value = e.target.value;
    value = +value;
    setMorethan(value);
    if((e.key === 'Enter') && (lessthan != '')){
      setShowedFilter('');
      let sortedUsers = users.filter(item => (value < item.id) && (item.id < lessthan) );
      if(sortedUsers.length === 0) {
        setNotFound('No users to display')
        return
      }else{
        setNotFound('')
      }
      let newFilteredArray = [...filteredArray];
      newFilteredArray.push(
        {
          col : col ,
          value :  ''+ value + '-' + lessthan ,
          users : sortedUsers
        });
      setFilteredArray(newFilteredArray);   
      // localStorage.setItem('filteredusers',JSON.stringify(sortedUsers)) 
      localStorage.setItem('filteredArray',JSON.stringify(newFilteredArray))
      updatingFilterHandler(newFilteredArray)
    }
  }
  const sortHandler = (col) => {
    if(col === 'id'){
      let sortedUsers = [...currentUsers]
      sortedUsers.sort((a, b) => {
        return a.id - b.id;
      });
      if(descending === false) sortedUsers.reverse();
      localStorage.setItem('filteredusers',JSON.stringify(sortedUsers))
      // localStorage.setItem('filteredArray',JSON.stringify(newFilteredArray))
      setFilteredUsers(sortedUsers)
      setDescending(!descending);

    }else{
      let sortedUsers = [...currentUsers];
      sortedUsers.sort((a, b) => {
        let fa = a[col].toLowerCase(),
        fb = b[col].toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
      if(descending === true) sortedUsers.reverse();
      localStorage.setItem('filteredusers',JSON.stringify(sortedUsers))
      // localStorage.setItem('filteredArray',JSON.stringify(newFilteredArray))
      setFilteredUsers(sortedUsers);
      setDescending(!descending);
    }
  }
  const showFilterHandler = (col) => {
       setShowedFilter(col)
  }
  const deletFilterHandler = (col)=> {
        let newFilteredArray =filteredArray.filter(item => item.col != col); ;
        setFilteredArray(newFilteredArray)
        updatingFilterHandler(newFilteredArray)
        localStorage.setItem('filteredArray',JSON.stringify(newFilteredArray))
  }

  

  return (
    <>
    <FilteredSection filteredArray={filteredArray} deletFilterHandler={deletFilterHandler}/>
    <div  className="flex flex-col mt-2">
        <div className='flex items-center justify-between py-2 px-1'>
          <div>
              <span htmlFor="nameCheckbox">name : </span> 
              <input type="checkbox" id="nameCheckbox" onClick={() => addRemoveCol('name')}/>
          </div>
          <div>
              <label htmlFor="emailCheckbox">email : </label> 
              <input type="checkbox" id="emailCheckbox" onClick={() => addRemoveCol('email')}/>
          </div>
          <div>
              <label htmlFor="streetCheckbox">street : </label> 
              <input type="checkbox" id="streetCheckbox" onClick={() => addRemoveCol('street')}/>
          </div>
          <div>
              <label htmlFor="cityCheckbox">city : </label> 
              <input type="checkbox" id="cityCheckbox" onClick={() => addRemoveCol('city')}/>
          </div>
        </div>
        <div className="overflow-hidden  sm:rounded-lg" style={{minHeight:'250px'}}>
          <table className="min-w-full divide-y ">
            <thead className="bg-gray-50">
              <tr>
                {usersKeys.map(item => 
                <th
                  key={item}
                  id={item}
                  scope="col"
                  className=" px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className='flex items-center relative'>
                    <span className='mr-3'>{item}</span>
                    <FilterIcon className='w-4 h-4 mr-2 cursor-pointer' onClick={()=> showFilterHandler(item)}/>
                    <ArrowCircleDownIcon className='w-4 h-4  cursor-pointer hover:text-gray-800' onClick={()=> sortHandler(item)}/>
                    {showedFilter === item &&
                     <div ref={ref} >
                       <DropDown 
                        item={item} 
                        changeHandler={changeHandler}
                        moreHandler={moreHandler}
                        lessHandler={lessHandler}
                        />
                     </div>}
                  </div>
                </th>)}
              </tr>
            </thead>
           {notFoundMassege ? <tbody className='p-4 font-bold'><tr>{notFoundMassege}</tr></tbody> 
           : <tbody className="bg-white">
            {currentUsers.map((person , index) => (
              <tr className={`border-b-2 border-gray-100 hover:bg-gray-200 transition-all duration-300 cursor-pointer`} key={index}>
                {usersKeys.map((item,index )=>{
                   return  <td key={index} id={item} className="px-6 py-5 text-xs lg:text-sm text-gray-900">
                   {person[item]}
                  </td> 
                })}
              </tr>
            ))}
            </tbody>}
          </table>
        </div>
    </div>
    </>
  )
}


export default Table