import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./NavBare.css";
import React, { useState, useEffect, useRef } from "react";

export default function Nav_bare() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
import React, { useState, useEffect } from "react";
import { auth, loginWithGoogle, logout } from "./Firebase.jsx";

export default function Nav_bare() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null); // Firebase user
  const [localUser, setLocalUser] = useState(null); // Utilisateur local
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // Récupérer utilisateur local
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setLocalUser(storedUser);

    // Écouter Firebase
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleScroll = (id) => {
    if (location.pathname !== "/home" && location.pathname !== "/") {
      navigate("/home");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
      </div>

      <div
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        ref={hamburgerRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

  
      <div className="nav">
        <div className="nav-center">
          <span className="nav-link" onClick={() => handleScroll("home")}>
            Home
          </span>
          <span className="nav-link" onClick={() => handleScroll("about")}>
            About
          </span>

          <div
            className="nav-link dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            Category
            {open && (
              <div className="dropdown-menu">
                <NavLink to="/subject/philosophy" className="dropdown-item">
                  Philosophie
                </NavLink>
                <NavLink
                  to="/subject/artificial_intelligence"
                  className="dropdown-item"
                >
                  Artificial Intelligence
                </NavLink>
                <NavLink to="/subject/programming" className="dropdown-item">
                  Programming
                </NavLink>
                <NavLink
                  to="/subject/machine_learning"
                  className="dropdown-item"
                >
                  Machine Learning
                </NavLink>
                <NavLink to="/subject/mathematics" className="dropdown-item">
                  Math
                </NavLink>
                <NavLink to="/subject/physics" className="dropdown-item">
                  Physique
                </NavLink>
              </div>
            )}
          </div>

          <span className="nav-link" onClick={() => handleScroll("contact")}>
            Contact Us
          </span>
        </div>

        <div className="nav-right">
          {user || localUser ? (
            <button
              className="login-link"
              onClick={() => {
                logout(); // déconnecte Firebase
                localStorage.removeItem("currentUser"); // déconnecte utilisateur local
                setLocalUser(null);
                navigate("/login"); // redirige vers login
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
          )}
        </div>
      </div>

     
      {mobileMenuOpen && (
        <div className="nav-mobile" ref={mobileMenuRef}>
          <div className="nav-center">
            <span className="nav-link" onClick={() => handleScroll("home")}>
              Home
            </span>
            <span className="nav-link" onClick={() => handleScroll("about")}>
              About
            </span>

            <div className="nav-link dropdown">
              Category
              <div className="dropdown-menu">
                <NavLink to="/subject/philosophy" className="dropdown-item">
                  Philosophie
                </NavLink>
                <NavLink
                  to="/subject/artificial_intelligence"
                  className="dropdown-item"
                >
                  Artificial Intelligence
                </NavLink>
                <NavLink to="/subject/programming" className="dropdown-item">
                  Programming
                </NavLink>
                <NavLink
                  to="/subject/machine_learning"
                  className="dropdown-item"
                >
                  Machine Learning
                </NavLink>
                <NavLink to="/subject/mathematics" className="dropdown-item">
                  Math
                </NavLink>
                <NavLink to="/subject/physics" className="dropdown-item">
                  Physique
                </NavLink>
              </div>
            </div>

            <span className="nav-link" onClick={() => handleScroll("contact")}>
              Contact Us
            </span>
          </div>


          <div className="nav-right">
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
