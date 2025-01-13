import React, { useState, useEffect } from "react";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";


function Hero() {
  // Images for the first div
  const images1 = [
    image1,
    image4,
    image3,
    image7,

  ];

  // Images for the second div, could be the same or different
  const images2 = [
    image5,
    image6,
    image2,
    image8,
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((currentIndex1) => (currentIndex1 + 1) % images1.length);
    }, 800); // Change image every 800ms for the first div

    const interval2 = setInterval(() => {
      setCurrentIndex2((currentIndex2) => (currentIndex2 + 1) % images2.length);
    }, 1200); // Change image every 1200ms for the second div, for alternate cycling

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen relative bg-[#011138]">
      {/* Background */}
      <div className="w-full lg:w-1/2 h-full">
        <img src={images1[currentIndex1]} alt="Background 1" className="w-full h-full object-cover"/>
      </div>
      {/* Background */}
      <div className="hidden lg:block w-1/2 h-full">
        <img src={images2[currentIndex2]} alt="Background 2" className="w-full h-full object-cover"/>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-10" style={{ backgroundColor: 'rgba(1, 17, 56, 0.6)' }}>
        <h1 className="text-5xl lg:text-9xl font-bold text-brand-cream text-center">Ai <span className="text-brand-blue">Consulting</span></h1>
      </div>
    </div>
  );
}

export default Hero;
