import { useEffect, useState } from "react";
import { LuxeColours } from "../constants/LuxeColour"
import mobIMG from '../assets/images/logoSM.png';
import deskIMG from '../assets/images/LogoLG.png';


function Hero() {

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
      } else {
        setImageSrc(deskIMG);
      }
  
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]);

  return (
    <div style={{ backgroundColor: LuxeColours.SOFT_DARK}} className="w-full h-full flex flex-col justify-center items-center">
      <img src={imageSrc} alt="" />
      
    </div>
  )
}

export default Hero
