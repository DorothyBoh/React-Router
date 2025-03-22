import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Menu />
      <h2 className="text-shadow">Hello WELCOME!!!!</h2>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;