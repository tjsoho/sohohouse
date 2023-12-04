import { ShadowColours } from "../constants/ShadowColours"
import mobIMG from '../assets/images/logoSM.png';
import tabIMG from '../assets/images/logoMD.png';
import deskIMG from '../assets/images/LogoLG.png';
import { useEffect, useState } from "react";

function ShadowHeader() {
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
    <div style={{ backgroundColor: ShadowColours.SOFT_PEACH }} className="h-screen flex p-4 justify-center">
       <img  src={currentImage} alt="SOHO CREATIVE HOUSE Mobile phone devices" />
    </div>
  )
}

export default ShadowHeader
