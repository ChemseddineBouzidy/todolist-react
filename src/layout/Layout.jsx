import React, { Children } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
