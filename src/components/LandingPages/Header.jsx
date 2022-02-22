import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
      <header  className="header bd-grid">
        <div className="nav">
          <div className="logo">
            <a href="/">
              <span className="blue">.SO</span>hAIB
            </a>
          </div>
          <div className="mid">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            {/* <ul>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul> */}
            <ul>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/contact"><button className="btn">Contact</button></Link>
              </li>
            </ul>
          </div>
          {/* <div className="right">
            <button className="btn">LOGIN</button>
            <button className="btn">SIGNUP</button>
          </div> */}
        </div>
      </header>
  );
};

export default Header;
