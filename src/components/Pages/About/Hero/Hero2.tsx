import React, { useState, useEffect } from "react";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";
import image17 from "./images/17.jpg";
import image18 from "./images/18.jpg";
import image19 from "./images/19.jpg";

function Hero2() {
  // Images for the first div
  const images1 = [
    image9,
    image10,
    image11,
    image12,
    image13,
  
  ];

  // Images for the second div, could be the same or different
  const images2 = [
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
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
    <div className="flex h-screen w-screen relative">
      {/* Background */}
      <div className="w-1/2 h-full">
        <img src={images1[currentIndex1]} alt="Background 1" className="w-full h-full object-cover"/>
      </div>
      {/* Background */}
      <div className="w-1/2 h-full">
        <img src={images2[currentIndex2]} alt="Background 2" className="w-full h-full object-cover"/>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-10" style={{ backgroundColor: 'rgba(6, 28, 78, 0.5)' }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-orange text-center">But Wait<br/>There's More...</h1>
      </div>
    </div>
  );
}

export default Hero2;
