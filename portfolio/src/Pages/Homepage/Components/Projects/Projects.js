import React from "react";
import PSlider from "./Cards/PSlider";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projs" id="projects">
      <div className="proj-inner">
        <h1 className="proj-head">My Projects</h1>
        <PSlider/>
      </div>
    </div>
  );
}
