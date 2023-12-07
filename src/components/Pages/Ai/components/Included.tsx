import React from "react";
import Content from "./Content";
import contentData from "./contentData";
import desktop from "../images/desktop.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Included: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-brand-blue py-16">
      {/* Slider */}
      <div className="w-full h-full lg:w-1/2 lg:h-full px-8">
        <Slider {...sliderSettings}>
          {contentData.map((item, index) => (
            <div key={index}>
              <Content
                number={item.number}
                title={item.title}
                content={item.content}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* image div */}
      <div className="w-full h-full lg:w-1/2 lg:h-full flex flex-col justify-content items-center">
        <img src={desktop} alt="Soho Creative House Ai ChatGPT Training" />
      </div>
    </div>
  );
};

export default Included;
