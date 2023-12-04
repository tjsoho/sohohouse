import { useState, useEffect } from 'react';
import ShadowText from "./core/ShadowText";
import { ShadowColours } from "../constants/ShadowColours";
import mobIMG from '../assets/images/ShadowImgSM.png';
import tabIMG from '../assets/images/ShadowImgMD.jpg';
import deskIMG from '../assets/images/ShadowDEVICE.jpg';

function ShadowSection4() {
  const [currentImage, setCurrentImage] = useState(mobIMG);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setCurrentImage(deskIMG); // Desktop
      } else if (window.innerWidth >= 640) {
        setCurrentImage(tabIMG); // Tablet
      } else {
        setCurrentImage(mobIMG); // Mobile
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: ShadowColours.SOFT_PEACH }} className="h-contain flex flex-col lg:flex-row">
      <div className="px-8 py-8 flex lg:items-center lg:justify-center lg:w-2/5">
        <ShadowText type="h1" color={ShadowColours.SOFT_BLUE} className="text-left  lg:text-center">
            Playful <br /> Fun <br /> Inspiring
        </ShadowText>
      </div>
      <div>
        <img className="w-full bg-repeat" src={currentImage} alt="SOHO CREATIVE HOUSE Mobile phone devices" />
      </div>
    </div>
  );
}

export default ShadowSection4;
