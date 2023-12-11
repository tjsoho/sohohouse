import mobIMG from "./images/websitesSM.png";
import deskIMG from "./images/websitesLG.png";
import { useEffect, useState } from "react";

function Websites() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState(mobIMG); // Default image

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Update the image source based on window width
    if (windowWidth < 768) {
      setImageSrc(mobIMG);
    } else {
      setImageSrc(deskIMG);
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="w-screen h-screen bg-brand-cream flex flex-col lg:flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h3 className="text-brand-blue text-[40px] md:text-[50px] lg:text-[70px] text-center leading-none">
          We Design &
        </h3>
        <h3 className="text-brand-blue text-[40px] md:text-[50px] lg:text-[70px] text-center leading-none my-2 lg:my-4">
          Build Beautiful
        </h3>
        <h3 className="text-brand-blue text-[40px] md:text-[50px] lg:text-[70px] text-center leading-none">
          Websites
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <img src={imageSrc} alt="SoHo Creative House Web Designs" />
      </div>
    </div>
  );
}

export default Websites;
