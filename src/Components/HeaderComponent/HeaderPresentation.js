import React from "react";
import "./headerComponent.css";
import GoogleAuth from "../GoogleAuth";

import { NavLink } from "react-router-dom";
export default function HeaderContainer() {
  return (
    <nav>
      <>
        {/* <img src="#" alt="logo" /> */}
        <ul>
          <NavLink
            exact
            to="/"
            className="link-style"
            activeClassName="activeLink"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="link-style"
            activeClassName="activeLink"
          >
            About
          </NavLink>
          <NavLink
            to="/trendy-movies"
            className="link-style"
            activeClassName="activeLink"
          >
            Trendy Movies
          </NavLink>
          <NavLink
            to="/search-movie"
            className="link-style"
            activeClassName="activeLink"
          >
            Search for Movie
          </NavLink>
          <NavLink
            to="/contact"
            className="link-style"
            activeClassName="activeLink"
          >
            Contact
          </NavLink>
        </ul>
      </>
      <div className="sign-in-icon-box">
        <GoogleAuth />
        {/* <span id="text-icon-circle">
          <FontAwesomeIcon className="icons" icon="user-circle" size="2x" />
          <li>Sign In With Google</li>
        </span> */}
        {/* <span id="text-icon-plus">
          <FontAwesomeIcon className="icons" icon="user-plus" size="2x" />
          <li>Register</li>
        </span> */}
        {/* <li>My Movies</li> */}
      </div>
    </nav>
  );
}
