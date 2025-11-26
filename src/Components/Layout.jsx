import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav_bare from "./NavBare";
import Footer from "./Footer";
import "./Layaut.css";
const Layout = () => {
  const location = useLocation(); // React Router hook
  const currentPath = location.pathname; // Dynamic path

  return (
    <div className="layaut">
      {currentPath !== "/login" && currentPath !=="/register" && <Nav_bare />}
      <Outlet />
      {currentPath !== "/login" && currentPath !=="/register" && <Footer />}
    </div>
  );
};

export default Layout;
