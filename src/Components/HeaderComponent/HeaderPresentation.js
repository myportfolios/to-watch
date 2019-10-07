import React from "react";
import "./headerComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HeaderContainer() {
  return (
    <nav>
      <>
        {/* <img src="#" alt="logo" /> */}
        <ul>
          <li>Google.com</li>
          <li>Home</li>
          <li>About</li>
          <li>Movies</li>
          <li>Home</li>
        </ul>
      </>
      <div className="sign-in-icon-box">
        <span id="text-icon-circle">
          <FontAwesomeIcon className="icons" icon="user-circle" size="2x" />
          <li>Sign In</li>
        </span>
        <span id="text-icon-plus">
          <FontAwesomeIcon className="icons" icon="user-plus" size="2x" />
          <li>Register</li>
        </span>
        {/* <li>My Movies</li> */}
      </div>
    </nav>
  );
}
