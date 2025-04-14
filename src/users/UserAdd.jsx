import React, { useContext, useEffect, useRef } from 'react'
import { UsersContext } from './UserApp';

const UserAdd = () => {
    const  context = useContext(UsersContext);
    const fullname = useRef(null)
    const country = useRef(null)
// useEffect(()=>{
// console.log(context)
// },[])
    const handleSubmit = (e) =>{
        e.preventDefault()
      
        context.addUser({
            payload : {
                fullname:fullname.current.value,
                country:country.current.value,
                id:context.lastId+1
            }
        })
       fullname.current.value=''
        country.current.value=''
    }
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add user</h1>
      <form onSubmit={handleSubmit}>
        {/* Current ID */}
        <div className="mb-4 flex items-center">
          <label htmlFor="currentId" className="w-1/3 text-gray-700 font-medium">
            Current ID
          </label>
          <input
            type="text"
            readOnly
            id="currentId"
            value={context.lastId+1}
            className="w-2/3 bg-transparent border-none text-gray-800"
          />
        </div>

        {/* Full Name */}
        <div className="mb-4 flex items-center">
          <label htmlFor="fullName" className="w-1/3 text-gray-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            ref={fullname}
            className="w-2/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Country */}
        <div className="mb-6 flex items-center">
          <label htmlFor="country" className="w-1/3 text-gray-700 font-medium">
            Country
          </label>
          <select
            id="country"
            name="country"
            ref={country}
            className="w-2/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your country</option>
            <option value="Morocco">Morocco</option>
            <option value="Algeria">Algeria</option>
            <option value="Tunisia">Tunisia</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserAdd
