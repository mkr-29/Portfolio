import React from "react";
import Socials from "../Socials/Socials";
import "./Footer.css";
import MK from "./Assets/mk.svg";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Link as LNK } from "react-scroll";


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-socials">
        <Socials />
      </div>
      <div className="footer-inner">
        <div className="footer-up">
          <img src={MK} alt="MK" className="footer-logo" />
          <div>
            <Link onClick={() => scroll.scrollToTop()} to="/">
              Home
            </Link>
            <span />
            <LNK
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1000}
              >
                About
              </LNK>
            <span />
            <LNK
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Projects
              </LNK>
            <span />
            <LNK
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Contacts
              </LNK>
          </div>
        </div>
        <div className="footer-down">
          <h3>Thanks For Visiting</h3>
          <p>© 2023 Made by Mayank Kumar</p>
        </div>
      </div>
    </div>
  );
}
