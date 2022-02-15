import React from 'react'

const Table = ({results}) => {
  
  let newUsers = results.slice(0,4) ;

  return (
    <div className="flex flex-col mt-8">
        <div className="overflow-hidden  sm:rounded-lg">
          <table className="min-w-full divide-y ">
            <thead className="bg-gray-50">
              <tr>
                <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Name
                </th>
                <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Email
                </th>
                <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Street
                </th>
                <th
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
                <td className="px-6 py-6  text-sm font-medium text-gray-900">
                    {person.name}
                </td>
                <td className="px-6 py-6  text-sm text-gray-900">
                    {person.email}
                </td>
                <td className="px-6 py-6  text-sm text-gray-900">
                    {person.address.street}
                </td>
                <td className="px-6 py-6  text-sm text-gray-900">
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