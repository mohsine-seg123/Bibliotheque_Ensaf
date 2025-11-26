
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./NavBare.css";
import MathBooks from '../Components/Math';
import React, { useEffect, useState } from "react";


export default function Nav_bare() {
    const [open, setOpen] = useState(false);
  
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
            <div
            className="nav-link dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            Category
            {open && (
              <div className="dropdown-menu">
                <NavLink to="/math" className="dropdown-item">Math</NavLink>
                <NavLink to="/physique" className="dropdown-item">Physique</NavLink>
                <NavLink to="/philosophie" className="dropdown-item">Philosophie</NavLink>
                <NavLink to="/datascience" className="dropdown-item">Data Science</NavLink>
              </div>
            )}
          </div>
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