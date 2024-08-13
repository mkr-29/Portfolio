import React from "react";
import Slider from "./Cards/Slider";
import "./TechStack.css";

export default function TechStack() {
  return (
    <div className="tech-stack">
      <div className="tech-stack-inner">
        <span className="tech-stack-heading">My Tech Stack</span>
        <div className="mts-carousel">
          <Slider />
        </div>
      </div>
    </div>
  );
}
