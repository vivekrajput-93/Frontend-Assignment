import React, { useState } from "react";
import "../CSS/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">
          viv<span className="primary">EK</span>
        </h1>
        <ul className={show ? "menu active" : "menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/todo">TO-DO</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/shop">Cart</Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Contact Me</button>
        </div>
        <div className="hamburger" onClick={handleShow}>
          {show ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
