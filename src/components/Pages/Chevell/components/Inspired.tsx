import { useEffect, useState } from "react";
import mobIMG from "../assets/images/loveSM.png";
import tabIMG from "../assets/images/loveMD.png";
import deskIMG from "../assets/images/loveLG.png";
import text from "../assets/images/text.svg";
import ChevellText from "./core/ChevellText";

function Inspired() {
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
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      setImageSrc(tabIMG);
    } else {
      setImageSrc(deskIMG);
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      <div className="flex lg:w-1/2 h-full flex-col justify-center items-center">
        <ChevellText type="h2" color="#000000" className="text-center">
          Inspired by
        </ChevellText>
        <div className="flex w-full justify-center items-center">
          <ChevellText type="h2" color="#000000" className="text-center">
            the
          </ChevellText>
          <ChevellText type="h2" color="#000000" className="text-center ml-3">
            look of love
          </ChevellText>
          <ChevellText type="h2" color="#000000" className="text-center ml-3">
            and
          </ChevellText>
        </div>
        <div className="flex w-full justify-center items-center">
          <ChevellText type="h2" color="#000000" className="text-center">
            stylish
          </ChevellText>
          <ChevellText type="h2" color="#000000" className="text-center ml-3">
            pages of Vogue
          </ChevellText>
        
        </div>
      </div>
      <div className="pb-16 md:pr-8 lg:pb-0  lg:w-[40%] lg:flex flex-col justify-end items-end">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
}

export default Inspired;
