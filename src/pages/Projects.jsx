import React from "react";
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>Projects Page</h1>
      <div className="project-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
   

    </div>
  );
}
