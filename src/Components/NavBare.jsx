
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./NavBare.css";

export default function Nav_bare() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav">
        <div className="nav-center">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/category" className="nav-link">
            Category
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact us
          </NavLink>
        </div>

        <div className="nav-right">
          <NavLink to="/login" className="login-link">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}