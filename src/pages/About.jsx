import React from "react";
import "./About.css";
import profilePic from "../assets/profile.jpg"; // replace with your profile pic

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* Left: Profile picture */}
        <div className="profile-pic-container">
          <img
            src={profilePic}
            alt="Efrata Profile"
            className="profile-pic"
          />
        </div>

        {/* Right: About text */}
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I’m <span className="highlight">Efrata</span>, a passionate front-end developer. I specialize in creating beautiful, responsive, and interactive web experiences using modern technologies like React and CSS.
          </p>
          <p>
            I love designing user interfaces that feel alive and intuitive. I’m constantly exploring creative ways to make websites interactive and visually appealing.
          </p>

          <div className="skills-box">
            <h3>Skills</h3>
            <ul>
              <li>React.js / Vite</li>
              <li>CSS / Tailwind</li>
              <li>3D Effects / Depth Design</li>
              <li>Responsive UI Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
