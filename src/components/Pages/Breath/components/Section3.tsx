import { useState, useEffect } from 'react';
import { BreathColours } from "../constants/BreathColours";
import mobIMG from '../assets/images/MonitorSM.png';
import tabIMG from '../assets/images/MonitorMD.png';
import deskIMG from '../assets/images/MonitorLG.png';

function Section3() {
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

  // Define image styles for different screen sizes
  const imageStyles = {
    width: windowWidth < 768 ? '100%' : (windowWidth < 1024 ? '75%' : '75%'),
    height: 'auto'
  };

  return (
    <div style={{ backgroundColor: BreathColours.SOFT_DARK }} className="h-full w-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 pt-8 lg:pt-20">
      
      {/* Image */}
      
        <img src={imageSrc} alt="Responsive monitor" style={imageStyles} />
      
    </div>
  );
}

export default Section3;
