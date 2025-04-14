import React, { Children } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { UserProvider } from "../useContextUserExample/UsersContext";



function Layout() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </UserProvider>
    </>
  );
}

export default Layout;
