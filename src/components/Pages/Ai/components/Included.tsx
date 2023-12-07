import React from "react";
import Content from "./Content";
import contentData from "./contentData";
import desktop from "../images/desktop.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 import "./slickSliderStyles.css";
import Button1 from "../../../Button/Button1";

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
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center bg-brand-blue py-16">
      {/* Slider */}
      <div className="w-full h-full lg:w-1/2 lg:h-full px-8 flex flex-col justify-center mb-8">
        <Slider {...sliderSettings} className="mb-8">
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
        <Button1 label="BOOK NOW" color="tan" className="my-8"/>
      </div>

      {/* image div */}
      <div className="w-full h-full lg:w-1/2 lg:h-full flex flex-col justify-content items-center">
        <img src={desktop} alt="Soho Creative House Ai ChatGPT Training" style={{ width: '70%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default Included;
