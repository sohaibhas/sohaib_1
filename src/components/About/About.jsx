import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="cony">
      <div className="blog">
        <div className="blog-1">
          <h1 className="about">About Me</h1>
        </div>
        <div className="blog-2">
          <div>
            <h2><span className="red">Hi! I'M SOHAIB HASSAN</span></h2>
          </div>
          <p>
            My name is <b>SOHAIB HASSAN</b>, I graduated from{" "}
            <strong>COMSATS</strong> University with a bachelor's degree in{" "}
            <strong>SOFTWARE ENGINEERING</strong>. I invest my free time
            learning new things, freelancing, and improve my skills with hands
            on experience. I love programming, developing, building interesting
            things that make people's lives easier and fun. I love learning new
            things and expand my knowledge, teaching and helping others, lead a
            team and work together.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
};
export default About;
