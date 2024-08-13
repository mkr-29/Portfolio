import React from "react";
import "./Landing.css";
import MK from "./Assets/mayank.png";
import Socials from "../Socials/Socials";
import { Link as LNK } from "react-scroll";


export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-inner">
        <div className="landing-left">
          <span className="introduction">
            I’m <span>Mayank Kumar</span>,<br/> a Front End Web Developer and
            designer<br/> and a Student.
          </span>
          <LNK
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Contact Me
              </LNK>
        </div>
        <div className="landing-right">
            <div className="socials-landing">
              <Socials/>
            </div>
          <img src={MK} alt="Mayank Kumar" className="mayank" />
        </div>
      </div>
    </div>
  );
}
