import mobIMG from "./images/AiSM.png";
import deskIMG from "./images/AiLG.png";
import { useEffect, useState } from "react";

function Companion() {
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
    <div className="w-screen h-screen bg-brand-camel flex flex-col lg:flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center h-full w-full pr-8 order-2">
        <img src={imageSrc} alt="SoHo Creative House Web Designs" />
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full lg:order-2">
        <h3 className="text-brand-blue text-[40px] md:text-[50px] lg:text-[70px] text-center leading-none">
          We Create
        </h3>
        <h3 className="text-brand-blue text-[40px] md:text-[50px] lg:text-[70px] text-center leading-none my-2 lg:my-4">
          Ai Business
        </h3>
        <h3 className="text-brand-blue text-[40px] md:text-[50px] lg:text-[70px] text-center leading-none">
          Companions
        </h3>
      </div>
    </div>
  );
}

export default Companion;
