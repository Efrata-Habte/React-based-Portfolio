// import React from "react";
// import "../App.css";
// import ProjectCard from "../components/ProjectCard";
// import AboutSection from "../components/AboutSection";
// import ContactForm from "../components/ContactForm";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <header className="hero-section">
//         <h1 className="hero-title">Hi, I'm <span className="highlight">Your Name</span></h1>
//         <p className="hero-subtitle">A Passionate Front-End Developer crafting modern web experiences.</p>
//         <button className="hero-btn">View My Work</button>
//       </header>

//       <section className="projects-section">
//         <h2 className="section-title">Featured Projects</h2>
//         <div className="projects-grid">
//           <ProjectCard title="Project One" description="Short description about your project." />
//           <ProjectCard title="Project Two" description="Another creative project description." />
//           <ProjectCard title="Project Three" description="Something unique you’ve built." />
//         </div>
//       </section>

//       <section className="about-section">
//         <AboutSection />
//       </section>

//       <section className="contact-section">
//         <ContactForm />
//       </section>

//       <footer className="footer">
//         <p>© 2025 Your Name | Built with ❤️ & React</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h2>Hello, I'm <span className="highlight">Efrata</span></h2>
          <p className="subtitle">
            A Front-End Developer focused on creating sleek, accessible, and modern web experiences.
          </p>
          <button className="cta-btn">View My Work</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
