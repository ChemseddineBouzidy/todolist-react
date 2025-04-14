import React, { useContext } from "react";
import { UsersContext } from "./UserApp";
import { Link } from "react-router";

const UsersTable = () => {
  const context = useContext(UsersContext)
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                fullname
              </th>
              <th scope="col" className="px-6 py-3">
                country
              </th>
              <th scope="" className="px-10 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {context.users?.length > 0 ? (
              context.users.map((user, key) => (
                <tr
                  key={key}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4">#{user.id}</td>
                  <td className="px-6 py-4">{user.fullname}</td>
                  <td className="px-6 py-4">{user.country}</td>
                  <td className="px-6 py-4">
                  <Link className="px-4 py-2 rounded-xl text-white mr-2 bg-blue-700" to={`/user/${user.id}/edit`}>Edit</Link>
                  <Link className=" py-2 px-2 rounded-xl text-white  bg-blue-700" to={`/user/${user.id}/delete`}>Delete</Link>
                  </td>

                </tr>
              ))
            ) : (
              <>No users found !!!</>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
