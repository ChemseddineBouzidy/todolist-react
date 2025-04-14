import React, { createContext, useContext } from "react";
import UsersTable from "./UsersTable";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import { BrowserRouter, Link, Route, Routes, Outlet } from "react-router-dom";
import { UsersContext } from "./UserApp";
import UserDelete from "./userDelete";





function UsersLayout() {


  return (
    <>
      <BrowserRouter>
        <nav className="bg-white shadow p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to={'/'} className="text-blue-600 hover:underline">Users List</Link>
            </li>
            <li>
              <Link to={'/user/creat'} className="text-blue-600 hover:underline">ADD User</Link>
            </li>
          </ul>
        </nav>

          <Routes>
            <Route index element={<UsersTable />} />
            <Route path={'/user/creat'} element={<UserAdd />} />

            <Route path={'/user/:id/edit'} element={<UserEdit />} />
            <Route path={'/user/:id/delete'} element={<UserDelete />} />


          </Routes>
    
      </BrowserRouter>

      <Outlet />
    </>
  );
}

export default UsersLayout;
