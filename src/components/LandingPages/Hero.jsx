import React from "react";
import sohaib from "../../assets/2.png";
import "./Hero.css";
import { FaInstagram, FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="social">
        <ul>
          <li>
            <a href="#">
              <FaFacebookF className="facebook icon" />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <FaInstagram className="instagram icon" />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <FaTwitter className="twitter icon" />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <FaGithub className="github icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="hero-left">
        <h1>
          <span className="blue">SOHAIB</span> HASSAN
        </h1>
        <h3>
          a <span className="blue">programer</span>, software{" "}
          <span className="blue">developer</span>
        </h3>
      </div>
      <div className="hero-right social-icon">
        <img src={sohaib} alt="" />
      </div>
  </div>
  );
};

export default Hero;
