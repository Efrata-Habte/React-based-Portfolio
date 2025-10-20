import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description }) => {
  return (
    <>
      <div className="project-card">
        <h3>{title}Mini Git</h3>
        <p>{description}Version Control System</p>
        <button className="card-btn">Explore</button>
      </div>
    </>
  );
};

export default ProjectCard;

