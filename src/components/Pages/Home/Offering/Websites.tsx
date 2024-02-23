import mobIMG from "./images/websitesSM.png";
import deskIMG from "./images/websitesLG.png";
import { useEffect, useState } from "react";
import { Reveal } from "../../../Animations/Reveal";

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
    <div className=" bg-brand-cream ">
    <div className="max-w-[1440px] mx-auto ">
    <div className="flex flex-col lg:flex-row justify-around items-center py-16 lg:py-0">
      <div className="flex flex-col justify-center items-center h-full w-full">
          <Reveal>
        <div>
            <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
              We Design &
            </h3>
            <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none my-2 lg:my-4">
              Build Beautiful
            </h3>
            <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
              Websites
            </h3>
        </div>
          </Reveal>
          <div className="text-center text-#24438C px-8 lg:px-16 pt-4">
        <p>Your beautifully designed website will be with you in 1 week ready to share the story of your business.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full mt-16 lg:mt-0 ">
        <img className="lg:p-32" src={imageSrc} alt="SoHo Creative House Web Designs" />
      </div>
    </div>
    </div>
    </div>
  );
}

export default Websites;
