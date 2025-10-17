import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h2 className="greeting">Hey, I’m <span className="highlight">Efrata</span></h2>
          <p className="intro-text">
            A Front-End Developer passionate about crafting beautiful, functional, and accessible digital experiences.
          </p>
          <button className="glow-btn">Explore My Work</button>
        </div>

        <div className="floating-shape"></div>
        <div className="floating-shape2"></div>
      </section>

    </div>
  );
};

export default Home;
