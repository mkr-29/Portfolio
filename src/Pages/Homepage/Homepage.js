import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import MyWorks from "./Components/MyWorks/MyWorks";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import TechStack from "./Components/TechStack/TechStack";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Landing />
      <About />
      <MyWorks />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <div className="scroll-to-top">
        <Link onClick={() => scroll.scrollToTop()} to="/">
        ⬆
        </Link>
      </div>
    </div>
  );
}
