import { useState, useEffect } from 'react';
import { BreathColours } from "../constants/BreathColours";
import mobIMG from '../assets/images/natureSM.png';
import tabIMG from '../assets/images/natureMD.png';
import deskIMG from '../assets/images/natureLG.png';
import BreathText from './core/BreathText';

function Section2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState(mobIMG); // Default image

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Update the image source based on window width
    if (windowWidth < 768) {
      setImageSrc(mobIMG);
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      setImageSrc(tabIMG);
    } else {
      setImageSrc(deskIMG);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div style={{ backgroundColor: BreathColours.SOFT_BROWN }} className="h-full w-full flex flex-col lg:flex-row">
      {/* Content */}
      <div className="p-8 lg:px-20 lg:w-2/3 flex flex-col justify-center">
        <BreathText  type="h1" color="#EBE0C6" className="mb-8">
            Breath Retreats
        </BreathText>
        <BreathText  type="sub1" color="#EBE0C6">
        Breath are driven by the believe that by immersing ourselves in the embrace of nature, we can find peace, healing, and a deeper connection with our true selves. <br /> <br /> Our mission at SoHo was to create a website where the clients of Breath felt at ease, calming, relaxed and had an enjoyable easy process to book their retreat experience at breath. <br /> <br /> Their website was the gateway to their natures retreat.
        </BreathText>

      </div>

      {/* Image */}
      <div>
        <img src={imageSrc} alt="Responsive nature" className="h-full w-full"/>
      </div>
    </div>
  );
}

export default Section2;
