import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "./Slider.css";
import HTML from "../Assets/html.svg";
import CSS from "../Assets/css.svg";
import JS from "../Assets/js.svg";
import REACT from "../Assets/react.svg";
import AI from "../Assets/ai.svg";
import BootStrap from "../Assets/bootstrap.svg";
import CPP from "../Assets/cpp.svg";
import Figma from "../Assets/figma.svg";
import Firebase from "../Assets/firebase.svg";
import Flask from "../Assets/flask.svg";
import GitHub from "../Assets/github.svg";
import MySql from "../Assets/mysql.svg";
import Netlify from "../Assets/netlify.svg";
import Node from "../Assets/nodejs.svg";
import Python from "../Assets/python.svg";
import NPM from "../Assets/npm.svg";
import PHP from "../Assets/php.svg";
import PS from "../Assets/ps.svg";
import VSCode from "../Assets/vscode.svg";
import LeftBtn from "../Assets/leftbtn.svg";
import RightBtn from "../Assets/rightbtn.svg";


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <img src={RightBtn} alt="next" className="mts-next-btn" />,
    prevArrow: <img src={LeftBtn} alt="prev" className="mts-prev-btn" />,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="mts-carousel-cards">
        <Card img={HTML} alt="HTML" title="HTML" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={CSS} alt="CSS" title="CSS" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={JS} alt="JS" title="JS" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={REACT} alt="REACT" title="REACT" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={AI} alt="AI" title="AI" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={BootStrap} alt="BootStrap" title="BootStrap" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={CPP} alt="CPP" title="CPP" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={Figma} alt="Figma" title="Figma" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={Firebase} alt="Firebase" title="Firebase" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={Flask} alt="Flask" title="Flask" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={GitHub} alt="GitHub" title="GitHub" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={MySql} alt="MySql" title="MySql" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={Netlify} alt="Netlify" title="Netlify" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={Node} alt="Node" title="Node" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={Python} alt="Python" title="Python" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={NPM} alt="NPM" title="NPM" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={PHP} alt="PHP" title="PHP" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={PS} alt="PS" title="PS" />
      </div>
      <div className="mts-carousel-cards">
        <Card img={VSCode} alt="VSCode" title="VSCode" />
      </div>
    </Slider>
  );
}
