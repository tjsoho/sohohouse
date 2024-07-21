import React, { useState, useEffect } from 'react';
import Contact from "../Contact/Contact";
import Section1 from "./Section1/Section1";
import Craft from "./Craft/Craft";
import Websites from "./Offering/Websites";
import Companion from "./Offering/Companion";
import Stories from "./Stories/Stories";
import MusicToDigital from "./YourBrand/MusicToDigital";
import Testimonials from "./Testimonials/Testimonials";
import Adventure from "./Adventure/Adventure";
// import Popup from './Popup';
import Work from './Work/Work';

function Home() {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 8000); // 10 seconds

  //   return () => clearTimeout(timer); // Clean up the timer on component unmount
  // }, []);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <div className="">
      {/* {showPopup && <Popup onClose={handleClosePopup} />} */}
      
      <Section1 />
      
      <Craft />

      <Websites />
      <div>
        <Companion />
      </div>
      <div className="flex h-full justify-center items-center">
        <MusicToDigital />
      </div>
      <div className="flex h-full justify-center items-center">
        <Work />
      </div>
      <div className="flex h-full justify-center items-center">
        <Testimonials />
      </div>
     
      <div className="bg-brand-orange">
        <Stories />
      </div>
     
      <div className="h-contain lg:screen">
        <Adventure />
      </div>
      <div className="bg-brand-cream h-contain">
        <Contact />
      </div>  
    </div>
  );
}

export default Home;
