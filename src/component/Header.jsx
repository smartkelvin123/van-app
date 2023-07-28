import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "";

const Header = () => {
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Vans
          </NavLink>
          <NavLink>
            <Link to="/login" className="login-link">
              Login
              <img
                // src="./home-hero/png"
                src="../avatar-icon(1).png"
                className="login-icon"
                // alt="icon"
              />
            </Link>
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
