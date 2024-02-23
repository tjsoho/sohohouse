import mobIMG from "./images/AiSM.png";
import deskIMG from "./images/AiLG.png";
import { useEffect, useState } from "react";
import { Reveal } from "../../../Animations/Reveal";

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
    
      <div className="max-w-[1440px] mx-auto">
        <div className=" lg:h-screen bg-brand-camel flex flex-col lg:flex-row justify-center items-center py-16 lg:py-0">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center h-full pr-8 order-2 mt-16 lg:mt-0 w-full lg:w-1/2">
              <img src={imageSrc} alt="SoHo Creative House Web Designs" />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full lg:w-1/2 lg:order-2">
              <Reveal>
                <div>
                  <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
                    We Create
                  </h3>

                  <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none my-2 lg:my-4">
                    Ai Business
                  </h3>

                  <h3 className="text-brand-blue text-[36px] md:text-[50px] lg:text-[50px] text-center leading-none">
                    Companions
                  </h3>
                </div>
              </Reveal>
              <div className="text-center text-brand-cream px-8 lg:px-16 pt-4">
                <p>
                  Saving you time, thousands of dollars, and sparking new
                  business ideas, all while reflecting your unique brand voice.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Companion;
