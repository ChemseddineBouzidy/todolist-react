import React, { useContext, useEffect, useRef, useState } from "react";
import { UsersContext } from "./UserApp";
import { useParams } from "react-router";
const UserEdit = () => {
  const context = useContext(UsersContext);
  const fullname = useRef(null);
  const country = useRef(null);
  const [curentUser, setCurentUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const {id}= params
     const user = context.users.filter((user)=>user.id === parseInt(id))
     if(user.length>0){
        setCurentUser(...user)
     }else{
    console.error("user not found");

     }
    console.log(user);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    context.updateUser({
        payload : {
            fullname:fullname.current.value,
            country:country.current.value,
            id:parseInt(params.id),


        }
    })
   fullname.current.value=''
    country.current.value=''
  };
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add user</h1>
      <form onSubmit={handleSubmit}>
        {/* Current ID */}
        <div className="mb-4 flex items-center">
          <label
            htmlFor="currentId"
            className="w-1/3 text-gray-700 font-medium"
          >
            Current ID
          </label>
          <input
            type="text"
            // readOnly
            id="currentId"
            // value={context.lastId + 1}
            defaultValue={curentUser?.id}
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
            // value={curentUser.fullname}
            defaultValue={curentUser?.fullname}

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
            // value={curentUser.country}
            defaultValue={curentUser?.country}
            key={curentUser?.country}
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
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
