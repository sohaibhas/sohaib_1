import React from "react";
import "./Services.css";
import { FaPaintBrush, FaCode, FaReact } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";

const Services = () => {
  return (
    <div className="container">
      <section className="services" classId="services">
        <div class="max-width">
          <h2 class="title">My Services</h2>
          <div class="serv-content">
            <div class="card">
              <div class="box">
                <FaReact className="i" />
                <div class="text">Web Design</div>
                <p>
                  Engaging and efficient web design and development solutions.
                  Transcending convention through innovative web
                  solutions.Ensure high performance.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <FcAdvertising className="i" />
                <div class="text">Advertising</div>
                <p>
                  Lead the industry with our result-oriented digital marketing
                  services. Increase brand awareness and increase profitability
                  through robust solutions.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <FaCode className="i" />
                <div class="text">Apps Design</div>
                <p>
                  We bring you the finest mobile app solutions with fascinating
                  user experiences to address a problem with the right solution,
                  enthrall people and get them engaged
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <FaPaintBrush className="i" />
                <div class="text">UI/UX Design</div>
                <p>
                  Get an eye catching-look and feel for your solutions with
                  UI/UX design services.we will make its UX design delicate,
                  simple,design flexible and easy to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="my-skills">
        <h1>My skills</h1>
        <p>What I Know</p>
      </div>
      <div class="skill-bars">
        <div class="bar">
          <div class="info">
            <span>HTML</span>
          </div>
          <div class="progress-line html">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>CSS</span>
          </div>
          <div class="progress-line css">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>Java</span>
          </div>
          <div class="progress-line jquery">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>Python</span>
          </div>
          <div class="progress-line python">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>React</span>
          </div>
          <div class="progress-line mysql">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
