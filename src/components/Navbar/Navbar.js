import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Navigating-with-Nancy-Final.png";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
	
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img
          src={logo}
          alt="logo"
          style={{ textDecorationLine: "none", width: "80px" }}
        />
        Nancy McBride
      </Link>

      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link" onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
