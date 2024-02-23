import { useEffect, useState } from "react";
import Button from "../../../Button/Button";
import { Reveal } from "../../../Animations/Reveal";
import mobIMG from "../../Home/Offering/images/AiSM.png";
import deskIMG from "../../Home/Offering/images/AiLG.png";
const externalLink = "https://calendly.com/sohocreativehouse/30min";

export default function Orange() {
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
    <div className="bg-brand-blue mx-auto px-5 h-full flex items-center justify-center pb-16">
      <div className="flex flex-col w-full">
        <div className="justify-center items-center flex flex-col">
          <Reveal>
            <div className="flex flex-col justify-center items-center h-full w-full pr-8 order-2 mt-16 lg:mt-0 lg:p-16">
              <img src={imageSrc} alt="SoHo Creative House Web Designs" />
            </div>
          </Reveal>
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            <Button label="I'm Ready" />
          </a>
        </div>
      </div>
    </div>
  );
}
