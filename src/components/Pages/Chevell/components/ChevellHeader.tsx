import { useEffect, useState } from "react";
import HeaderImage from "../assets/images/chevell1.jpg";
import { ChevellColors } from "../constants/ChevellColors";
import ChevellText from "./core/ChevellText";

const ChevellHeader = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // 640px is Tailwind's 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  
  return (
    <div
      style={{
        backgroundImage: `url(${HeaderImage})`,
        backgroundPositionX: "73%",
        backgroundPositionY: "30%",
      }}
      className="bg-cover h-[100vh]"
    >
      <div className="flex flex-col md:justify-center h-full">
        <ChevellText type="h1" color={ChevellColors.SOFT_BLACK} className="mt-32 md:mt-0 ml-8 lg:ml-32 1xl:ml-64 ">
          CHEVELL
        </ChevellText>
        <ChevellText type="sub1" color={ChevellColors.SOFT_BLACK} className="text-left ml-8 lg:ml-32 1xl:ml-64 ">
          Effortless Editorial Wedding{isSmallScreen && <br />} Photography
        </ChevellText>
      </div>
    </div>
  );
};

export default ChevellHeader;
