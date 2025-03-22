import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Menu;