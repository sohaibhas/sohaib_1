import React from "react";
import "./Contact.css";
import { FaInstagram, FaGithub, FaFacebookF, FaTwitter,FaPhoneAlt,FaMailBulk } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className="container">
      <section className="contact" id="contact">
        <h1 className="heading">
          <span className="sp">contact us</span>
          <p>If you have any questions, please feel free to drop me a line</p>
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
              <input type="text" placeholder="Name" />
            </div>
            <div className="inputBox">
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="Number" />
            </div>
            <input type="submit" value="CONTACT NOW" className="btn" />
          </form>
        </div>
      </section>
      <div className="social">
        <div className="phone">
          <div className="phone-1">
            <FaPhoneAlt className="i-contact" />
            <h3>
              Phone <br />
              +92340-4892471
            </h3>
          </div>
          <div className="phone-1">
            <FaMailBulk className="i-contact" />
            <h3>
              E-mail <br />
              sohaibhassan0000@gmail.com
            </h3>
          </div>
          <div className="phone-1">
            <ImLocation2 className="i-contact" />
            <h3>
              Lahore <br />
              Pakistan
            </h3>
          </div>
        </div>
        <div className="socail-icon">
          <h1>Follow Us On</h1>
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
      </div>
    </div>
  );
};

export default Contact;
