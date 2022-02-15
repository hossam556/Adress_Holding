import React from 'react'

const Table = ({newUsers}) => {
  console.log('Table rendered')
  
  const addCol = (e) => {
    let elements = document.querySelectorAll(`#${e.target.value}`);

    for(let i=0 ; i < elements.length ; i++ ){
       elements[i].classList.remove("hidden");
    }

  }
    
  const removeCol = (e) => {
    let elements = document.querySelectorAll(`#${e.target.value}`);

    for(let i=0 ; i < elements.length ; i++ ){
       elements[i].classList.add("hidden");
    }

  }

  return (
    <div className="flex flex-col mt-2">
        <div className='flex items-center justify-between py-2 px-1'>
          <div>
            Hide Column{' '}
            <select value='' onChange={removeCol}>
                <option disabled value=''></option>
                <option value='name'>name</option>
                <option value='email'>email</option>
                <option value='street'>street</option>
                <option value='city'>city</option>
            </select>
          </div>      
          <div>
            Show Column{' '}
            <select value='' onChange={addCol}>
                <option disabled value=''></option>
                <option value='name'>name</option>
                <option value='email'>email</option>
                <option value='street'>street</option>
                <option value='city'>city</option>
            </select>
          </div>      
        </div>
        <div className="overflow-hidden  sm:rounded-lg">
          <table className="min-w-full divide-y ">
            <thead className="bg-gray-50">
              <tr>
                <th
                id='name'
                scope="col"
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Name
                </th>
                <th
                id='email'
                scope="col"
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Email
                </th>
                <th
                id='street'
                scope="col"
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Street
                </th>
                <th
                id='city'
                scope="col"
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                City
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
            {newUsers.map((person , index) => (
              <tr className={`border-b-2 border-gray-100 hover:bg-gray-200 transition-all duration-300 cursor-pointer`} key={person.email}>
                <td  id='name' className="px-6 py-6 md:table-cell text-xs lg:text-sm font-medium text-gray-900">
                    {person.name}
                </td>
                <td  id='email' className="px-6 py-6  text-xs lg:text-sm  text-gray-900">
                    {person.email}
                </td>
                <td  id='street' className="px-6 py-6  text-xs lg:text-sm  text-gray-900">
                    {person.address.street}
                </td>
                <td  id='city' className="px-6 py-6  text-xs lg:text-sm  text-gray-900">
                    {person.address.city}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}


export default Table