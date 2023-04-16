import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import PCard from "./PCard";
import "../../TechStack/Cards/Slider.css";
import RightBtn from "../../TechStack/Assets/rightbtn.svg";
import LeftBtn from "../../TechStack/Assets/leftbtn.svg";
import JYC from "../Assets/jyc.png";
import Murious from "../Assets/murious.png";
import Expanse from "../Assets/expanse.png";
import RND from "../Assets/rnd.png";

export default function PSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <img src={RightBtn} alt="next" className="mts-next-btn" />,
    prevArrow: <img src={LeftBtn} alt="prev" className="mts-prev-btn" />,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="mts-carousel-cards">
        <PCard img={JYC} alt="JYC" title="JYC" />
      </div>
      <div className="mts-carousel-cards">
        <PCard img={Murious} alt="Murious 17.0" title="Murious 17.0" />
      </div>
      <div className="mts-carousel-cards">
        <PCard img={Expanse} alt="Expanse 2.0" title="Expanse 2.0" />
      </div>
      <div className="mts-carousel-cards">
        <PCard img={RND} alt="R&D Expo" title="R&D Expo" />
      </div>
    </Slider>
  );
}
