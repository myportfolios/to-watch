import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./footer.css";

export default function FooterComponent({ match }) {
  console.log(window.location.pathname);
  const [showFooterPopup, hideFooterPopup] = useState(false);
  return (
    <>
      <div className="footer">
        <div className="footer-header-box">
          <h3 className="footer-header">
            Would you like to get the latest movies in your inbox?
          </h3>
          <h5 className="footer-text">
            Subscribe for our weekly newsletter below
          </h5>
          <div className="footer-subscribe-box">
            <input placeholder="Email" id="email-subscribe-field" />
            <p id="footer-newsletter">Subscribe</p>
          </div>
        </div>
        <div className="footer-links">
          <Link to="./home" className="links">
            Home
          </Link>
          <Link to="./about" className="links">
            About
          </Link>
          <Link to="./trendy-movies" className="links">
            Trendy Movies
          </Link>
          <Link to="./search-movie" className="links">
            Search Movie
          </Link>
          <Link to="./contact" className="links">
            Contact
          </Link>
        </div>
      </div>
      <FooterContactBox />
    </>
  );
}

const FooterContactBox = () => {
  return (
    <div className="footer-popup">
      <div className="footer-header-box">
        <h3 className="footer-header">
          Would you like to get the latest movies in your inbox?
        </h3>
        <h5 className="footer-text">
          Subscribe for our weekly newsletter below
        </h5>
        <div className="footer-subscribe-box">
          <input placeholder="Email" id="email-subscribe-field" />
          <p id="footer-newsletter">Subscribe</p>
        </div>
      </div>
    </div>
  );
};
