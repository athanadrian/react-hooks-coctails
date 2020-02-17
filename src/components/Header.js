import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="Coctail db logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
