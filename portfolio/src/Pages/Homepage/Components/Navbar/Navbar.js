import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logoMk from "./Assets/mk.svg";
import { Cross as Hamburger } from "hamburger-react";
import { animateScroll as scroll } from "react-scroll";
import { Link as LNK } from "react-scroll";

export default function Navbar() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const onClickHeader = () => {
    setIsOpen1(!isOpen1);
  };
  return (
    <div className={header ? "header active" : "header"}>
      <div
        className={`header-wrapper ${isOpen1 ? "header-wrapper active" : ""} `}
      >
        <NavLink to="/" className="header-logo">
          <img
            onClick={"/"}
            className={header ? "header-logo active" : "  header-logo"}
            src={logoMk}
          />
        </NavLink>

        <div onClick={onClickHeader} className="menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="nav-items">
          <ul className={header ? "header active" : "header"}>
            <li>
              <Link
                className={header ? "nav-links active" : "nav-links"}
                onClick={() => {
                  scroll.scrollToTop();
                  setIsOpen1(false);
                  setOpen(false);
                }}
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <LNK
                className={header ? "nav-links active" : "nav-links"}
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1000}
                onClick={() => {
                  setIsOpen1(false);
                  setOpen(false);
                }}
              >
                About
              </LNK>
            </li>
            
            <li>
              <LNK
                className={header ? "nav-links active" : "nav-links"}
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onClick={() => {
                  setIsOpen1(false);
                  setOpen(false);
                }}
              >
                Projects
              </LNK>
            </li>

            <li>
              <LNK
                className={header ? "nav-links active" : "nav-links"}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => {
                  setIsOpen1(false);
                  setOpen(false);
                }}
              >
                Contacts
              </LNK>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
